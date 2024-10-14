// src/components/Header/Header.js
import React, { useState } from "react";
import { FaSearch, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };
  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <header className="bg-blue-800 bg-opacity-70 text-white border-b-2 border-black fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-2">
      <Link to="/">
        <img src="/images/codersindia.jpg" alt="Coders India" className="h-16 rounded-full"/>
      </Link>

      <nav className="relative flex items-center space-x-10 font-medium text-xl ">
        <Link to="/" className=" hover:text-yellow-500 hover:font-extrabold">
          Home
        </Link>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className=" flex group items-center hover:text-yellow-500 hover:font-extrabold"
        >
          <p>Courses</p>
          <FaAngleDown className="mt-1 ml-1 transition-transform duration-300 transform group-hover:rotate-180" />
          {dropdownVisible && (
            <div className="absolute top-full py-2 bg-blue-500 bg-opacity-70 shadow-lg">
              <ul>
                {[
                  "python",
                  "html",
                  "css",
                  "javascript",
                  "react",
                  "node",
                  "mongodb",
                  "mysql",
                ].map((courseKey, index) => (
                  <li
                    key={index}
                    className="p-3 w-[10vw] text-center text-blue-800  hover:text-yellow-500"
                  >
                    <Link to={`/${courseKey}`}>{courseKey.toUpperCase()}</Link>
                  </li>
                ))}
                <div className="absolute left-3 bottom-full w-0 h-2 border-solid border-transparent border-6 border-black"></div>
              </ul>
            </div>
          )}
        </div>
        <Link to="/aboutus" className=" hover:text-yellow-500 hover:font-extrabold">
          About Us
        </Link>
        <Link to="/team" className=" hover:text-yellow-500 hover:font-extrabold">
          Team
        </Link>
      </nav>

      <div className="relative flex items-center">
        <button className="w-10 h-8 flex items-center justify-center text-blue-500 bg-white rounded-full 0focus:outline-none">
          <FaSearch />
        </button>
        <input
          type="text"
          className="ml-2 py-1 px-2 border-b rounded-lg border-blue-500 focus:outline-none text-blue-500"
          placeholder="Type to Search..."
        />
      </div>

      <Link to="/ContactUs" className=" hover:text-yellow-500 hover:font-bold">
        Contact Us
      </Link>
    </header>
  );
};

export default Header;