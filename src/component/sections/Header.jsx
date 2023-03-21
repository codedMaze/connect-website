import React from "react";
import Button from "../Button";
import Partner from "./Partner";
import { BsArrowRight } from "react-icons/bs";

const Header = ({ shadow, image, title }) => {
  return (
    <div className="md:flex justify-between items-center md:gap-11 md:mt-32">
      <div className="m-6 mt-10 md:ml-16 flex-1">
        <h1 className="text-[32px] md:text-[64px] font-bold leading-[39px] md:leading-[88px] px-2 md:pl-0 md: pr-4 text-center md:text-left">
          Headline text for {title} goes here
        </h1>
        <p className="mt-4 md:mt-6 mb-8 font-['Manrope'] md:font-[Inter]  md:text[18px] md:text-n-gray text-base leading-[26px] md:leading-7 text-center text-pcolor md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          expedita earum adipisci quisquam suscipit deleniti impedit temporibus
          iure placeat accusamus sit harum aperiam, esse laboriosam qui id?
          Illum totam eveniet, aspernatur velit officiis numquam adipisci, vitae
          perspiciatis obcaecati inventore cupiditate.
        </p>
        <div className="md:flex gap-5 ">
          <Button buttonClass="bg-button-bg text-white mb-8">
            {/* Register Now */} CTA COPY HERE <span>{"  "}</span>
            <BsArrowRight />
          </Button>

          {/* <Button buttonClass="text-black border border-black mb-8">
            <span>LearnMore</span> <BsArrowRight />
          </Button> */}
        </div>

        {/* partner */}
        <Partner />
      </div>

      {/* picture  */}
      <div className="flex-1 mx-6 mt-16 md:m-0 z-0 relative">
        <div className="">
          <img
            src={shadow}
            alt="a shadow"
            className="min-w-[281.62px] min-h:[374.87px] md:min-w-[657px] md:min-h-[764px]"
          />
        </div>
        <div className="absolute md:right-16 md:left-16 bottom-0 right-8 left-8">
          <img
            src={image}
            alt="A lady with money smilling"
            className="min-w-[281.62px] min-h:[374.87px] md:min-w-[529px] md:min-h-[687px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
