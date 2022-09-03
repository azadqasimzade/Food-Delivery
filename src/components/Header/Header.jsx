import React, { useState } from "react";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { RiShoppingBasketLine, RiUser3Line, RiMenuLine } from "react-icons/ri";

const nav_links = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "Foods",
    path: "/foods",
  },
  {
    title: "Cart",
    path: "/cart",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

function Header() {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <header className="md:w-full md:h-20 w-full h-12">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-center  flex flex-col items-center">
            <img
              src={logo}
              className="md:w-16 w-12 object-contain"
              alt="logo"
            />
            <h5 className="font-semibold lg:text-base text-[0.8rem] text-hColor">
              Tasty Treat
            </h5>
          </div>
          <div
            className={`${
              show ? "block" : "hidden"
            } lg:block lg:static lg:top-auto lg:left-auto lg:w-auto lg:h-auto lg:bg-transparent fixed top-0 left-0 w-full h-full bg-black/50 z-20`}
          >
            <div className="lg:relative lg:top-auto lg:right-auto lg:w-auto lg:h-auto lg:bg-transparent lg:flex-row lg:justify-start lg:gap-5 flex items-center absolute top-0 right-0 w-64 h-full bg-white flex-col justify-center gap-10 z-30">
              {nav_links.map((item, index) => (
                <NavLink
                  onClick={toggleMenu}
                  key={index}
                  to={item.path}
                  className={(navClass) =>
                    `${
                      navClass.isActive ? "text-hHover" : "text-hColor"
                    } font-semibold lg:text-base text-[0.9rem] hover:text-hHover transition duration-300`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 relative">
            <span className="flex items-center lg:text-[1.3rem] text-base text-hColor cursor-pointer">
              <RiShoppingBasketLine />
              <span className="absolute -top-2.5 left-3 text-white w-[0.938rem] h-[0.938rem] rounded-full bg-bgRed text-[.8rem] font-normal flex items-center justify-center">
                2
              </span>
            </span>
            <span className=" lg:text-[1.3rem] text-base text-hColor cursor-pointer">
              <Link to={"/login"}>
                <RiUser3Line />
              </Link>
            </span>
            <span
              onClick={toggleMenu}
              className="lg:hidden block lg:text-[1.3rem] text-base text-hColor cursor-pointer"
            >
              <RiMenuLine />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
