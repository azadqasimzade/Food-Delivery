import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/Common-section/CommonSection";
import ProductCard from "../components/UI/Product-card/ProductCard";
import { cartActions } from "../Store/cartSlice";

function FoodDetails() {
  const [tab, setTab] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((product) => product.id === id);

  const { title, price, category, desc, image01, image02, image03 } = product;

  const [previewImg, setPreviewImg] = useState(product.image01);

  const realetedProduct = products.filter((item) => category === item.category);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [product]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title={"Product-details"}>
      <CommonSection title={title} />
      <section>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <div className="flex md:flex-col flex-row gap-y-3">
              <div
                onClick={() => setPreviewImg(image01)}
                className="w-1/3 cursor-pointer"
              >
                <img src={image01} alt="" />
              </div>
              <div
                onClick={() => setPreviewImg(image02)}
                className="w-1/3 cursor-pointer"
              >
                <img src={image02} alt="" />
              </div>
              <div
                onClick={() => setPreviewImg(image03)}
                className="w-1/3 cursor-pointer"
              >
                <img src={image03} alt="" />
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <img src={previewImg} alt="" />
              </div>
            </div>
            <div className="lg:pl-10 md:col-span-2 md:mt-10">
              <div>
                <h2 className="mb-4 md:text-[2.3rem] text-xl">{title}</h2>
                <p className="text-hHover md:text-base text-[0.8rem] font-semibold flex items-center gap-x-3">
                  Price:{" "}
                  <span className="md:text-[2rem] text-2xl">${price}</span>
                </p>
                <p className="mb-8 md:text-base text-[0.8rem] text-hColor flex items-center gap-x-3">
                  Category:{" "}
                  <span className="py-1 px-2 md:text-base text-[0.8rem] bg-footerBg rounded text-lg">
                    {category}
                  </span>
                </p>
                <button
                  onClick={addItem}
                  className="md:px-6 md:py-2 px-3 py-1 bg-bgRed text-white rounded-md md:text-[0.9rem] text-[0.8rem]"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-20">
            <div className="flex items-center gap-x-6 py-2 border-b border-footerBg">
              <h6
                onClick={() => setTab("desc")}
                className={`${
                  tab === "desc" && "tab_active"
                } cursor-pointer  md:text-base text-[0.9rem]`}
              >
                Description
              </h6>
              <h6
                onClick={() => setTab("rev")}
                className={`${
                  tab === "rev" && "tab_active"
                } cursor-pointer md:text-base text-[0.9rem]`}
              >
                Review
              </h6>
            </div>
            {tab === "desc" ? (
              <div className="py-8">
                <p className="leading-7 text-hColor md:text-base text-[0.8rem]">
                  {desc}
                </p>
              </div>
            ) : (
              <div className="my-10">
                <div className="mb-5">
                  <p className="font-semibold text-hColor md:text-base text-[0.8rem]">
                    Jhon Doe
                  </p>
                  <p className="mt-1 md:text-base text-[0.8rem]">
                    jhon1@gmail.com
                  </p>
                  <p className="text-hColor mt-2 md:text-base text-[0.8rem]">
                    great product
                  </p>
                </div>
                <div className="mb-5">
                  <p className="font-semibold text-hColor md:text-base text-[0.8rem]">
                    Jhon Doe
                  </p>
                  <p className="mt-1 md:text-base text-[0.8rem]">
                    jhon1@gmail.com
                  </p>
                  <p className="text-hColor mt-2 md:text-base text-[0.8rem]">
                    great product
                  </p>
                </div>
                <div className="mb-5">
                  <p className="font-semibold text-hColor md:text-base text-[0.8rem]">
                    Jhon Doe
                  </p>
                  <p className="mt-1 md:text-base text-[0.8rem]">
                    jhon1@gmail.com
                  </p>
                  <p className="text-hColor mt-2 md:text-base text-[0.8rem]">
                    great product
                  </p>
                </div>
                <form
                  onSubmit={submitHandler}
                  className="md:w-3/5 w-full m-auto bg-footerBg p-5 rounded"
                  noValidate
                >
                  <div className="mb-7">
                    <input
                      value={enteredName}
                      onChange={(e) => setEnteredName(e.target.value)}
                      required
                      type="text"
                      className="w-full bg-transparent py-2 px-5 border-b border-hColor outline-none md:text-base text-[0.8rem]"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-7">
                    <input
                      value={enteredEmail}
                      onChange={(e) => setEnteredEmail(e.target.value)}
                      required
                      type="text"
                      className="w-full bg-transparent py-2 px-5 border-b border-hColor outline-none md:text-base text-[0.8rem]"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-7">
                    <textarea
                      value={reviewMsg}
                      onChange={(e) => setReviewMsg(e.target.value)}
                      required
                      type="text"
                      className="w-full bg-transparent py-2 px-5 border-b border-hColor outline-none md:text-base text-[0.8rem]"
                      rows={5}
                      placeholder="Write your review"
                    />
                  </div>
                  <button
                    type="submit"
                    className="md:px-6 md:py-2 px-3 py-1 bg-bgRed text-white rounded-md md:text-[0.9rem] text-[0.8rem]"
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1">
            <h2 className="md:text-[2.3rem] text-xl">You might also like</h2>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-10 gap-5">
            {realetedProduct.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </Helmet>
  );
}

export default FoodDetails;
