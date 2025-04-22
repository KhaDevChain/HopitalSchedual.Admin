import { Mail, Calendar } from "lucide-react";

const UserNotifyPopup = () => {
  const notifications = [
    {
      id: 1,
      avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg",
      name: "Jeremiah Minsk",
      message: "mentioned you in a comment.",
      time: "2 minutes ago",
    },
    {
      id: 2,
      avatar: "https://ecme-react.themenate.net/img/avatars/thumb-2.jpg",
      name: "Max Alexander",
      message: "invited you to a new project.",
      time: "10 minutes ago",
    },
    {
      id: 3,
      avatar: "",
      name: "",
      message: "Please submit your daily report.",
      time: "3 hours ago",
      icon: <Calendar className="text-blue-500" />,
    },
  ];

  return (
    <div className="relative" style={{zIndex: 100}}>
      <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <Mail className="text-gray-600" />
        </div>
        <ul className="text-start" style={{maxHeight: "400px", overflowY: "auto"}}>
          {notifications.map((notification) => (
            <li key={notification.id} className="flex items-center gap-3 p-4 rounded-lg border-b-2 border-gray-100 hover:bg-gray-100">
              {notification.avatar ? (
                <img
                  src={notification.avatar}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                notification.icon
              )}
              <div>
                <p className="text-sm">
                  <span className="font-semibold">{notification.name}</span>{" "}
                  {notification.message}
                </p>
                <p className="text-xs text-gray-500">{notification.time}</p>
              </div>
            </li>
          ))}
        </ul>
        <button className="mt-4 p-4 w-full bg-blue-500 text-white font-bold py-2 rounded-lg">
          View All Activity
        </button>
      </div>
    </div>
  );
};

export default UserNotifyPopup;
