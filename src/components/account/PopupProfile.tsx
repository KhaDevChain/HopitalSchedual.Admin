import { useAppDispatch } from "@/app/hooks";
import { AuthService } from "@/services/Auth.service";
import { setLogined, setStoreCode } from "@/slice/app.slice";
import { LogOut, Settings, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserProfilePopup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setLogined(false));
    dispatch(setStoreCode(""));
    const authService = new AuthService();
    authService.logout();
    navigate('/signin');
  }
  return (
    <div className="relative mt-8" style={{ zIndex: 100 }}>
      <div className="absolute right-0 mt-2 w-60 bg-white rounded-2xl shadow-[0px_20px_30px_#A6AEBF] p-4">
        <div className="flex items-center gap-3 border-b pb-3">
          <img
            src="https://ecme-react.themenate.net/img/avatars/thumb-1.jpg"
            alt="User Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h4 className="text-md text-start font-semibold">Angelina Gotelli</h4>
            <p className="text-sm text-start text-gray-500">admin-01@ecme.com</p>
          </div>
        </div>
        <ul className="mt-3 space-y-2">
          <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
            <User className="text-gray-600" />
            <span className="text-md">Profile</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
            <Settings className="text-gray-600" />
            <span className="text-md">Account Setting</span>
          </li>
        </ul>
        <div className="border-t mt-3 pt-3">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 text-red-500 hover:bg-red-100 text-md p-2 rounded-md">
            <LogOut />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePopup;
