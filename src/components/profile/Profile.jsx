import React, { useState } from "react";
import {
  User,
  Edit2,
  MapPin,
  Phone,
  Mail,
  Briefcase,
  Calendar,
  Award,
  Globe,
  Heart,
  Settings,
  Bell,
  Shield,
  CreditCard,
  Package,
  LogOut,
  Camera,
} from "lucide-react";

export default function ProfileComponent() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const [profileData, setProfileData] = useState({
    firstName: "Alex",
    lastName: "Johnson",
    username: "@alexj",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Product designer passionate about creating delightful user experiences.",
    location: "San Francisco, CA",
    website: "alexjohnson.design",
    birthday: "1995-03-20",
    profession: "Senior Product Designer",
  });

  

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setProfileImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* ================= CSS ================= */}
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }

        .page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f4f6fb, #e9edf3);
          padding: 24px;
          font-family: system-ui, sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: auto;
        }

        .card {
          background: #fff;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
        }

        .header {
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          height: 180px;
          border-radius: 18px;
          position: relative;
        }

        .profile-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: -80px;
          gap: 20px;
          flex-wrap: wrap;
        }

        .avatar {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: #4f46e5;
          color: #fff;
          font-size: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 5px solid #fff;
          position: relative;
          overflow: hidden;
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .avatar label {
          position: absolute;
          bottom: 6px;
          right: 6px;
          background: #fff;
          padding: 6px;
          border-radius: 50%;
          cursor: pointer;
        }

        .name {
          font-size: 28px;
          font-weight: 700;
        }

        .username {
          color: #6b7280;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .stat {
          padding: 16px;
          border-radius: 14px;
          border: 1px solid #e5e7eb;
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 24px;
          margin-top: 32px;
        }

        .sidebar {
          position: sticky;
          top: 24px;
        }

        .nav-btn {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: none;
          background: none;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          font-weight: 600;
          color: #374151;
        }

        .nav-btn.active {
          background: #eef2ff;
          color: #4338ca;
        }

        .field {
          margin-bottom: 16px;
        }

        .field label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .field input,
        .field textarea {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: 2px solid #e5e7eb;
          font-size: 14px;
        }

        .field input:disabled,
        .field textarea:disabled {
          background: #f9fafb;
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: #fff;
          border: none;
          padding: 12px 18px;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-outline {
          background: none;
          border: 2px solid #e5e7eb;
          padding: 12px 18px;
          border-radius: 12px;
          cursor: pointer;
        }
      `}</style>

      {/* ================= UI ================= */}
      <div className="page">
        <div className="container">
          <div className="card">
            <div className="header"></div>

            <div className="profile-row">
              <div style={{ display: "flex", gap: 20 }}>
                <div className="avatar">
                  {profileImage ? (
                    <img src={profileImage} alt="profile" />
                  ) : (
                    `${profileData.firstName[0]}${profileData.lastName[0]}`
                  )}
                  <label>
                    <Camera size={16} />
                    <input type="file" hidden onChange={handleImageUpload} />
                  </label>
                </div>

                <div>
                  <div className="name">
                    {profileData.firstName} {profileData.lastName}
                  </div>
                  <div className="username">{profileData.username}</div>
                </div>
              </div>

              <button
                className="btn-primary"
                onClick={() => setActiveTab("edit")}
              >
                <Edit2 size={16} /> Edit Profile
              </button>
            </div>

            <div className="stats">
              {stats.map((s, i) => (
                <div className="stat" key={i}>
                  <s.icon size={20} />
                  <div>
                    <strong>{s.value}</strong>
                    <div>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="layout">
            <div className="sidebar card">
              {["overview", "edit", "notifications", "privacy",].map(
                (tab) => (
                  <button
                    key={tab}
                    className={`nav-btn ${
                      activeTab === tab ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                )
              )}
              <button className="nav-btn" style={{ color: "red" }}>
                <LogOut size={18} /> Logout
              </button>
            </div>

            <div className="card">
              {activeTab === "edit" && (
                <>
                  <h2>Edit Profile</h2>

                  {Object.keys(profileData).map((key) => (
                    <div className="field" key={key}>
                      <label>{key}</label>
                      {key === "bio" ? (
                        <textarea
                          name={key}
                          value={profileData[key]}
                          onChange={handleChange}
                          disabled={!isEditing}
                        />
                      ) : (
                        <input
                          name={key}
                          value={profileData[key]}
                          onChange={handleChange}
                          disabled={!isEditing}
                        />
                      )}
                    </div>
                  ))}

                  {!isEditing ? (
                    <button
                      className="btn-primary"
                      onClick={() => setIsEditing(true)}
                    >
                      Enable Editing
                    </button>
                  ) : (
                    <>
                      <button
                        className="btn-outline"
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </button>{" "}
                      <button className="btn-primary">Save</button>
                    </>
                  )}
                </>
              )}

              {activeTab === "overview" && (
                <>
                  <h2>About</h2>
                  <p>{profileData.bio}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
