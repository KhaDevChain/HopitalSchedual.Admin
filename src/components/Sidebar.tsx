import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BarChart2,
  LightbulbIcon,
  HousePlus,
  UserCheck,
  HeartHandshake,
  UserPlus2,
  Hammer,
  CalendarArrowDown,
  Settings,
} from "lucide-react";
import logoImg from "../assets/logo/logo-main.png";

interface SidebarProps {
  isCollapsed: boolean;
}

const menuItems = [
  {
    section: "TRANG CHỦ",
    items: [
      { icon: BarChart2, label: "Báo cáo", href: "/" },
      { icon: LightbulbIcon, label: "Hiệu suất", href: "/" },
    ],
  },
  {
    section: "QUẢN LÝ",
    items: [
      { icon: CalendarArrowDown, label: "Lịch khám", href: "/transactions/transaction-list" },
      { icon: HousePlus, label: "Bệnh viện", href: "/hopital/list" },
      { icon: UserCheck, label: "Tài khoản", href: "/accounts" },
      { icon: HeartHandshake, label: "Nhà thuốc", href: "/employees" },
      { icon: UserPlus2, label: "Bác sĩ", href: "/employees" },
      { icon: Hammer, label: "Máy Kiosk", href: "/devices/device-list" },
    ],
  },
  {
    section: "PHÂN QUYỀN",
    items: [
      { icon: Settings, label: "Quyền hạn", href: "/permission" },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  const navigate = useNavigate();

  const handleNavigate = (href: string) => {
    setTimeout(() => {
      navigate(href);
    }, 300);
  };

  return (
    <div
      className={`
        fixed left-0 h-screen bg-white border-r border-gray-200 flex flex-col overflow-hidden z-30
        transition-all duration-300 ease-in-out
        ${isCollapsed ? "w-[80px]" : "w-[280px]"}
      `}
    >
      <div className="h-16 flex items-center mt-4 pb-5">
        <div className="flex items-center hover:cursor-pointer mt-4 ml-4">
          {isCollapsed ? (
            <img
              src={logoImg}
              alt="Logo"
              onClick={() => handleNavigate("/")}
              className="w-10 h-10 ms-1"
            />
          ) : (
            <>
              <img
                src={logoImg}
                alt="Logo"
                onClick={() => handleNavigate("/")}
                className="w-20 h-20"
              />
              <strong className="text-3xl ms-3">
                Healthy<span className="text-emerald-600">7S</span>
              </strong>
            </>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-6">
        {menuItems.map((section, idx) => (
          <div key={idx} className="mb-6">
            {!isCollapsed && (
              <div className="text-xs font-semibold text-gray-500 mb-4 px-6">
                {section.section}
              </div>
            )}
            <div>
              {section.items.map((item, itemIdx) => (
                <Link
                  key={itemIdx}
                  to={item.href}
                  className={`
                    flex items-center text-gray-600 hover:text-gray-900
                    hover:bg-gray-50 group rounded-lg px-6 transition-all duration-200
                    ${isCollapsed ? "py-3 flex-col justify-center items-center" : "py-2.5"}
                  `}
                  title={isCollapsed ? item.label : undefined}
                >
                  <div
                    className={`flex items-center min-w-[24px] ${isCollapsed ? "justify-center" : ""}`}
                  >
                    <item.icon
                      className={`w-5 h-5 transition-colors duration-200
                        ${isCollapsed
                          ? "text-gray-600 group-hover:text-gray-900"
                          : "text-gray-500 group-hover:text-gray-700"}
                      `}
                    />
                  </div>
                  <span
                    className={`
                      font-medium whitespace-nowrap transition-all duration-300 ease-in-out
                      ${isCollapsed ? "text-[10px]" : "text-sm ml-3"}
                    `}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
