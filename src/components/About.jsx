import React from "react";
import pray from "../images/pray.png";
import lamp from "../images/lamp.png";
import pooja from "../images/pooja.png";
import pooja1 from "../images/pooja1.png";

const about = [
  {
    id: 1,
    desc: "The festive season of India is earmarked by the worshipping and celebration of Goddess Durga. It generally occurs in the month of September-October.",
  },
  {
    id: 2,
    desc: "The entire nation becomes more colourful and celebrates the fact of good’s win over evil. Goddess Durga is considered to be the physical form of ‘Shakti’ or ‘Universal Energy’. ",
  },
  {
    id: 3,
    desc: " Online puja, also known as e-puja or virtual puja, is a modern approach to performing traditional Hindu rituals through digital platforms. It allows individuals to participate in religious ceremonies and seek blessings from the comfort of their homes, regardless of geographical location.",
  },
  {
    id: 4,
    desc: "Online puja services offer convenience and accessibility, especially for those who may not have access to local temples or priests. However, it's important to choose a reputable service provider to ensure the authenticity and sanctity of the rituals.    ",
  },
];
const About = () => {
  return (
    <div>
      
      <div className="lg:px-20 px-5">
        <div className="flex flex-col items-center justify-center gap-4 py-10 ">
          <p className="font-[Inika] font-[700] text-center lg:text-[50px] text-[24px] text-[#501873]">
            22121 Kundiye Shri Ramyagya Evam Shri <br></br> Ram Katha
          </p>
          <div className="flex items-center justify-center ">
            <img src={pray} alt="" />
            <p className=" font-[600] lg:text-[40px] text-[20px]">Ayodhyda Dham special</p>
            <img src={pray} alt="" />
          </div>
          <div className="relative">
            <p className="line  font-[400] lg:text-[20px] text-[16px]">
              10,000 puja’s conducted
            </p>
          </div>
        </div>

        <p className="text-[#501873] lg:text-[32px] text-[22px] relative font-bold about_title mb-6  ">
          About Puja
        </p>
        <div className="lg:flex gap-10  items-baseline block">
          <div>
            {about.map((a) => (
              <div key={a.id} className="flex  mb-4 items-start">
                <img src={lamp} alt="" className="lg:w-auto lg:h-auto h-[20px] w-[20px]"/>
                <p className="lg:text-[28px] text-[14px]  font-semibold text-left px-6">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="flex  flex-col gap-2 bg-[#EEE8F1] rounded-[1rem] px-3 w-full  shadow_box  lg:py-0 py-5">
            <p className="text-[#501873] lg:text-[30px] text-[16px] font-bold py-2">
              Book Now
            </p>
            <p className="lg:block hidden text-[#00000099] font-bold">Birth Details</p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="DD"
                className=" border-black border-2 rounded-[5px] px-2 py-1 lg:w-full w-20"
              />
              <input
                type="text"
                placeholder="MM"
                className="border border-black rounded-[5px] px-2 py-1 lg:w-full w-20"
              />
              <input
                type="text"
                placeholder="YYY"
                className="border  border-black rounded-[5px] px-2 py-1 lg:w-full w-20"
              />
            </div>
            <p className=" text-[#00000099] font-bold lg:block hidden">Venue</p>
            <input
              type="text"
              className="w-full border-b border-[#00000099] bg-[#EEE8F1] text-[14px] outline-none"
              placeholder="Enter Your Venue"
            />
            <div className="lg:flex  justify-around  items-end  ">
              <img src={pooja} alt="" className="lg:inline hidden"/>
              <img src={pooja1} alt="" className="lg:inline hidden"/>
              <img src={pooja} alt="" className="lg:inline hidden"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
