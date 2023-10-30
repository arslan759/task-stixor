import { InputFieldProps } from "@/types";

const InputField = ({
  name,
  placeholder,
  value,
  onChange,
}: InputFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    onChange(value);
  };

  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="w-full h-full border-2 border-[#7911EA] rounded-[5px] px-[12px] py-[8px] text-[#000] text-sm focus:border-[#4C1EA7] focus:outline-none"
    />
  );
};

export default InputField;
