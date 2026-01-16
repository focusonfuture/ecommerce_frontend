import React from "react";
import { Link } from "react-router-dom";

// ------------------------
// BLOG DATA
// ------------------------
const blogPosts = [
  {
    id: 1,
    img: "/assets/img/blog/sm-b2-1.jpg",
    category: "Food Beverage",
    title: "Delicious Mixed Grilled Food For The Weekend",
    author: "Adlop",
    date: "Jan 24, 2022",
  },
  {
    id: 2,
    img: "/assets/img/blog/sm-b2-2.jpg",
    category: "Food Beverage",
    title: "Delicious Grilled Pork For Family Reunions",
    author: "Maxon",
    date: "Jan 24, 2022",
  },
  {
    id: 3,
    img: "/assets/img/blog/sm-b2-3.jpg",
    category: "Food Beverage",
    title: "Seasoned Lobster For Summer Holidays",
    author: "Elana",
    date: "Jan 24, 2022",
  },
  {
    id: 4,
    img: "/assets/img/blog/sm-b2-4.jpg",
    category: "Food Beverage",
    title: "Grilled Seafood With Vegetables",
    author: "Andrew",
    date: "Jan 24, 2022",
  },
  {
    id: 5,
    img: "/assets/img/blog/sm-b2-5.jpg",
    category: "Digital",
    title: "How People Wear Headphones Properly",
    author: "Iqbal",
    date: "Jan 24, 2022",
  },
  {
    id: 6,
    img: "/assets/img/blog/sm-b2-6.jpg",
    category: "Digital",
    title: "Laptops Becoming More Common",
    author: "Moris",
    date: "Jan 24, 2022",
  },
];

// ------------------------
// POPULAR FEEDS
// ------------------------
const popularFeeds = [
  {
    id: 1,
    img: "/assets/img/blog/sm-b-1.jpg",
    title: "APL Logistics seeks to be a premier",
    date: "24th March 2021",
  },
  {
    id: 2,
    img: "/assets/img/blog/sm-b-2.jpg",
    title: "Global supply-chain services to help",
    date: "24th March 2021",
  },
  {
    id: 3,
    img: "/assets/img/blog/sm-b-3.jpg",
    title: "Enable sustainable commerce worldwide",
    date: "24th March 2021",
  },
  {
    id: 4,
    img: "/assets/img/blog/sm-b-4.jpg",
    title: "Key markets & region achievements",
    date: "24th March 2021",
  },
];

// ------------------------
// CATEGORIES
// ------------------------
const categories = [
  { name: "Business", count: 26 },
  { name: "Consultant", count: 30 },
  { name: "Creative", count: 71 },
  { name: "UI/UX", count: 56 },
  { name: "Technology", count: 60 },
];

// ------------------------
// TAGS
// ------------------------
const tags = ["Popular", "Design", "Usability", "Icon", "Kit", "Business", "Keypad", "Tech"];

// ------------------------
// PAGINATION NUMBERS
// ------------------------
const pagination = [1, 2, 3, 5, 6];


const Blog = () => {
  return (
    <main>

     
      {/* --- BLOG AREA --- */}
      <div className="blog-area mt-120 mb-75">
        <div className="container">
          <div className="row">

            {/* LEFT SIDE POSTS */}
            <div className="col-xl-8 col-lg-7">
              <div className="row">

                {blogPosts.map((post) => (
                  <div className="col-xl-6" key={post.id}>
                    <div className="single-smblog mb-30">

                      <div className="smblog-thum">
                        <div className="blog-image w-img">
                          <Link to="/blog-details">
                            <img src={post.img} alt="" />
                          </Link>
                        </div>
                        <div className="blog-tag blog-tag-2">
                          <Link to="/blog">{post.category}</Link>
                        </div>
                      </div>

                      <div className="smblog-content smblog-content-3">
                        <h6>
                          <Link to="/blog-details">{post.title}</Link>
                        </h6>

                        <span className="author mb-10">
                          posted by <a href="#">{post.author}</a>
                        </span>

                        <p>
                          It is accompanied by a case that can contain up to three different diffusers...
                        </p>

                        <div className="smblog-foot pt-15">
                          <div className="post-readmore">
                            <Link to="/blog-details">
                              Read More <span className="icon"></span>
                            </Link>
                          </div>
                          <div className="post-date">
                            <Link to="/blog-details">{post.date}</Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}

              </div>

              {/* PAGINATION */}
              <div className="text-center pt-30 pb-30">
                <ul className="basic-pagination">
                  {pagination.map((num) => (
                    <li key={num}>
                      <Link to="/blog" className={num === 1 ? "active" : ""}>{num}</Link>
                    </li>
                  ))}
                  <li>
                    <Link to="/blog"><i className="fal fa-angle-double-right"></i></Link>
                  </li>
                </ul>
              </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-xl-4 col-lg-5">
              <div className="news-sidebar pl-10">

                {/* SEARCH */}
                <div className="widget">
                  <h6 className="sidebar-title">Search Here</h6>
                  <div className="n-sidebar-search">
                    <input type="text" placeholder="Search your keyword..." />
                    <a href="#"><i className="fal fa-search"></i></a>
                  </div>
                </div>

                {/* POPULAR FEEDS */}
                <div className="widget">
                  <h6 className="sidebar-title">Popular Feeds</h6>
                  <ul className="n-sidebar-feed">
                    {popularFeeds.map((feed) => (
                      <li key={feed.id}>
                        <div className="feed-number">
                          <Link to="/blog-details">
                            <img src={feed.img} alt="" />
                          </Link>
                        </div>
                        <div className="feed-content">
                          <h6><Link to="/blog-details">{feed.title}</Link></h6>
                          <span className="feed-date">
                            <i className="fal fa-calendar-alt"></i> {feed.date}
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
                    {categories.map((cat, index) => (
                      <li key={index}>
                        <Link to="/blog">
                          <div className="single-category p-relative mb-10">
                            {cat.name}
                            <span className="category-number">{cat.count}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* TAGS */}
                <div className="widget">
                  <h6 className="sidebar-title">Tags</h6>
                  <div className="dktags">
                    {tags.map((tag, i) => (
                      <a key={i} className="single-tag" href="#">{tag}</a>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </main>
  );
};

export default Blog;
