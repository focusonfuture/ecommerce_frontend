import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import About from "../pages/About/About";




const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

        {/* Product details route */}
        <Route path="/product/:slug" element={<ProductDetails />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
