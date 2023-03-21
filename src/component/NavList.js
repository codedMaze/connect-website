import React from "react";
import { navList } from "../data/dummyData";
import { NavLink } from "react-router-dom";

const NavList = ({ sClass }) => {
  return (
    <>
      {navList.map((nav) => (
        <NavLink to={nav.link} key={nav.id}>
          <li className={sClass ? sClass : ""}>{nav.name}</li>
        </NavLink>
      ))}
    </>
  );
};

export default NavList;
