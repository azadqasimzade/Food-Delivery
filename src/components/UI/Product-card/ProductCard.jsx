import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../../Store/cartSlice";

function ProductCard({ item }) {
  const { id, title, image01, price } = item;

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className="border border-footerBg flex flex-col items-center p-8 cursor-pointer shadow-md hover:shadow-none rounded-md transition duration-300 text-center group">
      <div className="w-1/2 mb-5">
        <img
          src={image01}
          alt="product-img"
          className="group-hover:scale-110 transition duration-300"
        />
      </div>
      <div className="w-full">
        <h5 className="text-hColor mb-7 md:text-base text-[0.9rem]">
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="w-full flex items-center justify-between">
          <span className="font-semibold md:text-xl text-base text-hHover">
            ${price}
          </span>
          <button
            onClick={addToCart}
            className="md:px-6 md:py-2 px-3 py-1 bg-bgRed text-white rounded-md md:text-[0.9rem] text-[0.8rem]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
