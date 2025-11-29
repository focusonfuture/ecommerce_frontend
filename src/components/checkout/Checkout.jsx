import React, { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [showDifferentAddress, setShowDifferentAddress] = useState(false);

  return (
    <main>

      {/* page-banner-area-start */}
      <div
        className="page-banner-area page-banner-height-2"
        style={{ backgroundImage: "url(/assets/img/banner/page-banner-4.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-banner-content text-center">
                <h4 className="breadcrumb-title">Checkout</h4>

                <div className="breadcrumb-two">
                  <nav className="breadcrumb-trail breadcrumbs">
                    <ul className="breadcrumb-menu">
                      <li className="breadcrumb-trail">
                        <Link to="/"><span>Home</span></Link>
                      </li>
                      <li className="trail-item">
                        <span>Checkout</span>
                      </li>
                    </ul>
                  </nav>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page-banner-area-end */}

      {/* coupon-area-start */}
      <section className="coupon-area pt-120 pb-30">
        <div className="container">

          <div className="row">

            {/* LOGIN ACCORDION */}
            <div className="col-md-6">
              <div className="coupon-accordion">
                <h3>
                  Returning customer? <span>Click here to login</span>
                </h3>

                <div id="checkout-login" className="coupon-content">
                  <div className="coupon-info">
                    <p className="coupon-text">
                      Quisque gravida turpis sit amet nulla posuere lacinia.
                    </p>

                    <form action="#">
                      <p className="form-row-first">
                        <label>Username or email <span>*</span></label>
                        <input type="text" />
                      </p>

                      <p className="form-row-last">
                        <label>Password <span>*</span></label>
                        <input type="text" />
                      </p>

                      <p className="form-row">
                        <button type="submit" className="tp-btn-h1">Login</button>
                        <label>
                          <input type="checkbox" /> Remember me
                        </label>
                      </p>

                      <p className="lost-password">
                        <a href="#">Lost your password?</a>
                      </p>
                    </form>

                  </div>
                </div>

              </div>
            </div>

            {/* COUPON ACCORDION */}
            <div className="col-md-6">
              <div className="coupon-accordion">

                <h3>
                  Have a coupon? <span>Click here to enter your code</span>
                </h3>

                <div id="checkout_coupon" className="coupon-checkout-content">
                  <div className="coupon-info">
                    <form action="#">
                      <p className="checkout-coupon">
                        <input type="text" placeholder="Coupon Code" />
                        <button type="submit" className="tp-btn-h1">
                          Apply Coupon
                        </button>
                      </p>
                    </form>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>
      {/* coupon-area-end */}

      {/* checkout-area-start */}
      <section className="checkout-area pb-85">
        <div className="container">
          <form action="#">
            <div className="row">

              {/* LEFT — BILLING DETAILS */}
              <div className="col-lg-6">
                <div className="checkbox-form">

                  <h3>Billing Details</h3>

                  <div className="row">

                    {/* Country */}
                    <div className="col-md-12">
                      <div className="country-select">
                        <label>Country <span>*</span></label>
                        <select>
                          <option>Bangladesh</option>
                          <option>Algeria</option>
                          <option>Afghanistan</option>
                          <option>Ghana</option>
                          <option>Albania</option>
                          <option>Bahrain</option>
                          <option>Colombia</option>
                          <option>Dominican Republic</option>
                        </select>
                      </div>
                    </div>

                    {/* First/Last Name */}
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>First Name <span>*</span></label>
                        <input type="text" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>Last Name <span>*</span></label>
                        <input type="text" />
                      </div>
                    </div>

                    {/* Company */}
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>Company Name</label>
                        <input type="text" />
                      </div>
                    </div>

                    {/* Address */}
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>Address <span>*</span></label>
                        <input type="text" placeholder="Street address" />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <input
                          type="text"
                          placeholder="Apartment, suite, unit (optional)"
                        />
                      </div>
                    </div>

                    {/* Town / City */}
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>Town / City <span>*</span></label>
                        <input type="text" />
                      </div>
                    </div>

                    {/* State / Zip */}
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>State / County <span>*</span></label>
                        <input type="text" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>Postcode / Zip <span>*</span></label>
                        <input type="text" />
                      </div>
                    </div>

                    {/* Email / Phone */}
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>Email <span>*</span></label>
                        <input type="email" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>Phone <span>*</span></label>
                        <input type="text" />
                      </div>
                    </div>

                    {/* Create Account */}
                    <div className="col-md-12">
                      <div className="checkout-form-list create-acc">
                        <input id="cbox" type="checkbox" />
                        <label>Create an account?</label>
                      </div>

                      <div className="checkout-form-list create-account">
                        <p>
                          Create an account by entering the information below.
                        </p>
                        <label>Password <span>*</span></label>
                        <input type="password" />
                      </div>
                    </div>

                  </div>

                  {/* Ship to different address */}
                  <div className="different-address">

                    <div className="ship-different-title">
                      <h3>
                        <label>Ship to a different address?</label>
                        <input
                          id="ship-box"
                          type="checkbox"
                          checked={showDifferentAddress}
                          onChange={() =>
                            setShowDifferentAddress(!showDifferentAddress)
                          }
                        />
                      </h3>
                    </div>

                    {/* SHOW/HIDE SHIPPING FORM */}
                    <div
                      id="ship-box-info"
                      style={{
                        display: showDifferentAddress ? "block" : "none",
                      }}
                    >
                      <div className="row">

                        {/* SAME FIELDS AS BILLING */}
                        <div className="col-md-12">
                          <div className="country-select">
                            <label>Country <span>*</span></label>
                            <select>
                              <option>Bangladesh</option>
                              <option>Algeria</option>
                              <option>Afghanistan</option>
                              <option>Ghana</option>
                              <option>Albania</option>
                              <option>Bahrain</option>
                              <option>Colombia</option>
                              <option>Dominican Republic</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="checkout-form-list">
                            <label>First Name <span>*</span></label>
                            <input type="text" />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="checkout-form-list">
                            <label>Last Name <span>*</span></label>
                            <input type="text" />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="checkout-form-list">
                            <label>Company Name</label>
                            <input type="text" />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="checkout-form-list">
                            <label>Address <span>*</span></label>
                            <input type="text" placeholder="Street address" />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="checkout-form-list">
                            <input
                              type="text"
                              placeholder="Apartment, suite, unit (optional)"
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="checkout-form-list">
                            <label>Town / City <span>*</span></label>
                            <input type="text" />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="checkout-form-list">
                            <label>State / County <span>*</span></label>
                            <input type="text" />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="checkout-form-list">
                            <label>Postcode / Zip <span>*</span></label>
                            <input type="text" />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="checkout-form-list">
                            <label>Email Address <span>*</span></label>
                            <input type="email" />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="checkout-form-list">
                            <label>Phone <span>*</span></label>
                            <input type="text" />
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="order-notes">
                      <div className="checkout-form-list">
                        <label>Order Notes</label>
                        <textarea
                          cols="30"
                          rows="10"
                          placeholder="Notes about your order, e.g. special notes for delivery..."
                        ></textarea>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

              {/* RIGHT — ORDER SUMMARY */}
              <div className="col-lg-6">

                <div className="your-order mb-30">
                  <h3>Your order</h3>

                  <div className="your-order-table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product-name">Product</th>
                          <th className="product-total">Total</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="cart_item">
                          <td className="product-name">
                            Vestibulum suscipit <strong className="product-quantity">× 1</strong>
                          </td>
                          <td className="product-total">
                            <span className="amount">$165.00</span>
                          </td>
                        </tr>

                        <tr className="cart_item">
                          <td className="product-name">
                            Vestibulum dictum magna <strong className="product-quantity">× 1</strong>
                          </td>
                          <td className="product-total">
                            <span className="amount">$50.00</span>
                          </td>
                        </tr>
                      </tbody>

                      <tfoot>
                        <tr className="cart-subtotal">
                          <th>Cart Subtotal</th>
                          <td><span className="amount">$215.00</span></td>
                        </tr>

                        <tr className="shipping">
                          <th>Shipping</th>
                          <td>
                            <ul>
                              <li>
                                <input type="radio" name="shipping" />
                                <label>
                                  Flat Rate: <span className="amount">$7.00</span>
                                </label>
                              </li>
                              <li>
                                <input type="radio" name="shipping" />
                                <label>Free Shipping</label>
                              </li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="order-total">
                          <th>Order Total</th>
                          <td><strong><span className="amount">$215.00</span></strong></td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className="payment-method">

                    <div className="accordion" id="checkoutAccordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="checkoutOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#bankOne"
                            aria-expanded="true"
                          >
                            Direct Bank Transfer
                          </button>
                        </h2>

                        <div
                          id="bankOne"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#checkoutAccordion"
                        >
                          <div className="accordion-body">
                            <p>
                             Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header" id="paymentTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#payment"
                          >
                            Cheque Payment
                          </button>
                        </h2>

                        <div
                          id="payment"
                          className="accordion-collapse collapse"
                          data-bs-parent="#checkoutAccordion"
                        >
                          <div className="accordion-body">
                            <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header" id="paypalThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#paypal"
                          >
                            PayPal
                          </button>
                        </h2>

                        <div
                          id="paypal"
                          className="accordion-collapse collapse"
                          data-bs-parent="#checkoutAccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Place Order */}
                    <div className="order-button-payment mt-20">
                      <button type="submit" className="tp-btn-h1">Place order</button>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </form>
        </div>
      </section>
      {/* checkout-area-end */}

    </main>
  );
};

export default Checkout;
