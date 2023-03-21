import React from "react";
import Button from "../Button";
import Card from "./../../ui/Card";
import { BsArrowRight } from "react-icons/bs";

const Grow = () => {
  return (
    <div className="md:py-[60px] md:pt-14 md:pb-[99px] py-8 px-6 md:px-16">
      <Card>
        <h1 className="font-bold md:text-6xl text-2xl  text-white text-center ">
          Start growing your business in{" "}
          <span className="text-[#59B9FF]">
            <br />
            30 mins
          </span>{" "}
          or less. Let us help
        </h1>
        <div className="md:flex gap-5 justify-center">
          <Button buttonClass="bg-button-bg text-white mt-8 mb-8">
            Register Now <BsArrowRight />
          </Button>

          <Button buttonClass="text-white border border-white mt-8">
            <span>LearnMore</span> <BsArrowRight />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Grow;
