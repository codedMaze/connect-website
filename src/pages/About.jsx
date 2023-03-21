import React from "react";
import Grow from "../component/sections/Grow";

const About = () => {
  return (
    <div className="md:mt-28 mt-12">
      <h1 className="text-[32px] md:text-[64px] font-bold leading-[39px] md:leading-[88px] md:px-72 px-16 text-center mb-4 md:mb-2">
        Simplifying the distribution business
      </h1>
      <p className="text-pcolor md:text-black md:px-52 text-center px-4">
        weKurnect is a solution - and a platform - that promotes seamless
        business relationships between manufacturers, distributors, wholesalers
        and retailers thereby accelerating growth for distributors; all without
        the worry of implementing complex technologies.
      </p>
      <div className="bg-map h-1/4 w-full"></div>

      <div className="bg-[#E8F3ED] py-[107px] p-6 md:px-[280px]">
        <h1 className="font-bold text-black md:text-[56px] text-2xl text-center px-12 md:px-0">
          Frequently Asked Questions
        </h1>
      </div>
      <Grow />
    </div>
  );
};

export default About;
