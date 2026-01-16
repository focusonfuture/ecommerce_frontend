import React from "react";

const PrivacyPolicy = () => {
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
                      Privacy Policy
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb__area-end */}

      {/* privacy-area-start */}
      <div className="privacy-area pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="abs-section-title text-center mb-50">
                <h4>Privacy Policy</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="privacy-content">
                <h5>Data Collected</h5>
                <p>
                  We collect personal information such as name, email, and payment details when you register or make a purchase.
                </p>

                <h5>Usage</h5>
                <p>
                  Your data is used to process orders, provide customer support, and improve our services.
                </p>

                <h5>Cookies</h5>
                <p>
                  We use cookies to enhance your browsing experience and analyze site traffic.
                </p>

                <h5>Sharing</h5>
                <p>
                  We do not sell your personal information. It may be shared with third parties only for service provision.
                </p>

                <h5>Security</h5>
                <p>
                  We implement security measures to protect your data from unauthorized access.
                </p>

                <h5>User Rights</h5>
                <p>
                  You have the right to access, update, or delete your personal information.
                </p>

                <h5>Third Parties</h5>
                <p>
                  Links to third-party sites are not covered by this policy.
                </p>

                <h5>Contact</h5>
                <p>
                  For privacy concerns, contact us at privacy@example.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* privacy-area-end */}
    </main>
  );
};

export default PrivacyPolicy;