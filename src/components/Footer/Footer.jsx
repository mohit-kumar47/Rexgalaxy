import React from "react";
import { FaEnvelope, FaCopyright, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cover mt-16 absolute w-full">
      <div className="absolute">
        <img src="/images/wave.jpg" alt="" className="h-[100vh] w-[100vw]" />
      </div>
      <div className="relative">
        {/* Logo and tagline section */}
        <div className=" pl-8 flex flex-col  pb-8 border-b-4 border-lightblue">
          <img src="/images/codersindia.jpg" alt="Coders India" className="h-36 w-40 rounded-full" />
          <p className="mt-4 text-lg">
            CodersIndia: Empower. Code. Excel.<br></br> Your journey starts here!
          </p>
        </div>

        {/* Main content section with columns for Courses, Facilities, and Contact */}
        <div className="flex justify-center mt-8 pb-8 border-b-4 border-lightblue px-10 gap-[15vw]">
          {/* Courses */}
          <div className="footer-column">
            <h3 className="text-2xl font-bold">Courses</h3>
            <ul className="mt-4 space-y-2 font-medium">
              {[
                "Python",
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node",
                "MongoDB",
                "MySQL",
              ].map((course, index) => (
                <li key={index} className="hover:text-yellow-500">
                  <a href="#">{course}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Facilities */}
          <div className="footer-column">
            <h3 className="text-2xl font-bold">Our facilities</h3>
            <ul className="mt-4 space-y-2 font-medium">
              {[
                "Workshops and Training Sessions",
                "Personalized Learning Paths",
                "Access to Industry-Standard Software and Tools",
                "Continuous Mentorship and Support",
                "Online Resources and Learning Materials",
                "Flexible Scheduling Options",
              ].map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-column">
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <ul className="mt-4 space-y-2 font-medium">
              <li className="flex items-center">
                <FaEnvelope className="text-red-500 mr-2" />
                <a href="mailto:codersindia555@gmail.com">
                  codersindia555@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                < FaYoutube className="text-red-500 mr-2" />
                <a href="https://www.youtube.com/@CodersIndia" target="_blank" rel="noopener noreferrer">
                  @CodersIndia
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright section */}
        <div className="mt-8 text-center">
          <p className="flex items-center justify-center">
            <FaCopyright />
            <span className="ml-1">
              Copyright <b>CodersIndia</b>. All Rights Reserved | <b>2024</b>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
