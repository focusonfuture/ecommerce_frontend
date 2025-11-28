import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="fotter-area d-ddark-bg">
                <div className="footer__top pt-60 pb-10">
                    <div className="container custom-conatiner">
                        <div className="row">
                            
                            {/* Download App */}
                            <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-8">
                                <div className="footer__widget">
                                    <div className="footer__widget-title mb-20">
                                        <h4>Download App</h4>
                                    </div>
                                    <div className="footer__widget-content">
                                        <p className="footer-text mb-25">
                                            DukaMarket App is now available on App Store & Google Play. Get it now.
                                        </p>

                                        <div className="apps-store mb-20">
                                            <a href="#">
                                                <img src="assets/img/brand/app_ios.png" alt="" />
                                            </a>
                                            <a href="#">
                                                <img src="assets/img/brand/app_android.png" alt="" />
                                            </a>
                                        </div>

                                        <div className="social-icon social-icon-2">
                                            <a href="#" className="facebook"><i className="fab fa-facebook-f" /></a>
                                            <a href="#" className="twitter"><i className="fab fa-twitter" /></a>
                                            <a href="#" className="youtube"><i className="fab fa-youtube" /></a>
                                            <a href="#" className="linkedin"><i className="fab fa-linkedin-in" /></a>
                                            <a href="#" className="rss"><i className="fas fa-rss" /></a>
                                            <a href="#" className="dribbble"><i className="fab fa-dribbble" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* My Account */}
                            <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                <div className="footer__widget footer-col-2">
                                    <div className="footer__widget-title">
                                        <h4>My Account</h4>
                                    </div>
                                    <div className="footer__widget-content">
                                        <div className="footer__link footer__link-2">
                                            <ul>
                                                <li><a href="contact.html">Product Support</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                                <li><a href="cart.html">Shopping Cart</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                                <li><a href="faq.html">Terms &amp; Conditions &amp;</a></li>
                                                <li><a href="faq.html">Redeem Voucher</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Customer Care */}
                            <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                <div className="footer__widget footer-col-2">
                                    <div className="footer__widget-title">
                                        <h4>Customer Care</h4>
                                    </div>
                                    <div className="footer__widget-content">
                                        <div className="footer__link footer__link-2">
                                            <ul>
                                                <li><a href="faq.html">New Customers</a></li>
                                                <li><a href="faq.html">How to use Account</a></li>
                                                <li><a href="faq.html">Placing an Order</a></li>
                                                <li><a href="faq.html">Payment Methods</a></li>
                                                <li><a href="faq.html">Delivery &amp; Dispatch</a></li>
                                                <li><a href="faq.html">Problems with Order</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Customer Service */}
                            <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div className="footer__widget footer-col-2">
                                    <div className="footer__widget-title">
                                        <h4>Customer Service</h4>
                                    </div>
                                    <div className="footer__widget-content">
                                        <div className="footer__link footer__link-2">
                                            <ul>
                                                <li><a href="faq.html">Help Center</a></li>
                                                <li><a href="contact.html">Contact Us</a></li>
                                                <li><a href="faq.html">Report Abuse</a></li>
                                                <li><a href="faq.html">Submit a Dispute</a></li>
                                                <li><a href="faq.html">Policies &amp; Rules</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-6">
                                <div className="footer__widget">
                                    <div className="footer__widget-title mb-20">
                                        <h4>Sign Up To Newsletter</h4>
                                    </div>
                                    <div className="footer__widget-content">
                                        <p className="footer-text mb-25">
                                            Join 60.000+ subscribers and get a new discount coupon on every Saturday.
                                        </p>

                                        <div className="footer__newsletter-form">
                                            <form action="#">
                                                <input className="ft-newsl b-radius" type="email" placeholder="Enter your email ..." />
                                                <button className="ft-newsl-btn" type="submit">subscribe</button>
                                            </form>
                                        </div>

                                        <p className="provide-text mt-20">
                                            By providing your email address, you agree to our <br />
                                            <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer__bottom-2">
                    <div className="container custom-conatiner">
                        <div className="footer__bottom-content footer__bottom-content-2 pt-50 pb-50">
                            <div className="row">
                                <div className="col-xl-12">

                                    <div className="footer__links footer__links-d text-center mb-25">
                                        <p>
                                            <a href="about.html">About Us</a>
                                            <a href="contact.html">Delivery & Return</a>
                                            <a href="faq.html">Privacy Policy</a>
                                            <a href="faq.html">Help</a>
                                            <a href="contact.html">Order Tracking</a>
                                            <a href="contact.html">Contact Us</a>
                                            <a href="faq.html">FAQs</a>
                                        </p>
                                    </div>

                                    <div className="payment-image text-center mb-25">
                                        <a href="#">
                                            <img src="assets/img/payment/payment.png" alt="" />
                                        </a>
                                    </div>

                                    <div className="copy-right-area copy-right-area-2 text-center">
                                        <p>
                                            Copyright © 
                                            <span> DukaMarket.</span> All Rights Reserved.
                                            Powered by <a href="#"><span className="main-color">Theme_Pure.</span></a>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
