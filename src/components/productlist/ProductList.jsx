import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";


const ProductList = () => {
    const [price, setPrice] = useState([0, 500]);
  return (
    <main>

      {/* Breadcrumb */}
      <section className="breadcrumb__area box-plr-75">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__wrapper">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active">Shop</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN SHOP AREA */}
      <div className="shop-area mb-20">
        <div className="container">
          <div className="row">

            {/* LEFT SIDEBAR */}
            <div className="col-xl-3 col-lg-4">

              {/* CATEGORY FILTER */}
              <div className="product-widget mb-30">
                <h5 className="pt-title">Product categories</h5>

                <div className="widget-category-list mt-20">
                  {[
                    "Clothing & Apparel (12)",
                    "Consumer Electrics (60)",
                    "Computers & Technologies (41)",
                    "Phones & Accessories (28)",
                    "Babies & Moms (21)",
                    "Books & Office (62)",
                    "Sport & Outdoor (22)",
                    "Chairs & Stools (20)",
                    "Furniture & Accessories (6)",
                    "Kitchen & Tableware (30)",
                    "Lighting (30)",
                    "Armchairs & Chaises (30)"
                  ].map((label, i) => (
                    <div key={i} className="single-widget-category">
                      <input type="checkbox" id={`cat-item-${i}`} />
                      <label htmlFor={`cat-item-${i}`}>{label}</label>
                    </div>
                  ))}
                </div>
              </div>

             {/* PRICE FILTER */}
                <div className="product-widget mb-30">
                <h5 className="pt-title">Filter By Price</h5>

                <div className="mt-30">
                    <Slider
                    range
                    min={0}
                    max={500}
                    value={price}
                    onChange={(val) => setPrice(val)}
                    trackStyle={[{ backgroundColor: "#fcbe00" }]}
                    handleStyle={[
                        { borderColor: "#fcbe00", backgroundColor: "#fcbe00" },
                        { borderColor: "#fcbe00", backgroundColor: "#fcbe00" }
                    ]}
                    />

                    <form className="s-form mt-20">
                    <input
                        type="text"
                        readOnly
                        value={`$${price[0]} - $${price[1]}`}
                    />
                    <button type="submit" className="tp-btn-square-lg">Filter</button>
                    </form>
                </div>
                </div>


              {/* COLOR FILTER */}
              <div className="product-widget mb-30">
                <h5 className="pt-title">Choose Color</h5>
                <div className="product__color mt-20">
                  <ul>
                    {["black", "blue", "red", "yellow", "pink", "brown", "green", "oragne"].map(
                      (c, i) => (
                        <li key={i}><a href="#" className={c}></a></li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              {/* RATING FILTER */}
              <div className="product-widget mb-30">
                <h5 className="pt-title">Choose Rating</h5>

                <div className="widget-category-list mt-20">
                  {[5, 4, 3, 2, 1].map((stars, i) => (
                    <div key={i} className="single-widget-rating">
                      <input type="checkbox" id={`star-${i}`} />
                      <label htmlFor={`star-${i}`}>
                        {[...Array(5)].map((_, idx) => (
                          <i key={idx} className={idx < stars ? "fas fa-star" : "fal fa-star"}></i>
                        ))}
                        <span>({Math.floor(Math.random() * 60 + 1)})</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* SIZE FILTER */}
              <div className="product-widget mb-30">
                <h5 className="pt-title">Choose Size</h5>

                <div className="widget-category-list mt-20">
                  {["S (12)", "L (60)", "M (41)", "XXL (28)", "2XL (21)", "3XL (62)"].map(
                    (label, i) => (
                      <div key={i} className="single-widget-category">
                        <input type="checkbox" id={`size-${i}`} />
                        <label htmlFor={`size-${i}`}>{label}</label>
                      </div>
                    )
                  )}
                </div>
              </div>

            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="col-xl-9 col-lg-8">

              {/* Banner */}
              <div className="shop-banner mb-30">
                <div className="banner-image">
                  <img className="banner-l" src="/assets/img/banner/sl-banner.jpg" alt="banner" />
                  <img className="banner-sm" src="/assets/img/banner/sl-banner-sm.png" alt="banner" />

                  <div className="banner-content text-center">
                    <p className="banner-text mb-30">
                      Hurry Up! <br /> Free Shipping All Orders Over $99
                    </p>
                    <a href="/shop" className="st-btn-d b-radius">Discover now</a>
                  </div>
                </div>
              </div>

              {/* PRODUCT FILTER BAR */}
              <div className="product-lists-top">
                <div className="product__filter-wrap">
                  <div className="row align-items-center">

                    {/* Grid/List */}
                    <div className="col-md-6">
                      <div className="product__filter d-sm-flex align-items-center">
                        <div className="product__col">
                          <ul className="nav nav-tabs">
                            <li className="nav-item">
                              <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#grid">
                                <i className="fal fa-th"></i>
                              </button>
                            </li>

                            <li className="nav-item">
                              <button className="nav-link" data-bs-toggle="tab" data-bs-target="#list">
                                <i className="fal fa-list"></i>
                              </button>
                            </li>
                          </ul>
                        </div>

                        <div className="product__result pl-60">
                          <p>Showing 1–20 of 29 results</p>
                        </div>
                      </div>
                    </div>

                    {/* Sorting */}
                    <div className="col-md-6 d-flex justify-content-end">
                      <select className="mr-10">
                        {[10, 20, 30, 40].map(n => <option key={n}>{n}</option>)}
                      </select>

                      <select>
                        <option>Latest</option>
                        <option>New</option>
                        <option>Upcoming</option>
                      </select>
                    </div>

                  </div>
                </div>
              </div>

              {/* PRODUCT GRID */}
              <div className="tab-content">
                <div className="tab-pane fade show active" id="grid">
                  <div className="row g-3">

                    {[...Array(12)].map((_, i) => (
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={i}>
                        <div className="product__item product__item-d">

                          <div className="product__thumb fix">
                            <div className="product-image w-img">
                              <a href="/product-details">
                                <img src="/assets/img/product/tp-2.jpg" alt="product" />
                              </a>
                            </div>

                            <div className="product-action">
                              <button className="icon-box icon-box-1"><i className="fal fa-eye" /></button>
                              <button className="icon-box icon-box-1"><i className="fal fa-heart" /></button>
                              <button className="icon-box icon-box-1"><i className="fal fa-layer-group" /></button>
                            </div>
                          </div>

                          <div className="product__content-3">
                            <h6><a href="/product-details">Sample Product {i + 1}</a></h6>

                            <div className="rating mb-5">
                              <ul>
                                {[...Array(5)].map((_, idx) => (
                                  <li key={idx}><i className="fal fa-star" /></li>
                                ))}
                              </ul>
                              <span>(01 review)</span>
                            </div>

                            <div className="price mb-10"><span>$110 - $150</span></div>
                          </div>

                          <div className="product__add-cart-s text-center">
                            <button className="cart-btn d-flex align-items-center justify-content-center w-100">
                              Add to Cart
                            </button>
                            <button className="wc-checkout d-flex align-items-center justify-content-center w-100">
                              Quick View
                            </button>
                          </div>

                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              </div>

              {/* PAGINATION */}
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
        </div>
      </div>

    </main>
  );
};

export default ProductList;
