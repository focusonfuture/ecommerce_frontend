import React from "react";
import { useSearchParams } from "react-router-dom";

const OrderTrackingResult = () => {
  const [params] = useSearchParams();

  const orderId = params.get("order");
  const email = params.get("email");

  // Later you will replace with backend status:
  // Example order status index (0–4)
  const currentStatusIndex = 2; // shipped (you can change)

  const steps = [
    { label: "Order Placed", icon: "fas fa-check-circle" },
    { label: "Processing", icon: "fas fa-sync-alt" },
    { label: "Shipped", icon: "fas fa-shipping-fast" },
    { label: "Out for Delivery", icon: "fas fa-truck" },
    { label: "Delivered", icon: "fas fa-home" },
  ];

  return (
    <section className="order-result-area pt-120 pb-120">
      <div className="container">

        <h2 className="mb-4">Order Tracking Details</h2>

        <div className="order-info-box p-4 bg-white shadow-sm rounded">

          <p><strong>Order ID:</strong> {orderId}</p>
          <p><strong>Email:</strong> {email}</p>

          <hr />

          {/* ===== STATUS TIMELINE ===== */}
          <div className="tracking-wrapper">
            <h3 className="tracking-title">Order Status</h3>

            <div className="tracking-timeline">

              {steps.map((step, index) => {
                const active = index <= currentStatusIndex;

                return (
                  <div
                    key={index}
                    className={`tracking-step ${active ? "active" : ""}`}
                  >
                    <div className="tracking-icon">
                      <i className={step.icon}></i>
                    </div>
                    <p className="tracking-label">{step.label}</p>
                  </div>
                );
              })}

              {/* PROGRESS BAR */}
              <div className="tracking-progress-bar">
                <div
                  className="tracking-progress"
                  style={{
                    width: `${(currentStatusIndex / (steps.length - 1)) * 100}%`,
                  }}
                ></div>
              </div>

            </div>
          </div>

          <p className="mt-3 text-muted">
            Your oder status process is shown above. For more details, contact our support.
          </p>

        </div>
      </div>
    </section>
  );
};

export default OrderTrackingResult;
