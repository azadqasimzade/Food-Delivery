import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import whyImg from "../../../assets/images/location.png";

function Tasty() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div>
            <img src={whyImg} alt="why-tasty-treat" />
          </div>
          <div>
            <div>
              <h2 className="mb-5 md:text-[2.3rem] text-xl">
                Why <span className="text-hHover">Tasty Treat?</span>
              </h2>
              <p className="text-black/60 md:text-base text-[0.8rem] leading-7 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                eum provident ad obcaecati expedita, numquam voluptate mollitia,
                quos sunt unde aliquam, dicta quaerat harum repellat? Unde
                officia voluptate facilis quo.
              </p>
              <ul className="grid gap-y-8">
                <li>
                  <p className="flex items-center gap-x-3 md:text-base text-[0.8rem] font-semibold">
                    <BsCheckCircle className="text-hHover" /> Fresh and tasty
                    foods
                  </p>
                  <p className="text-black/60 mt-3 md:text-base text-[0.8rem]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quod, omnis!
                  </p>
                </li>
                <li>
                  <p className="flex items-center gap-x-3 md:text-base text-[0.8rem] font-semibold">
                    <BsCheckCircle className="text-hHover" /> Quality support
                  </p>
                  <p className="text-black/60 mt-3 md:text-base text-[0.8rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae, exercitationem!
                  </p>
                </li>
                <li>
                  <p className="flex items-center gap-x-3 md:text-base text-[0.8rem] font-semibold">
                    <BsCheckCircle className="text-hHover" /> Order from any
                    location
                  </p>
                  <p className="text-black/60 mt-3 md:text-base text-[0.8rem]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatem, asperiores?
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tasty;
