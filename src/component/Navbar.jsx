import React, { useState } from "react";
import logo from "../asset/image 5.jpg";
import NavList from "./NavList";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
  const [menuBtn, setmenuBtn] = useState(false);

  const navHandler = () => {
    setmenuBtn(!menuBtn);
  };
  let sClass = "mb-8 text-[#000] text-base";

  return (
    <div className="block overflow-hidden">
      <div className="w-full shadow-sfull md:fixed md:top-0 md:z-30 bg-white">
        <div className="flex justify-between items-center mx-6 md:mx-16 py-4 z-50">
          <div>
            <NavLink to={"/"}>
              <img
                src={logo}
                alt="kurnect logo"
                width={"91px"}
                height={"25px"}
              />
            </NavLink>
          </div>
          <ul className="hidden md:flex gap-10 text-n-gray text-sm ">
            <NavList />
          </ul>
          <div onClick={navHandler} className="block md:hidden">
            {menuBtn ? (
              <MdOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </div>
        </div>
        {menuBtn && (
          <div className="fixed h-full left-0 top-0 bg-white w-full z-[4] overflow-hidden">
            <div className="flex justify-between items-center shadow-mobile-shadow">
              <img
                src={logo}
                alt="kurnect logo"
                width={"91px"}
                height={"25px"}
                className="my-[18px] ml-6"
              />
              <div onClick={navHandler} className="block md:hidden mr-6">
                {menuBtn ? (
                  <MdOutlineClose size={22} />
                ) : (
                  <AiOutlineMenu size={22} />
                )}
              </div>
            </div>
            <div className="mt-10 ml-6">
              <ul onClick={() => setmenuBtn(false)}>
                <NavList sClass={sClass} />
              </ul>
            </div>
          </div>
        )}
      </div>
      {!menuBtn && children}
    </div>
  );
};

export default Navbar;
