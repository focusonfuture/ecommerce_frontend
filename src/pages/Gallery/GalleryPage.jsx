import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Preloader from '../../components/layout/Preloader'
import Gallery from '../../components/gallery/Gallery'

const GalleryPage = () => {
  return (
    <>
      <Preloader />
      <Header />
      <Gallery />
      <Footer />
    </>
  )
}

export default GalleryPage