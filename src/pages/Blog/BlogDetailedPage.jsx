import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Preloader from '../../components/layout/Preloader'
import BlogDetailed from '../../components/blog/BlogDetailed'

const BlogDetailedPage = () => {
  return (
    <>
      <Preloader />
      <Header />
      <BlogDetailed />
      <Footer />
    </>
  )
}

export default BlogDetailedPage