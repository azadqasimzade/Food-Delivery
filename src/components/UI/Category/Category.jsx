import React from "react";
import categoryImg1 from "../../../assets/images/category-01.png";
import categoryImg2 from "../../../assets/images/category-02.png";
import categoryImg3 from "../../../assets/images/category-03.png";
import categoryImg4 from "../../../assets/images/category-04.png";

const categoryData = [
  {
    title: "Fastfood",
    image: categoryImg1,
  },
  {
    title: "Pizza",
    image: categoryImg2,
  },
  {
    title: "Asian Food",
    image: categoryImg3,
  },
  {
    title: "Row meat",
    image: categoryImg4,
  },
];

function Category() {
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {categoryData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-x-5 bg-footerBg py-7 px-5 rounded-md cursor-pointer hover:-translate-y-4 transition duration-300"
          >
            <div>
              <img src={item.image} alt={item.title} />
            </div>
            <h6 className="md:text-base text-[0.9em]">{item.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
