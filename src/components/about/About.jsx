import React from "react";

const About = () => {
    return (
        <main>

            {/* page-banner-area-start */}
            <div
                className="page-banner-area page-banner-height"
                data-background="assets/img/banner/page-banner-1.jpg"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-banner-content text-center">
                                <h3>About Us</h3>
                                <p>
                                    A wonderful serenity has taken possession of my entire soul, like these <br />
                                    sweet mornings of spring which I enjoy with my whole heart.
                                </p>
                                <div className="page-bottom-btn mt-55">
                                    <a href="shop.html" className="st-btn-4">
                                        Discover now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* page-banner-area-end */}

            {/* about-area-start */}
            <div
                className="about-area pt-80 pb-80"
                data-background="assets/img/bg/about-bg.png"
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-content">
                                <span>ABOUT OUR ONLINE STORE</span>
                                <h4>Hello,</h4>
                                <h5 className="banner-t mb-30">With 25+ Years Of Experience</h5>
                                <p className="about-text">
                                    Over 25 years Dukamarket helping companies reach their <br />
                                    financial and branding goals.
                                </p>
                                <p>
                                    The perfect way to enjoy brewing tea on low hanging fruit to
                                    identify. Duis autem vel eum iriure dolor in hendrerit in vulputate
                                    velit esse molestie consequat, vel illum dolore eu feugiat nulla
                                    facilisis. For me, the most important part of improving at
                                    photography.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-image w-img">
                                <img src="assets/img/about/about-b.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about-area-end */}

            {/* services-area-start */}
            <div className="services-area pt-70 light-bg-s pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="abs-section-title text-center">
                                <span>HOW IT WORKS</span>
                                <h4>Complete Customer Ideas</h4>
                                <p>
                                    The perfect way to enjoy brewing tea on low hanging fruit to
                                    identify. Duis autem vel eum iriure dolor in hendrerit <br />
                                    in vulputate velit esse molestie consequat, vel illum dolore eu
                                    feugiat nulla facilisis.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-40">
                        {/* Service Items */}
                        {[
                            {
                                icon: "fal fa-share-square",
                                title: "Admin Verify Details",
                                number: "01",
                            },
                            {
                                icon: "fal fa-file",
                                title: "Send The Solution",
                                number: "02",
                            },
                            {
                                icon: "fal fa-thumbs-up",
                                title: "Complete Profile",
                                number: "03",
                            },
                        ].map((item, i) => (
                            <div className="col-xl-4 col-lg-4 col-md-6" key={i}>
                                <div className="services-item mb-30">
                                    <div className="services-icon mb-25">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h6>{item.title}</h6>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit accusantium
                                        doloremque laudantium totam rem aperiam, eaqueipsa quae
                                        veritatis.
                                    </p>
                                    <div className="s-count-number">
                                        <span>{item.number}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            {/* services-area-end */}

            {/* technolgy-index-start */}
            <div className="technolgy-index mt-70 mb-10">
                <div className="container">
                    <div className="row mb-15">
                        <div className="col-xl-12">
                            <div className="abs-section-title text-center">
                                <span>TECHNOLOGY INDEX</span>
                                <h4>Let’s Get Creative</h4>
                                <p>
                                    The perfect way to enjoy brewing tea on low hanging fruit to
                                    identify. Duis autem vel eum iriure dolor in hendrerit <br />
                                    in vulputate velit esse molestie consequat, vel illum dolore eu
                                    feugiat nulla facilisis.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Two Columns */}
                    <div className="row">
                        {/* Left Side */}
                        <div className="col-xl-6 col-lg-6">
                            <div className="main-abs mb-30">
                                <div className="ab-counter-image w-img mb-40">
                                    <img src="assets/img/about/ab-01.jpg" alt="" />
                                </div>

                                <div className="row">
                                    {[
                                        { value: "8262", title: "Active Clients" },
                                        { value: "4268", title: "Projects Done" },
                                    ].map((item, i) => (
                                        <div
                                            className="col-xl-6 col-lg-6 col-md-6 col-sm-6"
                                            key={i}
                                        >
                                            <div className="ab-counter-item mb-30">
                                                <div className="ab-counter mb-20">
                                                    <div className="counter-icon mr-10">
                                                        <img
                                                            src="assets/img/about/c-icon-01.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="counter_info">
                                                        <span className="counter">{item.value}</span>
                                                        <p>+</p>
                                                    </div>
                                                </div>
                                                <h5>{item.title}</h5>
                                                <p>
                                                    Sed ut perspiciatis unde omnis iste natus sit
                                                    accusantium doloremque laudantium totam.
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="col-xl-6 col-lg-6">
                            <div className="main-abs mb-30">
                                <div className="ab-counter-image w-img mb-40">
                                    <img src="assets/img/about/ab-02.jpg" alt="" />
                                </div>

                                <div className="row">
                                    {[
                                        { value: "643", title: "Team Advisors" },
                                        { value: "269", title: "Users Online", suffix: "k" },
                                    ].map((item, i) => (
                                        <div
                                            className="col-xl-6 col-lg-6 col-md-6 col-sm-6"
                                            key={i}
                                        >
                                            <div className="ab-counter-item mb-30">
                                                <div className="ab-counter mb-20">
                                                    <div className="counter-icon mr-10">
                                                        <img
                                                            src="assets/img/about/c-icon-01.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="counter_info">
                                                        <span className="counter">{item.value}</span>
                                                        <p>{item.suffix || "+"}</p>
                                                    </div>
                                                </div>
                                                <h5>{item.title}</h5>
                                                <p>
                                                    Sed ut perspiciatis unde omnis iste natus sit
                                                    accusantium doloremque laudantium totam.
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* technolgy-index-end */}

            {/* team-area-start */}
            <div className="team-area light-bg-s pt-70 pb-40">
                <div className="container">
                    <div className="row mb-35">
                        <div className="col-xl-12">
                            <div className="abs-section-title text-center">
                                <span>THE TEAM</span>
                                <h4>Meet Our Team</h4>
                                <p>
                                    The perfect way to enjoy brewing tea on low hanging fruit to
                                    identify. Duis autem vel eum iriure dolor in hendrerit <br />
                                    in vulputate velit esse molestie consequat, vel illum dolore eu
                                    feugiat nulla facilisis.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Team Members */}
                        {[
                            {
                                name: "Iqbal Hossain",
                                img: "assets/img/team/person-3.jpg",
                            },
                            {
                                name: "Robin Gomes",
                                img: "assets/img/team/person-4.jpg",
                            },
                            {
                                name: "Merry Bob",
                                img: "assets/img/team/person-5.jpg",
                            },
                        ].map((member, i) => (
                            <div
                                className="col-xl-4 col-lg-4 col-md-6 col-sm-6"
                                key={i}
                            >
                                <div className="single-team text-center mb-30">
                                    <div className="team-image mb-35 w-img">
                                        <div className="inner-timg">
                                            <a href="about.html">
                                                <img src={member.img} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="tauthor-degination mb-15">
                                        <h5>
                                            <a href="about.html">{member.name}</a>
                                        </h5>
                                        <span>CEO & Pounder</span>
                                    </div>
                                    <div className="team-social">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-dribbble"></i></a>
                                        <a href="#"><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            {/* team-area-end */}

            {/* location-area-start */}
            <div className="location-area pt-70 pb-25">
                <div className="container">
                    <div className="row mb-25">
                        <div className="col-xl-12">
                            <div className="abs-section-title text-center">
                                <span>LOCATION STORE</span>
                                <h4>Where We Are</h4>
                                <p>
                                    The perfect way to enjoy brewing tea on low hanging fruit to
                                    identify. Duis autem vel eum iriure dolor in hendrerit <br />
                                    in vulputate velit esse molestie consequat, vel illum dolore eu
                                    feugiat nulla facilisis.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 4 locations */}
                    <div className="row">
                        {[
                            {
                                img: "assets/img/location/location-1.jpg",
                                title: "26 Rue Pelleport - Paris",
                                address: "Rue Saint-Antoine, Paris, France",
                            },
                            {
                                img: "assets/img/location/location-2.jpg",
                                title: "150 Stanley Rd - London",
                                address: "Brick Ln, Spitalfields, London E1, UK",
                            },
                            {
                                img: "assets/img/location/location-3.jpg",
                                title: "1357 Prospect - New York",
                                address: "Atlantic, Brooklyn, New York, US",
                            },
                            {
                                img: "assets/img/location/location-4.jpg",
                                title: "86 Georgia Rd - Mardrid",
                                address: "Calle del Correo, 4, Madrid, Spain",
                            },
                        ].map((loc, i) => (
                            <div className="col-xl-3 col-lg-3 col-md-6" key={i}>
                                <div className="location-item mb-30">
                                    <div className="location-image w-img mb-20">
                                        <img src={loc.img} alt="" />
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
                                            <p><a href="tel:+8804568">(+100) 123 456 7890</a></p>
                                        </div>
                                    </div>

                                    <div className="sm-item-loc mb-20">
                                        <div className="sml-icon mr-20">
                                            <i className="fal fa-envelope"></i>
                                        </div>
                                        <div className="sm-content">
                                            <span>Mail us</span>
                                            <p>
                                                <a href="#">
                                                    [email protected]
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            {/* location-area-end */}

            {/* cta-area-start */}
            
            {/* cta-area-end */}

        </main>
    );
};

export default About;
