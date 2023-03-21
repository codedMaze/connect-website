import React from "react";
import { merchant } from "../data/dummyData";
import Section from "./../component/sections/Section";
import Header from "../component/sections/Header";
import NextLevel from "./../component/sections/NextLevel";
import Grow from "./../component/sections/Grow";
import shadow from "../asset/Rectangle 828141.png";
import image from "../asset/Rectangle 828142.png";
import table from "../asset/image 12.png";

const Merchant = () => {
  return (
    <div>
      <Header shadow={shadow} image={image} title={"Merchant"} />
      <Section section={merchant} image={table} />
      <NextLevel />
      <Grow />
    </div>
  );
};

export default Merchant;
