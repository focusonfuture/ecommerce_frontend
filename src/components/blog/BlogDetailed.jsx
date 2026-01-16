import React from "react";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  return (
    <main>
     

      {/* NEWS DETAILS AREA */}
      <div className="news-detalis-area mt-120 mb-70">
        <div className="container">
          <div className="row">

            {/* LEFT CONTENT */}
            <div className="col-xl-8 col-lg-8">
              <div className="news-detalis-content mb-50">

                <ul className="blog-meta mb-20">
                  <li>
                    <Link to="#">
                      <i className="fal fa-eye"></i>100 Views
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fal fa-comments"></i> 30 Comments
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fal fa-calendar-alt"></i> 24th March 2021
                    </Link>
                  </li>
                </ul>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                </p>

                <div className="news-thumb mt-40">
                  <img
                    src="/assets/img/blog/blog-thumb.jpg"
                    alt="blog"
                    className="img-fluid"
                  />
                </div>

                <h4 className="news-title mt-60">
                  Do you know how to wear headphones properly?
                </h4>

                <p className="mt-25 mb-50">Lorem ipsum...</p>

                <h4 className="news-title news-title-2 pt-55">
                  Laptops Become More Common in Everyday Life
                </h4>

                <div className="blog-inner mt-30">
                  <img
                    src="/assets/img/blog/incen.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <p>Lorem ipsum dolor sit amet...</p>
                </div>

                {/* QUOTE */}
                <div className="news-quote-area mt-55 text-center">
                  <i className="fas fa-quote-left"></i>
                  <h5 className="news-quote-title mt-25">
                    Choices to take a holiday and traveling out…
                  </h5>
                  <h6 className="founder-name mt-25">Rosalina D. William</h6>
                  <span className="founder-title">Founder</span>
                </div>

                <p className="mt-55">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit…
                </p>

                {/* TAGS + SHARE */}
                <div className="news-info d-sm-flex align-items-center justify-content-between mt-50 mb-50">
                  <div className="news-tag">
                    <h6 className="tag-title mb-25">Related Tags</h6>
                    <Link to="#">Popular</Link>
                    <Link to="#">Design</Link>
                    <Link to="#">UX</Link>
                  </div>

                  <div className="news-share">
                    <h6 className="tag-title mb-25">Social Share</h6>
                    <Link to="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-typo3"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-tumblr"></i>
                    </Link>
                    <Link to="#">
                      <i className="fal fa-share-alt"></i>
                    </Link>
                  </div>
                </div>

                {/* NEXT / PREV */}
                <div className="news-navigation pt-50 pb-40">
                  <div className="changes-info">
                    <span>
                      <Link to="/blog-details">Prev Post</Link>
                    </span>
                    <h6 className="changes-info-title">
                      <Link to="/blog-details">Tips On Minimalist</Link>
                    </h6>
                  </div>

                  <div className="changes-info text-md-right">
                    <span>
                      <Link to="/blog-details">Next Post</Link>
                    </span>
                    <h6 className="changes-info-title">
                      <Link to="/blog-details">Less Is More</Link>
                    </h6>
                  </div>
                </div>

                {/* AUTHOR CARD */}
                <div className="news-author mt-60">
                  <img
                    src="/assets/img/blog/news-author.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="news-author-info">
                    <span>Written by</span>
                    <h6 className="author-title">Rosalina D. William</h6>
                    <p>Lorem ipsum dolor sit amet...</p>
                  </div>
                </div>

                {/* COMMENTS */}
                <div className="post-comments mt-60">
                  <h6 className="post-comment-title mb-40">03 Comments</h6>

                  <div className="latest-comments">
                    <ul>
                      {/* COMMENT 1 */}
                      <li>
                        <div className="comments-box">
                          <div className="comments-avatar">
                            <img src="/assets/img/blog/p-author-1.jpg" alt="" />
                          </div>

                          <div className="comments-text">
                            <div className="avatar">
                              <h6 className="avatar-name">Rosalina Kelian</h6>
                              <Link to="#" className="comment-reply">
                                <i className="fal fa-share"></i>Reply
                              </Link>
                            </div>

                            <span className="post-meta">
                              <i className="fal fa-calendar-alt"></i> Oct 26, 2020
                            </span>

                            <p>Lorem ipsum dolor sit...</p>
                          </div>
                        </div>
                      </li>

                      {/* COMMENT 2 */}
                      <li className="children">
                        <div className="comments-box">
                          <div className="comments-avatar">
                            <img src="/assets/img/blog/p-author-2.jpg" alt="" />
                          </div>

                          <div className="comments-text">
                            <div className="avatar">
                              <h6 className="avatar-name">Iqbal Hossain</h6>
                              <Link to="#" className="comment-reply">
                                <i className="fal fa-share"></i>Reply
                              </Link>
                            </div>

                            <span className="post-meta">
                              <i className="fal fa-calendar-alt"></i> Oct 26, 2020
                            </span>

                            <p>Lorem ipsum dolor sit...</p>
                          </div>
                        </div>
                      </li>

                      {/* COMMENT 3 */}
                      <li>
                        <div className="comments-box">
                          <div className="comments-avatar">
                            <img src="/assets/img/blog/p-author-3.jpg" alt="" />
                          </div>

                          <div className="comments-text">
                            <div className="avatar">
                              <h6 className="avatar-name">Arista Williamson</h6>
                              <Link to="#" className="comment-reply">
                                <i className="fal fa-share"></i>Reply
                              </Link>
                            </div>

                            <span className="post-meta">
                              <i className="fal fa-calendar-alt"></i> Oct 26, 2020
                            </span>

                            <p>Lorem ipsum dolor sit...</p>
                          </div>
                        </div>
                      </li>

                    </ul>
                  </div>
                </div>

                {/* COMMENT FORM */}
                <div className="post-comment-form mt-20">
                  <h4 className="post-comment-form-title mb-40">Post Comment</h4>

                  <form>
                    <div className="input-field">
                      <i className="fal fa-pencil-alt"></i>
                      <textarea placeholder="Type your comments...."></textarea>
                    </div>

                    <div className="input-field">
                      <i className="fal fa-user"></i>
                      <input type="text" placeholder="Type your name...." />
                    </div>

                    <div className="input-field">
                      <i className="fal fa-envelope"></i>
                      <input type="text" placeholder="Type your email...." />
                    </div>

                    <div className="input-field">
                      <i className="fal fa-globe"></i>
                      <input type="text" placeholder="Type your website...." />
                    </div>

                    <button className="post-comment shutter-btn">
                      <i className="fal fa-comments"></i>Post Comment
                    </button>
                  </form>
                </div>

              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-xl-4 col-lg-4">
              <div className="news-sidebar pl-10">

                {/* SEARCH */}
                <div className="widget">
                  <h6 className="sidebar-title">Search Here</h6>
                  <div className="n-sidebar-search">
                    <input type="text" placeholder="Search your keyword..." />
                    <Link to="#">
                      <i className="fal fa-search"></i>
                    </Link>
                  </div>
                </div>

                {/* POPULAR FEEDS */}
                <div className="widget">
                  <h6 className="sidebar-title">Popular Feeds</h6>

                  <ul className="n-sidebar-feed">
                    {[1, 2, 3, 4].map((i) => (
                      <li key={i}>
                        <div className="feed-number">
                          <Link to="/blog-details">
                            <img
                              src={`/assets/img/blog/sm-b-${i}.jpg`}
                              alt=""
                            />
                          </Link>
                        </div>

                        <div className="feed-content">
                          <h6>
                            <Link to="/blog-details">
                              Feed Title {i}
                            </Link>
                          </h6>

                          <span className="feed-date">
                            <i className="fal fa-calendar-alt"></i> 24th March 2021
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CATEGORIES */}
                <div className="widget">
                  <h6 className="sidebar-title">Categories</h6>

                  <ul className="n-sidebar-categories">
                    {["Business", "Consultant", "Creative", "UI/UX", "Technology"].map(
                      (cat, index) => (
                        <li key={index}>
                          <Link to="/blog-details">
                            <div className="single-category p-relative mb-10">
                              {cat} <span className="category-number">50</span>
                            </div>
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* TAGS */}
                <div className="widget">
                  <h6 className="sidebar-title">Tags</h6>

                  <div className="dktags">
                    {["Popular", "Design", "Usability", "Icon", "Keypad", "Tech"].map(
                      (t, i) => (
                        <Link key={i} className="single-tag" to="#">
                          {t}
                        </Link>
                      )
                    )}
                  </div>
                </div>

                {/* SPONSOR */}
                <div className="widget sponsor">
                  <h6 className="sidebar-title">Sponsor Ads</h6>

                  <div className="sponsor-img">
                    <img
                      src="/assets/img/blog/sponsor-3.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="ad-width">270x240</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <section className="cta-area d-ldark-bg pt-55 pb-10">
        <div className="container">
          <div className="row">

            <div className="col-lg-4 col-md-6">
              <div className="cta-item cta-item-d mb-30">
                <h5 className="cta-title">Follow Us</h5>
                <p>
                  We make consolidating and tracking your social media easy.
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
                <p>Join 60,000+ subscribers.</p>

                <div className="subscribe__form">
                  <form>
                    <input type="email" placeholder="Enter your email here..." />
                    <button>Subscribe</button>
                  </form>
                </div>
              </div>
            </div>

            {/* APP DOWNLOAD */}
            <div className="col-lg-4 col-md-6">
              <div className="cta-item mb-30">
                <h5 className="cta-title">Download App</h5>

                <p>The App is available on iOS & Android.</p>

                <div className="cta-apps">
                  <div className="apps-store">
                    <Link to="#">
                      <img src="/assets/img/brand/app_ios.png" alt="" />
                    </Link>

                    <Link to="#">
                      <img src="/assets/img/brand/app_android.png" alt="" />
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

export default BlogDetails;
