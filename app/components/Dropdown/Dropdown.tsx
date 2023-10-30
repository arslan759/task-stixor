import { DropdownProps } from "@/types";
import React from "react";

const Dropdown = ({ value, label, onChange, options }: DropdownProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      className="w-full md:w-[298px] border-2 border-[#7911EA] rounded-[5px] px-[12px] py-[8px] text-[#000] text-sm focus:border-[#4C1EA7] focus:outline-none cursor-pointer appearance-none bg-transparent"
      value={value}
      onChange={handleChange}
    >
      <option value="">{`Select ${label}`}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option.replace(/-/g, " ")}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
