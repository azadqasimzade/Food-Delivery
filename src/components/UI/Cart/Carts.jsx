import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { cartUiActions } from "../../../Store/cartUiSlice";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function Carts() {
  const dispatch = useDispatch();

  const cartProoducts = useSelector((state) => state.cart.cartItems);
  const { totalAmount } = useSelector((state) => state.cart);

  const [animationParent] = useAutoAnimate();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/60 z-50">
      <ul className="cartList absolute top-0 right-0 w-[25rem] h-full bg-white overflow-y-auto z-50">
        <div className="sticky top-0 left-0 bg-white h-12 w-full flex items-center px-3">
          <span
            onClick={toggleCart}
            className="text-2xl font-semibold cursor-pointer text-white"
          >
            <RiCloseFill className="bg-bgRed w-6 h-6 rounded-full" />
          </span>
        </div>
        <div ref={animationParent}>
          {cartProoducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartProoducts.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>
        {totalAmount > 0 && (
          <div className="sticky w-full bottom-0 left-0 h-20 flex items-center justify-between mt-3 px-3 bg-bgRed text-white">
            <h6 className="md:text-base text-[0.9rem]">
              Subtotal amount:{" "}
              <span className="text-xl font-semibold">${totalAmount}</span>
            </h6>
            <button className="px-5 py-1 rounded bg-white text-hColor font-semibold">
              <Link to={"/checkout"}>Checkout</Link>
            </button>
          </div>
        )}
      </ul>
    </div>
  );
}

export default Carts;
