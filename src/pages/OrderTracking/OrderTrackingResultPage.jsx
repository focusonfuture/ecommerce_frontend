import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Preloader from "../../components/layout/Preloader";
import OrderTrackingResult from "../../components/ordertracking/OrderTrackingResult";

const OrderTrackingResultPage  = () => {
  return (
    <>
    <Preloader />
      <Header />
      <OrderTrackingResult />
      <Footer />
    </>
  );
};

export default OrderTrackingResultPage;
