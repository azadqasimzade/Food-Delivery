import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CommonSection from "../components/UI/Common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { RiDeleteBinFill } from "react-icons/ri";
import { cartActions } from "../Store/cartSlice";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const [animationParent] = useAutoAnimate();

  return (
    <Helmet title={"Cart"}>
      <CommonSection title={"Your Cart"} />
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            {cartItems.length === 0 ? (
              <h5 className="text-center">Your cart is empty</h5>
            ) : (
              <div className="overflow-x-auto overflow-y-hidden relative border shadow-md sm:rounded-lg">
                <table className="w-full text-sm">
                  <thead className="uppercase">
                    <tr className="text-center">
                      <th scope="col" className="py-3 px-6">
                        Image
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Product Title
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Price
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Quantity
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody ref={animationParent}>
                    {cartItems.map((item) => (
                      <Tr key={item.id} item={item} />
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div className="mt-10 grid gap-y-3">
            <h6>
              Subtotal: $
              <span className="text-hHover md:text-2xl text-xl">
                {totalAmount}
              </span>
            </h6>
            <p>Taxes and shipping will calculate at checkout</p>
            <div className="flex gap-x-4">
              <button className="md:px-6 md:py-2 px-3 py-1 bg-bgRed text-white hover:bg-hColor transition duration-300 rounded-md md:text-[0.9rem] text-[0.8rem]">
                <Link to={"/foods"}>Continue Shopping</Link>
              </button>
              {totalAmount > 0 && (
                <button className="md:px-6 md:py-2 px-3 py-1 bg-bgRed text-white hover:bg-hColor transition duration-300 rounded-md md:text-[0.9rem] text-[0.8rem]">
                  <Link to={"/checkout"}>Proceed to checkout</Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
}

const Tr = ({ item }) => {
  const { id, image01, title, price, quantity } = item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <tr className="text-center border-b whitespace-nowrap">
      <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap w-20">
        <img src={image01} alt="" />
      </th>
      <td className="py-4 px-6">{title}</td>
      <td className="py-4 px-6">${price}</td>
      <td className="py-4 px-6">{quantity}px</td>
      <td className="py-4 px-6">
        <span
          className="flex items-center justify-center cursor-pointer hover:text-hHover transition duration-300"
          onClick={deleteItem}
        >
          <RiDeleteBinFill size={20} />
        </span>
      </td>
    </tr>
  );
};

export default Cart;
