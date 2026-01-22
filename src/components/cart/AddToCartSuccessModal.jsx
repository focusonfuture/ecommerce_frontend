import React, { useEffect } from "react";
import "./addToCartSuccess.css";

const AddToCartSuccess = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      onClose();
    }, 1200);

    return () => clearTimeout(timer);
  }, [open, onClose]);

  //  KEY POINT: if not open, render NOTHING
  if (!open) return null;

  return (
    <>
      {/* BACKDROP */}
      <div className="cart-success-backdrop" />

      {/* TOP CENTER SUCCESS */}
      <div className="cart-success-top">
        <div className="cart-success-toast">
          <div className="icon-wrap">
            <i className="fas fa-shopping-cart"></i>
          </div>

          <div className="text-wrap">
            <h4>Added to cart</h4>
              <p> Your product was added successfully <span className="success-tick">✔</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCartSuccess;
