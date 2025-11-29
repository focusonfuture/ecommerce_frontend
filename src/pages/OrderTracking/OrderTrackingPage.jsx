import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Preloader from "../../components/layout/Preloader";
import OrderTracking from "../../components/ordertracking/OrderTracking";

const OrderTrackingPage = () => {
  return (
    <>
    <Preloader />
      <Header />
      <OrderTracking />
      <Footer />
    </>
  );
};

export default OrderTrackingPage;
