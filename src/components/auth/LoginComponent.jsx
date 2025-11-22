import React from 'react'

const LoginComponent = () => {
    return (
        <main>
            {/* page-banner-area-start */}
            <div
                className="page-banner-area page-banner-height-2"
                data-background="assets/img/banner/page-banner-4.jpg"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-banner-content text-center">
                                <h4 className="breadcrumb-title">My account</h4>
                                <div className="breadcrumb-two">
                                    <nav>
                                        <nav className="breadcrumb-trail breadcrumbs">
                                            <ul className="breadcrumb-menu">
                                                <li className="breadcrumb-trail">
                                                    <a href="index.html">
                                                        <span>Home</span>
                                                    </a>
                                                </li>
                                                <li className="trail-item">
                                                    <span>My account</span>
                                                </li>
                                            </ul>
                                        </nav>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* page-banner-area-end */}
            {/* account-area-start */}
            <div className="account-area mt-70 mb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="basic-login mb-50">
                                <h5>Login</h5>
                                <form action="#">
                                    <label htmlFor="name">
                                        Username or email address <span>*</span>
                                    </label>
                                    <input id="name" type="text" placeholder="Enter Username" />
                                    <label htmlFor="pass">
                                        Password <span>*</span>
                                    </label>
                                    <input
                                        id="pass"
                                        type="password"
                                        placeholder="Enter password..."
                                    />
                                    <div className="login-action mb-10 fix">
                                        <span className="log-rem f-left">
                                            <input id="remember" type="checkbox" />
                                            <label htmlFor="remember">Remember me</label>
                                        </span>
                                        <span className="forgot-login f-right">
                                            <a href="#">Lost your password?</a>
                                        </span>
                                    </div>
                                    <a href="login.html" className="tp-in-btn w-100">
                                        log in
                                    </a>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="basic-login">
                                <h5>Register</h5>
                                <form action="#">
                                    <label htmlFor="username">
                                        Username or email address <span>*</span>
                                    </label>
                                    <input id="username" type="text" placeholder="Enter Username" />
                                    <label htmlFor="email-id">
                                        Email Address <span>*</span>
                                    </label>
                                    <input id="email-id" type="text" placeholder="Email address..." />
                                    <label htmlFor="userpass">
                                        Password <span>*</span>
                                    </label>
                                    <input
                                        id="userpass"
                                        type="password"
                                        placeholder="Enter password..."
                                    />
                                    <div className="login-action mb-10 fix">
                                        <p>
                                            Your personal data will be used to support your experience
                                            throughout this website, to manage access to your account, and
                                            for other purposes described in our{" "}
                                            <a href="#">privacy policy</a>.
                                        </p>
                                    </div>
                                    <a href="login.html" className="tp-in-btn w-100">
                                        Register
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* account-area-end */}
            {/* cta-area-start */}
            <section className="cta-area d-ldark-bg pt-55 pb-10">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="cta-item cta-item-d mb-30">
                                <h5 className="cta-title">Follow Us</h5>
                                <p>
                                    We make consolidating, marketing and tracking your social media
                                    website easy.
                                </p>
                                <div className="cta-social">
                                    <div className="social-icon">
                                        <a href="#" className="facebook">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#" className="twitter">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#" className="youtube">
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a href="#" className="linkedin">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a href="#" className="rss">
                                            <i className="fas fa-rss" />
                                        </a>
                                        <a href="#" className="dribbble">
                                            <i className="fab fa-dribbble" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="cta-item mb-30">
                                <h5 className="cta-title">Sign Up To Newsletter</h5>
                                <p>
                                    Join 60.000+ subscribers and get a new discount coupon on every
                                    Saturday.
                                </p>
                                <div className="subscribe__form">
                                    <form action="#">
                                        <input type="email" placeholder="Enter your email here..." />
                                        <button>subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="cta-item mb-30">
                                <h5 className="cta-title">Download App</h5>
                                <p>
                                    DukaMarket App is now available on App Store &amp; Google Play.
                                    Get it now.
                                </p>
                                <div className="cta-apps">
                                    <div className="apps-store">
                                        <a href="#">
                                            <img src="assets/img/brand/app_ios.png" alt="" />
                                        </a>
                                        <a href="#">
                                            <img src="assets/img/brand/app_android.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* cta-area-end */}
        </main>

    )
}

export default LoginComponent