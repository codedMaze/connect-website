import React from "react";
import Azure from "../../asset/image 24.png";
import Alt from "../../asset/image 23.png";
import aws from "../../asset/image 21.png";

const Partner = () => {
  return (
    <div>
      <div className="hidden md:flex md:mt-14 mt-5 gap-4">
        <div className="">
          <p className="text-sm text-black text-center md:text-left mb-[18px]">
            Our Data Security Partners
          </p>
          <div className="flex gap-3 justify-center md:items-center md:justify-start text-[12.87px] text-black">
            <div className="">
              <img src={Azure} alt="" className="mx-0" />
            </div>
            <div className="">
              <img src={aws} alt="" className="mx-0" />
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-sm text-black text-center md:text-left mb-[18px] mt-[33px] md:mt-0">
            Our Payment Partners
          </p>
          <div className="flex gap-3 justify-center md:items-center md:justify-start">
            <div className="">
              <img src={Azure} alt="" className="mx-0" />
            </div>
            <div className="">
              <img src={Alt} alt="" className="mx-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
