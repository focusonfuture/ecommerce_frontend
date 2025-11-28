import React from "react";

const ProductList = () => {
  return (
    <main>

      {/* breadcrumb__area-start */}
     <section class="breadcrumb__area box-plr-75">
            <div class="container">
                <div class="row">
                    <div class="col-xxl-12">
                        <div class="breadcrumb__wrapper">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                  <li class="breadcrumb-item active" aria-current="page">Shop</li>
                                </ol>
                              </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      {/* breadcrumb__area-end */}

      <div className="shop-area mb-20">
        <div className="container">
            <div className="row">

                {/* LEFT SIDEBAR */}
                <div className="col-xl-3 col-lg-4">
                    <div className="product-widget mb-30">
                    <h5 className="pt-title">Product categories</h5>

                    <div className="widget-category-list mt-20">
                        <form>
                        <div className="single-widget-category">
                            <input type="checkbox" id="cat-item-1" name="cat-item" />
                            <label htmlFor="cat-item-1">
                            Clothing &amp; Apparel <span>(12)</span>
                            </label>
                        </div>

                        <div className="single-widget-category">
                            <input type="checkbox" id="cat-item-2" name="cat-item" />
                            <label htmlFor="cat-item-2">
                            Consumer Electrics <span>(60)</span>
                            </label>
                        </div>

                        <div className="single-widget-category">
                            <input type="checkbox" id="cat-item-3" name="cat-item" />
                            <label htmlFor="cat-item-3">
                            Computers &amp; Technologies <span>(41)</span>
                            </label>
                        </div>

                        <div className="single-widget-category">
                            <input type="checkbox" id="cat-item-4" name="cat-item" />
                            <label htmlFor="cat-item-4">
                            Phones &amp; Accessories <span>(28)</span>
                            </label>
                        </div>

                        <div className="single-widget-category">
                            <input type="checkbox" id="cat-item-5" name="cat-item" />
                            <label htmlFor="cat-item-5">
                            Babies &amp; Moms <span>(21)</span>
                            </label>
                        </div>

                        <div className="single-widget-category">
                            <input type="checkbox" id="cat-item-7" name="cat-item" />
                            <label htmlFor="cat-item-7">
                            Books &amp; Office <span>(62)</span>
                            </label>
                        </div>

                        <div className="single-widget-category">
                            <input type="checkbox" id="cat-item-8" name="cat-item" />
                            <label htmlFor="cat-item-8">
                            Sport &amp; Outdoor <span>(22)</span>
                            </label>
                        </div>

                        <div className="single-widget-category">
                            <input type="checkbox" id="cat-item-9" name="cat-item" />
                            <label htmlFor="cat-item-9">
                            Chairs &amp; Stools <span>(20)</span>
                            </label>
                        </div>

                        <div className="single-widget-category">
                            <input type="checkbox" id="cat-item-10" name="cat-item" />
                            <label htmlFor="cat-item-10">
                            Furniture &amp; Accessories <span>(06)</span>
                            </label>
                        </div>

                        <div className="single-widget-category">
                            <input type="checkbox" id="cat-item-11" name="cat-item" />
                            <label htmlFor="cat-item-11">
                            Kitchen &amp; Tableware <span>(30)</span>
                            </label>
                        </div>

                        <div className="single-widget-category">
                            <input type="checkbox" id="cat-item-12" name="cat-item" />
                            <label htmlFor="cat-item-12">
                            Lighting <span>(30)</span>
                            </label>
                        </div>

                        <div className="single-widget-category">
                            <input type="checkbox" id="cat-item-13" name="cat-item" />
                            <label htmlFor="cat-item-13">
                            Armchairs &amp; Chaises <span>(30)</span>
                            </label>
                        </div>
                        </form>
                    </div>
                    </div>

                    
                    <>
                        {/* Filter By Price */}
                        <div className="product-widget mb-30">
                            <h5 className="pt-title">Filter By Price</h5>

                            <div className="price__slider mt-30">
                            <div
                                id="slider-range"
                                className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                            >
                                <div
                                className="ui-slider-range ui-corner-all ui-widget-header"
                                style={{ left: "0%", width: "100%" }}
                                ></div>

                                <span
                                tabIndex="0"
                                className="ui-slider-handle ui-corner-all ui-state-default"
                                style={{ left: "0%" }}
                                ></span>

                                <span
                                tabIndex="0"
                                className="ui-slider-handle ui-corner-all ui-state-default"
                                style={{ left: "100%" }}
                                ></span>
                            </div>

                            <div>
                                <form className="s-form mt-20">
                                <input type="text" id="amount" readOnly />
                                <button type="submit" className="tp-btn-square-lg">
                                    Filter
                                </button>
                                </form>
                            </div>
                            </div>
                        </div>

                        {/* Choose Color */}
                        <div className="product-widget mb-30">
                            <h5 className="pt-title">Choose Color</h5>
                            <div className="product__color mt-20">
                            <ul>
                                <li><a href="#" className="black"></a></li>
                                <li><a href="#" className="blue"></a></li>
                                <li><a href="#" className="red"></a></li>
                                <li><a href="#" className="yellow"></a></li>
                                <li><a href="#" className="pink"></a></li>
                                <li><a href="#" className="brown"></a></li>
                                <li><a href="#" className="green"></a></li>
                                <li><a href="#" className="oragne"></a></li>
                            </ul>
                            </div>
                        </div>

                            {/* Choose Rating */}
                            <div className="product-widget mb-30">
                                <h5 className="pt-title">Choose Rating</h5>

                                <div className="widget-category-list mt-20">
                                <form>
                                    <div className="single-widget-rating">
                                    <input type="checkbox" id="star-item-1" name="star-item" />
                                    <label htmlFor="star-item-1">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <span>(54)</span>
                                    </label>
                                    </div>

                                    <div className="single-widget-rating">
                                    <input type="checkbox" id="star-item-2" name="star-item" />
                                    <label htmlFor="star-item-2">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fal fa-star"></i>
                                        <span>(37)</span>
                                    </label>
                                    </div>

                                    <div className="single-widget-rating">
                                    <input type="checkbox" id="star-item-3" name="star-item" />
                                    <label htmlFor="star-item-3">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fal fa-star"></i>
                                        <i className="fal fa-star"></i>
                                        <span>(7)</span>
                                    </label>
                                    </div>

                                    <div className="single-widget-rating">
                                    <input type="checkbox" id="star-item-4" name="star-item" />
                                    <label htmlFor="star-item-4">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fal fa-star"></i>
                                        <i className="fal fa-star"></i>
                                        <i className="fal fa-star"></i>
                                        <span>(5)</span>
                                    </label>
                                    </div>

                                    <div className="single-widget-rating">
                                    <input type="checkbox" id="star-item-5" name="star-item" />
                                    <label htmlFor="star-item-5">
                                        <i className="fas fa-star"></i>
                                        <i className="fal fa-star"></i>
                                        <i className="fal fa-star"></i>
                                        <i className="fal fa-star"></i>
                                        <i className="fal fa-star"></i>
                                        <span>(3)</span>
                                    </label>
                                    </div>
                                </form>
                                </div>
                            </div>

                            {/* Choose Size */}
                            <div className="product-widget mb-30">
                                <h5 className="pt-title">Choose Size</h5>

                                <div className="widget-category-list mt-20">
                                <form>
                                    <div className="single-widget-category">
                                    <input type="checkbox" id="choose-item-1" name="choose-item" />
                                    <label htmlFor="choose-item-1">S <span>(12)</span></label>
                                    </div>

                                    <div className="single-widget-category">
                                    <input type="checkbox" id="choose-item-2" name="choose-item" />
                                    <label htmlFor="choose-item-2">L <span>(60)</span></label>
                                    </div>

                                    <div className="single-widget-category">
                                    <input type="checkbox" id="choose-item-3" name="choose-item" />
                                    <label htmlFor="choose-item-3">M <span>(41)</span></label>
                                    </div>

                                    <div className="single-widget-category">
                                    <input type="checkbox" id="choose-item-4" name="choose-item" />
                                    <label htmlFor="choose-item-4">XXL <span>(28)</span></label>
                                    </div>

                                    <div className="single-widget-category">
                                    <input type="checkbox" id="choose-item-5" name="choose-item" />
                                    <label htmlFor="choose-item-5">2XL <span>(21)</span></label>
                                    </div>

                                    <div className="single-widget-category">
                                    <input type="checkbox" id="choose-item-7" name="choose-item" />
                                    <label htmlFor="choose-item-7">3XL <span>(62)</span></label>
                                    </div>
                                </form>
                                </div>
                            </div>

                            {/* Choose Brand */}
                            <div className="product-widget mb-30">
                                <h5 className="pt-title">Choose Brand</h5>

                                <div className="widget-category-list mt-20">
                                <form>
                                    <div className="single-widget-category">
                                    <input type="checkbox" id="brand-item-1" name="brand-item" />
                                    <label htmlFor="brand-item-1">CarRentals <span>(12)</span></label>
                                    </div>

                                    <div className="single-widget-category">
                                    <input type="checkbox" id="brand-item-2" name="brand-item" />
                                    <label htmlFor="brand-item-2">CarVoodoo <span>(60)</span></label>
                                    </div>

                                    <div className="single-widget-category">
                                    <input type="checkbox" id="brand-item-3" name="brand-item" />
                                    <label htmlFor="brand-item-3">Creative <span>(41)</span></label>
                                    </div>

                                    <div className="single-widget-category">
                                    <input type="checkbox" id="brand-item-4" name="brand-item" />
                                    <label htmlFor="brand-item-4">Impact <span>(28)</span></label>
                                    </div>

                                    <div className="single-widget-category">
                                    <input type="checkbox" id="brand-item-5" name="brand-item" />
                                    <label htmlFor="brand-item-5">IQVia <span>(21)</span></label>
                                    </div>

                                    <div className="single-widget-category">
                                    <input type="checkbox" id="brand-item-7" name="brand-item" />
                                    <label htmlFor="brand-item-7">LeadsGreen <span>(62)</span></label>
                                    </div>
                                </form>
                                </div>
                            </div>

                            {/* Special Offers */}
                            <div className="product-widget mb-30">
                                <h5 className="pt-title">Special Offers</h5>

                                <div className="product__sm mt-20">
                                <ul>
                                    <li className="product__sm-item d-flex align-items-center">
                                    <div className="product__sm-thumb mr-20">
                                        <a href="product-details.html">
                                        <img src="/assets/img/product/sm-1.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="product__sm-content">
                                        <h5 className="product__sm-title">
                                        <a href="product-details.html">Classic Leather Backpack Daypack 2022</a>
                                        </h5>
                                        <div className="product__sm-price">
                                        <span className="price">$300.00</span>
                                        </div>
                                    </div>
                                    </li>

                                    <li className="product__sm-item d-flex align-items-center">
                                    <div className="product__sm-thumb mr-20">
                                        <a href="product-details.html">
                                        <img src="/assets/img/product/sm-2.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="product__sm-content">
                                        <h5 className="product__sm-title">
                                        <a href="product-details.html">Samsung Galaxy A12, 32GB, Black - (Locked)</a>
                                        </h5>
                                        <div className="product__sm-price">
                                        <span className="price">$150.00</span>
                                        </div>
                                    </div>
                                    </li>

                                    <li className="product__sm-item d-flex align-items-center">
                                    <div className="product__sm-thumb mr-20">
                                        <a href="product-details.html">
                                        <img src="/assets/img/product/sm-3.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="product__sm-content">
                                        <h5 className="product__sm-title">
                                        <a href="#">Coffee Maker AH240a Full Function</a>
                                        </h5>
                                        <div className="product__sm-price">
                                        <span className="price">$300.00</span>
                                        </div>
                                    </div>
                                    </li>

                                    <li className="product__sm-item d-flex align-items-center">
                                    <div className="product__sm-thumb mr-20">
                                        <a href="product-details.html">
                                        <img src="/assets/img/product/sm-4.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="product__sm-content">
                                        <h5 className="product__sm-title">
                                        <a href="product-details.html">Imported Wooden Felt Cushion Chair</a>
                                        </h5>
                                        <div className="product__sm-price">
                                        <span className="price">$120.00</span>
                                        </div>
                                    </div>
                                    </li>

                                    <li className="product__sm-item d-flex align-items-center">
                                    <div className="product__sm-thumb mr-20">
                                        <a href="product-details.html">
                                        <img src="/assets/img/product/sm-5.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="product__sm-content">
                                        <h5 className="product__sm-title">
                                        <a href="product-details.html">Sunhouse Decorative Lights - Imported</a>
                                        </h5>
                                        <div className="product__sm-price">
                                        <span className="price">$110.00</span>
                                        </div>
                                    </div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </>

                </div>

                {/* RIGHT SIDE CONTENT */}
                <div className="col-xl-9 col-lg-8">
                    <div className="col-xl-9 col-lg-8">
                        <div className="shop-banner mb-30">
                            <div className="banner-image">
                                <img className="banner-l" src="/assets/img/banner/sl-banner.jpg" alt="" />
                                <img className="banner-sm" src="/assets/img/banner/sl-banner-sm.png" alt="" />

                                <div className="banner-content text-center">
                                    <p className="banner-text mb-30">
                                        Hurry Up! <br /> Free Shipping All Order Over $99
                                    </p>

                                    <a href="/shop" className="st-btn-d b-radius">
                                        Discover now
                                    </a>
                                </div>
                            </div>
                        </div>

                            
                            <div className="product-lists-top">
                            <div className="product__filter-wrap">
                                <div className="row align-items-center">

                                    {/* Left Side */}
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                        <div className="product__filter d-sm-flex align-items-center">

                                            {/* Grid/List Buttons */}
                                            <div className="product__col">
                                                <ul className="nav nav-tabs" id="myTab" role="tablist">

                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            className="nav-link active"
                                                            id="FourCol-tab"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#FourCol"
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="FourCol"
                                                            aria-selected="true"
                                                        >
                                                            <i className="fal fa-th"></i>
                                                        </button>
                                                    </li>

                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            className="nav-link"
                                                            id="FiveCol-tab"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#FiveCol"
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="FiveCol"
                                                            aria-selected="false"
                                                        >
                                                            <i className="fal fa-list"></i>
                                                        </button>
                                                    </li>

                                                </ul>
                                            </div>

                                            {/* Result Count */}
                                            <div className="product__result pl-60">
                                                <p>Showing 1–20 of 29 results</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side */}
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                        <div className="product__filter-right d-flex align-items-center justify-content-md-end">

                                            {/* Show Count */}
                                            <div className="product__sorting product__show-no">
                                                <select>
                                                    <option>10</option>
                                                    <option>20</option>
                                                    <option>30</option>
                                                    <option>40</option>
                                                </select>
                                            </div>

                                            {/* Sorting */}
                                            <div className="product__sorting product__show-position ml-20">
                                                <select>
                                                    <option>Latest</option>
                                                    <option>New</option>
                                                    <option>Upcoming</option>
                                                </select>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            </div>
                            {/* ----------------T */}

                            <div className="tab-content" id="productGridTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="FourCol"
                                    role="tabpanel"
                                    aria-labelledby="FourCol-tab"
                                >
                                    <div className="tp-wrapper">
                                    <div className="row g-0">

                                        {/* PRODUCT CARD 1 */}
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="product__item product__item-d">
                                            <div className="product__thumb fix">
                                            <div className="product-image w-img">
                                                <a href="/product-details">
                                                <img src="/assets/img/product/tp-2.jpg" alt="product" />
                                                </a>
                                            </div>

                                            <div className="product-action">
                                                <button
                                                type="button"
                                                className="icon-box icon-box-1"
                                                data-bs-toggle="modal"
                                                data-bs-target="#productModalId"
                                                >
                                                <i className="fal fa-eye" />
                                                </button>

                                                <button className="icon-box icon-box-1">
                                                <i className="fal fa-heart" />
                                                </button>

                                                <button className="icon-box icon-box-1">
                                                <i className="fal fa-layer-group" />
                                                </button>
                                            </div>
                                            </div>

                                            <div className="product__content-3">
                                            <h6>
                                                <a href="/product-details">Men Size Yellow Basketball Jerseys</a>
                                            </h6>

                                            <div className="rating mb-5">
                                                <ul>
                                                {[...Array(5)].map((_, i) => (
                                                    <li key={i}>
                                                    <i className="fal fa-star" />
                                                    </li>
                                                ))}
                                                </ul>
                                                <span>(01 review)</span>
                                            </div>

                                            <div className="price mb-10">
                                                <span>$110-$150</span>
                                            </div>
                                            </div>

                                            <div className="product__add-cart-s text-center">
                                            <button
                                                type="button"
                                                className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100"
                                            >
                                                Add to Cart
                                            </button>

                                            <button
                                                type="button"
                                                className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                data-bs-toggle="modal"
                                                data-bs-target="#productModalId"
                                            >
                                                Quick View
                                            </button>
                                            </div>
                                        </div>
                                        </div>

                                        {/* PRODUCT CARD 2 */}
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="product__item product__item-d">
                                            <div className="product__thumb fix">
                                            <div className="product-image w-img">
                                                <a href="/product-details">
                                                <img src="/assets/img/product/tp-3.jpg" alt="product" />
                                                </a>
                                            </div>

                                            <div className="product-action">
                                                <button
                                                type="button"
                                                className="icon-box icon-box-1"
                                                data-bs-toggle="modal"
                                                data-bs-target="#productModalId"
                                                >
                                                <i className="fal fa-eye" />
                                                </button>

                                                <button className="icon-box icon-box-1">
                                                <i className="fal fa-heart" />
                                                </button>

                                                <button className="icon-box icon-box-1">
                                                <i className="fal fa-layer-group" />
                                                </button>
                                            </div>
                                            </div>

                                            <div className="product__content-3">
                                            <h6>
                                                <a href="/product-details">Xbox Wireless Game Controller Pink</a>
                                            </h6>

                                            <div className="rating mb-5">
                                                <ul>
                                                {[...Array(5)].map((_, i) => (
                                                    <li key={i}>
                                                    <i className="fal fa-star" />
                                                    </li>
                                                ))}
                                                </ul>
                                                <span>(01 review)</span>
                                            </div>

                                            <div className="price mb-10">
                                                <span>$130-$150</span>
                                            </div>
                                            </div>

                                            <div className="product__add-cart-s text-center">
                                            <button
                                                type="button"
                                                className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100"
                                            >
                                                Add to Cart
                                            </button>

                                            <button
                                                type="button"
                                                className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                data-bs-toggle="modal"
                                                data-bs-target="#productModalId"
                                            >
                                                Quick View
                                            </button>
                                            </div>
                                        </div>
                                        </div>

                                        {/* PRODUCT CARD 3 */}
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="product__item product__item-d">
                                            <div className="product__thumb fix">
                                            <div className="product-image w-img">
                                                <a href="/product-details">
                                                <img src="/assets/img/product/tp-4.jpg" alt="product" />
                                                </a>
                                            </div>

                                            <div className="product-action">
                                                <button
                                                type="button"
                                                className="icon-box icon-box-1"
                                                data-bs-toggle="modal"
                                                data-bs-target="#productModalId"
                                                >
                                                <i className="fal fa-eye" />
                                                </button>

                                                <button className="icon-box icon-box-1">
                                                <i className="fal fa-heart" />
                                                </button>

                                                <button className="icon-box icon-box-1">
                                                <i className="fal fa-layer-group" />
                                                </button>
                                            </div>
                                            </div>

                                            <div className="product__content-3">
                                            <h6>
                                                <a href="/product-details">
                                                Wireless Bluetooth Over-Ear Headphones
                                                </a>
                                            </h6>

                                            <div className="rating mb-5">
                                                <ul>
                                                {[...Array(5)].map((_, i) => (
                                                    <li key={i}>
                                                    <i className="fal fa-star" />
                                                    </li>
                                                ))}
                                                </ul>
                                                <span>(01 review)</span>
                                            </div>

                                            <div className="price mb-10">
                                                <span>$135-$150</span>
                                            </div>
                                            </div>

                                            <div className="product__add-cart-s text-center">
                                            <button
                                                type="button"
                                                className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100"
                                            >
                                                Add to Cart
                                            </button>

                                            <button
                                                type="button"
                                                className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                data-bs-toggle="modal"
                                                data-bs-target="#productModalId"
                                            >
                                                Quick View
                                            </button>
                                            </div>
                                        </div>
                                        </div>

                                        {/* PRODUCT CARD 4 */}
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="product__item product__item-d">
                                            <div className="product__thumb fix">
                                            <div className="product-image w-img">
                                                <a href="/product-details">
                                                <img src="/assets/img/product/tp-5.jpg" alt="product" />
                                                </a>
                                            </div>

                                            <div className="product-action">
                                                <button
                                                type="button"
                                                className="icon-box icon-box-1"
                                                data-bs-toggle="modal"
                                                data-bs-target="#productModalId"
                                                >
                                                <i className="fal fa-eye" />
                                                </button>

                                                <button className="icon-box icon-box-1">
                                                <i className="fal fa-heart" />
                                                </button>

                                                <button className="icon-box icon-box-1">
                                                <i className="fal fa-layer-group" />
                                                </button>
                                            </div>
                                            </div>

                                            <div className="product__content-3">
                                            <h6>
                                                <a href="/product-details">Solo3 Wireless On-Ear Headphones</a>
                                            </h6>

                                            <div className="rating mb-5">
                                                <ul>
                                                {[...Array(5)].map((_, i) => (
                                                    <li key={i}>
                                                    <i className="fal fa-star" />
                                                    </li>
                                                ))}
                                                </ul>
                                                <span>(01 review)</span>
                                            </div>

                                            <div className="price mb-10">
                                                <span>$140-$150</span>
                                            </div>
                                            </div>

                                            <div className="product__add-cart-s text-center">
                                            <button
                                                type="button"
                                                className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100"
                                            >
                                                Add to Cart
                                            </button>

                                            <button
                                                type="button"
                                                className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                data-bs-toggle="modal"
                                                data-bs-target="#productModalId"
                                            >
                                                Quick View
                                            </button>
                                            </div>
                                        </div>
                                        </div>


                                        {/* PRODUCT CARD 4 */}
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="product__item product__item-d">
                                            <div className="product__thumb fix">
                                            <div className="product-image w-img">
                                                <a href="/product-details">
                                                <img src="/assets/img/product/tp-5.jpg" alt="product" />
                                                </a>
                                            </div>

                                            <div className="product-action">
                                                <button
                                                type="button"
                                                className="icon-box icon-box-1"
                                                data-bs-toggle="modal"
                                                data-bs-target="#productModalId"
                                                >
                                                <i className="fal fa-eye" />
                                                </button>

                                                <button className="icon-box icon-box-1">
                                                <i className="fal fa-heart" />
                                                </button>

                                                <button className="icon-box icon-box-1">
                                                <i className="fal fa-layer-group" />
                                                </button>
                                            </div>
                                            </div>

                                            <div className="product__content-3">
                                            <h6>
                                                <a href="/product-details">Solo3 Wireless On-Ear Headphones</a>
                                            </h6>

                                            <div className="rating mb-5">
                                                <ul>
                                                {[...Array(5)].map((_, i) => (
                                                    <li key={i}>
                                                    <i className="fal fa-star" />
                                                    </li>
                                                ))}
                                                </ul>
                                                <span>(01 review)</span>
                                            </div>

                                            <div className="price mb-10">
                                                <span>$140-$150</span>
                                            </div>
                                            </div>

                                            <div className="product__add-cart-s text-center">
                                            <button
                                                type="button"
                                                className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100"
                                            >
                                                Add to Cart
                                            </button>

                                            <button
                                                type="button"
                                                className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                data-bs-toggle="modal"
                                                data-bs-target="#productModalId"
                                            >
                                                Quick View
                                            </button>
                                            </div>
                                        </div>
                                        </div>


                                        {/* PRODUCT CARD 4 */}
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="product__item product__item-d">
                                            <div className="product__thumb fix">
                                            <div className="product-image w-img">
                                                <a href="/product-details">
                                                <img src="/assets/img/product/tp-5.jpg" alt="product" />
                                                </a>
                                            </div>

                                            <div className="product-action">
                                                <button
                                                type="button"
                                                className="icon-box icon-box-1"
                                                data-bs-toggle="modal"
                                                data-bs-target="#productModalId"
                                                >
                                                <i className="fal fa-eye" />
                                                </button>

                                                <button className="icon-box icon-box-1">
                                                <i className="fal fa-heart" />
                                                </button>

                                                <button className="icon-box icon-box-1">
                                                <i className="fal fa-layer-group" />
                                                </button>
                                            </div>
                                            </div>

                                            <div className="product__content-3">
                                            <h6>
                                                <a href="/product-details">Solo3 Wireless On-Ear Headphones</a>
                                            </h6>

                                            <div className="rating mb-5">
                                                <ul>
                                                {[...Array(5)].map((_, i) => (
                                                    <li key={i}>
                                                    <i className="fal fa-star" />
                                                    </li>
                                                ))}
                                                </ul>
                                                <span>(01 review)</span>
                                            </div>

                                            <div className="price mb-10">
                                                <span>$140-$150</span>
                                            </div>
                                            </div>

                                            <div className="product__add-cart-s text-center">
                                            <button
                                                type="button"
                                                className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100"
                                            >
                                                Add to Cart
                                            </button>

                                            <button
                                                type="button"
                                                className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                data-bs-toggle="modal"
                                                data-bs-target="#productModalId"
                                            >
                                                Quick View
                                            </button>
                                            </div>
                                        </div>
                                        </div>


                                        {/* PRODUCT CARD 4 */}
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="product__item product__item-d">
                                            <div className="product__thumb fix">
                                            <div className="product-image w-img">
                                                <a href="/product-details">
                                                <img src="/assets/img/product/tp-5.jpg" alt="product" />
                                                </a>
                                            </div>

                                            <div className="product-action">
                                                <button
                                                type="button"
                                                className="icon-box icon-box-1"
                                                data-bs-toggle="modal"
                                                data-bs-target="#productModalId"
                                                >
                                                <i className="fal fa-eye" />
                                                </button>

                                                <button className="icon-box icon-box-1">
                                                <i className="fal fa-heart" />
                                                </button>

                                                <button className="icon-box icon-box-1">
                                                <i className="fal fa-layer-group" />
                                                </button>
                                            </div>
                                            </div>

                                            <div className="product__content-3">
                                            <h6>
                                                <a href="/product-details">Solo3 Wireless On-Ear Headphones</a>
                                            </h6>

                                            <div className="rating mb-5">
                                                <ul>
                                                {[...Array(5)].map((_, i) => (
                                                    <li key={i}>
                                                    <i className="fal fa-star" />
                                                    </li>
                                                ))}
                                                </ul>
                                                <span>(01 review)</span>
                                            </div>

                                            <div className="price mb-10">
                                                <span>$140-$150</span>
                                            </div>
                                            </div>

                                            <div className="product__add-cart-s text-center">
                                            <button
                                                type="button"
                                                className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100"
                                            >
                                                Add to Cart
                                            </button>

                                            <button
                                                type="button"
                                                className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                data-bs-toggle="modal"
                                                data-bs-target="#productModalId"
                                            >
                                                Quick View
                                            </button>
                                            </div>
                                        </div>
                                        </div>


                                        {/* PRODUCT CARD 4 */}
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="product__item product__item-d">
                                            <div className="product__thumb fix">
                                            <div className="product-image w-img">
                                                <a href="/product-details">
                                                <img src="/assets/img/product/tp-5.jpg" alt="product" />
                                                </a>
                                            </div>

                                            <div className="product-action">
                                                <button
                                                type="button"
                                                className="icon-box icon-box-1"
                                                data-bs-toggle="modal"
                                                data-bs-target="#productModalId"
                                                >
                                                <i className="fal fa-eye" />
                                                </button>

                                                <button className="icon-box icon-box-1">
                                                <i className="fal fa-heart" />
                                                </button>

                                                <button className="icon-box icon-box-1">
                                                <i className="fal fa-layer-group" />
                                                </button>
                                            </div>
                                            </div>

                                            <div className="product__content-3">
                                            <h6>
                                                <a href="/product-details">Solo3 Wireless On-Ear Headphones</a>
                                            </h6>

                                            <div className="rating mb-5">
                                                <ul>
                                                {[...Array(5)].map((_, i) => (
                                                    <li key={i}>
                                                    <i className="fal fa-star" />
                                                    </li>
                                                ))}
                                                </ul>
                                                <span>(01 review)</span>
                                            </div>

                                            <div className="price mb-10">
                                                <span>$140-$150</span>
                                            </div>
                                            </div>

                                            <div className="product__add-cart-s text-center">
                                            <button
                                                type="button"
                                                className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100"
                                            >
                                                Add to Cart
                                            </button>

                                            <button
                                                type="button"
                                                className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                data-bs-toggle="modal"
                                                data-bs-target="#productModalId"
                                            >
                                                Quick View
                                            </button>
                                            </div>
                                        </div>
                                        </div>


                                        

                                    </div>
                                    </div>
                                </div>
                            </div>
                                 <div className="tp-pagination text-center">
  <div className="row">
    <div className="col-xl-12">
      <div className="basic-pagination pt-30 pb-30">
        <nav>
          <ul>
            <li>
              <a className="active">1</a>
            </li>
            <li>
              <a>2</a>
            </li>
            <li>
              <a>3</a>
            </li>
            <li>
              <a>5</a>
            </li>
            <li>
              <a>6</a>
            </li>
            <li>
              <a>
                <i className="fal fa-angle-double-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>
                   
                                                    
                
                    </div>
                </div>
                {/* RIGHT SIDE CONTENT end */}



            </div>
          </div>
      </div>


    </main>
  );
};

export default ProductList;

