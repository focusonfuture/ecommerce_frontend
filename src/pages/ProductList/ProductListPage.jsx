import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Preloader from "../../components/layout/Preloader";
import ProductList from "../../components/productlist/ProductList";

const ProductListPage = () => {
  return (
    <>
      <Preloader />
      <Header />
      <ProductList />
      <Footer />
    </>
  );
};

export default ProductListPage;
