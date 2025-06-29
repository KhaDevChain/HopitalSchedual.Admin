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
export const PrivateLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/signin');
    }
  }, [loading, user, navigate]);

  if (loading) return <Loader className={`animate-spin`} />;

  return user ? <>{children}</> : null;
};


/**
 * Layout context for authentication
 */
interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        let currentUser = await AuthService.getCurrentUser();

        if (!currentUser) {
          const refreshRes = await AuthService.refreshToken();
          if (refreshRes.code === 200) {
            currentUser = await AuthService.getCurrentUser();
          }
        }

        if (currentUser) setUser(currentUser);
        else setUser(null);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

