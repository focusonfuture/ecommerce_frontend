import React from "react";

const Terms = () => {
  return (
    <main>
      {/* breadcrumb__area-start */}
      <section className="breadcrumb__area box-plr-75">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__wrapper">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Terms & Conditions
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb__area-end */}

      {/* terms-area-start */}
      <div className="terms-area pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="abs-section-title text-center mb-50">
                <h4>Terms & Conditions</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="terms-content">
                <h5>Eligibility</h5>
                <p>
                  To use our services, you must be at least 18 years old or have parental consent. By accessing our website, you agree to comply with these terms.
                </p>

                <h5>Accounts</h5>
                <p>
                  You are responsible for maintaining the confidentiality of your account information. Notify us immediately of any unauthorized use.
                </p>

                <h5>Pricing</h5>
                <p>
                  All prices are subject to change without notice. We reserve the right to modify pricing at any time.
                </p>

                <h5>Payments</h5>
                <p>
                  Payments must be made in full at the time of purchase. We accept various payment methods as listed on our website.
                </p>

                <h5>Liability</h5>
                <p>
                  We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.
                </p>

                <h5>Changes</h5>
                <p>
                  We may update these terms at any time. Continued use of our services constitutes acceptance of the new terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* terms-area-end */}
    </main>
  );
};

export default Terms;