import { PermissionSidebar } from "./PermissionSidebar";

export const PermissionCard: React.FC<{}> = (_props) => {
    return (
        <div className="flex flex-col justify-between rounded-2xl p-5 bg-gray-100 dark:bg-gray-600 min-h-[140px]">
            <div className="flex items-center justify-between">
                <h6 className="font-bold">Admin</h6>
            </div>
            <p className="mt-2">Full access to all functionalities and settings. Can manage users, roles, and configurations.</p>
            <div className="flex items-center justify-between mt-4">
                <div className="flex flex-col">
                    <div className="-ml-2">
                        <div className="avatar-group flex">
                            <span className="tooltip-wrapper flex">
                                <span className="avatar rounded-full cursor-pointer -mr-2 border-2 border-white dark:border-gray-500" style={{}}>
                                    <img className="avatar-img rounded-full w-6 h-6" loading="lazy" src="https://ecme-react.themenate.net/img/avatars/thumb-6.jpg" />
                                </span>
                            </span>
                            <span className="tooltip-wrapper flex">
                                <span className="avatar rounded-full cursor-pointer -mr-2 border-2 border-white dark:border-gray-500" style={{}}>
                                    <img className="avatar-img rounded-full w-6 h-6" loading="lazy" src="https://ecme-react.themenate.net/img/avatars/thumb-6.jpg" />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <PermissionSidebar isAdd={false} />
            </div>
        </div>
    );
};