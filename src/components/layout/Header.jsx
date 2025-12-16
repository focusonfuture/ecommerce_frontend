import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../../utils/auth";



const Header = () => {

   const navigate = useNavigate();
   

  const handleLogout = () => {
    logout();
    navigate("/login");
  };


  useEffect(() => {
    // -------------------------------
    // 1. MENU HOVER + MOBILE TOGGLE
    // -------------------------------
    const mq = window.matchMedia("(min-width: 992px)");

    const menu = document.querySelector(".main-menu");
    if (menu) {
      const items = menu.querySelectorAll("ul > li");

      const clearHover = (li) => li.classList.remove("open");
      const setHover = (li) => li.classList.add("open");

      // Remove old handlers
      items.forEach((li) => {
        const submenu = li.querySelector("ul, .mega-menu");
        if (!submenu) return;

        const newLi = li.cloneNode(true);
        li.parentNode.replaceChild(newLi, li);
      });

      // Re-query after cloning
      const items2 = menu.querySelectorAll("ul > li");

      items2.forEach((li) => {
        const submenu = li.querySelector("ul, .mega-menu");
        if (!submenu) return;

        const link = li.querySelector("a");

        const onEnter = () => setHover(li);
        const onLeave = () => clearHover(li);
        const onClick = (e) => {
          if (!mq.matches) {
            e.preventDefault();
            const isOpen = li.classList.toggle("open");
            if (submenu) submenu.style.display = isOpen ? "block" : "none";
          }
        };

        li.addEventListener("mouseenter", onEnter);
        li.addEventListener("mouseleave", onLeave);
        if (link) link.addEventListener("click", onClick);

        if (!mq.matches && submenu) submenu.style.display = "none";

        li._menuHandlers = { onEnter, onLeave, onClick };
      });

      // Cleanup
      return () => {
        const cleanupItems = menu.querySelectorAll("ul > li");
        cleanupItems.forEach((li) => {
          const h = li._menuHandlers;
          if (h) {
            li.removeEventListener("mouseenter", h.onEnter);
            li.removeEventListener("mouseleave", h.onLeave);
            const link = li.querySelector("a");
            if (link) link.removeEventListener("click", h.onClick);
          }
        });
      };
    }
  }, []);

  // -------------------------------
  // 2. NICE-SELECT INITIALIZATION
  // -------------------------------
  useEffect(() => {
    setTimeout(() => {
      if (window.$ && window.$.fn && window.$.fn.niceSelect) {
        window.$("select").niceSelect();
      }
    }, 0);
  }, []);
  return (
    <>
      {/* header-start */}
      <header className="header d-blue-bg">
        {/* MOBILE MENU BUTTON - TOP RIGHT (ONLY MOBILE) */}
        <button
          type="button"
          className="header-mobile-menu-icon d-lg-none"
          onClick={() => {
            document.querySelector(".offcanvas__area").classList.add("show");
            document.querySelector(".body-overlay").classList.add("show");
          }}
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="header-top">
          <div className="container">
            <div className="header-inner">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-7">
                  <div className="header-inner-start">
                    <div className="header__currency border-right">
                      <div className="s-name">
                        <span>Language: </span>
                      </div>
                      <select>
                        <option>English</option>
                        <option>Deutsch</option>
                        <option>Français</option>
                        <option>Espanol</option>
                      </select>
                    </div>
                    <div className="header__lang border-right">
                      <div className="s-name">
                        <span>Currency: </span>
                      </div>
                      <select>
                        <option> USD</option>
                        <option>EUR</option>
                        <option>INR</option>
                        <option>BDT</option>
                        <option>BGD</option>
                      </select>
                    </div>
                    <div className="support d-none d-sm-block">
                      <p>
                        Need Help?{" "}
                        <a href="tel:+001123456789">+001 123 456 789</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-5 d-none d-lg-block">
                  <div className="header-inner-end text-md-end">
                    <div className="ovic-menu-wrapper">
                      <ul>
                        <li>
                          
                          <ul className="submenu">
                            <li>
                              <Link to="/about">About Us</Link>
                            </li>
                            <li>
                              <Link to="/terms">Terms & Conditions</Link>
                            </li>
                            <li>
                              <Link to="/privacy-policy">Privacy Policy</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/my-orders">My Orders</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                          <a href="faq.html">FAQs</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-mid">
          <div className="container">
            <div className="heade-mid-inner">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
                  <div className="header__info">
                    <div className="logo">
                      <a href="#" className="logo-image">
                        <img src="/assets/img/logo/logo1.svg" alt="logo" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4 d-none d-lg-block">
                  <div className="header__search">
                    <form action="#">
                      <div className="header__search-box">
                        <input
                          className="search-input"
                          type="text"
                          placeholder="I'm shopping for..."
                        />
                        <button className="button" type="submit">
                          <i className="far fa-search" />
                        </button>
                      </div>
                      <div className="header__search-cat">
                        <select>
                          <option>All Categories</option>
                          <option>Best Seller Products</option>
                          <option>Top 10 Offers</option>
                          <option>New Arrivals</option>
                          <option>Phones &amp; Tablets</option>
                          <option>Electronics &amp; Digital</option>
                          <option>Fashion &amp; Clothings</option>
                          <option>Jewelry &amp; Watches</option>
                          <option>Health &amp; Beauty</option>
                          <option>Sound &amp; Speakers</option>
                          <option>TV &amp; Audio</option>
                          <option>Computers</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-8 col-sm-8">
                  <div className="header-action">
                    
                     {/*  USER LOGIN / LOGOUT SWITCH */}
                    <div className="block-userlink">
                      {!isLoggedIn() ? (
                        <Link className="icon-link" to="/login">
                          <i className="flaticon-user" />
                          <span className="text">
                            <span className="sub">Sign Up</span>
                            My Account
                          </span>
                        </Link>
                      ) : (
                        <button
                          className="icon-link"
                          onClick={handleLogout}
                          style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                        >
                          <i className="flaticon-user" />
                          <span className="text">
                            <span className="sub">Sign Out</span>
                            My Account
                          </span>
                        </button>
                      )}
                    </div>

                    <div className="block-wishlist action">
                      <Link className="icon-link" to="/whishlist">
                        <i className="flaticon-heart" />
                        <span className="count">2</span>
                        <span className="text">
                          <span className="sub">Favorite</span>
                          My Wishlist
                        </span>
                      </Link>
                    </div>
                    <div className="block-cart action">
                      <a className="icon-link" href="#">
                        <i className="flaticon-shopping-bag" />
                        <span className="count">1</span>
                        <span className="text">
                          <span className="sub">Your Cart:</span>
                          $00.00{" "}
                        </span>
                      </a>
                      <div className="cart">
                        <div className="cart__mini">
                          <ul>
                            <li>
                              <div className="cart__title">
                                <h4>Your Cart</h4>
                                <span>(1 Item in Cart)</span>
                              </div>
                            </li>
                            <li>
                              <div className="cart__item d-flex justify-content-between align-items-center">
                                <div className="cart__inner d-flex">
                                  <div className="cart__thumb">
                                    <a href="product-details.html">
                                      <img
                                        src="/assets/img/cart/20.jpg"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="cart__details">
                                    <h6>
                                      <a href="product-details.html">
                                        {" "}
                                        Samsung C49J89: £875, Debenhams Plus
                                      </a>
                                    </h6>
                                    <div className="cart__price">
                                      <span>$255.00</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="cart__del">
                                  <a href="#">
                                    <i className="fal fa-times" />
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="cart__sub d-flex justify-content-between align-items-center">
                                <h6>Subtotal</h6>
                                <span className="cart__sub-total">$255.00</span>
                              </div>
                            </li>
                            <li>
                              <Link to="/cart" className="wc-cart mb-10">
                                View Cart
                              </Link>
                              <Link
                                to="/checkout"
                                className="wc-checkout mb-10"
                              >
                                Checkout
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__bottom">
          <div className="container">
            <div className="row g-0 align-items-center">
              <div className="col-lg-3">
                <div className="cat__menu-wrapper side-border d-none d-lg-block">
                  <div className="cat-toggle">
                    <button
                      type="button"
                      className="cat-toggle-btn cat-toggle-btn-1"
                    >
                      <i className="fal fa-bars" /> Shop by department
                    </button>
                    <div className="cat__menu">
                      <nav id="mobile-menu" style={{ display: "block" }}>
                        <ul>
                          <li>
                            <a href="shop.html">
                              All Categories <i className="far fa-angle-down" />
                            </a>
                            <ul className="mega-menu">
                              <li>
                                <a href="shop.html">Shop Pages</a>
                                <ul className="mega-item">
                                  <li>
                                    <a href="product-details.html">
                                      Standard SHop Page
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Shop Right Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Shop Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Shop 3 Column
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Shop 4 Column
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="shop.html">Product Pages</a>
                                <ul className="mega-item">
                                  <li>
                                    <a href="product-details.html">
                                      Product Details
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Product V2
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Product V3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Varriable Product
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      External Product
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="shop.html">Other Pages</a>
                                <ul className="mega-item">
                                  <li>
                                    <a href="product-details.html">wishlist</a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Shopping Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">Checkout</a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">Login</a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">Register</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="shop.html">Phone &amp; Tablets</a>
                                <ul className="mega-item">
                                  <li>
                                    <a href="product-details.html">
                                      Catagory 1
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Catagory 2
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Catagory 3
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="shop.html">Phone &amp; Tablets</a>
                                <ul className="mega-item">
                                  <li>
                                    <a href="product-details.html">
                                      Catagory 1
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Catagory 2
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Catagory 3
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="shop.html">
                              Phone and Electronics{" "}
                              <i className="far fa-angle-down" />
                            </a>
                            <ul className="mega-menu mega-menu-2">
                              <li>
                                <a href="shop.html">Shop Pages</a>
                                <ul className="mega-item">
                                  <li>
                                    <a href="product-details.html">
                                      Standard SHop Page
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Shop Right Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Shop Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Shop 3 Column
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Shop 4 Column
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="shop.html">Product Pages</a>
                                <ul className="mega-item">
                                  <li>
                                    <a href="product-details.html">
                                      Product Details
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Product V2
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Product V3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Varriable Product
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      External Product
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="shop.html">Other Pages</a>
                                <ul className="mega-item">
                                  <li>
                                    <a href="product-details.html">wishlist</a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Shopping Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">Checkout</a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">Login</a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">Register</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="shop.html">Phone &amp; Tablets</a>
                                <ul className="mega-item">
                                  <li>
                                    <a href="product-details.html">
                                      Catagory 1
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Catagory 2
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Catagory 3
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="shop.html">Phone &amp; Tablets</a>
                                <ul className="mega-item">
                                  <li>
                                    <a href="product-details.html">
                                      Catagory 1
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Catagory 2
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Catagory 3
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="shop.html">
                              Best Seller Products
                              <span className="cat-label">hot!</span>
                              <i className="far fa-angle-down" />
                            </a>
                            <ul className="mega-menu">
                              <li>
                                <a href="shop.html">Shop Pages</a>
                                <ul className="mega-item">
                                  <li>
                                    <a href="product-details.html">
                                      Standard SHop Page
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Shop Right Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Shop Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Shop 3 Column
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Shop 4 Column
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="shop.html">Product Pages</a>
                                <ul className="mega-item">
                                  <li>
                                    <a href="product-details.html">
                                      Product Details
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Product V2
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Product V3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Varriable Product
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      External Product
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="shop.html">Other Pages</a>
                                <ul className="mega-item">
                                  <li>
                                    <a href="product-details.html">wishlist</a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Shopping Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">Checkout</a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">Login</a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">Register</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="shop.html">Phone &amp; Tablets</a>
                                <ul className="mega-item">
                                  <li>
                                    <a href="product-details.html">
                                      Catagory 1
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Catagory 2
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Catagory 3
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="shop.html">Phone &amp; Tablets</a>
                                <ul className="mega-item">
                                  <li>
                                    <a href="product-details.html">
                                      Catagory 1
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Catagory 2
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Catagory 3
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="shop.html">
                              Top 10 Offers
                              <span className="cat-label green">new!</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop.html">
                              New Arrivals <i className="far fa-angle-down" />
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="shop.html">Home Appliances</a>
                              </li>
                              <li>
                                <a href="shop.html">Technology</a>
                                <ul className="submenu">
                                  <li>
                                    <a href="shop.html">Storage Devices</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Monitors</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Laptops</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="shop.html">Office Equipments</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="shop.html">TV &amp; Audio</a>
                          </li>
                          <li>
                            <a href="shop.html">Electronics &amp; Digital</a>
                          </li>
                          <li className="d-laptop-none">
                            <a href="shop.html">Fashion &amp; Clothings</a>
                          </li>
                          <li className="d-laptop-none">
                            <a href="shop.html">Jewelry &amp; Watches</a>
                          </li>
                          <li>
                            <a href="shop.html">Health &amp; Beauty</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-3">
                <div className="header__bottom-left d-flex d-xl-block align-items-center">
                  <div className="side-menu d-lg-none mr-20">
                    <button
                      type="button"
                      className="side-menu-btn offcanvas-toggle-btn"
                    >
                      <i className="fas fa-bars" />
                    </button>
                  </div>
                  <div className="main-menu d-none d-lg-block">
                    <nav>
                      <ul>
                        <li>
                          <Link to="/" className="active">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="/gallery">Gallery</Link>
                        </li>

                        {/* <li>
                                                    <a href="blog.html">
                                                        Blog <i className="far fa-angle-down" />
                                                    </a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <a href="blog.html">Blog</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-details.html">Blog Details</a>
                                                        </li>
                                                    </ul>
                                                </li>  */}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-9">
                <div className="shopeing-text text-sm-end">
                  <p>Spend $120 more and get free shipping!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header-end */}
      {/* offcanvas area start */}
      {/* offcanvas area start */}
      <div className="offcanvas__area">
        <div className="offcanvas__wrapper">
          <div className="offcanvas__close">
            <button
              className="offcanvas__close-btn"
              onClick={() => {
                document
                  .querySelector(".offcanvas__area")
                  .classList.remove("show");
                document
                  .querySelector(".body-overlay")
                  .classList.remove("show");
              }}
            >
              <i className="fal fa-times" />
            </button>
          </div>

          <div className="offcanvas__content">
            <div className="offcanvas__logo mb-40">
              <a href="index.html">
                <img src="/assets/img/logo/logo-white.png" alt="logo" />
              </a>
            </div>

            <div className="offcanvas__search mb-25">
              <form action="#">
                <input type="text" placeholder="What are you searching for?" />
                <button type="submit">
                  <i className="far fa-search" />
                </button>
              </form>
            </div>

            <div className="mobile-menu fix">
              <ul className="mobile-nav">
                <li>
                  <Link to="/login">Login / Register</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/whishlist">Wishlist</Link>
                </li>
                <li>
                  <Link to="/my-orders">My Orders</Link>
                </li>
                <li>
                  <Link to="/terms">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <a href="faq.html">FAQ</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="offcanvas__action"></div>
          </div>
        </div>
      </div>
      <div className="body-overlay"></div>
      {/* offcanvas area end */}

      {/* offcanvas area end */}
      <div className="body-overlay" />
      {/* offcanvas area end */}
    </>
  );
};

export default Header;
