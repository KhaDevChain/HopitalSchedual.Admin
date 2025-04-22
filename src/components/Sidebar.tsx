import React, { useState } from "react";
import {
	BarChart2,
	Users,
	UserCircle,
	ChevronRight,
	DotIcon,
	Settings,
	User,
	Hammer,
	ArrowUpAzIcon,
} from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo/logo.svg";
const subMenuItems = {
	people: [
        { label: 'People/Contact', href: '/contact' },
        { label: 'Contract', href: '/contract' },
    ],
	employee: [
		{ label: "List employee", href: "/employee-list" },
		{ label: "Checkin/Checkout", href: "/checkin" },
	],
	order: [
		{ label: "List", href: "/order-list" },
		{ label: "Details", href: "/order-details/1" },
	],
	device: [
		{ label: "List", href: "/device-list" },
		{ label: "Details", href: "/device-details/1" },
	]
};

const menuItems = [
	{
		section: "DASHBOARD",
		mainHerf: "",
		items: [
			{ icon: BarChart2, label: "Dashboard", href: "/" },
			{ icon: UserCircle, label: "Accounts", href: "/accounts" },
		],
	},
	{
		section: "WORK TREE",
		mainHerf: "",
		items: [
			{ icon: Users, label: "Customer/Partner", href: "/peoples", hasSubmenu: true, submenu: subMenuItems.people },
			{ icon: User, label: "Employees", href: "/employees", hasSubmenu: true, submenu: subMenuItems.employee },
			{ icon: Hammer, label: "Devices", href: "/devices/device-list" },
			{ icon: ArrowUpAzIcon, label: "Transactions", href: "/transactions/transaction-list" },
		],
	},
	{
		section: "AUTHETICATION",
		mainHerf: "/authentication",
		items: [
			{ icon: Settings, label: "Permission", href: "/permission" },
		],
	},
];

interface SidebarProps {
	isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
	const [listOpenSubmenu, setListOpenSubmenu] = useState<{ [key: string]: boolean }>({
		Clients: false,
		"Customers/Partners": false,
		Employees: false,
		"Checkin/Checkout": false,
		Orders: false,
		"Help Center": false,
		Calendar: false,
		"File Manager": false,
		Mail: false,
		Chat: false,
	});

	const handleOpenSubmenu = (navTitle: string) => {
		setListOpenSubmenu({
			...listOpenSubmenu,
			[navTitle]: !listOpenSubmenu[navTitle],
		});
	};

	const handleClickItemSideBar = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		event.stopPropagation();
	};

	const navigate = useNavigate();
	const handleNavigate = (href: string) => {
		setTimeout(() => {
			navigate(href);
		}, 900);
	};
	return (
		<div
			className={`
        fixed left-0 h-screen bg-white border-r border-gray-200 flex flex-col overflow-hidden z-30
        transition-all duration-300 ease-in-out
        ${isCollapsed ? "w-[72px]" : "w-[280px]"}
      `}
		>
			<div className="h-16 flex items-center mt-4 pb-5">
				<div className="flex items-center hover:cursor-pointer">
					<img
						src={logoImg}
						alt="Logo Img"
						onClick={() => handleNavigate("/")}
						className=' w-[120px] h-[120px] text-xl font-bold text-gray-900 transition-all duration-300 origin-left scale-100'
					/>
				</div>
			</div>
			<div className="flex-1 overflow-y-auto overflow-x-hidden py-6">
				{menuItems.map((section, index) => (
					<div key={index} className="mb-6">
						{!isCollapsed && <div className="text-xs font-semibold text-gray-500 mb-4 px-6">{section.section}</div>}
						<div>
							{section.items.map((item, itemIndex) => (
								<div
									key={itemIndex}
									onClick={() => {
										handleOpenSubmenu(item.label);
									}}
								>
									<Link
										to={(item.hasSubmenu) ? "" : item.href}
										className={`
                                            flex items-center text-gray-600 hover:text-gray-900
                                            hover:bg-gray-50 group relative rounded-lg
                                            transition-all duration-200 ease-in-out
                                            ${isCollapsed ? "px-6 py-3" : "px-6 py-2.5 overflow-hidden"}
                                        `}
										title={isCollapsed ? item.label : undefined}
									>
										<div
											className={`
                                            flex items-center min-w-[24px]
                                            ${isCollapsed ? "justify-center" : ""}
                                        `}
										>
											<item.icon
												className={`
                                                w-5 h-5 transition-colors duration-200
                                                ${isCollapsed
														? "text-gray-600 group-hover:text-gray-900"
														: "text-gray-500 group-hover:text-gray-700"
													}
                                            `}
											/>
										</div>
										<span
											className={`
                                                text-sm font-medium whitespace-nowrap
                                                transition-all duration-300 ease-in-out
                                                ${isCollapsed ? "opacity-0 w-0" : "opacity-100 ml-3"}
                                            `}
										>
											{item.label}
										</span>
										{item.hasSubmenu && !isCollapsed && (
											<ChevronRight
												className={`w-4 h-4 ml-auto text-gray-400 transition-all duration-200 ease-in-out   ${listOpenSubmenu[item.label] ? "rotate-90" : ""
													}`}
											/>
										)}
									</Link>
									{item.hasSubmenu && !isCollapsed && item.submenu && listOpenSubmenu[item.label] && (
										<div className="trasition-all duration-200 ease-in-out">
											{item.submenu.map((subItem: any, subIndex: number) => (
												<NavLink
													className={({ isActive }) =>
														`flex items-center hover:bg-gray-50 px-4 ${isActive ? "text-blue-500" : "text-gray-600 hover:text-gray-900"
														}`
													}
													to={section.mainHerf + item.href + subItem.href}
													key={`cus_link_` + subIndex}
													onClick={handleClickItemSideBar}
												>
													<DotIcon size={30} />
													<div key={`cus_` + subIndex} className="items-center py-2 px-4 text-sm rounded-lg">
														{subItem.label}
													</div>
												</NavLink>
											))}
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
