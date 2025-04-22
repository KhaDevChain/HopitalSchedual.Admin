import { FC, useState } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownSelectProps {
  options: string[];
  onChange: (value: string) => void;
}

const Dropdown: FC<DropdownSelectProps> = ({ options, onChange }) => {
  const [selected, setSelected] = useState<string>(options[0] || "");
  const [open, setOpen] = useState<boolean>(false);

  const handleSelect = (option: string) => {
    setSelected(option);
    setOpen(false);
    onChange(option);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between px-4 py-2 rounded-md shadow-sm 
                   bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
        style={{ width: "130px" }}
      >
        {selected}
        <ChevronDown className="w-4 h-4 ml-2" />
      </button>

      {open && (
        <div
          className="absolute left-0 mt-2 bg-white border-2 border-gray-100 rounded-xl 
                     shadow-[0px_28px_30px_rgba(0,0,0,0.16)]"
          style={{ zIndex: 1000 }}
        >
          {options.map((option) => (
            <div
              key={option}
              className="m-2 cursor-pointer text-gray-500 hover:text-gray-700 font-semibold"
              onClick={() => handleSelect(option)}
              style={{ width: "113px" }}
            >
              {option === selected ? (
                <div className="p-2 flex rounded-lg items-center justify-between bg-[#2a85ff1a] text-blue-500 text-base">
                  <span>{option}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-check"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
              ) : (
                <div className="p-2 flex items-center justify-between text-base">
                  <span>{option}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
