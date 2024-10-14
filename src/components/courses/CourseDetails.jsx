// src/components/CourseDetails/CourseDetails.js
import React from "react";
import LeftSideBar from "./LeftSideBar";

const CourseDetails = ({ course }) => {
  return (
    <div className="flex mt-16">
      {/* Sidebar component */}
      <LeftSideBar sections={course.sections} />

      {/* Main section */}
      <div className="w-[55%] mx-auto course-content p-4">
        <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
        <p className="text-sm text-gray-500 mb-2">Last Updated: {course.lastUpdated}</p>
        <p className="mb-4">{course.description}</p>

        {/* Table of Contents */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
          <ul className="list-disc pl-6">
            {course.sections.map((section, index) => (
              <li key={index} className="mb-2">
                <a href={`#${section.id}`} className="text-teal-500 hover:underline">
                  {section.heading}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {course.sections.map((section, index) => (
          <div key={index} id={section.id} className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{section.heading}</h2>
            <p className="mb-2 whitespace-pre-wrap">{section.content}</p>
            {section.code && (
              <pre className="bg-gray-100 p-2 mb-2">
                <code>{section.code}</code>
              </pre>
            )}
            {section.output && (
              <pre className="bg-gray-100 p-2">
                <code>{section.output}</code>
              </pre>
            )}
          </div>
        ))}
      </div>

      {/* Right Empty Space */}
      <div className="w-[20%]"></div>
    </div>
  );
};

export default CourseDetails;
