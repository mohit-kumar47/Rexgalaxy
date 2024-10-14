// src/components/LeftSideBar/LeftSideBar.js
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const LeftSideBar = ({ sections }) => {
  return (
    <div className="w-[20%] bg-gray-100 h-full p-4">
      <ul className="space-y-2">
        {sections.map((section, index) => (
          <li key={index} className="border-b-2 border-gray-300 py-2">
            <Link
              smooth
              to={`#${section.id}`}
              className="text-black hover:text-teal-500 block"
            >
              {section.heading}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
