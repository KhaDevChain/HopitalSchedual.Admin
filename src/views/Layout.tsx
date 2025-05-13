import { Suspense, useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setExpired, setRefreshToken } from "@/slice/app.slice";
import { HttpService } from '@/services/http/HttpService';
type Props = {
    children: JSX.Element
    target: string
}

export const Layout = (props: Props) => {
    /**
     * Handle auto collapse menu sidebar
     */
    const appState = useAppSelector(state => state.app);
    const dispatch = useAppDispatch();
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };
    useEffect(() => {
		if (!appState.logined) {
			dispatch(setRefreshToken(undefined));
			HttpService.setRefreshToken("");
		}
	}, [appState.logined]);
	useEffect(() => {
		if (appState.expired) {
			dispatch(setExpired(false));
		}
	}, [appState.expired]);

    useEffect(() => {
        // const handleResize = () => {
        //     if (window.innerWidth < 768) {
        //         setIsSidebarCollapsed(true);
        //     } else {
        //         setIsSidebarCollapsed(false);
        //     }
        // };
        // handleResize();
        // window.addEventListener("resize", handleResize);
        // return () => window.removeEventListener("resize", handleResize);
        setIsSidebarCollapsed(true);
    }, []);
    return (
        <>
            {/* {appState.logined ?
                } */}
                <div className="flex bg-gray-50">
                    <Sidebar isCollapsed={isSidebarCollapsed} />
                    <div className={`flex-1 flex flex-col ${isSidebarCollapsed ? 'ml-[72px]' : 'ml-[280px]'}`}>
                        <Header onToggleSidebar={toggleSidebar} />
                        <main className="flex-1 p-6 overflow-auto">
                            <Suspense fallback={<></>}>{props.children}</Suspense>
                        </main>
                    </div>
                </div> :
                {/* <Navigate to={'/signin'} /> */}
        </>
    )
}