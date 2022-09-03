import React from "react";
import Helmet from "../components/Helmet/Helmet";
import Category from "../components/UI/Category/Category";
import Order from "../components/Home/Components/Order";
import Serve from "../components/Home/Components/Serve";
import PopularFoods from "../components/Home/Components/PopularFoods";
import Tasty from "../components/Home/Components/Tasty";
import HotPizza from "../components/Home/Components/HotPizza";
import Testimonial from "../components/Home/Components/Testimonial";

function Home() {
  return (
    <Helmet title="Home">
      <Order />
      <section className="pt-0">
        <Category />
      </section>
      <Serve />
      <PopularFoods />
      <Tasty />
      <HotPizza />
      <Testimonial />
    </Helmet>
  );
}

export default Home;
