import React, { useState } from "react";
import { useSelector } from "react-redux";
import CommonSection from "../components/UI/Common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

function Checkout() {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];
  const { totalAmount } = useSelector((state) => state.cart);
  const shippingCost = 30;

  const cartTotalAmount = totalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();

    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return (
    <Helmet title={"Checkout"}>
      <CommonSection title={"Checkout"} />
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="md:col-span-8 col-span-12">
              <h6 className="md:text-base text-[0.9rem] mb-5">
                Shipping Address
              </h6>
              <form onSubmit={submitHandler} className="grid gap-y-4">
                <div>
                  <input
                    value={enterName}
                    onChange={(e) => setEnterName(e.target.value)}
                    required
                    type="text"
                    className="w-full bg-transparent py-2 px-5 border-b border-hColor/30 outline-none md:text-base text-[0.8rem]"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <input
                    value={enterEmail}
                    onChange={(e) => setEnterEmail(e.target.value)}
                    required
                    type="email"
                    className="w-full bg-transparent py-2 px-5 border-b border-hColor/30 outline-none md:text-base text-[0.8rem]"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <input
                    value={enterNumber}
                    onChange={(e) => setEnterNumber(e.target.value)}
                    required
                    type="number"
                    className="w-full bg-transparent py-2 px-5 border-b border-hColor/30 outline-none md:text-base text-[0.8rem]"
                    placeholder="Phone number"
                  />
                </div>
                <div>
                  <input
                    value={enterCountry}
                    onChange={(e) => setEnterCountry(e.target.value)}
                    required
                    type="text"
                    className="w-full bg-transparent py-2 px-5 border-b border-hColor/30 outline-none md:text-base text-[0.8rem]"
                    placeholder="Country"
                  />
                </div>
                <div>
                  <input
                    value={enterCity}
                    onChange={(e) => setEnterCity(e.target.value)}
                    required
                    type="text"
                    className="w-full bg-transparent py-2 px-5 border-b border-hColor/30 outline-none md:text-base text-[0.8rem]"
                    placeholder="City"
                  />
                </div>
                <div>
                  <input
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    required
                    type="number"
                    className="w-full bg-transparent py-2 px-5 border-b border-hColor/30 outline-none md:text-base text-[0.8rem]"
                    placeholder="Postal code"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="md:px-6 md:py-2 px-3 py-1 bg-bgRed text-white hover:bg-hColor transition duration-300 rounded-md md:text-[0.9rem] text-[0.8rem]"
                  >
                    Payment
                  </button>
                </div>
              </form>
            </div>
            <div className="md:col-span-4 col-span-12">
              <div className="flex gap-y-3 flex-col bg-footerBg p-7 rounded">
                <h6 className="flex items-center justify-between md:text-base text-[0.9rem]">
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6 className="flex items-center justify-between md:text-base text-[0.9rem]">
                  Shipping: <span>${shippingCost}</span>
                </h6>
                <div className="border-t border-hColor/50 pt-7">
                  <h5 className="flex items-center justify-between md:text-base font-semibold text-[0.9rem]">
                    Total: <span>${cartTotalAmount}</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
}

export default Checkout;
