import React from "react";
import { Link } from "react-router-dom";

const MyOrders = () => {
  return (
    <section className="myorders-area pt-120 pb-120">
      <div className="container">
        <h2 className="mb-4 fw-bold">My Orders</h2>

        <div className="orders-list shadow-sm bg-white p-4 rounded">

          {/* ORDER ITEM 1 */}
          <div className="order-card">
            <div className="order-info">
              <h5 className="order-id">Order #1001</h5>
              <span className="order-status delivered">Delivered</span>
              <p className="order-date">Placed on: Jan 5, 2025</p>
            </div>

            <Link to="/my-orders/1001" className="tp-btn-h1 order-btn">
              View Details
            </Link>
          </div>

          {/* ORDER ITEM 2 */}
          <div className="order-card">
            <div className="order-info">
              <h5 className="order-id">Order #1002</h5>
              <span className="order-status shipped">Shipped</span>
              <p className="order-date">Placed on: Jan 10, 2025</p>
            </div>

            <Link to="/my-orders/1002" className="tp-btn-h1 order-btn">
              View Details
            </Link>
          </div>

        </div>
      </div>

      <style>{`
        .orders-list {
          border-radius: 10px;
        }

        .order-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 20px;
          border: 1px solid #eee;
          border-radius: 10px;
          margin-bottom: 15px;
          transition: 0.3s ease;
        }

        .order-card:hover {
          border-color: #ccc;
          background: #fafafa;
          transform: translateY(-2px);
        }

        .order-info h5 {
          margin: 0;
          font-weight: 600;
        }

        .order-date {
          margin: 4px 0 0;
          font-size: 14px;
          color: #777;
        }

        .order-status {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          margin-top: 6px;
        }

        .delivered {
          background: #e6ffee;
          color: #0f8f3f;
        }

        .shipped {
          background: #eaf3ff;
          color: #1a73e8;
        }

        .order-btn {
          padding: 8px 18px;
          border-radius: 6px;
        }

        @media (max-width: 576px) {
          .order-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .order-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default MyOrders;
