import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Preloader from "../../components/layout/Preloader";
import Whishlist from "../../components/whishlist/Whishlist";

const WhishlistPage = () => {
  return (
    <>
      <Preloader />
      <Header />
      <Whishlist />
      <Footer />
    </>
  );
};

export default WhishlistPage;
