import React from "react";
import { useDispatch } from "react-redux";
import { RiCloseFill } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { AiOutlineLine } from "react-icons/ai";
import { cartActions } from "../../../Store/cartSlice";

function CartItem({ item }) {
  const { id, title, price, image01, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const decrementItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <li className="border-b border-footerBg p-3">
      <div className="flex gap-x-4">
        <img src={image01} className="w-9 h-9 object-cover" alt="product-img" />
        <div className="flex items-center justify-between w-full">
          <div className="grid gap-y-2 w-36">
            <h6 className="text-[0.8rem] font-semibold">{title}</h6>
            <p className="flex items-center justify-between gap-x-10 text-[0.8rem]">
              {quantity}x{" "}
              <span className="text-[0.9rem] font-semibold text-hHover">
                ${totalPrice}
              </span>
            </p>
            <div className="flex items-center justify-between gap-x-4 bg-footerBg py-1 px-0.5 rounded">
              <span onClick={incrementItem} className="cursor-pointer ">
                <FiPlus />
              </span>
              <span className="md:text-base text-[0.9rem]">{quantity}</span>
              <span onClick={decrementItem} className="cursor-pointer ">
                <AiOutlineLine />
              </span>
            </div>
          </div>
          <span
            onClick={deleteItem}
            className="text-lg font-semibold cursor-pointer"
          >
            <RiCloseFill />
          </span>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
