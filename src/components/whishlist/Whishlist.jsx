import React from "react";

const Whishlist = () => {
  return (
    <main>
      <div
        className="page-banner-area page-banner-height-2"
        data-background="assets/img/banner/page-banner-4.jpg"
      >
        <div className="container">
          <h4 className="breadcrumb-title">Wishlist</h4>
        </div>
      </div>

      <section className="cart-area pb-120 pt-120">
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Images</th>
                <th>Product</th>
                <th>Unit Price</th>
                <th>Action</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <img src="assets/img/cart/shop-p-10.jpg" alt="" />
                </td>
                <td>Light Jacket</td>
                <td>$130.00</td>
                <td>
                  <button className="tp-btn-h1">Add To Cart</button>
                </td>
                <td>$130.00</td>
                <td>
                  <button>
                    <i className="fa fa-times"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Whishlist;
