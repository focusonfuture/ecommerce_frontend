import React, { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    // Apply data-background attributes as inline background-image styles
    try {
      document.querySelectorAll("[data-background]").forEach((el) => {
        const bg = el.getAttribute("data-background");
        if (bg) {
          el.style.backgroundImage = `url(${bg})`;
          el.style.backgroundSize = "cover";
          el.style.backgroundPosition = "center center";
        }
      });

      // Add standard swiper pagination class to allow default styles
      const pag = document.querySelector(".main-slider-paginations");
      if (pag && !pag.classList.contains("swiper-pagination")) {
        pag.classList.add("swiper-pagination");
      }

      // Initialize Swiper if the global is available (scripts from index.html)
      const SwiperCtor =
        window.Swiper ||
        (typeof require !== "undefined" && require("swiper").default);
      if (SwiperCtor) {
        // Helper to avoid double-initialization
        const initSwiperOnce = (selector, options) => {
          const el = document.querySelector(selector);
          if (!el) return null;
          if (el.dataset.swiperInited) return null;
          try {
            const inst = new SwiperCtor(selector, options);
            el.dataset.swiperInited = "1";
            return inst;
          } catch (e) {
            return null;
          }
        };

        // Main slider: autoplay enabled
        initSwiperOnce(".slider__active", {
          loop: true,
          pagination: {
            el: ".main-slider-paginations",
            clickable: true,
          },
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          effect: "slide",
        });

        // Product slider (top deals)
        initSwiperOnce(".product-slider", {
          slidesPerView: 4,
          spaceBetween: 20,
          navigation: {
            nextEl: ".bs-button-next",
            prevEl: ".bs-button-prev",
          },
          breakpoints: {
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          },
        });
      }
    } catch (err) {
      // defensive: if DOM isn't ready or script not present, nothing fatal
      // console.warn('Slider init failed', err)
    }
  }, []);

  //  PRODUCT DATA
  const products = [
    {
      id: 1,
      name: "Epple iPad Pro 10.5-inch Cellular 64G",
      price: "$105-$110",
      image: "assets/img/product/tp-1.jpg",
      discount: "-15%",
    },
    {
      id: 2,
      name: "Men Size Yellow Basketball Jerseys",
      price: "$105-$150",
      image: "assets/img/product/tp-2.jpg",
    },
    {
      id: 3,
      name: "Xbox Wireless Game Controller Pink",
      price: "$200-$280",
      image: "assets/img/product/tp-3.jpg",
      discount: "-9%",
    },
    {
      id: 4,
      name: "APPO R11s 64GB Dual 20MP Cameras",
      price: "$150.00-$270.00",
      image: "assets/img/product/tp-7.jpg",
    },
    {
      id: 5,
      name: "G951s Pink Stereo Gaming Headset",
      price: "$120.00-$210.00",
      image: "assets/img/product/tp-10.jpg",
    },
    {
      id: 6,
      name: "Epple iPhone 11 Pro Max 64GB Gold",
      price: "$120.00-$140.00",
      image: "assets/img/product/tp-9.jpg",
    },
  ];

  //  CATEGORIES DATA
  const categories = [
    {
      id: 1,
      name: "Decor & Furniture",
      image: "assets/img/categorie/cat-1.jpg",
      count: 7,
    },
    {
      id: 2,
      name: "Smart Phones",
      image: "assets/img/categorie/cat-2.jpg",
      count: 12,
    },
    {
      id: 3,
      name: "Fashion & Clothing",
      image: "assets/img/categorie/cat-3.jpg",
      count: 5,
    },
    {
      id: 4,
      name: "Home Kitchen",
      image: "assets/img/categorie/cat-4.jpg",
      count: 9,
    },
    {
      id: 5,
      name: "Camera & Photos",
      image: "assets/img/categorie/cat-5.jpg",
      count: 7,
    },
    {
      id: 6,
      name: "Speaker & Audio",
      image: "assets/img/categorie/cat-6.jpg",
      count: 15,
    },
  ];

  //  FEATURE PRODUCTS DATA
  const featureProducts = [
    {
      id: 1,
      image: "assets/img/features-product/fpb-1.jpg",
      name: "APPO R11s 64GB Dual 20MP Cameras",
      price: "$307.00",
      oldPrice: "$110",
      discount: "-15%",
      progress: 20,
      sold: "370/1225",
    },
    {
      id: 2,
      image: "assets/img/features-product/fpb-2.jpg",
      name: "Redmi Note 10 128GB International Model",
      price: "$280.00",
      oldPrice: "$314",
      discount: null,
      progress: 80,
      sold: "1000/1200",
    },
  ];

  // LEFT BIG PRODUCT
  const leftFeature = {
    id: 1,
    image: "assets/img/features-product/fpsm-1.jpg",
    name: "Samsang Galaxy A70 128GB Dual-SIM",
    price: "$307.00",
    oldPrice: "$110",
    discount: "-15%",
  };

  // RIGHT SMALL PRODUCTS (GRID 2x2)
  const rightFeatures = [
    {
      id: 1,
      image: "assets/img/features-product/fp-1.jpg",
      name: "Epple Watch SE Gold Aluminum",
      price: "$307.00",
      oldPrice: "$110",
      discount: "-15%",
    },
    {
      id: 2,
      image: "assets/img/features-product/fp-2.jpg",
      name: "G951s Pink Stereo Gaming Headset",
      price: "$210.00",
      oldPrice: "$110",
      discount: "-5%",
    },
    {
      id: 3,
      image: "assets/img/features-product/fp-3.jpg",
      name: "Solo3 Wireless On-Ear Headphones",
      price: "$160.00",
      oldPrice: "$110",
      discount: "-25%",
    },
    {
      id: 4,
      image: "assets/img/features-product/fp-4.jpg",
      name: "Men’s Short-Sleeve Pocket Oxford Shirt",
      price: "$280.00",
      oldPrice: "$110",
      discount: null,
    },
  ];

  return (
    <main>
      {/* slider-area-start */}
      <div className="slider-area light-bg-s pt-60">
        <div className="container custom-conatiner">
          <div className="row">
            {/* LEFT SLIDER */}
            <div className="col-xl-7">
              <div className="swiper-container slider__active pb-30">
                <div className="slider-wrapper swiper-wrapper">
                  {/* Slide 1 */}
                  <div
                    className="single-slider swiper-slide b-radius-2 slider-height-2 d-flex align-items-center"
                    data-background="assets/img/slider/02-slide-1.jpg"
                  >
                    <div className="slider-content slider-content-2">
                      <h2
                        data-animation="fadeInLeft"
                        data-delay="1.7s"
                        className="pt-15 slider-title pb-5"
                      >
                        Gaming Headset
                        <br /> Brilliant Lighting Effect
                      </h2>
                      <p
                        className="pr-20 slider_text"
                        data-animation="fadeInLeft"
                        data-delay="1.9s"
                      >
                        Discount 40% On Products & Free Shipping
                      </p>
                      <div className="slider-bottom-btn mt-65">
                        <a
                          data-animation="fadeInUp"
                          data-delay="1.15s"
                          href="shop.html"
                          className="st-btn-border b-radius-2"
                        >
                          Discover now
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2 */}
                  <div
                    className="single-slider swiper-slide b-radius-2 slider-height-2 d-flex align-items-center"
                    data-background="assets/img/slider/02-slide-2.jpg"
                  >
                    <div className="slider-content slider-content-2">
                      <h2
                        data-animation="fadeInLeft"
                        data-delay="1.5s"
                        className="pt-15 slider-title pb-5"
                      >
                        SALE 20% OFF
                        <br /> SAMSUNG GALAXY BUDS
                      </h2>
                      <p
                        className="pr-20 slider_text"
                        data-animation="fadeInLeft"
                        data-delay="1.7s"
                      >
                        Discount 30% On Products & Free Shipping
                      </p>
                      <div className="slider-bottom-btn mt-65">
                        <a
                          data-animation="fadeInUp"
                          data-delay="1.9s"
                          href="shop.html"
                          className="st-btn-border b-radius-2"
                        >
                          Discover now
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Slide 3 */}
                  <div
                    className="single-slider swiper-slide b-radius-2 slider-height-2 d-flex align-items-center"
                    data-background="assets/img/slider/02-slide-3.jpg"
                  >
                    <div className="slider-content slider-content-2">
                      <h2
                        data-animation="fadeInLeft"
                        data-delay="1.5s"
                        className="pt-15 slider-title pb-5"
                      >
                        Sport Edition
                        <br /> Red Special Edition
                      </h2>
                      <p
                        className="pr-20 slider_text"
                        data-animation="fadeInLeft"
                        data-delay="1.8s"
                      >
                        Wireless Connection With TV, Computer, Laptop...
                      </p>
                      <div className="slider-bottom-btn mt-65">
                        <a
                          data-animation="fadeInUp"
                          data-delay="1.10s"
                          href="shop.html"
                          className="st-btn-border b-radius-2"
                        >
                          Discover now
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="main-slider-paginations"></div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE BANNERS */}
            <div className="col-xl-5">
              <div className="row">
                {/* Banner 1 */}
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="banner__item p-relative w-img mb-30">
                    <div className="banner__img b-radius-2">
                      <a href="product-details.html">
                        <img src="assets/img/banner/banner-10.jpg" alt="" />
                      </a>
                    </div>
                    <div className="banner__content banner__content-2">
                      <h6>
                        <a href="product-details.html">
                          Canyon <br /> Star Raider
                        </a>
                      </h6>
                      <p>Headphone & Audio</p>
                    </div>
                  </div>
                </div>

                {/* Banner 2 */}
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="banner__item p-relative w-img mb-30">
                    <div className="banner__img b-radius-2">
                      <a href="product-details.html">
                        <img src="assets/img/banner/banner-11.jpg" alt="" />
                      </a>
                    </div>
                    <div className="banner__content banner__content-2">
                      <h6>
                        <a href="product-details.html">
                          Phone <br /> Galaxy S20
                        </a>
                      </h6>
                      <p>Cellphone & Tablets</p>
                    </div>
                  </div>
                </div>

                {/* Banner 3 */}
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="banner__item p-relative w-img mb-30">
                    <div className="banner__img b-radius-2">
                      <a href="product-details.html">
                        <img src="assets/img/banner/banner-13.jpg" alt="" />
                      </a>
                    </div>
                    <div className="banner__content banner__content-2">
                      <h6>
                        <a href="product-details.html">
                          Galaxy <br /> Buds Plus
                        </a>
                      </h6>
                      <p>Headphone & Audio</p>
                    </div>
                  </div>
                </div>

                {/* Banner 4 (FIXED col-md-6 typo) */}
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="banner__item p-relative w-img mb-30">
                    <div className="banner__img b-radius-2">
                      <a href="product-details.html">
                        <img src="assets/img/banner/banner-12.jpg" alt="" />
                      </a>
                    </div>
                    <div className="banner__content banner__content-2">
                      <h6>
                        <a href="product-details.html">
                          Chair <br /> Swoon Lounge
                        </a>
                      </h6>
                      <p>Home Furniture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* slider-area-end */}

      {/* trending-product-area-start */}
      <section className="trending-product-area light-bg-s pt-25 pb-15">
        <div className="container custom-conatiner">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__head d-flex justify-content-between mb-30">
                <div className="section__title section__title-2">
                  <h5 className="st-titile">Hot Trending Products</h5>
                </div>
                <div className="button-wrap button-wrap-2">
                  <a href="product.html">
                    See All Products <i className="fal fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {products.map((item) => (
              <div
                className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2"
                key={item.id}
              >
                <div className="product__item product__item-2 b-radius-2 mb-20">
                  <div className="product__thumb fix">
                    <div className="product-image w-img">
                      <a href="product-details.html">
                        <img src={item.image} alt={item.name} />
                      </a>
                    </div>

                    {item.discount && (
                      <div className="product__offer">
                        <span className="discount">{item.discount}</span>
                      </div>
                    )}

                    <div className="product-action product-action-2">
                      <a
                        href="#"
                        className="icon-box icon-box-1"
                        data-bs-toggle="modal"
                        data-bs-target="#productModalId"
                      >
                        <i className="fal fa-eye"></i>
                        <i className="fal fa-eye"></i>
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-heart"></i>
                        <i className="fal fa-heart"></i>
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-layer-group"></i>
                        <i className="fal fa-layer-group"></i>
                      </a>
                    </div>
                  </div>

                  <div className="product__content product__content-2">
                    <h6>
                      <a href="product-details.html">{item.name}</a>
                    </h6>
                    <div className="rating mb-5 mt-10">
                      <ul>
                        {[1, 2, 3, 4, 5].map((n) => (
                          <li key={n}>
                            <a href="#">
                              <i className="fal fa-star"></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                      <span>(01 review)</span>
                    </div>
                    <div className="price">
                      <span>{item.price}</span>
                    </div>
                  </div>

                  <div className="product__add-cart text-center">
                    <button
                      type="button"
                      className="cart-btn-3 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*  trending-product-area-end */}

      {/* banner__area-start */}
      <section className="categories__area light-bg-s pt-20 pb-10">
        <div className="container custom-conatiner">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__head d-flex justify-content-between mb-30">
                <div className="section__title section__title-2">
                  <h5 className="st-titile">Popular Categories</h5>
                </div>
                <div className="button-wrap button-wrap-2">
                  <a href="product.html">
                    See All Product <i className="fal fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {categories.map((cat) => (
              <div
                className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2"
                key={cat.id}
              >
                <div className="categories__item p-relative w-img mb-30">
                  <div className="categories__img b-radius-2">
                    <a href="product-details.html">
                      <img src={cat.image} alt={cat.name} />
                    </a>
                  </div>

                  <div className="categories__content">
                    <h6>
                      <a href="product-details.html">{cat.name}</a>
                    </h6>
                    <p>({cat.count} Products)</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* banner__area-end */}

      {/* topsell__area-start */}
      <section className="topsell__area light-bg-s pt-15">
        <div className="container custom-conatiner">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__head d-flex justify-content-between mb-30">
                <div className="section__title section__title-2">
                  <h5 className="st-titile-d st-titile-d-2">
                    Top Deals Of The Day
                  </h5>
                </div>
                <div className="offer-time">
                  <span className="offer-title d-none d-sm-block">
                    Hurry Up! Offer ends in:
                  </span>
                  <div className="countdown">
                    <div
                      className="countdown-inner b-radius-2"
                      data-countdown=""
                      data-date="Mar 02 2022 20:20:22"
                    >
                      <ul className="text-center">
                        <li>
                          <span data-days="">32</span> Days
                        </li>
                        <li>
                          <span data-hours="">5</span> Hours
                        </li>
                        <li>
                          <span data-minutes="">32</span> Mins
                        </li>
                        <li>
                          <span data-seconds="">27</span> Secs
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {featureProducts.map((item) => (
              <div className="col-xl-6 col-lg-12" key={item.id}>
                <div className="single-features-item single-features-item-d single-features-item-d-2 b-radius-2 mb-20">
                  <div className="row g-0 align-items-center">
                    {/* IMAGE */}
                    <div className="col-lg-6">
                      <div className="features-thum">
                        <div className="features-product-image w-img">
                          <a href="product-details.html">
                            <img src={item.image} alt={item.name} />
                          </a>
                        </div>

                        {/* Discount */}
                        {item.discount && (
                          <div className="product__offer">
                            <span className="discount">{item.discount}</span>
                          </div>
                        )}

                        <div className="product-action product-action-2">
                          <a
                            href="#"
                            className="icon-box icon-box-1"
                            data-bs-toggle="modal"
                            data-bs-target="#productModalId"
                          >
                            <i className="fal fa-eye"></i>
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="icon-box icon-box-1">
                            <i className="fal fa-layer-group"></i>
                            <i className="fal fa-layer-group"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="col-lg-6">
                      <div className="product__content product__content-d product__content-d-2">
                        <h6>
                          <a href="product-details.html">{item.name}</a>
                        </h6>

                        <div className="rating mb-5">
                          <ul className="rating-d">
                            {[1, 2, 3, 4, 5].map((n) => (
                              <li key={n}>
                                <a href="#">
                                  <i className="fal fa-star"></i>
                                </a>
                              </li>
                            ))}
                          </ul>
                          <span>(01 review)</span>
                        </div>

                        <div className="price mb-10">
                          <span>
                            {item.price} <del>{item.oldPrice}</del>
                          </span>
                        </div>

                        <div className="features-des mb-20">
                          <ul>
                            <li>
                              <a href="product-details.html">
                                <i className="fas fa-circle"></i> Bass and
                                Stereo Sound.
                              </a>
                            </li>
                            <li>
                              <a href="product-details.html">
                                <i className="fas fa-circle"></i> Display with
                                3088 x 1440 pixels resolution.
                              </a>
                            </li>
                            <li>
                              <a href="product-details.html">
                                <i className="fas fa-circle"></i> Memory,
                                Storage & SIM: 12GB RAM, 256GB.
                              </a>
                            </li>
                            <li>
                              <a href="product-details.html">
                                <i className="fas fa-circle"></i> Android v10.0
                                Operating system.
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="progress mb-5">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>

                        <div className="progress-rate mb-15">
                          <span>Sold:{item.sold}</span>
                        </div>

                        <div className="cart-option">
                          <a href="cart.html" className="cart-btn-4 w-100">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* topsell__area-end */}

      {/* banner__area-start */}
      <section className="banner__area light-bg-s pt-40 pb-10">
        <div className="container custom-conatiner">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="banner__item p-relative w-img mb-30">
                <div className="banner__img b-radius-2">
                  <a href="product-details.html">
                    <img src="assets/img/banner/banner-14.jpg" alt="" />
                  </a>
                </div>
                <div className="banner__content banner__content-2">
                  <h6>
                    <a href="product-details.html">
                      Microsoft <br /> Surface Laptop 14”
                    </a>
                  </h6>
                  <p className="sm-p">Up To -30%</p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="banner__item p-relative mb-30 w-img">
                <div className="banner__img b-radius-2">
                  <a href="product-details.html">
                    <img src="assets/img/banner/banner-15.jpg" alt="" />
                  </a>
                </div>
                <div className="banner__content banner__content-2">
                  <h6>
                    <a href="product-details.html">
                      Cameras <br /> Best Sport Edition
                    </a>
                  </h6>
                  <p className="sm-p">Up To -20%</p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="banner__item p-relative mb-30 w-img">
                <div className="banner__img b-radius-2">
                  <a href="product-details.html">
                    <img src="assets/img/banner/banner-16.jpg" alt="" />
                  </a>
                </div>
                <div className="banner__content banner__content-2">
                  <h6>
                    <a href="product-details.html">
                      Sneaker <br /> Nike Air Max 90
                    </a>
                  </h6>
                  <p className="sm-p">Up To -60%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner__area-end */}

      {/* featured-start */}
      <section className="featured light-bg pt-50 pb-40">
        <div className="container custom-conatiner">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__head d-flex justify-content-between mb-30">
                <div className="section__title section__title-2">
                  <h5 className="st-titile">Top Featured Products</h5>
                </div>
                <div className="button-wrap button-wrap-2">
                  <a href="product.html">
                    See All Product <i className="fal fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* LEFT SIDE — BIG PRODUCT */}
            <div className="col-xl-6 col-lg-12">
              <div className="single-features-item single-features-item-d b-radius-2 mb-20">
                <div className="row g-0 align-items-center">
                  <div className="col-md-6">
                    <div className="features-thum">
                      <div className="features-product-image w-img">
                        <a href="product-details.html">
                          <img src={leftFeature.image} alt={leftFeature.name} />
                        </a>
                      </div>

                      {leftFeature.discount && (
                        <div className="product__offer">
                          <span className="discount">
                            {leftFeature.discount}
                          </span>
                        </div>
                      )}

                      <div className="product-action product-action-2">
                        <a href="#" className="icon-box icon-box-1">
                          <i className="fal fa-eye"></i>
                          <i className="fal fa-eye"></i>
                        </a>
                        <a href="#" className="icon-box icon-box-1">
                          <i className="fal fa-heart"></i>
                          <i className="fal fa-heart"></i>
                        </a>
                        <a href="#" className="icon-box icon-box-1">
                          <i className="fal fa-layer-group"></i>
                          <i className="fal fa-layer-group"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="product__content product__content-d product__content-d-2">
                      <h6>
                        <a href="product-details.html">{leftFeature.name}</a>
                      </h6>

                      <div className="rating mb-5">
                        <ul className="rating-d">
                          {[1, 2, 3, 4, 5].map((n) => (
                            <li key={n}>
                              <a href="#">
                                <i className="fal fa-star"></i>
                              </a>
                            </li>
                          ))}
                        </ul>
                        <span>(01 review)</span>
                      </div>

                      <div className="price d-price mb-10">
                        <span>
                          {leftFeature.price} <del>{leftFeature.oldPrice}</del>
                        </span>
                      </div>

                      <div className="features-des mb-25">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fas fa-circle"></i> Bass and Stereo
                              Sound.
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-circle"></i> Display 3088 x
                              1440 resolution.
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-circle"></i> 12GB RAM, 256GB
                              Storage.
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-circle"></i> Android v10 OS.
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="cart-option">
                        <a href="#" className="cart-btn-4 w-100 mr-10">
                          Add to Cart
                        </a>
                        <a href="#" className="transperant-btn-2">
                          <i className="fal fa-heart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE — GRID PRODUCTS */}
            <div className="col-xl-6 col-lg-12">
              <div className="row">
                {rightFeatures.map((item) => (
                  <div className="col-md-6" key={item.id}>
                    <div className="single-features-item b-radius-2 mb-20">
                      <div className="row g-0 align-items-center">
                        <div className="col-6">
                          <div className="features-thum">
                            <div className="features-product-image w-img">
                              <a href="product-details.html">
                                <img src={item.image} alt={item.name} />
                              </a>
                            </div>

                            {item.discount && (
                              <div className="product__offer">
                                <span className="discount">
                                  {item.discount}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="col-6">
                          <div className="product__content product__content-d product__content-d-2">
                            <h6>
                              <a href="product-details.html">{item.name}</a>
                            </h6>

                            <div className="rating mb-5">
                              <ul>
                                {[1, 2, 3, 4, 5].map((n) => (
                                  <li key={n}>
                                    <a href="#">
                                      <i className="fal fa-star"></i>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                              <span>(01 review)</span>
                            </div>

                            <div className="price d-price">
                              <span>
                                {item.price} <del>{item.oldPrice}</del>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* featured-end */}

      {/* moveing-text-area-start */}
      <section className="moving-text-area">
        <div className="moving-wrapper">
          <div className="moving-track">
            <span>
              Free UK Delivery - Return Over $100.00 ( Excluding Homeware ) |
              Free UK Collect From Store
            </span>
            <span>Design Week / 15% Off the website / Code: AYOSALE-2020</span>
            <span>
              Always iconic. Now organic. Introducing the $20 Organic Tee.
            </span>
            <span>
              Free UK Delivery - Return Over $100.00 ( Excluding Homeware ) |
              Free UK Collect From Store
            </span>
            <span>Design Week / 15% Off the website / Code: AYOSALE-2020</span>
            <span>
              Always iconic. Now organic. Introducing the $20 Organic Tee.
            </span>
          </div>
        </div>
      </section>

      {/* moveing-text-area-end */}

      {/* recomand-product-area-start */}
      <section className="recomand-product-area light-bg-s pt-50 pb-15">
        <div className="container custom-conatiner">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__head d-flex justify-content-between mb-30">
                <div className="section__title section__title-2">
                  <h5 className="st-titile">Recommended For You</h5>
                </div>
                <div className="button-wrap button-wrap-2">
                  <a href="product.html">
                    See All Product <i className="fal fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {products.map((item) => (
              <div
                className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2"
                key={item.id}
              >
                <div className="product__item product__item-2 b-radius-2 mb-20">
                  {/* IMAGE */}
                  <div className="product__thumb fix">
                    <div className="product-image w-img">
                      <a href="product-details.html">
                        <img src={item.image} alt={item.name} />
                      </a>
                    </div>

                    {/* Discount */}
                    {item.discount && (
                      <div className="product__offer">
                        <span className="discount">{item.discount}</span>
                      </div>
                    )}

                    <div className="product-action product-action-2">
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-eye"></i>
                        <i className="fal fa-eye"></i>
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-heart"></i>
                        <i className="fal fa-heart"></i>
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-layer-group"></i>
                        <i className="fal fa-layer-group"></i>
                      </a>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="product__content product__content-2">
                    <h6>
                      <a href="product-details.html">{item.name}</a>
                    </h6>

                    <div className="rating mb-5 mt-10">
                      <ul>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <li key={star}>
                            <a href="#">
                              <i className="fal fa-star"></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                      <span>(01 review)</span>
                    </div>

                    <div className="price">
                      <span>{item.price}</span>
                    </div>
                  </div>

                  {/* ADD TO CART */}
                  <div className="product__add-cart text-center">
                    <button
                      type="button"
                      className="cart-btn-3 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* recomand-product-area-end */}

      {/* brand-area-start */}
      <section className="brand-area clean-brand-area pb-60 pt-40">
        <div className="container custom-conatiner">
          <div className="brand-track">
            {[
              "brand-1.jpg",
              "brand-2.jpg",
              "brand-3.jpg",
              "brand-4.jpg",
              "brand-5.jpg",
              "brand-6.jpg",
            ].map((img, index) => (
              <div className="brand-card" key={index}>
                <img src={`assets/img/brand/${img}`} alt="brand" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* brand-area-end */}

      {/*features-2__area-start */}
      <section className="features-2__area d-ddark-bg">
        <div className="container custom-conatiner">
          <div className="features-2__lists pt-25 pb-25">
            <div className="row row-cols-xxl-5 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 gx-0">
              <div className="col">
                <div className="features-2__item">
                  <div className="features-2__icon mr-20">
                    <i className="fal fa-truck"></i>
                  </div>
                  <div className="features-2__content">
                    <h6>FREE DELIVERY</h6>
                    <p>For all orders over $120</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="features-2__item">
                  <div className="features-2__icon mr-20">
                    <i className="fal fa-money-check"></i>
                  </div>
                  <div className="features-2__content">
                    <h6>SAFE PAYMENT</h6>
                    <p>100% secure payment</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="features-2__item">
                  <div className="features-2__icon mr-20">
                    <i className="fal fa-comments-alt"></i>
                  </div>
                  <div className="features-2__content">
                    <h6>24/7 HELP CENTER</h6>
                    <p>Delicated 24/7 support</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="features-2__item">
                  <div className="features-2__icon mr-20">
                    <i className="fal fa-hand-holding-usd"></i>
                  </div>
                  <div className="features-2__content">
                    <h6>SHOP WITH CONFIDENCE</h6>
                    <p>If goods have problems</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="features-2__item">
                  <div className="features-2__icon mr-20">
                    <i className="fad fa-user-headset"></i>
                  </div>
                  <div className="features-2__content">
                    <h6>FRIENDLY SERVICES</h6>
                    <p>30 day satisfaction guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* features-2__area-end */}
    </main>
  );
};

export default Main;


/* This is the homw page full here it completed.... */