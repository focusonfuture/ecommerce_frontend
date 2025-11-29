import React from "react";
import { useParams, Link } from "react-router-dom";

const MyOrdersDetails = () => {
  const { id } = useParams();

  const steps = [
    { label: "Order Placed", icon: "fas fa-check-circle" },
    { label: "Packed", icon: "fas fa-box" },
    { label: "Shipped", icon: "fas fa-shipping-fast" },
    { label: "Out for Delivery", icon: "fas fa-truck" },
    { label: "Delivered", icon: "fas fa-home" },
  ];

  const currentStep = 2;

  return (
    <section className="orderdetails-area pt-120 pb-120">
      <div className="container">

        <h2 className="mb-4 fw-bold">Order Details</h2>

        <div className="order-details-box shadow-sm bg-white p-4 rounded">

          {/* ORDER INFO */}
          <div className="mb-3">
            <p><strong>Order ID:</strong> {id}</p>
            <p><strong>Status:</strong> {steps[currentStep].label}</p>
          </div>

          <hr />

          {/* ORDER ITEMS */}
          <h4 className="fw-bold mb-3">Items</h4>

          <div className="order-items-list">

            {/* ITEM 1 */}
            <div className="order-item-card">
              <img
                src="/assets/img/cart/shop-p-10.jpg"
                className="item-thumb"
                alt=""
              />

              <div className="item-info">
                <h5 className="item-title">Blue Jacket Winter Edition</h5>

                <p className="item-spec">
                  <strong>Color:</strong> Blue &nbsp; | &nbsp;
                  <strong>Size:</strong> M
                </p>

                <p className="item-price">
                  Price: <strong>$130.00</strong>
                </p>

                <p className="item-qty">Quantity: <strong>1</strong></p>

                <Link to="/product/blue-jacket-winter-edition" className="item-link">
                  View Product →
                </Link>
              </div>

              <div className="item-subtotal">
                <strong>$130.00</strong>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="order-item-card">
              <img
                src="/assets/img/cart/shop-p-11.jpg"
                className="item-thumb"
                alt=""
              />

              <div className="item-info">
                <h5 className="item-title">Sneakers - Premium Edition</h5>

                <p className="item-spec">
                  <strong>Color:</strong> White &nbsp; | &nbsp;
                  <strong>Size:</strong> 42
                </p>

                <p className="item-price">
                  Price: <strong>$120.50</strong>
                </p>

                <p className="item-qty">Quantity: <strong>2</strong></p>

                <Link to="/product/sneakers-premium-edition" className="item-link">
                  View Product →
                </Link>
              </div>

              <div className="item-subtotal">
                <strong>$241.00</strong>
              </div>
            </div>

          </div>

          <hr />

          {/* TRACKING STATUS */}
          <h4 className="fw-bold mb-4">Tracking Status</h4>

          <div className="tracking-container">

            <div className="progress-line">
              <div
                className="progress-fill"
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>

            <div className="step-icons">
              {steps.map((step, index) => {
                const active = index <= currentStep;

                return (
                  <div key={index} className="step-wrapper">
                    <div className={`step-circle ${active ? "active" : ""}`}>
                      <i className={step.icon}></i>
                    </div>

                    <p className={`step-text ${active ? "active" : ""}`}>
                      {step.label}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>

    
    </section>
  );
};

export default MyOrdersDetails;
