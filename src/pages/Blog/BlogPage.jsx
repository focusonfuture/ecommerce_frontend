import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Preloader from '../../components/layout/Preloader'
import Blog from '../../components/blog/Blog'

const BlogPage = () => {
  return (
    <>
      <Preloader />
      <Header />
      <Blog />
      <Footer />
    </>
  )
}

export default BlogPage
