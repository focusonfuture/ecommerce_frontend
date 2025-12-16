import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Preloader from '../../components/layout/Preloader'
import PrivacyPolicy from '../../components/privacy/PrivacyPolicy'

const PrivacyPolicyPage = () => {
  return (
    <>
      <Preloader />
      <Header />
      <PrivacyPolicy />
      <Footer />
    </>
  )
}

export default PrivacyPolicyPage