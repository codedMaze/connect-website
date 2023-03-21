import React from "react";
import { reasons } from "./../../data/dummyData";
import { GoPrimitiveDot } from "react-icons/go";

const Best = () => {
  return (
    <div className="px-6 md:px-16 md:py-32 py-8 md:bg-[#FFFCF5]">
      <h1 className="font-bold md:text-5xl md:text-black text-2xl text-[#18191F] text-center md:mb-[72px] mb-8 px-16">
        {reasons.title}
      </h1>
      <div className="md:flex md:flex-wrap gap-x-[82px]">
        {reasons.items.map((reason) => (
          <div className="flex md:w-[46.4%] gap-[31px]">
            <div className="w-8 h-[42px] text-center flex justify-center  items-start">
              <GoPrimitiveDot className="text-[#A1ADC2] mt-1" />
            </div>
            <div className="mb-6">
              <h1 className="font-bold text-xl text-left text-black mb-2 md:pr-16">
                {reason.title}
              </h1>
              <p className="text-black text-left">{reason.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Best;
