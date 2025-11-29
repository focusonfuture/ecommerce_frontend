import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Preloader from "../../components/layout/Preloader";
import MyOrdersDetails from "../../components/orders/MyOrdersDetails";

const MyOrdersDetailsPage  = () => {
  return (
    <>
      <Preloader />
      <Header />
      <MyOrdersDetails  />
      <Footer />
    </>
  );
};

export default MyOrdersDetailsPage ;
