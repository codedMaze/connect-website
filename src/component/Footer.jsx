import React from "react";
import { footerData } from "../data/dummyData";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="md:flex bg-[#1A1B1A] justify-between px-6 pt-10 md:px-16 md:py-[101px] relative bottom-0 footer">
      {footerData.map((item) => (
        <div key={item.id} className="text-white pb-4">
          <h1 className="font-bold pb-6 md:text-2xl text-lg">{item.title}</h1>
          <ul>
            {item.list.map((list, index) => (
              <Link key={index}>
                <li className="pb-6 text-base">{list}</li>
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
