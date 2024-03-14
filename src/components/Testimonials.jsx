import React from "react";
import profile1 from "../images/profile1.png";
import profile2 from "../images/profile2.png";

const Testimonials = () => {
  return (
    <div className="lg:mx-40 lg:my-20 my-10 ">
      <div className="text-center py-10">
        <p className="text-[#501873] lg:text-[36px] text-[22px]  font-bold  ">
          Testimonials
        </p>
        <p
          className="text-3xl "
          style={{
            background: "linear-gradient(90deg, #501873 0%, #A62563 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Customer Reviews
        </p>
      </div>

      <div className="lg:grid grid-cols-2 grid-rows-2 gap-4  block px-5 lg:px-0">
        <div className="lg:row-span-1 border-2  border-solid border-purple-600  rounded-[13px] lg:mr-0 lg:mb-0 mr-6 mb-2">
          <p className="p-3 lg:text-[16px] text-[12px]">
            "Booking a puja online was a delightful experience from start to
            finish. The website was easy to navigate, and the booking process
            was simple and straightforward. The puja ceremony was conducted with
            great reverence, and I could feel the positive energy flowing
            throughout. I highly recommend Vedaz for anyone looking to book a
            puja online."
          </p>
          <div
            className="flex items-center justify-end gap-3 py-2 px-20  rounded-bl-[13px] rounded-br-[13px]"
            style={{
              background: "linear-gradient(90deg, #501873 0%, #A62563 100%)",
            }}
          >
            <img src={profile1} alt="Image 1" />
            <div className="text-white font-semibold">
              <p>Isha Sharma</p>
              <p className="text-[12px]">
                4.5{" "}
                <span className="text-yellow-500">
                  &#9733;&#9733;&#9733;&#9733;
                </span>
              </p>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div className="lg:row-span-1 border-2  border-solid border-purple-600 rounded-[13px] ml-6">
          <p className="p-3  lg:text-[16px] text-[12px]">
            "I had a wonderful experience booking a puja online with Vedaz. The
            website was user-friendly, and the customer service team was very
            helpful and responsive to all my queries. The pandits who conducted
            the puja were knowledgeable and conducted the ceremony with utmost
            devotion. I felt a deep sense of peace and positivity after the
            puja."
          </p>
          <div
            className="flex items-center justify-end gap-3 py-2 px-20  rounded-bl-[13px] rounded-br-[13px]"
            style={{
              background: "linear-gradient(90deg, #501873 0%, #A62563 100%)",
            }}
          >
            <img src={profile2} alt="Image 1" />
            <div className="text-white font-semibold">
              <p>Divy Agarwal</p>
              <p className="text-[12px]">
                4.8{" "}
                <span className="text-yellow-500">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
