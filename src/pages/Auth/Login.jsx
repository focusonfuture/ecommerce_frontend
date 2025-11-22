import React from 'react'
import Preloader from '../../components/layout/Preloader'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import LoginComponent from '../../components/auth/LoginComponent'


const Login = () => {
    return (
        <>
            <Preloader />
            <Header />
            <LoginComponent />
            <Footer />
        </>
    )
}

export default Login