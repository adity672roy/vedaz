import React, { useState } from "react";
import profile from "../images/profile.png";
import menu from "../images/menu.png";
import home1 from "../images/home1.png";
import home from "../images/home.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <div className="lg:flex items-center justify-between bg-[#501873] text-white h-[90px] pt-4 px-20 hidden w-full">
          <div className="font-[InknutAntiqua] text-4xl font-bold">Vedaz</div>
          <div className="flex items-center justify-between gap-[50px]">
            <ul className="flex items-center text-md gap-[50px] cursor-pointer">
              <li>Home</li>
              <li>Astrologers</li>
              <li>Horoscope</li>
              <li className="font-semibold border-b">Puja</li>
              <li>Kundali</li>
              <li>Love calculator</li>
              <li>Compatibility</li>
            </ul>
            <img
              src={profile}
              alt=""
              className="border rounded-full p-1 flex items-center justify-center"
            />
          </div>
        </div>
        <div className=" lg:block hidden">
          <img src={home1} alt="" className="w-full h-full object-contain " />
        </div>
      </div>
      {/* for mobile */}
      <div className="">
        <div className="sm:relative lg:hidden  sm:flex w-full flex bg-[#501873] items-center justify-between text-white py-4 px-10 ">
          <div className="font-[InknutAntiqua] text-4xl font-bold">Vedaz</div>
          <div onClick={() => setOpen(!open)}>
            <img src={menu} alt="" />
            {open && (
              <div className=" py-10  absolute right-0 top-16  bg-[#501873] h-[100vh] w-[300px] z-10">
                <div className="flex flex-col items-center justify-between gap-[50px] ">
                  <ul className="flex flex-col justify-center items-center text-md gap-[50px] cursor-pointer">
                    <li>Home</li>
                    <li>Astrologers</li>
                    <li>Horoscope</li>
                    <li className="font-semibold border-b">Puja</li>
                    <li>Kundali</li>
                    <li>Love calculator</li>
                    <li>Compatibility</li>
                  </ul>
                  <img
                    src={profile}
                    alt=""
                    className="border rounded-full p-1 flex items-center justify-center"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="lg:hidden block">
          <img src={home} alt="" className="w-full h-full object-contain " />
        </div>
      </div>
    </>
  );
};

export default Navbar;
