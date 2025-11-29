import React, { useState, useMemo } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const ProductList = () => {
  // --- Data / Pagination state ---
  const totalItems = 29;          // total results (same as your text before)
  const perPage = 20;             // items per page
  const [currentPage, setCurrentPage] = useState(1);

  // --- Filter state ---
  const [price, setPrice] = useState([0, 500]);

  // --- Derived values for pagination display ---
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const startIndex = (currentPage - 1) * perPage + 1;
  const endIndex = Math.min(totalItems, currentPage * perPage);

  // --- Page buttons to show (simple range with a sliding window) ---
  const pageButtons = useMemo(() => {
    const visible = 5; // max visible page buttons
    let start = Math.max(1, currentPage - Math.floor(visible / 2));
    let end = start + visible - 1;
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - visible + 1);
    }
    const arr = [];
    for (let p = start; p <= end; p++) arr.push(p);
    return arr;
  }, [currentPage, totalPages]);

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return;
    setCurrentPage(p);
    window.scrollTo({ top: 200, behavior: "smooth" }); // nice UX to scroll up
  };

  // --- Mobile filter panel controls (DOM based but simple) ---
  const openFilters = () => {
    const panel = document.querySelector(".mobile-filter-panel");
    const overlay = document.querySelector(".filter-overlay");
    if (panel) panel.classList.add("active");
    if (overlay) overlay.classList.add("show");
  };
  const closeFilters = () => {
    const panel = document.querySelector(".mobile-filter-panel");
    const overlay = document.querySelector(".filter-overlay");
    if (panel) panel.classList.remove("active");
    if (overlay) overlay.classList.remove("show");
  };

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

            {/* LEFT SIDEBAR - DESKTOP */}
            <div className="col-xl-3 col-lg-4 d-none d-lg-block">

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
                  <form className="s-form mt-20" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" readOnly value={`$${price[0]} - $${price[1]}`} />
                    <button type="submit" className="tp-btn-square-lg">Filter</button>
                  </form>
                </div>
              </div>

              {/* COLOR FILTER */}
              <div className="product-widget mb-30">
                <h5 className="pt-title">Choose Color</h5>
                <div className="product__color mt-20">
                  <ul>
                    {["black", "blue", "red", "yellow", "pink", "brown", "green", "orange"].map(
                      (c, i) => (
                        <li key={i}><a href="#" className={c} /></li>
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
                          <i key={idx} className={idx < stars ? "fas fa-star" : "fal fa-star"} />
                        ))}
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


            {/* MOBILE FILTER BUTTON */}
                <div className="d-lg-none text-end mb-15">
                    <button className="tp-btn-square-lg " onClick={openFilters}>
                    <i className="fas fa-filter" /> Filters
                    </button>
                </div>


              {/* PRODUCT FILTER BAR */}
              <div className="product-lists-top">
                <div className="product__filter-wrap">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="product__filter d-sm-flex align-items-center">
                        <div className="product__col">
                          <ul className="nav nav-tabs">
                            <li className="nav-item">
                              <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#grid">
                                <i className="fal fa-th" />
                              </button>
                            </li>
                            <li className="nav-item">
                              <button className="nav-link" data-bs-toggle="tab" data-bs-target="#list">
                                <i className="fal fa-list" />
                              </button>
                            </li>
                          </ul>
                        </div>

                        <div className="product__result pl-60">
                          <p>Showing {startIndex}–{endIndex} of {totalItems} results</p>
                        </div>
                      </div>
                    </div>

                   <div className="col-md-6 d-flex justify-content-end align-items-center gap-3">

                    {/* Items Per Page */}
                    <div className="product-sort-box">
                        <select className="form-select">
                        {[10, 20, 30, 40].map(n => (
                            <option key={n}>{n} per page</option>
                        ))}
                        </select>
                    </div>

                    {/* Sort by */}
                    <div className="product-sort-box">
                        <select className="form-select">
                        <option value="latest">Latest</option>
                        <option value="new">New</option>
                        <option value="upcoming">Upcoming</option>
                        </select>
                    </div>

                    </div>

                  </div>
                </div>
              </div>

              {/* PRODUCT GRID */}
              <div className="tab-content">
                <div className="tab-pane fade show active" id="grid">
                  <div className="row g-3">
                    {/* Render only perPage items as placeholders */}
                    {Array.from({ length: Math.min(perPage, totalItems - (currentPage - 1) * perPage) }).map((_, i) => {
                      const idx = (currentPage - 1) * perPage + i;
                      return (
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={idx}>
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
                              <h6><a href="/product-details">Sample Product {idx + 1}</a></h6>
                              <div className="rating mb-5">
                                <ul>
                                  {[...Array(5)].map((_, idx2) => (
                                    <li key={idx2}><i className="fal fa-star" /></li>
                                  ))}
                                </ul>
                                <span>(01 review)</span>
                              </div>
                              <div className="price mb-10"><span>$110 - $150</span></div>
                            </div>

                            <div className="product__add-cart-s text-center">
                              <button className="cart-btn w-100">Add to Cart</button>
                              <button className="wc-checkout w-100">Quick View</button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* PAGINATION */}
              <div className="tp-pagination text-center">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="basic-pagination pt-30 pb-30" role="navigation" aria-label="Pagination">
                      <nav>
                        <ul className="pagination-list" style={{ display: "inline-flex", gap: 8, alignItems: "center", padding: 0, listStyle: "none" }}>
                          {/* Prev */}
                          <li>
                            <button
                              onClick={() => goToPage(currentPage - 1)}
                              disabled={currentPage === 1}
                              aria-label="Previous page"
                              className="page-btn"
                            >
                              <i className="fal fa-angle-left" />
                            </button>
                          </li>

                          {/* First + ellipsis if needed */}
                          {pageButtons[0] > 1 && (
                            <>
                              <li><button onClick={() => goToPage(1)} className="page-btn">1</button></li>
                              {pageButtons[0] > 2 && <li><span className="dots">…</span></li>}
                            </>
                          )}

                          {/* Visible pages */}
                          {pageButtons.map((p) => (
                            <li key={p}>
                              <button
                                onClick={() => goToPage(p)}
                                className={`page-btn ${p === currentPage ? "active" : ""}`}
                                aria-current={p === currentPage ? "page" : undefined}
                              >
                                {p}
                              </button>
                            </li>
                          ))}

                          {/* Last + ellipsis if needed */}
                          {pageButtons[pageButtons.length - 1] < totalPages && (
                            <>
                              {pageButtons[pageButtons.length - 1] < totalPages - 1 && <li><span className="dots">…</span></li>}
                              <li><button onClick={() => goToPage(totalPages)} className="page-btn">{totalPages}</button></li>
                            </>
                          )}

                          {/* Next */}
                          <li>
                            <button
                              onClick={() => goToPage(currentPage + 1)}
                              disabled={currentPage === totalPages}
                              aria-label="Next page"
                              className="page-btn"
                            >
                              <i className="fal fa-angle-right" />
                            </button>
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

      {/* MOBILE FILTER PANEL */}
      <div className="mobile-filter-panel d-lg-none" aria-hidden="true">
        <div className="mobile-filter-header">
          <h5>Filters</h5>
          <button className="close-btn" onClick={closeFilters} aria-label="Close filters">
            <i className="fal fa-times" />
          </button>
        </div>

        <div className="mobile-filter-content">

          {/* CATEGORY */}
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
                  <input type="checkbox" id={`m-cat-item-${i}`} />
                  <label htmlFor={`m-cat-item-${i}`}>{label}</label>
                </div>
              ))}
            </div>
          </div>

          {/* PRICE */}
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
              <form className="s-form mt-20" onSubmit={(e) => e.preventDefault()}>
                <input type="text" readOnly value={`$${price[0]} - $${price[1]}`} />
                <button type="submit" className="tp-btn-square-lg">Filter</button>
              </form>
            </div>
          </div>

          {/* COLOR */}
          <div className="product-widget mb-30">
            <h5 className="pt-title">Choose Color</h5>
            <div className="product__color mt-20">
              <ul>
                {["black", "blue", "red", "yellow", "pink", "brown", "green", "orange"].map(
                  (c, i) => (
                    <li key={i}><a href="#" className={c} /></li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* SIZE */}
          <div className="product-widget mb-30">
            <h5 className="pt-title">Choose Size</h5>
            <div className="widget-category-list mt-20">
              {["S (12)", "L (60)", "M (41)", "XXL (28)", "2XL (21)", "3XL (62)"].map(
                (label, i) => (
                  <div key={i} className="single-widget-category">
                    <input type="checkbox" id={`m-size-${i}`} />
                    <label htmlFor={`m-size-${i}`}>{label}</label>
                  </div>
                )
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Overlay */}
      <div className="filter-overlay" onClick={closeFilters} />

    </main>
  );
};

export default ProductList;
