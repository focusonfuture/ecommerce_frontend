import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import ProductList from '../../components/productlist/ProductList'
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { slug } = useParams();

  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  )
}

export default ProductDetails
