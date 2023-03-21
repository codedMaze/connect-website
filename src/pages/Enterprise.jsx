import React from "react";
import shadow from "../asset/Rectangle 828141.png";
import Header from "../component/sections/Header";
import image from "../asset/Rectangle 828142.png";
import Section from "./../component/sections/Section";
import { enterprise } from "../data/dummyData";
import table from "../asset/image 11.png";
import NextLevel from "../component/sections/NextLevel";
import Grow from "../component/sections/Grow";

const Enterprise = () => {
  return (
    <div>
      <Header shadow={shadow} image={image} title={"Enterprise"} />
      <Section section={enterprise} image={table} flex={1} />
      <NextLevel />
      <Grow />
    </div>
  );
};

export default Enterprise;
