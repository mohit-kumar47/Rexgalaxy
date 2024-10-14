import React from "react";
import {Card, Input, Checkbox, Button, Typography,} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Registeration = () => {
        return (
           <Card  shadow={false} className=" flex mb-4 items-center top-20 w-100 h-100 bg-blue-800   ">
            <div className="border-white rounded-lg shadow border sm:max-w-md xl:p-0 bg-blue-700 m-10 !p-9 ">
            <Typography variant="h4" color="white" className=" font-bold ">
              Sign Up
            </Typography>
            <Typography color="white" className="mt-1 font-normal">
              Nice to meet you! Enter your details to register.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="white" className="-mb-3">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="username"
                  className=" bg-gray-50 border border-gray-300 text-gray-100 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                  "
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="white" className="-mb-3">
                  Your Email
                </Typography>
                <Input
                  size="lg"
                  placeholder="name@gmail.com"
                  className=" bg-gray-50 border border-gray-300 text-gray-100 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="white" className="-mb-3">
                  Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  className=" bg-gray-50 border border-gray-300 text-gray-100 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="white"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button className="mt-6 bg-black left-36  " >
                sign up
              </Button>
              <Typography color="white" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <Link to="/signin">
                <a className="font-medium text-gray-200">
                  Sign In
                </a>
                </Link>
              </Typography>
            </form>
            </div>
          </Card>
        );
      }

export default Registeration;