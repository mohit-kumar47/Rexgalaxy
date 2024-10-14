import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import CourseDetails from "./components/courses/CourseDetails";
import { courseData } from "./components/courses/CourseData";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/Contact/ContactUs";
import Registeration from "./components/Registeration/Signup";
import Signin from "./components/Registeration/Signin";

// import MyComponent from "./Mycomponent";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        {/* <Route path="/" element={<MyComponent/>}/> */}
        <Route path="/" element={<Home />} />
        {Object.keys(courseData).map((courseKey) => (
          <Route
            key={courseKey}
            path={`/${courseKey}`}
            element={<CourseDetails course={courseData[courseKey]} />}
          />
        ))}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/register" element={<Registeration/>} />
        <Route path="/signin" element={<Signin/>} />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
