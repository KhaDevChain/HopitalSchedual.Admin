import { createContext, Suspense, useContext, useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import AuthService from '@/services/Auth.service';
import { Loader } from 'lucide-react';
import { User } from '@/models/User.model';


/**
 * Page Root Layout
 */
type Props = {
    children: JSX.Element
    target: string
}

export const Layout = (props: Props) => {
    /**
     * Handle auto collapse menu sidebar
     */
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    useEffect(() => {
        setIsSidebarCollapsed(true);
    }, []);
    return (
        <>
            <div className="flex bg-gray-50">
                <Sidebar isCollapsed={isSidebarCollapsed} />
                <div className={`flex-1 flex flex-col ${isSidebarCollapsed ? 'ml-[72px]' : 'ml-[280px]'}`}>
                    <Header onToggleSidebar={toggleSidebar} />
                    <main className="flex-1 p-6 overflow-auto">
                        <Suspense fallback={<></>}>{props.children}</Suspense>
                    </main>
                </div>
            </div> :
        </>
    )
}


/**
 * Private Layout 
 */
interface PrivateLayoutProps {
  children: React.ReactNode;
}

export const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await AuthService.getCurrentUser();
        
        if (user == null) {
          const newAccessToken = await AuthService.refreshToken();
          if (newAccessToken.code === 200) {
            console.log(user);
            
            const refreshedUser = await AuthService.getCurrentUser();
            setIsAuthenticated(refreshedUser !== null);
          } else {
            setIsAuthenticated(false);
            navigate('/signin');
          }
        } else {
          console.log(user);
          
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
      finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [navigate]);

  if (loading) return <Loader className={`animate-spin`} />;

  return isAuthenticated ? <>{children}</> : null;
};


/**
 * Layout context for authentication
 */
interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    AuthService.getCurrentUser().then(setUser).catch(() => setUser(null));
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

