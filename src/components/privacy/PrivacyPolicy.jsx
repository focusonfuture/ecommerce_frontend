import React from "react";

const PrivacyPolicy = () => {
  return (
    <main>
      {/* Breadcrumb */}
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

      {/* Privacy Content */}
      <section className="privacy-area pt-80 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              
              {/* Title */}
              <div className="text-center mb-40">
                <h2 className="mb-15">Privacy Policy</h2>
                <p className="text-muted">
                  We value your privacy and are committed to protecting your personal information.
                </p>
              </div>

              {/* Content */}
              <div className="mb-30">
                <h5 className="mb-10">1. Information We Collect</h5>
                <p>
                  We collect personal details such as your name, email address, phone number,
                  shipping address, and payment information when you register, place an order,
                  or contact customer support.
                </p>
              </div>

              <div className="mb-30">
                <h5 className="mb-10">2. Use of Information</h5>
                <ul className="ms-3">
                  <li>To process and deliver your orders</li>
                  <li>To communicate updates and support responses</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>

              <div className="mb-30">
                <h5 className="mb-10">3. Cookies</h5>
                <p>
                  Cookies help us personalize your experience and analyze website traffic.
                  You may disable cookies through your browser settings.
                </p>
              </div>

              <div className="mb-30">
                <h5 className="mb-10">4. Information Sharing</h5>
                <p>
                  We do not sell or rent your personal information. Data may be shared
                  only with trusted partners for payment processing, logistics, and service delivery.
                </p>
              </div>

              <div className="mb-30">
                <h5 className="mb-10">5. Data Security</h5>
                <p>
                  We use appropriate security measures to protect your data from unauthorized
                  access, misuse, or disclosure.
                </p>
              </div>

              <div className="mb-30">
                <h5 className="mb-10">6. Your Rights</h5>
                <p>
                  You have the right to access, update, or request deletion of your personal
                  information by contacting our support team.
                </p>
              </div>

              <div className="mb-30">
                <h5 className="mb-10">7. Third-Party Links</h5>
                <p>
                  Our website may contain links to external sites. We are not responsible
                  for the privacy practices or content of those websites.
                </p>
              </div>

              <div className="mb-30">
                <h5 className="mb-10">8. Contact Us</h5>
                <p>
                  For any questions regarding this Privacy Policy, please contact us at:
                </p>
                <p>
                  <strong>Email:</strong> privacy@example.com
                </p>
              </div>

              <div className="text-center text-muted mt-40">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
