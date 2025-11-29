import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Preloader from "../../components/layout/Preloader";
import MyOrders from "../../components/myorders/MyOrders";

const MyOrdersPage  = () => {
  return (
    <>
      <Preloader />
      <Header />
      <MyOrders />
      <Footer />
    </>
  );
};

export default MyOrdersPage ;
