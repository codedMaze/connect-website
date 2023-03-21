import React from "react";
import image from "../../asset/Rectangle 20.png";
import Button from "../Button";
import { BsArrowRight } from "react-icons/bs";

const NextLevel = () => {
  return (
    <div className="bg-[#E8F3ED] md:p-16 p-6">
      <div className="bg-white md:pt-14 md:pb-4 py-8 md:pl-[40px] md:pr-4 px-6 md:flex gap-[62px]">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-left md:text-[40px] md:leading-[64px] text-[#1A1B1A]">
            “WeKurnnect took me to the next level”
          </h1>
          <p className="mt-4 md:mt-0 text-pcolor md:text-black text-left mb-8">
            Someone I know recently combined Maple Syrup & buttered Popcorn
            thinking it would taste like caramel popcorn. It didn’t anyone else
            do it either.
          </p>
          <div className="md:mt-8 mt-4">
            <h1 className="font-bold text-[#18191F]">Iteh Stephen</h1>
            <p className=" text-pcolor md:text-black text-left text-sm md:text-lg mb-4">
              Head of distribution, Nestle
            </p>
            <div className="hidden md:block">
              <Button buttonClass="bg-button-bg text-white mb-8">
                {/* Register Now */} CTA COPY HERE <span>{"  "}</span>
                <BsArrowRight />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={image} alt="" className="md:h-[400px] md:w-[663px]" />
        </div>
      </div>
    </div>
  );
};

export default NextLevel;
