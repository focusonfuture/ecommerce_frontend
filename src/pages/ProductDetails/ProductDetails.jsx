import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Productdetails from '../../components/productdetails/Productdetails'
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { slug } = useParams();

  return (
    <>
      <Header />
      <Productdetails slug={slug} />
      <Footer />
    </>
  )
}

export default ProductDetails
