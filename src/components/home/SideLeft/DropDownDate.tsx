import Dropdown from "@/components/ui/dropdown";
import { FC, useState } from "react";

interface DropDownDateProps {
  onChange: (value: string) => void;
}

const DropDownDate: FC<DropDownDateProps> = ({ onChange }) => {
  const options: string[] = ["Mỗi ngày", "Mỗi tháng", "Mỗi tuần"];
  const [_, setSelected] = useState<string>("Mỗi ngày");

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange(value); // Gửi giá trị lên component cha
  };

  return (
    <div className="p-4">
      <Dropdown options={options} onChange={handleSelect} />
    </div>
  );
};

export default DropDownDate;
