import React, { useEffect, useState } from "react";
import ProductCard from "../../UI/Product-card/ProductCard";
import products from "../../../assets/data/products";

function HotPizza() {
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  return (
    <section className="pt-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 text-center mb-8">
          <h2 className="md:text-[2.3rem] text-xl">Hot Pizza</h2>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
          {hotPizza.map((item) => (
            <div key={item.id}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HotPizza;
