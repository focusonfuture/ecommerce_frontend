import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import LoginComponent from "../../components/auth/LoginComponent";

const Login = () => {
  return (
    <>
      <Header />
      <LoginComponent />
      <Footer />
    </>
  );
};

export default Login;
