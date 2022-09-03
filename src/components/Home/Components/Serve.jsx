import React from "react";
import featureImg01 from "../../../assets/images/service-01.png";
import featureImg02 from "../../../assets/images/service-02.png";
import featureImg03 from "../../../assets/images/service-03.png";

const featureData = [
  {
    title: "Quick Delivery",
    image: featureImg01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolorum. Excepturi, et ipsam. Unde, quia.",
  },
  {
    title: "Super Dine In",
    image: featureImg02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolorum. Excepturi, et ipsam. Unde, quia.",
  },
  {
    title: "Easy Pick Up",
    image: featureImg03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolorum. Excepturi, et ipsam. Unde, quia.",
  },
];

function Serve() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 text-center">
          <h5 className="text-hHover mb-4 md:text-base text-[0.9rem]">
            What we serve
          </h5>
          <h2 className="md:text-[2.3rem] leading-snug text-xl">
            Just sit back at home
          </h2>
          <h2 className="md:text-[2.3rem] leading-snug text-xl">
            we will <span className="text-hHover">take care</span>
          </h2>
          <p className="mt-6 mb-3 md:text-base text-[0.8rem] text-black/60">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
            aliquid!
          </p>
          <p className=" text-black/60 md:text-base text-[0.8rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            deleniti.
          </p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 mt-10">
          {featureData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-y-2 md:px-7 py-5"
            >
              <img src={item.image} className="w-1/4 mb-3" alt={item.title} />
              <h5 className="md:text-base text-[0.9rem] font-bold tracking-wide">
                {item.title}
              </h5>
              <p className="md:text-base text-[0.8rem] text-black/60">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Serve;
