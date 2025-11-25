import React from "react";

const Productdetails = () => {
  return (
    <main>

      {/* breadcrumb__area-start */}
      <section className="breadcrumb__area box-plr-75">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__wrapper">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Shop</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb__area-end */}

      {/* product-details-start */}
      <div className="product-details">
        <div className="container">
          <div className="row">

            {/* LEFT IMAGES */}
            <div className="col-xl-6">
              <div className="product__details-nav d-sm-flex align-items-start">

                <ul className="nav nav-tabs flex-sm-column justify-content-between" id="productThumbTab" role="tablist">

                  <li className="nav-item">
                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#thumbOne">
                      <img src="/assets/img/product/nav/product-nav-1.jpg" alt="" />
                    </button>
                  </li>

                  <li className="nav-item">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#thumbTwo">
                      <img src="/assets/img/product/nav/product-nav-2.jpg" alt="" />
                    </button>
                  </li>

                  <li className="nav-item">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#thumbThree">
                      <img src="/assets/img/product/nav/product-nav-3.jpg" alt="" />
                    </button>
                  </li>

                </ul>

                {/* BIG IMAGE */}
                <div className="product__details-thumb">
                  <div className="tab-content">

                    <div className="tab-pane fade show active" id="thumbOne">
                      <div className="product__details-nav-thumb w-img">
                        <img src="/assets/img/product/nav/product-nav-big-1.jpg" alt="" />
                      </div>
                    </div>

                    <div className="tab-pane fade" id="thumbTwo">
                      <div className="product__details-nav-thumb w-img">
                        <img src="/assets/img/product/nav/product-nav-big-3.jpg" alt="" />
                      </div>
                    </div>

                    <div className="tab-pane fade" id="thumbThree">
                      <div className="product__details-nav-thumb w-img">
                        <img src="/assets/img/product/nav/product-nav-big-2.jpg" alt="" />
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="col-xl-6">
              <div className="product__details-content">

                <h6>Samsung Galaxy A12, 32GB, Black – (Locked)</h6>

                <div className="pd-rating mb-10">
                  <ul className="rating">
                    {[...Array(5)].map((_, i) => (
                      <li key={i}><a href="#"><i className="fal fa-star"></i></a></li>
                    ))}
                  </ul>
                  <span>(01 review)</span>
                  <span><a href="#">Add your review</a></span>
                </div>

                <div className="price mb-10">
                  <span>$216.00</span>
                </div>

                <div className="features-des mb-20 mt-10">
                  <ul>
                    <li><i className="fas fa-circle"></i> Bass and Stereo Sound.</li>
                    <li><i className="fas fa-circle"></i> Display 3088 x 1440 resolution.</li>
                    <li><i className="fas fa-circle"></i> 12GB RAM, 256GB Storage.</li>
                    <li><i className="fas fa-circle"></i> Android v10.0.</li>
                  </ul>
                </div>

                <div className="product-stock mb-20">
                  <h5>Availability: <span>940 in stock</span></h5>
                </div>

                <div className="cart-option mb-15">
                  <div className="product-quantity mr-20">
                    <div className="cart-plus-minus p-relative">
                      <input type="text" defaultValue="1" />
                      <div className="dec qtybutton">-</div>
                      <div className="inc qtybutton">+</div>
                    </div>
                  </div>
                  <a className="cart-btn">Add to Cart</a>
                </div>

                <div className="details-meta">
                  <div className="d-meta-left">
                    <div className="dm-item mr-20"><a href="#"><i className="fal fa-heart"></i>Add to wishlist</a></div>
                    <div className="dm-item"><a href="#"><i className="fal fa-layer-group"></i>Compare</a></div>
                  </div>
                  <div className="d-meta-left">
                    <div className="dm-item"><a href="#"><i className="fal fa-share-alt"></i>Share</a></div>
                  </div>
                </div>

                <div className="product-tag-area mt-15">
                  <div className="product_info">

                    <span className="sku_wrapper">
                      <span className="title">SKU:</span>
                      <span className="sku">DK1002</span>
                    </span>

                    <span className="posted_in">
                      <span className="title">Categories:</span>
                      <a href="#">iPhone</a>
                      <a href="#">Tablets</a>
                    </span>

                    <span className="tagged_as">
                      <span className="title">Tags:</span>
                      <a href="#">Smartphone</a>, <a href="#">Tablets</a>
                    </span>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* product-details-des-start */}
      <div className="product-details-des mt-40 mb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">

              <div className="product__details-des-tab">
                <ul className="nav nav-tabs">

                  <li className="nav-item">
                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#des">
                      Description
                    </button>
                  </li>

                  <li className="nav-item">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#aditional">
                      Additional Information
                    </button>
                  </li>

                  <li className="nav-item">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#review">
                      Reviews (1)
                    </button>
                  </li>

                </ul>
              </div>

            </div>
          </div>

          <div className="tab-content">

            {/* DESCRIPTION */}
            <div className="tab-pane fade show active" id="des">
              <div className="product__details-des-wrapper">

                <p className="des-text mb-35">
                  Designed by Hans Wegner in 1949…
                </p>

                <h6 className="des-sm-title">The standard passage…</h6>

                <p className="des-text mb-35">
                  A light chair, easy to move around…
                </p>

                <div className="features-des-image text-center">
                  <img src="/assets/img/features-product/product-content-1.jpg" alt="" />
                </div>

              </div>
            </div>

            {/* ADDITIONAL INFO */}
            <div className="tab-pane fade" id="aditional">
              <div className="product__desc-info">
                <ul>
                  <li><h6>Weight</h6><span>2 lbs</span></li>
                  <li><h6>Dimensions</h6><span>12 x 16 x 19</span></li>
                  <li><h6>Color</h6><span>Gray, Black</span></li>
                  <li><h6>Brand</h6><span>Kazen</span></li>
                </ul>
              </div>
            </div>

            {/* REVIEW */}
            <div className="tab-pane fade" id="review">
              <div className="product__details-review">
                <h5>5.00</h5>
                <div className="review-star">
                  {[...Array(5)].map((_, i) => (
                    <a key={i}><i className="fas fa-star"></i></a>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </main>
  );
};

export default Productdetails;

