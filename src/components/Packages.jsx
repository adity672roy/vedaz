import React from "react";
import package1 from "../images/package1.png";
import package2 from "../images/package2.png";
import package3 from "../images/package3.png";
import package4 from "../images/package4.png";
import share from "../images/share.png";

const Package = [
  {
    id: 1,
    img: package1,
    title: "Couple Pooja",
    desc: "Get the blessings for your Family",
    price: 901,
  },
  {
    id: 2,
    img: package2,
    title: "Single Pooja",
    desc: "Get the blessings for your Family",
    price: 1101,
  },
  {
    id: 3,
    img: package3,
    title: "Small Family Pooja",
    desc: "Get the blessings for your Family",
    price: 1301,
  },
  {
    id: 4,
    img: package4,
    title: "Big Family Pooja",
    desc: "Get the blessings for your Family",
    price: 1501,
  },
];
const Packages = () => {
  return (
    <div className="lg:mx-40  ">
      <p className="text-[#501873] text-[22px] lg:text-[36px] font-bold text-center my-10 ">
        Packages
      </p>
      <div className="lg:grid grid-cols-2 gap-10 block lg:mx-0 mx-5 ">
        {Package.map((p) => (
          <div
            key={p.id}
            className="flex flex-col relative border-4 border-solid border-[#501873] shadow-md rounded-[15px] my-3 lg:my-0"
          >
            <img src={p.img} alt="" />
            <div className="border bg-white p-2 border-[#501873]  rounded-full flex items-center justify-center absolute lg:top-10 lg:right-10 top-5 right-5">
              <img src={share} alt="" />
            </div>

            <div className="flex  lg:py-4 py-1 justify-around">
              <div className="lg:py-3">
                <p className="  font-bold  lg:text-[24px] text-[16px]">{p.title}</p>
                <p className="text-[#000000CC]  font-bold lg:text-[18px] text-[12px]">{p.desc}</p>
              </div>
              <div className="flex items-center flex-col lg:gap-8 gap-2 justify-between lg:p-3 p-1">
                <p className="font-bold lg:text-[18px] text-[16px]">
                  Price- <span className="text-[#501873]">Rs.{p.price}</span>
                </p>
                <button className="bg-[#501873] rounded-[5px] text-white font-semibold py-2 px-8 cursor-pointer lg:text-[16px] text-[12px]">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
