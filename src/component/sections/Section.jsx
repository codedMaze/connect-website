import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const Section = ({ section, image, flex }) => {
  const head = section.title.split("+");
  return (
    <div className="md:flex px-6 md:px-16 md:py-20 pt-9 gap-[123px]">
      <div className="flex-1 item">
        <h1 className="font-bold text-[40px] text-center md:text-left text-black md:pr-20 ">
          {head[0]} <span className="text-[#675CE8]">+</span> {head[1]}
        </h1>
        <p className="text-center md:text-left text-black text-[18px] m-1 mb-6">
          {section.paragraph}
        </p>
        {section.list.map((item) => (
          <div className="flex  gap-[31px]">
            <div className="w-8 h-[42px] text-center flex justify-center  items-start">
              <GoPrimitiveDot className="text-[#A1ADC2] mt-1" />
            </div>
            <div className="mb-6">
              <h1 className="font-bold text-xl text-left text-black">
                {item.title}
              </h1>
              <p className="text-black text-left">{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        className={
          flex
            ? `flex-1 py-[39px] pl-[23px] md:py-[79px] md:pl-14 bg-[#F2F9FF] order-first`
            : `flex-1 py-[39px] pl-[23px] md:py-[79px] md:pl-14 bg-[#F2F9FF]`
        }
      >
        <img src={image} alt="" width="1000px" className="w-[1000px]" />
      </div>
    </div>
  );
};

export default Section;
