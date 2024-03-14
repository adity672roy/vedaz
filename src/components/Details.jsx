import React, { useState } from "react";
import Arrow from "../images/Arrow.png";
import dot from "../images/dot.png";

const questions = [
  {
    id: 1,
    ques: "Is this really a LIVE puja performed at temple?",
    ans: "YES, it is. We have our infrastructure deployed in select temples and we plan to add more in the future. When you buy a ticket, Temple will be sent your details and Pujari will perform in santum santorium with your Gotranama ( Names & Gotra)",
  },
  {
    id: 2,
    ques: "Can I perform puja in temple of my choice?",
    ans: "Not Possible. We are partnered with Select Temples (popular enough)with which we have agreement and we only provide Puja Services of those temples. All Pujas offered Starts with your Gotranama, Sankalp(Reason) and ends with Aarti as applicable",
  },
  {
    id: 3,
    ques: "What if I am not able to watch LIVE puja?",
    ans: "For all Puja Services that are offered, we cut and Upload a recorded version of Puja (Sankalp video for Long Pujas like Abhishek/Kalyan or Full Puja like Archana) to our Youtube Channel after 5 hours of Offering. (Any Power and Internet failure may delay sometimes but rarely)",
  },
  {
    id: 4,
    ques: "Can I offer any Dakshina to priest?",
    ans: "Yes you can. There is a column in the booking form where you can enter a amount of choice and we will pay the amount to Pujari directly. You can also request for a separate payment link if availing any Puja Package",
  },
  {
    id: 5,
    ques: "How to contact you if I don’t find answer to my question?",
    ans: "If you have any specific question which ONLY relates to Puja Services we Offer, you can send a WhatsApp message to our Official Number",
  },
];
const Details = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="lg:m-20">
      <div className="text-[#501873]  text-center  ">
        <p className=" lg:text-[36px] text-[22px]  font-bold    ">
          Puja Details
        </p>
        <p className=" text-[18px] font-semibold   ">
          Frequently Asked Questions
        </p>
      </div>

      {/* ----------- */}

      <div className="w-full mt-8 px-5 lg:px-0">
        <div className="space-y-4">
          {questions.map((q, index) => (
            <div key={q.id} className="border-b  border-gray-200  ">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-4 text-left lg:px-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">

                    <img
                      src={dot}
                      alt=""
                      className=" lg:hidden border border-solid border-black rounded-full p-1 mr-1"
                    /> 
                  <p className=" font-medium text-gray-800 lg:text-[20px] text-[12px] ">
                    {q.ques}
                  </p>
                  </div>
                  <img
                    src={Arrow}
                    alt=""
                    className="lg:h-auto lg:w-auto h-2 w-2"
                  />
                </div>
              </button>
              <div
                className={`px-6 pb-4 pt-2 ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                <p className="text-black lg:text-[20px] text-[8px] ">{q.ans}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ----------- */}
    </div>
  );
};

export default Details;
