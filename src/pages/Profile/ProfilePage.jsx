import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Profile from '../../components/profile/Profile'
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { slug } = useParams();

  return (
    <>
      <Header />
      <Profile />
      <Footer />
    </>
  )
}

export default ProfilePage
