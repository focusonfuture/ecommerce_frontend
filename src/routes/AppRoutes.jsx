import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import About from "../pages/About/About";
import ProductListPage  from "../pages/ProductList/ProductListPage";
import WhishlistPage from "../pages/Whishlist/WhishlistPage";
import CartPage from "../pages/Cart/CartPage";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import MyOrdersPage from "../pages/MyOrders/MyOrdersPage";
import MyOrdersDetailsPage from "../pages/MyOrders/MyOrdersDetailsPage";
import BlogPage from "../pages/Blog/BlogPage";
import BlogDetailedPage from "../pages/Blog/BlogDetailedPage";
import ContactPage from "../pages/Contact/ContactPage";





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
               
              {/* Whishlist route */}
                <Route path="/whishlist" element={<WhishlistPage />} />

              {/* Cart route */}
                <Route path="/cart" element={<CartPage />} />

              {/* Checkout route */}
                <Route path="/checkout" element={<CheckoutPage />} />
              
              {/* My Orders route */}
                <Route path="/my-orders" element={<MyOrdersPage />} />

              {/* My Orders Details route */}
                <Route path="/my-orders/:id" element={<MyOrdersDetailsPage />} />

              {/* Blog route */}
                <Route path="/blog" element={<BlogPage />} />

              {/* Blog Detailed route */}
                <Route path="/blog/:id" element={<BlogDetailedPage />} />

                <Route path="/contact" element={<ContactPage />} />
   
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
