import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleTrack = (e) => {
    e.preventDefault();

    if (!orderId || !email) {
      alert("Enter Order ID and Email");
      return;
    }

    navigate(`/order-tracking/result?order=${orderId}&email=${email}`);
  };

  return (
    <section className="order-tracking-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="order-tracking-box shadow-sm p-4 bg-white rounded">

              <h3 className="text-center mb-4">Track Your Order</h3>

              <form onSubmit={handleTrack}>
                <div className="form-group mb-3">
                  <label>
                    Order ID <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="order-input"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    placeholder="Enter Order ID"
                  />
                </div>

                <div className="form-group mb-3">
                  <label>
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    className="order-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                  />
                </div>

                <button className="tp-btn-h1 w-100 mt-3">
                  Track Now
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderTracking;
