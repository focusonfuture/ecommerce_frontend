import React, { useEffect } from "react";
import "../../index.css";
// make sure index.css contains the animation CSS

const Preloader = () => {
  useEffect(() => {
    // fade-out
    const timer = setTimeout(() => {
      const el = document.getElementById("loading");
      if (el) el.classList.add("hide");
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loading">
      <div id="loading-center">
        <div id="loading-center-absolute">

          <svg viewBox="0 0 58 58" id="mustard" className="product">
            <g>
              <path style={{ fill: "#ED7161" }} d="M39.869,58H18.131C16.954,58,16,57.046,16,55.869V12.621C16,11.726,16.726,11,17.621,11h22.757C41.274,11,42,11.726,42,12.621v43.248C42,57.046,41.046,58,39.869,58z" />
              <polygon style={{ fill: "#D13834" }} points="35,11 23,11 27.615,0 30.385,0" />
              <rect x="16" y="16" style={{ fill: "#D75A4A" }} width="26" height="2" />
              <rect x="20" y="11" style={{ fill: "#D75A4A" }} width="2" height="6" />
              <rect x="25" y="11" style={{ fill: "#D75A4A" }} width="2" height="6" />
              <rect x="30" y="11" style={{ fill: "#D75A4A" }} width="2" height="6" />
              <rect x="36" y="11" style={{ fill: "#D75A4A" }} width="2" height="6" />
              <circle style={{ fill: "#D13834" }} cx="29" cy="36" r="10" />
            </g>
          </svg>

          <svg viewBox="0 0 49.818 49.818" id="meat" className="product">
            {/* ... keep your meat SVG EXACTLY as is ... */}
          </svg>

          <svg viewBox="0 0 49 49" id="soda" className="product">
            {/* ... keep your soda SVG EXACTLY as is ... */}
          </svg>

        </div>
      </div>
    </div>
  );
};

export default Preloader;
