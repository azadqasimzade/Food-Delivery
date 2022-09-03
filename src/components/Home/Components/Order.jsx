import React from "react";
import heroImg from "../../../assets/images/hero.png";
import { MdArrowForwardIos } from "react-icons/md";
import { AiOutlineCar } from "react-icons/ai";
import { TbShieldCheck } from "react-icons/tb";
import { Link } from "react-router-dom";

function Order() {
  return (
    <section className="md:mt-28">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="pt-[4.375rem] md:text-start text-center">
            <h5 className="mb-3 md:text-base text-[0.9rem]">
              Easy way to make an order
            </h5>
            <h1 className="mb-5 md:text-[2.5rem] leading-snug text-2xl">
              <span className="text-hHover">HUNGRY?</span> Just wait <br /> food
              at <span className="text-hHover">your door</span>
            </h1>
            <p className="md:text-base text-[0.8rem] leading-8 text-black/60">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              natus suscipit dolor rerum aperiam laudantium? Lorem ipsum dolor
              sit amet.
            </p>
            <div className="flex items-center md:justify-start justify-center gap-x-5 mt-4 font-semibold">
              <button className="flex items-center gap-x-3 md:py-2 md:px-5 py-1 px-4 text-[0.8rem] rounded-md cursor-pointer bg-hHover text-white tracking-wide hover:bg-hColor transition duration-300">
                Order now <MdArrowForwardIos />
              </button>
              <button className="md:py-2 md:px-5 py-1 px-4 text-[0.8rem] rounded-md cursor-pointer bg-transparent border border-hHover text-hHover tracking-wide">
                <Link to={"/foods"}>See all foods</Link>
              </button>
            </div>
            <div className="mt-10 flex items-center md:justify-start justify-center gap-x-12 text-hColor font-semibold text-[0.9rem]">
              <p className="flex items-center md:text-base text-[0.8rem] gap-x-2 tracking-wide">
                <span>
                  <AiOutlineCar
                    className="p-1 bg-bgRed text-white rounded-full"
                    size={25}
                  />
                </span>{" "}
                No shipping charge
              </p>
              <p className="flex items-center md:text-base text-[0.8rem] gap-x-2 tracking-wide">
                <span>
                  <TbShieldCheck
                    className="p-1 bg-bgRed text-white rounded-full"
                    size={25}
                  />
                </span>{" "}
                100% secure checkout{" "}
              </p>
            </div>
          </div>
          <div className="hero_image">
            <img src={heroImg} alt="hore-img" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Order;
