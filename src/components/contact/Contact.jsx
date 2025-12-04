import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main>
     

      {/* LOCATION AREA */}
      <div className="location-area pt-70 pb-25">
        <div className="container">

          <div className="row mb-25">
            <div className="col-xl-12">
              <div className="abs-section-title text-center">
                <span>LOCATION STORE</span>
                <h4>Where We Are</h4>
                <p>
                  The perfect way to enjoy brewing tea… Duis autem vel eum iriure dolor
                  in hendrerit in vulputate velit esse molestie consequat.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {[
              {
                img: "location-1.jpg",
                title: "26 Rue Pelleport - Paris",
                address: "Rue Saint-Antoine, Paris, France",
              },
              {
                img: "location-2.jpg",
                title: "150 Stanley Rd - London",
                address: "Brick Ln, Spitalfields, London E1, UK",
              },
              {
                img: "location-3.jpg",
                title: "1357 Prospect - New York",
                address: "Atlantic, Brooklyn, New York, US",
              },
              {
                img: "location-4.jpg",
                title: "86 Georgia Rd - Madrid",
                address: "Calle del Correo 4, Madrid, Spain",
              }
            ].map((loc, i) => (
              <div className="col-xl-3 col-lg-3 col-md-6" key={i}>
                <div className="location-item mb-30">
                  <div className="location-image w-img mb-20">
                    <img src={`/assets/img/location/${loc.img}`} alt="" />
                  </div>

                  <h6>{loc.title}</h6>

                  <div className="sm-item-loc sm-item-border mb-20">
                    <div className="sml-icon mr-20">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="sm-content">
                      <span>Find us</span>
                      <p>{loc.address}</p>
                    </div>
                  </div>

                  <div className="sm-item-loc sm-item-border mb-20">
                    <div className="sml-icon mr-20">
                      <i className="fal fa-phone-alt"></i>
                    </div>
                    <div className="sm-content">
                      <span>Call us</span>
                      <p>
                        <a href="tel:+1001234567890">(+100) 123 456 7890</a>
                      </p>
                    </div>
                  </div>

                  <div className="sm-item-loc mb-20">
                    <div className="sml-icon mr-20">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="sm-content">
                      <span>Mail us</span>
                      <p>
                        <a href="mailto:info@example.com">info@example.com</a>
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* GOOGLE MAP */}
      <div className="cmamps-area">
        <iframe
          title="google-map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1899531.5831083965!2d105.806381!3d21.58504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x515f4860ede9e108!2z..."
          loading="lazy"
        ></iframe>
      </div>

      {/* CTA SECTION */}
      <section className="cta-area d-ldark-bg pt-55 pb-10">
        <div className="container">
          <div className="row">

            {/* SOCIAL */}
            <div className="col-lg-4 col-md-6">
              <div className="cta-item cta-item-d mb-30">
                <h5 className="cta-title">Follow Us</h5>
                <p>
                  We make consolidating, marketing & tracking your social media easy.
                </p>

                <div className="cta-social">
                  <div className="social-icon">
                    <Link to="#" className="facebook">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="#" className="twitter">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="#" className="youtube">
                      <i className="fab fa-youtube"></i>
                    </Link>
                    <Link to="#" className="linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link to="#" className="rss">
                      <i className="fas fa-rss"></i>
                    </Link>
                    <Link to="#" className="dribbble">
                      <i className="fab fa-dribbble"></i>
                    </Link>
                  </div>
                </div>

              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="col-lg-4 col-md-6">
              <div className="cta-item mb-30">
                <h5 className="cta-title">Sign Up To Newsletter</h5>
                <p>Join 60,000+ subscribers and get weekly discounts.</p>

                <div className="subscribe__form">
                  <form>
                    <input type="email" placeholder="Enter your email..." />
                    <button>Subscribe</button>
                  </form>
                </div>
              </div>
            </div>

            {/* APP DOWNLOAD */}
            <div className="col-lg-4 col-md-6">
              <div className="cta-item mb-30">
                <h5 className="cta-title">Download App</h5>
                <p>The app is available on both App Store & Google Play.</p>

                <div className="cta-apps">
                  <div className="apps-store">
                    <Link to="#">
                      <img src="/assets/img/brand/app_ios.png" alt="ios app" />
                    </Link>

                    <Link to="#">
                      <img src="/assets/img/brand/app_android.png" alt="android app" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
