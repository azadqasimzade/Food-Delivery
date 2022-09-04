import React, { useState } from "react";
import CommonSection from "../components/UI/Common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { BsSearch } from "react-icons/bs";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import ReactPaginate from "react-paginate";

import products from "../assets/data/products";
import ProductCard from "../components/UI/Product-card/ProductCard";

function AllFoods() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products.filter((item) => {
    if (searchTerm.valueOf === "") return item;
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
      return item;
  });

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const [animationParent] = useAutoAnimate();

  return (
    <Helmet title={"All-Foods"}>
      <CommonSection title={"All-Foods"} />
      <section>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-5">
            <div className="flex items-center justify-between p-2 border border-footerBg rounded lg:w-1/2 w-full">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="outline-none px-2 py-1"
                placeholder="I'm looking for..."
              />
              <span>
                <BsSearch />
              </span>
            </div>
            <div className="text-end">
              <select className="px-2 py-3 border border-footerBg rounded outline-none lg:w-1/2 w-full">
                <option>Default</option>
                <option value={"ascending"}>Alphabetical, A-Z</option>
                <option value={"descending"}>Alphabetical, Z-Z</option>
                <option value={"high-price"}>High Price</option>
                <option value={"low-price"}>Low Price</option>
              </select>
            </div>
          </div>
          <div
            ref={animationParent}
            className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-10 gap-5"
          >
            {displayPage.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
          <div className="flex justify-center text-center mt-10">
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={<MdOutlineNavigateBefore size={24} />}
              nextLabel={<MdOutlineNavigateNext size={24} />}
              containerClassName="pagination"
              activeLinkClassName="paginationActive"
              disabledClassName="paginationDisabled"
            />
          </div>
        </div>
      </section>
    </Helmet>
  );
}

export default AllFoods;
