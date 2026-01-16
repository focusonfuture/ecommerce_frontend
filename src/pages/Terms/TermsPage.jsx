import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Preloader from '../../components/layout/Preloader'
import Terms from '../../components/terms/Terms'

const TermsPage = () => {
  return (
    <>
      <Preloader />
      <Header />
      <Terms />
      <Footer />
    </>
  )
}

export default TermsPage