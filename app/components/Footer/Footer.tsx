import React from "react";

const Footer = () => {
  return (
    <div className="font-tomorrow bg-[#190849]">
      <div className="flex w-full flex-wrap items-center justify-center px-10 py-16 lg:justify-between lg:px-20">
        <div className="mb-5 flex flex-wrap items-center justify-center lg:mb-0">
          <div>
            <img
              alt="stixor-logo"
              width="100"
              height="100"
              className="lg:mr-12"
              src="https://www.stixor.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f4be09d7.png&w=128&q=75"
            />
          </div>
          <ul
            className="flex-col items-center justify-center self-center text-center text-white"
            role="list"
          >
            <li className="flex justify-center p-2 sm:justify-start">
              <img
                alt="email"
                width="20"
                height="20"
                src="https://www.stixor.com/_next/static/media/email.25d36a4a.svg"
              />
              <span className="ml-2 text-sm">Email : info@stixor.com</span>
            </li>
            <li className="flex justify-center p-2 sm:justify-start">
              <img
                alt="phone"
                width="20"
                height="20"
                src="https://www.stixor.com/_next/static/media/phone.5a7eae59.svg"
              />
              <span className="ml-2 text-sm">Phone : +9251 8740326</span>
            </li>
            <li className="flex justify-center p-2 sm:justify-start">
              <img
                alt="map"
                width="20"
                height="20"
                src="https://www.stixor.com/_next/static/media/map.7f0b1f5e.svg"
              />
              <span className="ml-2 text-sm">
                Locate Us : Dallas, Islamabad, Berlin
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <img
              alt="stixor-logo"
              width="125"
              height="125"
              className="mr-10"
              src="https://www.stixor.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fduns.b3ef9b89.png&w=128&q=75"
            />
          </div>
          <div>
            <img
              alt="stixor-logo"
              width="100"
              height="100"
              src="https://www.stixor.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fqr-code.2730233f.png&w=128&q=75"
            />
          </div>
        </div>
      </div>
      <small className="flex justify-center bg-[#2D2D2D] p-2 text-center text-[11px] font-light text-white">
        © Stixor Technologies, All Right Reserved.
      </small>
    </div>
  );
};

export default Footer;
