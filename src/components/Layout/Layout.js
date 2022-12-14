import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routes from "../../routes/Routers";
import Carts from "../UI/Cart/Carts";

function Layout() {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <Header />
      {showCart && <Carts />}
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
