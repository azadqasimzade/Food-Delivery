import React from "react";
import Slider from "react-slick";
import avatar01 from "../../../assets/images/ava-1.jpg";
import avatar02 from "../../../assets/images/ava-2.jpg";
import avatar03 from "../../../assets/images/ava-3.jpg";

function TestimonialSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <p className="text-black/60 md:text-base text-[0.8rem] leading-7 my-10 mx-0">
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          tempora, quos atque dignissimos ut quam, nisi aspernatur eaque quae
          eveniet aut harum neque veritatis excepturi quis. Enim itaque ullam
          consequatur."
        </p>
        <div className="flex items-center gap-5">
          <img
            src={avatar01}
            alt="avatar"
            className="w-12 h-12 rounded-xl object-cover"
          />
          <h6 className="md:text-base text-[0.9rem]">Jhon Doe</h6>
        </div>
      </div>
      <div>
        <p className="text-black/60 md:text-base text-[0.8rem] leading-7 my-10 mx-0">
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          tempora, quos atque dignissimos ut quam, nisi aspernatur eaque quae
          eveniet aut harum neque veritatis excepturi quis. Enim itaque ullam
          consequatur."
        </p>
        <div className="flex items-center gap-5">
          <img
            src={avatar02}
            alt="avatar"
            className="w-12 h-12 rounded-xl object-cover"
          />
          <h6 className="md:text-base text-[0.9rem]">Michell Marsh</h6>
        </div>
      </div>
      <div>
        <p className="text-black/60 md:text-base text-[0.8rem] leading-7 my-10 mx-0">
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          tempora, quos atque dignissimos ut quam, nisi aspernatur eaque quae
          eveniet aut harum neque veritatis excepturi quis. Enim itaque ullam
          consequatur."
        </p>
        <div className="flex items-center gap-5">
          <img
            src={avatar03}
            alt="avatar"
            className="w-12 h-12 rounded-xl object-cover"
          />
          <h6 className="md:text-base text-[0.9rem]">Steven Crock</h6>
        </div>
      </div>
    </Slider>
  );
}

export default TestimonialSlider;
