import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";

import Azure from "../asset/image 24.png";
import Alt from "../asset/image 23.png";
import aws from "../asset/image 21.png";
import table from "../asset/image 11.jpg";
import image from "../asset/Onboarding.png";
import promise from "../asset/Onboarding (1).png";
import rectangle from "../asset/Rectangle 828143.png";
import Button from "../component/Button";
import Section from "../component/sections/Section";
import { distributor, enterprise, merchant } from "../data/dummyData";
import Best from "../component/sections/Best";
import Grow from "../component/sections/Grow";

const Home = () => {
  return (
    // register / Learn more section
    <div>
      <div className="md:flex justify-between items-center md:gap-48 md:mt-[29px] md:mb-[42px] 2xl:mb-[66px] mb-16">
        <div className="m-6 mt-10 md:ml-16 flex-1">
          <h1 className="text-[32px] md:text-[64px] font-bold leading-[39px] md:leading-[88px] px-2 md:pl-0 md: pr-4 text-center md:text-left">
            A better way to manage and grow your business
          </h1>
          <p className="mt-4 md:mt-6 mb-8 font-['Manrope'] md:font-[Inter]  md:text[18px] md:text-n-gray text-base leading-[26px] md:leading-7 text-center text-pcolor md:text-left">
            WeKurnect will help you simplify your orders, inventory and payments
            processes allowing you to focus on growing your business
            effortlessly.
          </p>
          <div className="md:flex gap-5 ">
            <Button buttonClass="bg-button-bg text-white mb-8">
              Register Now <BsArrowRight />
            </Button>

            <Button buttonClass="text-black border border-black mb-8">
              <span>LearnMore</span> <BsArrowRight />
            </Button>
          </div>
        </div>
        {/* picture  */}
        <div className="flex-1 mx-6 mt-16 md:m-0 relative z-0">
          <div className="absolute right-0 top-0 md:-right-10 ml-3 md:ml-0 ">
            <img
              src={rectangle}
              alt="a shadow"
              className="min-w-[309.3px] min-h-[386.63px] md:w-[648px] md:h-[810px] rounded-r-2xl rounded-b-none"
            />
          </div>
          <div className="md:mr-16 relative top-[21.5px;] md:top-[66px] mr-[26.7px] left-0">
            <img
              src={image}
              alt="A lady with money smilling"
              className="min-w-[281.62px] min-h:[374.87px] md:min-w-[590px] md:min-h-[785.38px]"
            />
          </div>
        </div>
      </div>

      {/* Section */}

      <div className="bg-[#E8F3ED] m-0 md:pb-20 pb-8">
        <div className="md:flex m-6 md:mx-16 items-center justify-between pt-6 md:pt-[70px]">
          <div className="flex-1">
            {/* content */}
            <h1 className="text-2xl font-bold text-center md:text-left md:text-[40px] md:leading-[64px] text-[#1A1B1A]">
              We are built around the strongest in the business
            </h1>
            <p className="mt-4 md:mt-6 text-pcolor md:text-black text-center md:text-left mb-8">
              Our solution sits on a tested and trusted infrastructure to ensure
              the security of your business data and transactions.
            </p>
          </div>
          <div className="flex-1">
            {/* pic */}
            <img src={promise} alt="" className="md:max-w-[607px]" />
          </div>
        </div>

        {/* the Promise */}

        <div className="mx-6 md:mx-16">
          <h1 className="text-base md:text-[32px] font-bold text-[#18191F] mb-4 md:mb-8">
            The Wekurnect Promise
          </h1>
          <div className="md:flex gap-9 md:mb-14">
            <div className="flex-1 bg-white px-8 pt-[42px] pb-8 rounded-2xl">
              <div className="grid justify-center items-center w-10 h-10 rounded-full bg-[#EFFEFC]">
                <MdLockOutline className="text-[#41D3BD] text" />
              </div>
              <h1 className="text-base md:text-[28px] font-bold text-[#18191F] md:text-black mb-4 md:mb-8">
                Manage Your Business
              </h1>
              <p className="text-pcolor md:text-black text-sm md:text-base text-left">
                Our solution provides a wholesome platform to keep your entire
                business in check with the right controls and a robust reporting
                module.
              </p>
            </div>

            <div className="hidden md:block md:flex-1 bg-white px-8 pt-[42px] pb-8 rounded-2xl">
              <div className="grid justify-center items-center w-10 h-10 rounded-full bg-[#F7F1F8]">
                <MdLockOutline className="text-[#BE95C4] text" />
              </div>
              <h1 className="text-base md:text-[28px] font-bold text-[#18191F] md:text-black mb-4 md:mb-8">
                Join Our Marketplace
              </h1>
              <p className="text-pcolor md:text-black text-sm md:text-base text-left">
                Take advantage of the ever growing weKurnect marketplace of
                retailers and wholesalers. Grow quickly, efficiently and
                effortlessly.
              </p>
            </div>

            <div className="hidden md:block md:flex-1 bg-white px-8 pt-[42px] pb-8 rounded-2xl">
              <div className="grid justify-center items-center w-10 h-10 rounded-full bg-[#FFF9EC]">
                <MdLockOutline className="text-[#FFC53A] text" />
              </div>
              <h1 className="text-base md:text-[28px] font-bold text-[#18191F] md:text-black mb-4 md:mb-8">
                Trade without Limits
              </h1>
              <p className="text-pcolor md:text-black text-sm md:text-base text-left">
                Customers can order and pay you anytime and anywhere. Even
                regular phone users can dial *347*200# to transact with you.
              </p>
            </div>
          </div>
          <div className="md:flex md:w-1/2 md:mt-14 mt-5 gap-4">
            <div className="">
              <p className="text-sm text-black text-center md:text-left mb-[18px]">
                Our Data Security Partners
              </p>
              <div className="flex gap-3 justify-center md:items-center md:justify-start">
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
      </div>

      {/* Distributor section */}
      <Section section={distributor} image={table} />
      <Section section={enterprise} image={table} flex={1} />
      <Section section={merchant} image={table} />

      <Best />

      <Grow />
    </div>
  );
};

export default Home;
