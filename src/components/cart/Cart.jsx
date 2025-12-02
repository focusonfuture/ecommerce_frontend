// src/components/cart/Cart.jsx
import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <section className="cart-area pt-120 pb-120">
      <div className="container">
        {/* CART TABLE */}
        <div className="table-content table-responsive shadow-sm p-3 bg-white rounded">
          <table className="table cart-table align-middle">
            <thead className="cart-header">
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody>
              {/* ITEM 1 */}
              <tr className="cart-item-row">
                <td className="product-thumbnail">
                  <Link to="/product/jacket-light">
                    <img
                      src="/assets/img/cart/shop-p-10.jpg"
                      alt=""
                      className="cart-img"
                    />
                  </Link>
                </td>

                <td className="product-name">
                  <Link
                    to="/product/jacket-light"
                    className="cart-product-title"
                  >
                    Jacket Light
                  </Link>
                </td>

                <td className="product-price">$130.00</td>

                <td>
                  <div className="qty-box">
                    <button className="qty-btn">−</button>
                    <input type="text" value="1" readOnly />
                    <button className="qty-btn">+</button>
                  </div>
                </td>

                <td className="product-subtotal">$130.00</td>

                <td>
                  <button className="remove-btn">
                    <i className="fa fa-times"></i>
                  </button>
                </td>
              </tr>

              {/* ITEM 2 */}
              <tr className="cart-item-row">
                <td className="product-thumbnail">
                  <Link to="/product/jacket-pink">
                    <img
                      src="/assets/img/cart/shop-p-11.jpg"
                      alt=""
                      className="cart-img"
                    />
                  </Link>
                </td>

                <td className="product-name">
                  <Link
                    to="/product/jacket-pink"
                    className="cart-product-title"
                  >
                    Jacket Pink
                  </Link>
                </td>

                <td className="product-price">$120.50</td>

                <td>
                  <div className="qty-box">
                    <button className="qty-btn">−</button>
                    <input type="text" value="1" readOnly />
                    <button className="qty-btn">+</button>
                  </div>
                </td>

                <td className="product-subtotal">$120.50</td>

                <td>
                  <button className="remove-btn">
                    <i className="fa fa-times"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* COUPON + UPDATE */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="coupon-all d-flex justify-content-between align-items-center">
              <div className="coupon d-flex gap-2">
                <input
                  className="input-text text-center "
                  placeholder="Coupon code"
                  type="text"
                />
                <button className="tp-btn-h1">Apply Coupon</button>
              </div>

              <div>
                <button className="tp-btn-h1">Update Cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* TOTALS SECTION */}
        <div className="row justify-content-end mt-5">
          <div className="col-md-5">
            <div className="cart-page-total shadow-sm p-4 bg-white rounded">
              <h2 className="mb-4">Cart Totals</h2>

              <ul className="mb-4">
                <li>
                  Subtotal <span>$250.00</span>
                </li>
                <li>
                  Total <span>$250.00</span>
                </li>
              </ul>

              <Link
                to="/checkout"
                className="tp-btn-h1 w-100 text-center d-block"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
