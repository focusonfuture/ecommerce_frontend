import React from "react";
import { Link } from "react-router-dom";

const Whishlist = () => {
  return (
    <main>
     

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
                    <button className="tp-btn-h1 tp-btn-add">
                      Add To Cart
                    </button>
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
                    <button className="tp-btn-h1 tp-btn-add">
                      Add To Cart
                    </button>
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
