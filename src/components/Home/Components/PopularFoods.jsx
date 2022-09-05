import React, { useEffect, useState } from "react";
import foodCategoryImg01 from "../../../assets/images/hamburger.png";
import foodCategoryImg02 from "../../../assets/images/pizza.png";
import foodCategoryImg03 from "../../../assets/images/bread.png";
import products from "../../../assets/data/products";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import ProductCard from "../../UI/Product-card/ProductCard";

function PopularFoods() {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [animationParent] = useAutoAnimate();

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 text-center">
          <h2 className="md:text-[2.3rem] text-xl">Popular Foods</h2>
        </div>
        <div className="grid grid-cols-1">
          <div className="bg-bgRed text-center mt-8 py-5 px-0 rounded-lg flex items-center justify-center md:gap-x-6 gap-x-1">
            <button
              onClick={() => setCategory("ALL")}
              className={`md:py-2 md:px-5 py-1 px-3 text-white md:text-base text-[0.8rem] hover:bg-white hover:text-hHover rounded transition duration-300 flex items-center gap-x-3 ${
                category === "ALL" ? "foodBtnActive" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={() => setCategory("BURGER")}
              className={`md:py-2 md:px-5 py-1 px-3 text-white md:text-base text-[0.8rem] hover:bg-white hover:text-hHover rounded transition duration-300 flex items-center gap-x-3 ${
                category === "BURGER" ? "foodBtnActive" : ""
              }`}
            >
              <img src={foodCategoryImg01} className="w-5 h-5" alt="burger" />
              Burger
            </button>
            <button
              onClick={() => setCategory("PIZZA")}
              className={`md:py-2 md:px-5 py-1 px-3 text-white md:text-base text-[0.8rem] hover:bg-white hover:text-hHover rounded transition duration-300 flex items-center gap-x-3 ${
                category === "PIZZA" ? "foodBtnActive" : ""
              }`}
            >
              <img src={foodCategoryImg02} className="w-5 h-5" alt="pizza" />
              Pizza
            </button>
            <button
              onClick={() => setCategory("BREAD")}
              className={`md:py-2 md:px-5 py-1 px-3 text-white md:text-base text-[0.8rem] hover:bg-white hover:text-hHover rounded transition duration-300 flex items-center gap-x-3 ${
                category === "BREAD" ? "foodBtnActive" : ""
              }`}
            >
              <img src={foodCategoryImg03} className="w-5 h-5" alt="bread" />
              Bread
            </button>
          </div>
        </div>
        <div
          ref={animationParent}
          className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-10 gap-5"
        >
          {allProducts.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularFoods;
