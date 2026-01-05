import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [active, setActive] = useState("profile");

  const renderContent = () => {
    switch (active) {
      case "profile":
        return <ProfileInfo />;
      case "address":
        return <ManageAddress />;
      case "pan":
        return <PanCard />;
      case "gift":
        return <GiftCards />;
      case "upi":
        return <SavedUPI />;
      case "card":
        return <SavedCards />;
      case "coupons":
        return <MyCoupons />;
      case "reviews":
        return <Reviews />;
      case "notifications":
        return <Notifications />;
      case "wallet":
        return <Wallet />;
      default:
        return <ProfileInfo />;
    }
  };

  return (
    <main className="profile-wrapper">
      <div className="container">
        <div className="row">

          {/* SIDEBAR */}
          <aside className="col-lg-3">
            <div className="profile-sidebar">
              <div className="user-box">
                <div className="avatar">👤</div>
                <span>Hello</span>
              </div>

              <Menu title="ACCOUNT SETTINGS">
                <Item active={active} id="profile" setActive={setActive}>Profile Information</Item>
                <Item active={active} id="address" setActive={setActive}>Manage Addresses</Item>
                <Item active={active} id="pan" setActive={setActive}>PAN Card Information</Item>
              </Menu>

              <Menu title="PAYMENTS">
                <Item active={active} id="gift" setActive={setActive}>Gift Cards</Item>
                <Item active={active} id="upi" setActive={setActive}>Saved UPI</Item>
                <Item active={active} id="card" setActive={setActive}>Saved Cards</Item>
              </Menu>

              <Menu title="MY STUFF">
                <Item active={active} id="coupons" setActive={setActive}>My Coupons</Item>
                <Item active={active} id="reviews" setActive={setActive}>My Reviews & Ratings</Item>
                <Item active={active} id="notifications" setActive={setActive}>All Notifications</Item>
                <Item active={active} id="wallet" setActive={setActive}>My Wallet</Item>
              </Menu>

              <div className="logout">Logout</div>

              <div className="frequent">
                <h6>Frequently Visited</h6>
                <ul>
                  <li>Track Order</li>
                  <li>Help Center</li>
                </ul>
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <section className="col-lg-9">
            <div className="profile-content">
              {renderContent()}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
};

export default Profile;

/* ---------- Helpers ---------- */

const Menu = ({ title, children }) => (
  <div className="menu-block">
    <h6>{title}</h6>
    <ul>{children}</ul>
  </div>
);

const Item = ({ id, active, setActive, children }) => (
  <li
    className={active === id ? "active" : ""}
    onClick={() => setActive(id)}
  >
    {children}
  </li>
);

/* ---------- Content Sections ---------- */

const ProfileInfo = () => (
  <Section title="Personal Information">
    <input placeholder="First Name" />
    <input placeholder="Last Name" />
    <div className="radio-group">
      <label><input type="radio" /> Male</label>
      <label><input type="radio" /> Female</label>
    </div>
    <button>Edit</button>
  </Section>
);

const ManageAddress = () => (
  <Section title="Manage Addresses">
    <button className="primary">+ Add New Address</button>
  </Section>
);

const PanCard = () => (
  <Section title="PAN Card Information">
    <input placeholder="PAN Number" />
    <input placeholder="Full Name" />
    <input type="file" />
    <button className="primary">Upload</button>
  </Section>
);

const GiftCards = () => (
  <Section title="Gift Cards">
    <p>No gift cards added.</p>
  </Section>
);

const SavedUPI = () => (
  <Section title="Saved UPI">
    <p>No UPI saved.</p>
  </Section>
);

const SavedCards = () => (
  <Section title="Saved Cards">
    <p>No cards saved.</p>
  </Section>
);

const MyCoupons = () => (
  <Section title="My Coupons">
    <p>Available coupons will appear here.</p>
  </Section>
);

const Reviews = () => (
  <Section title="My Reviews & Ratings">
    <p>No reviews yet.</p>
  </Section>
);

const Notifications = () => (
  <Section title="All Notifications">
    <p>No notifications.</p>
  </Section>
);

const Wallet = () => (
  <Section title="My Wallet">
    <p>Wallet balance: ₹0</p>
  </Section>
);

const Section = ({ title, children }) => (
  <div className="section-box">
    <h4>{title}</h4>
    <div className="section-body">{children}</div>
  </div>
);
