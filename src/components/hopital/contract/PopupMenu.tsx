import { Download, Edit, Folder, Share, Trash } from "lucide-react";
import { useRef, useEffect } from "react";

interface PopupMenuProps {
  data: { id: string; type: string };
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupMenu({ data, isOpen, onClose }: PopupMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Đóng popup khi click bên ngoài
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={menuRef} className="absolute bg-white shadow-[0px_30px_40px_rgba(0,0,0,0.15)] rounded-xl w-40 p-2 z-50" 
        style={{margin: "0 0 0 -135px", border: "0.5px solid #F7F7F7"}}>
      <MenuItem icon={<Folder width={20} height={20}/>} label="Open" onClick={() => console.log("Open", data)} />
      <MenuItem icon={<Download width={20} height={20}/>} label="Download" onClick={() => console.log("Download", data)} />
      <MenuItem icon={<Edit width={20} height={20}/>} label="Rename" onClick={() => console.log("Rename", data)} />
      <MenuItem icon={<Share width={20} height={20}/>} label="Share" onClick={() => console.log("Share", data)} />
      <MenuItem icon={<Trash width={20} height={20}/>} label="Delete" onClick={() => console.log("Delete", data)} isDanger />
    </div>
  );
}

function MenuItem({ icon, label, onClick, isDanger = false }: { icon: JSX.Element; label: string; onClick: () => void; isDanger?: boolean }) {
  return (
    <button
      className={`flex items-center gap-2 w-full p-3 font-bold font-sm text-left text-sm rounded-lg transition duration-[2000ms] ${
        isDanger ? "text-red-600 hover:bg-red-50 hover:rounded-lg" : "text-gray-500 hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      {icon} {label}
    </button>
  );
}
