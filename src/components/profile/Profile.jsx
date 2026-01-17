import React, { useState } from "react";
import {
  User,
  Package,
  MapPin,
  CreditCard,
  Heart,
  Bell,
  LogOut,
  MoreVertical,
} from "lucide-react";
import "./Profile.css";

export default function Profile() {
  const [section, setSection] = useState("profile");
  const [showForm, setShowForm] = useState(false);
  const [addresses, setAddresses] = useState([]);

  return (
    <div className="profile-page">
      <div className="profile-layout">
        {/* SIDEBAR */}
        <aside className="sidebar">
          {/* USER CARD */}
          <div className="user-card">
            <div className="avatar">A</div>
            <div>
              <div className="hello">Hello,</div>
              <div className="username">Demo User</div>
            </div>
          </div>

          {/* MY ORDERS */}
          <div
            className={`orders-card ${section === "orders" ? "active" : ""}`}
            onClick={() => setSection("orders")}
          >
            <Package />
            <span>My Orders</span>
          </div>

          {/* ACCOUNT SETTINGS */}
          <SidebarGroup title="ACCOUNT SETTINGS">
            <SidebarItem
              icon={<User />}
              active={section === "profile"}
              onClick={() => setSection("profile")}
            >
              Profile Information
            </SidebarItem>

            <SidebarItem
              icon={<MapPin />}
              active={section === "address"}
              onClick={() => setSection("address")}
            >
              Manage Addresses
            </SidebarItem>

            <SidebarItem icon={<CreditCard />} disabled>
              PAN Card Information
            </SidebarItem>
          </SidebarGroup>

          {/* MY STUFF */}
          <SidebarGroup title="MY STUFF">
            <SidebarItem icon={<Heart />} disabled>
              My Wishlist
            </SidebarItem>
            <SidebarItem icon={<Bell />} disabled>
              Notifications
            </SidebarItem>
          </SidebarGroup>

          {/* LOGOUT */}
          <SidebarItem icon={<LogOut />} danger>
            Logout
          </SidebarItem>
        </aside>

        {/* CONTENT */}
        <main className="content">
          {section === "profile" && <ProfileInfo />}
          {section === "address" && (
            <ManageAddresses
              addresses={addresses}
              setAddresses={setAddresses}
              showForm={showForm}
              setShowForm={setShowForm}
            />
          )}
          {section === "orders" && <OrdersEmpty />}
        </main>
      </div>
    </div>
  );
}

/* ---------- SIDEBAR HELPERS ---------- */

function SidebarItem({ icon, children, onClick, active, disabled, danger }) {
  return (
    <div
      className={`sidebar-item
        ${active ? "active" : ""}
        ${disabled ? "disabled" : ""}
        ${danger ? "danger" : ""}`}
      onClick={!disabled ? onClick : undefined}
    >
      {icon}
      <span>{children}</span>
    </div>
  );
}

function SidebarGroup({ title, children }) {
  return (
    <div className="sidebar-group">
      <div className="sidebar-title">{title}</div>
      {children}
    </div>
  );
}

/* ---------- PROFILE INFO ---------- */

function ProfileInfo() {
  const [edit, setEdit] = useState(false);

  return (
    <div className="profile-card">
      <div className="card-header">
        <h2>Personal Information</h2>
        {!edit && (
          <button className="link-btn" onClick={() => setEdit(true)}>
            Edit
          </button>
        )}
      </div>

      <div className="grid-2">
        <input className={`input ${!edit ? "readonly" : ""}`} placeholder="First Name" readOnly={!edit} />
        <input className={`input ${!edit ? "readonly" : ""}`} placeholder="Last Name" readOnly={!edit} />
      </div>

      <input className={`input ${!edit ? "readonly" : ""}`} placeholder="Email" readOnly={!edit} />
      <input className={`input ${!edit ? "readonly" : ""}`} placeholder="Mobile Number" readOnly={!edit} />

      {edit && (
        <div className="actions">
          <button className="btn primary">Save</button>
          <button className="btn outline" onClick={() => setEdit(false)}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

/* ---------- ORDERS ---------- */

function OrdersEmpty() {
  return (
    <div className="orders-empty">
      <Package size={64} />
      <h3>No Orders Yet</h3>
      <p>You haven’t placed any orders yet.</p>
      <button className="btn primary">Start Shopping</button>
    </div>
  );
}

/* ---------- ADDRESSES ---------- */

function ManageAddresses({ addresses, setAddresses, showForm, setShowForm }) {
  const deleteAddress = (index) =>
    setAddresses(addresses.filter((_, i) => i !== index));

  return (
    <div>
      <h2 className="section-title">Manage Addresses</h2>

      {!showForm && (
        <button className="add-address" onClick={() => setShowForm(true)}>
          + Add New Address
        </button>
      )}

      {showForm && (
        <AddressForm
          onSave={(addr) => {
            setAddresses([...addresses, addr]);
            setShowForm(false);
          }}
          onCancel={() => setShowForm(false)}
        />
      )}

      {addresses.map((addr, i) => (
        <AddressCard key={i} address={addr} onDelete={() => deleteAddress(i)} />
      ))}
    </div>
  );
}

function AddressForm({ onSave, onCancel }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const update = (k, v) => setForm({ ...form, [k]: v });

  return (
    <div className="address-form">
      <h3>Add New Address</h3>

      <input className="input" placeholder="Name" onChange={(e) => update("name", e.target.value)} />
      <input className="input" placeholder="Mobile Number" onChange={(e) => update("phone", e.target.value)} />
      <textarea className="input textarea" placeholder="Address" onChange={(e) => update("address", e.target.value)} />

      <div className="actions">
        <button className="btn primary" onClick={() => onSave(form)}>Save</button>
        <button className="btn outline" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

function AddressCard({ address, onDelete }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="address-card">
      <div>
        <strong>{address.name}</strong>
        <div className="muted">{address.address}</div>
      </div>

     <div className="menu">
  <button
    className="menu-btn"
    onClick={() => setOpen(!open)}
  >
    <MoreVertical size={18} />
  </button>

  {open && (
    <div className="dropdown gold-dropdown">
      <div className="dropdown-item">Edit</div>
      <div className="dropdown-item danger" onClick={onDelete}>
        Delete
      </div>
    </div>
  )}
</div>


    </div>
  );
}
