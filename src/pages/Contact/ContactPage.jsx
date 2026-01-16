import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Preloader from '../../components/layout/Preloader'
import Contact from '../../components/contact/Contact'

const ContactPage = () => {
  return (
    <>
      <Preloader />
      <Header />
      <Contact />
      <Footer />
    </>
  )
}

export default ContactPage
