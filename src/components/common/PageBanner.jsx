import React from "react";

const PageBanner = ({ title }) => {
  return (
    <div
      className="page-banner-area page-banner-height-2"
      data-background="/assets/img/banner/page-banner-4.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-banner-content text-center">
              <h4 className="breadcrumb-title">{title}</h4>
              <div className="breadcrumb-two">
                <nav className="breadcrumb-trail breadcrumbs">
                  <ul className="breadcrumb-menu">
                    <li className="breadcrumb-trail">
                      <a href="/">Home</a>
                    </li>
                    <li className="trail-item">
                      <span>{title}</span>
                    </li>
                  </ul>
                </nav>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
