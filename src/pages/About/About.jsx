import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Preloader from '../../components/layout/Preloader'
import About from '../../components/about/About'

const AboutPage = () => {
  return (
    <>
      <Preloader />
      <Header />
      <About />
      <Footer />
    </>
  )
}

export default AboutPage
