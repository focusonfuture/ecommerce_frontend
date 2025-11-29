import React from "react";
import { Link } from "react-router-dom";

const Whishlist = () => {
  return (
    <main>

      {/* Banner */}
      <div
        className="page-banner-area page-banner-height-2"
        data-background="/assets/img/banner/page-banner-4.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-banner-content text-center">
                <h4 className="breadcrumb-title">My Wishlist</h4>

                <div className="breadcrumb-two">
                  <nav className="breadcrumb-trail breadcrumbs">
                    <ul className="breadcrumb-menu">
                      <li>
                        <Link to="/"><span>Home</span></Link>
                      </li>
                      <li className="trail-item active">
                        <span>Wishlist</span>
                      </li>
                    </ul>
                  </nav>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wishlist Section */}
      <section className="cart-area pb-120 pt-120">
        <div className="container">

          <div className="table-content table-responsive wishlist-table">
            <table className="table table-borderless align-middle">
              <thead className="wishlist-header">
                <tr>
                  <th className="text-start">Image</th>
                  <th>Product</th>
                  <th>Unit Price</th>
                  <th>Add</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>

                {/* Item 1 */}
                <tr className="wishlist-item">
                  <td>
                    <Link to="/product/light-jacket">
                      <img
                        src="/assets/img/cart/shop-p-10.jpg"
                        alt=""
                        className="wishlist-img"
                      />
                    </Link>
                  </td>

                  <td>
                    <Link to="/product/light-jacket" className="wishlist-title">
                      Light Jacket
                    </Link>
                  </td>

                  <td className="wishlist-price">$130.00</td>

                  <td>
                    <button className="tp-btn-h1 tp-btn-add">Add To Cart</button>
                  </td>

                  <td className="wishlist-total">$130.00</td>

                  <td>
                    <button className="product-remove wishlist-remove">
                      <i className="fa fa-times"></i>
                    </button>
                  </td>
                </tr>

                {/* Item 2 */}
                <tr className="wishlist-item">
                  <td>
                    <Link to="/product/pink-jacket">
                      <img
                        src="/assets/img/cart/shop-p-11.jpg"
                        alt=""
                        className="wishlist-img"
                      />
                    </Link>
                  </td>

                  <td>
                    <Link to="/product/pink-jacket" className="wishlist-title">
                      Pink Jacket
                    </Link>
                  </td>

                  <td className="wishlist-price">$120.50</td>

                  <td>
                    <button className="tp-btn-h1 tp-btn-add">Add To Cart</button>
                  </td>

                  <td className="wishlist-total">$120.50</td>

                  <td>
                    <button className="product-remove wishlist-remove">
                      <i className="fa fa-times"></i>
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Whishlist;
