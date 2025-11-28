import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import About from "../pages/About/About";
import ProductListPage  from "../pages/ProductList/ProductListPage";
import WhishlistPage from "../pages/Whishlist/WhishlistPage";




const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

            {/* Login & Register route */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

             {/* Home route */}
               <Route path="/" element={<Home />} />

             {/* About route */}
               <Route path="/about" element={<About />} />

             {/* Product details route */}
               <Route path="/product/:slug" element={<ProductDetails />} />

             {/* Product list route */}
               <Route path="/products/productlist" element={<ProductListPage />} />

<Route path="/whishlist" element={<WhishlistPage />} />

        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
