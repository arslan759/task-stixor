import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-[#7911EA] text-white py-[10px] px-[20px] flex items-center">
      <img
        alt="stixor-logo"
        width="50"
        height="50"
        src="https://www.stixor.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f4be09d7.png&w=128&q=75"
      />
      <h6 className="font-bold text-[18px] md:text-[28px] ml-[10px]">Stixor</h6>
    </div>
  );
};

export default Navbar;
