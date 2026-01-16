import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import About from "../pages/About/About";
import ProductListPage from "../pages/ProductList/ProductListPage";
import WhishlistPage from "../pages/Whishlist/WhishlistPage";
import CartPage from "../pages/Cart/CartPage";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import MyOrdersPage from "../pages/MyOrders/MyOrdersPage";
import MyOrdersDetailsPage from "../pages/MyOrders/MyOrdersDetailsPage";
import BlogPage from "../pages/Blog/BlogPage";
import BlogDetailedPage from "../pages/Blog/BlogDetailedPage";
import ContactPage from "../pages/Contact/ContactPage";
import GalleryPage from "../pages/Gallery/GalleryPage";
import TermsPage from "../pages/Terms/TermsPage";
import PrivacyPolicyPage from "../pages/Privacy/PrivacyPolicyPage";
import ProtectedRoute from "../components/ProtectedRoute";
import ProfilePage from "../pages/Profile/ProfilePage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/products/productlist" element={<ProductListPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailedPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/profile/:slug" element={<ProfilePage />} />
        <Route path="/whishlist" element={<WhishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/my-orders" element={<MyOrdersPage />} />
        <Route path="/my-orders/:id" element={<MyOrdersDetailsPage />} />

        
        {/* Protected Routes */}

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
