import React from "react";
import logo from "../../assets/images/res-logo.png";
import {
  RiSendPlaneLine,
  RiFacebookFill,
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinFill,
} from "react-icons/ri";

function Footer() {
  return (
    <footer className="pt-12 pb-7 bg-footerBg">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-4">
          <div className="text-start flex flex-col items-start">
            <img src={logo} className="md:w-16 w-12 mb-1" alt="logo" />
            <h5 className="font-semibold lg:text-base text-[0.8rem] mb-4 text-hColor">
              Tasty Treat
            </h5>
            <p className="md:text-[0.9rem] text-[0.8rem] text-black/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              quisquam consequuntur.
            </p>
          </div>
          <div className="text-hColor">
            <h5 className="pb-2 md:text-[1.1rem] text-[0.9rem] font-semibold">
              Delivery Time
            </h5>
            <ul>
              <li className="pb-3">
                <span className="font-semibold md:text-base text-[0.8rem]">
                  Sunday - Thursday
                </span>
                <p>10:00am - 11:00pm</p>
              </li>
              <li>
                <span className="font-semibold md:text-base text-[0.8rem]">
                  Friday - Saturday
                </span>
                <p>Off day</p>
              </li>
            </ul>
          </div>
          <div className="text-hColor">
            <h5 className="pb-2 md:text-[1.1rem] text-[0.9rem] font-semibold">
              Contact
            </h5>
            <ul>
              <li className="pb-3">
                <span className="font-semibold md:text-base text-[0.8rem]">
                  Location: Amerika, New York
                </span>
              </li>
              <li className="pb-3">
                <span className="font-semibold md:text-base text-[0.8rem]">
                  Phone: 012345678
                </span>
              </li>
              <li>
                <span className="font-semibold md:text-base text-[0.8rem]">
                  Email: example@gmail.com
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="pb-2 md:text-[1.1rem] text-[0.9rem] font-semibold">
              Newsletter
            </h5>
            <p className="md:text-base text-[0.8rem]">
              Subscribe our newsletter
            </p>
            <div className="flex items-center p-2 border border-hColor rounded-md justify-between mt-2">
              <input
                type="email"
                className="w-full md:text-base text-[0.9rem] bg-transparent border-none pr-3 outline-none placeholder:text-hColor"
                placeholder="Enter your email"
              />
              <span className="flex items-center justify-center cursor-pointer bg-hColor hover:bg-hHover transition duration-300 rounded-md text-white md:py-3 md:px-6 py-1.5 px-3">
                <RiSendPlaneLine />
              </span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 mt-14 gap-y-2">
          <p className="text-[0.8rem] text-hHover">
            Copyright - 2022, website made by Qasımzadə Azad. All Rights
            Reserved.
          </p>
          <div className="flex items-center md:justify-end justify-start gap-x-4">
            <p>Follow: </p>
            <span>
              <a
                href="https://www.facebook.com/profile.php?id=100075612476902"
                target={"_blank"}
                rel="noreferrer"
              >
                <RiFacebookFill
                  className="p-1 bg-hColor text-white rounded-full hover:bg-hHover transition duration-300"
                  size={22}
                />
              </a>
            </span>
            <span>
              <a
                href="https://github.com/azadqasimzade"
                target={"_blank"}
                rel="noreferrer"
              >
                <RiGithubFill
                  className="p-1 bg-hColor text-white rounded-full hover:bg-hHover transition duration-300"
                  size={22}
                />
              </a>
            </span>
            <span>
              <a
                href="https://www.instagram.com/azadqasimzade"
                target={"_blank"}
                rel="noreferrer"
              >
                <RiInstagramLine
                  className="p-1 bg-hColor text-white rounded-full hover:bg-hHover transition duration-300"
                  size={22}
                />
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/azad-gasimzade/"
                target={"_blank"}
                rel="noreferrer"
              >
                <RiLinkedinFill
                  className="p-1 bg-hColor text-white rounded-full hover:bg-hHover transition duration-300"
                  size={22}
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
