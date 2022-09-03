import React from "react";
import TestimonialSlider from "../../UI/Slider/TestimonialSlider";
import netWorkImg from "../../../assets/images/network.png";

function Testimonial() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-10">
          <div className="flex flex-col gap-y-4">
            <h5 className="text-hHover md:text-base text-[0.9rem]">
              Testimonial
            </h5>
            <h2 className="md:text-[2.3rem] text-xl">
              What our <span className="text-hHover">customers</span> are saying
            </h2>
            <p className="text-black/60 leading-7 md:text-base text-[0.8rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              autem, facere quibusdam quis iste officia commodi velit ipsam
              magni iusto.
            </p>
            <TestimonialSlider />
          </div>
          <div>
            <img src={netWorkImg} alt="testimonial-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
