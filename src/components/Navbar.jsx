import { React, useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" w-full flex py-6 justify-between item-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <ul className=" list-none sm:flex hidden justify-end item-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${
              index === navLinks.length - 1 ? `mr-0` : `mr-10`
            }`}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          className="w-[28px] h-[28x] object-contain"
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        />
        <div
          className={`${
            toggle ? `flex` : `hidden`
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 rounded-xl sidebar min-w-[140px]`}
        >
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                className={`font-poppins text-white font-normal cursor-pointer text-[16px] ${
                  index === Navbar.length - 1 ? `mb-0 ` : `mb-4`
                }`}
              >
                <a href={nav.id}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
