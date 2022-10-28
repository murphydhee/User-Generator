import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="cursor-pointer">
        <Link to="/">
          <h1 className="font-bold">Random User Api</h1>
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <a
            className="mr-3 font-bold"
            target={"_blank"}
            href="https://randomuser.me/documentation"
          >
            About
          </a>
        </li>

        <li>
          <Link className="mr-3 font-bold" to="/users">
            Get Stared
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/">
            Home
          </Link>
        </li>

        <li className="py-6 text-4xl">
          {" "}
          <a
            onClick={handleClick}
            target={"_blank"}
            href="https://randomuser.me/documentation"
          >
            contact
          </a>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="/users">
            Get Started
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
