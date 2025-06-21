import AuthService from "@/services/Auth.service";
import { useAuth } from "@/views/Layout";
import { LogOut, Settings, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserProfilePopup = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = () => {
    AuthService.logout();
    navigate('/signin');
  }
  return (
    <div className="relative mt-8" style={{ zIndex: 100 }}>
      <div className="absolute right-0 mt-2 w-60 bg-white rounded-2xl shadow-[0px_20px_30px_#A6AEBF] p-4 w-[max-content]">
        <div className="flex items-center gap-3 border-b pb-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8345/8345328.png"
            alt="User Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h4 className="text-md text-start font-semibold">{user?.fullName}</h4>
            <p className="text-sm text-start text-gray-500">{user?.email}</p>
          </div>
        </div>
        <ul className="mt-3 space-y-2">
          <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
            <User className="text-gray-600" />
            <span className="text-md">Tài khoản của tôi</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
            <Settings className="text-gray-600" />
            <span className="text-md">Thiết lập tài khoản</span>
          </li>
        </ul>
        <div className="border-t mt-3 pt-3">
          <span
            onClick={handleLogout}
            className="w-full flex items-center gap-2 text-red-500 hover:bg-red-100 text-md p-2 rounded-md">
            <LogOut />
            Đăng xuất
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePopup;
