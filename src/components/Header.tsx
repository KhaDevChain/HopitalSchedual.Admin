import React, { useEffect, useRef, useState } from 'react';
import { Bell, Menu } from 'lucide-react';
import UserProfilePopup from './account/PopupProfile';
import UserNotifyPopup from './account/PopupNotify';

interface HeaderProps {
    onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
    /**
     * Handle open popup for profile account
     */
    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const popupRefProfile = useRef<HTMLDivElement | null>(null);
    const handleClickAvartar = (event: MouseEvent) => {
        if (popupRefProfile.current && !popupRefProfile.current.contains(event.target as Node)) {
            setIsOpenProfile(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickAvartar);
        return () => document.removeEventListener("mousedown", handleClickAvartar);
    }, []);

    /**
     * Handle open popup for notification
     */
    const [isOpenNotify, setIsOpenNotify] = useState(false);
    const popupRefNotify = useRef<HTMLDivElement | null>(null);
    const handleClickBell = (event: MouseEvent) => {
        if (popupRefNotify.current && !popupRefNotify.current.contains(event.target as Node)) {
            setIsOpenNotify(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickBell);
        return () => document.removeEventListener("mousedown", handleClickBell);
    }, []);

    return (
        <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
            <div className="flex items-center space-x-4">
                <button
                    onClick={onToggleSidebar}
                    className="p-2 hover:bg-gray-100 rounded-full group"
                >
                    <Menu className="w-6 h-6 text-gray-600 group-hover:text-black" />
                </button>
            </div>
            <div className="flex items-center space-x-4">
                <button className="relative p-2 hover:bg-gray-100 rounded-full" onClick={() => {
                    setIsOpenNotify(!isOpenNotify);
                    setIsOpenProfile(false);
                }}>
                    <Bell className="w-5 h-5 text-gray-600" />
                    <span className="absolute top-1 right-2 size-[10px] bg-[#FF6A55] rounded-full"></span>

                    {
                        isOpenNotify ? <UserNotifyPopup /> : <></>
                    }
                </button>
                <button className="flex items-center" onClick={() => {
                    setIsOpenProfile(!isOpenProfile);
                    setIsOpenNotify(false);
                }}>
                    <img
                        src="https://ecme-react.themenate.net/img/avatars/thumb-1.jpg"
                        alt="Profile"
                        className="w-8 h-8 rounded-full"
                    />

                    {
                        isOpenProfile ? <UserProfilePopup /> : <></>
                    }
                </button>
            </div>
        </div>
    );
};
export default Header;