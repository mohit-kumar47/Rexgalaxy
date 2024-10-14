import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "./ArrowComponents";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const courseinfo = [
    { name: "Python", img: "/images/python.jpeg" },
    { name: "Java", img: "/images/Java.png" },
    { name: "C", img: "/images/C.jpeg" },
    { name: "HTML", img: "/images/html.png" },
    { name: "CSS", img: "/images/css.jpeg" },
    { name: "JavaScript", img: "/images/js.png" },
    { name: "MySQL", img: "/images/sql.png" },
    { name: "MongoDB", img: "/images/mongo.png" },
    { name: "Node", img: "/images/node.jpg" },
  ];

  const facilities = [
    {
      heading: "Personal Mentorship at Its Best",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid repellat facilis voluptas necessitatibus.",
    },
    {
      heading: "State-of-the-Art Infrastructure",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid repellat facilis voluptas necessitatibus.",
    },
    {
      heading: "Comprehensive Learning Resources",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid repellat facilis voluptas necessitatibus.",
    },
    {
      heading: "Flexible Learning Options",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid repellat facilis voluptas necessitatibus.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const [courses, setCourses] = useState(0);
  const [learners, setLearners] = useState(0);
  const [happyLearners, setHappyLearners] = useState(0);

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 200;
      const intervalTime = duration / steps;

      const incrementNumbers = (setter, limit) => {
        let start = 0;
        const step = limit / steps;
        const timer = setInterval(() => {
          start += step;
          setter(Math.min(Math.ceil(start), limit));
          if (start >= limit) {
            clearInterval(timer);
          }
        }, intervalTime);
      };

      incrementNumbers(setCourses, 50);
      incrementNumbers(setLearners, 10000);
      incrementNumbers(setHappyLearners, 95);
    }
  }, [inView]);

  return (
    <div className="relative top-20 px-16 w-full mb-32">
      <div className="relative flex w-full justify-center">
        <img
          src="/images/girlimage.webp"
          alt="Career with CodersIndia"
          className="w-[70%] h-[80vh] rounded-3xl"
        />
        <div className="absolute bottom-0 w-[70%] flex justify-between items-end text-center text-white p-4 bg-gradient-to-t from-blue-800 via-transparent to-transparent">
          <div className="p-4 rounded-xl text-left">
            <p className="text-2xl font-bold">START YOUR</p>
            <p className="text-4xl font-bold mt-2">CAREER WITH "codersindia"</p>
          </div>
          <div className="mt-4 cursor-pointer">
            <Link to="/register">
            <button className="border-2 border-white px-4 py-2 hover:bg-blue-800 transition duration-100">
              Book Your Seat Now
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="bg-[#0c03b4] flex w-fit h-fit mx-auto mt-10 text-white rounded-full"
        ref={ref}
      >
        <div className="text-center mx-12">
          <p className="font-bold text-5xl mt-8">{courses}+ </p>
          <p className="font-medium text-2xl my-3"> Courses</p>
        </div>
        <div className="border-l-4 border-white h-28 my-auto"></div>
        <div className="text-center mx-12">
          <p className="font-bold text-5xl mt-8">{learners}+ </p>
          <p className="font-medium text-2xl my-3"> Learners</p>
        </div>
        <div className="border-l-4 border-white h-28 my-auto"></div>
        <div className="text-center mx-12">
          <p className="font-bold text-5xl mt-8">{happyLearners}% </p>
          <p className="font-medium text-2xl my-3"> Happy Learners</p>
        </div>
      </div>
      <div className="mt-12">
        <div>
          <h1 className="px-16 w-fit mx-auto border-b-2 border-black font-bold text-2xl">
            Our Courses and Classes
          </h1>
          <p className="w-fit mx-auto font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aliquam nobis veniam ducimus?
          </p>
        </div>
        <div className="my-10">
          <Slider {...settings}>
            {courseinfo.map((course, index) => (
              <div
                key={index}
                className="flex flex-col text-center items-center p-4  "
                onClick={()=>{
                  path = ''
                }}
              >
                <h1 className="font-bold text-lg mb-2">Master {course.name}</h1>
                <img
                  src={course.img}
                  alt={course.name}
                  className="w-[250px] h-[250px] rounded-full mx-auto mb-2"
                />
                <button className="mt-2 border-2 border-white bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-100">
                  Explore Course
                </button>
                `<Link to='/${}'></Link>`
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="text-2xl font-bold pb-4 border-b-2 border-gray-300">
          Our Premier Facilities Await Your Coding{" "}<br/>
          <span className="break-words">Journey!</span>
        </div>

        <div className="flex gap-4 w-full">
          <div>
            <img src="/images/facilities.png" alt="Facilities" className="bg-blue-800 p-5 rounded-xl w-full"/>
          </div>
          <div className="flex flex-wrap justify-between w-full gap-4">
            {facilities.map((facility, index) => (
              <div key={index} className="flex flex-col max-w-[47%]">
                <h1 className=" border-b-2 border-gray-400 text-blue-800 font-bold">
                  {facility.heading}
                </h1>
                <p>"{facility.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
