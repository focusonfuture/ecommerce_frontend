import React, { useState } from 'react';
import { User, Package, CreditCard, Wallet, Gift, Heart, Bell, LogOut, ChevronRight, MapPin } from 'lucide-react';

export default function FlipkartProfile() {
  const [activeSection, setActiveSection] = useState('profile');
  const [showAddressForm, setShowAddressForm] = useState(false);

  return (
    <div style={{ background: '#f1f3f6', minHeight: '100vh', padding: '20px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '240px 1fr', gap: '12px', padding: '0 20px' }}>
        
        {/* Sidebar */}
        <aside>
          {/* User Card */}
          <div style={{ background: '#fff', borderRadius: '2px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', marginBottom: '12px' }}>
            <div style={{ padding: '24px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '48px', height: '48px', background: '#2874f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '20px', fontWeight: '500', flexShrink: 0 }}>
                A
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#878787' }}>Hello,</div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#212121' }}>Demo</div>
              </div>
            </div>
          </div>

          {/* MY ORDERS */}
          <div style={{ background: '#fff', borderRadius: '2px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', marginBottom: '12px' }}>
            <div
              onClick={() => setActiveSection('orders')}
              style={{
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                color: '#878787',
                fontSize: '13px',
                fontWeight: '500',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Package size={20} />
                <span>MY ORDERS</span>
              </div>
              <ChevronRight size={16} />
            </div>
          </div>

          {/* ACCOUNT SETTINGS */}
          <div style={{ background: '#fff', borderRadius: '2px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', marginBottom: '12px' }}>
            <div style={{ padding: '16px 16px 8px 16px' }}>
              <div style={{ fontSize: '11px', color: '#878787', fontWeight: '600', letterSpacing: '0.5px', marginBottom: '12px' }}>
                ACCOUNT SETTINGS
              </div>
              
              <SidebarItem 
                icon={<User size={18} />} 
                active={activeSection === 'profile'} 
                onClick={() => setActiveSection('profile')}
              >
                Profile Information
              </SidebarItem>
              
              <SidebarItem 
                icon={<MapPin size={18} />} 
                active={activeSection === 'address'} 
                onClick={() => setActiveSection('address')}
              >
                Manage Addresses
              </SidebarItem>
              
              <SidebarItem 
                icon={<CreditCard size={18} />} 
                active={activeSection === 'pan'} 
                onClick={() => setActiveSection('pan')}
              >
                PAN Card Information
              </SidebarItem>
            </div>
          </div>

          {/* PAYMENTS */}
          <div style={{ background: '#fff', borderRadius: '2px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', marginBottom: '12px' }}>
            <div style={{ padding: '16px 16px 8px 16px' }}>
              <div style={{ fontSize: '11px', color: '#878787', fontWeight: '600', letterSpacing: '0.5px', marginBottom: '12px' }}>
                PAYMENTS
              </div>
              
              <SidebarItem icon={<Gift size={18} />} onClick={() => setActiveSection('giftcards')}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  <span>Gift Cards</span>
                  <span style={{ fontSize: '11px', color: '#878787' }}>₹0</span>
                </div>
              </SidebarItem>
              
              <SidebarItem icon={<Wallet size={18} />} onClick={() => setActiveSection('upi')}>
                Saved UPI
              </SidebarItem>
              
              <SidebarItem icon={<CreditCard size={18} />} onClick={() => setActiveSection('cards')}>
                Saved Cards
              </SidebarItem>
            </div>
          </div>

          {/* MY STUFF */}
          <div style={{ background: '#fff', borderRadius: '2px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', marginBottom: '12px' }}>
            <div style={{ padding: '16px 16px 8px 16px' }}>
              <div style={{ fontSize: '11px', color: '#878787', fontWeight: '600', letterSpacing: '0.5px', marginBottom: '12px' }}>
                MY STUFF
              </div>
              
              <SidebarItem icon={<Gift size={18} />} onClick={() => setActiveSection('coupons')}>
                My Coupons
              </SidebarItem>
              
              <SidebarItem icon={<Package size={18} />} onClick={() => setActiveSection('reviews')}>
                My Reviews & Ratings
              </SidebarItem>
              
              <SidebarItem icon={<Bell size={18} />} onClick={() => setActiveSection('notifications')}>
                All Notifications
              </SidebarItem>
              
              <SidebarItem icon={<Heart size={18} />} onClick={() => setActiveSection('wishlist')}>
                My Wishlist
              </SidebarItem>
            </div>
          </div>

          {/* Logout */}
          <div style={{ background: '#fff', borderRadius: '2px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', marginBottom: '12px' }}>
            <div
              style={{
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                color: '#878787',
                fontSize: '13px',
                fontWeight: '500',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <LogOut size={20} />
              <span>Logout</span>
            </div>
          </div>

          {/* Frequently Visited */}
          <div style={{ padding: '0 4px' }}>
            <div style={{ fontSize: '11px', color: '#878787', marginBottom: '8px' }}>Frequently Visited:</div>
            <div style={{ fontSize: '12px', color: '#2874f0', cursor: 'pointer', marginBottom: '4px' }}>Track Order</div>
            <div style={{ fontSize: '12px', color: '#2874f0', cursor: 'pointer' }}>Help Center</div>
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ background: '#fff', borderRadius: '2px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
          {activeSection === 'profile' && <ProfileInformation />}
          {activeSection === 'address' && <ManageAddresses showAddressForm={showAddressForm} setShowAddressForm={setShowAddressForm} />}
          {activeSection === 'pan' && <PANCard />}
          {activeSection === 'orders' && <Orders />}
        </main>
      </div>
    </div>
  );
}

function SidebarItem({ icon, children, active, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: '10px 0',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        cursor: 'pointer',
        color: active ? '#2874f0' : '#878787',
        fontWeight: active ? '600' : '400',
        fontSize: '13px',
        transition: 'all 0.2s'
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.color = '#212121';
          e.currentTarget.style.fontWeight = '500';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.color = '#878787';
          e.currentTarget.style.fontWeight = '400';
        }
      }}
    >
      {icon}
      <span style={{ flex: 1 }}>{children}</span>
    </div>
  );
}

function ProfileInformation() {
  return (
    <div style={{ padding: '30px' }}>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '500', color: '#212121', margin: 0 }}>Personal Information</h2>
          <button style={{ color: '#2874f0', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>
            Edit
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <input type="text" defaultValue="" placeholder="First Name" style={inputStyle} />
          <input type="text" defaultValue="" placeholder="Last Name" style={inputStyle} />
        </div>

        <div>
          <div style={{ fontSize: '12px', color: '#878787', marginBottom: '12px' }}>Your Gender</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: '#212121' }}>
              <input type="radio" name="gender" style={{ accentColor: '#2874f0' }} />
              Male
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: '#212121' }}>
              <input type="radio" name="gender" style={{ accentColor: '#2874f0' }} />
              Female
            </label>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '500', color: '#212121', margin: 0 }}>Email Address</h2>
          <button style={{ color: '#2874f0', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>
            Edit
          </button>
        </div>
        <input type="email" value="demo@gmail.com" readOnly style={{ ...inputStyle, background: '#f5f5f5', color: '#878787' }} />
      </div>

      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '500', color: '#212121', margin: 0 }}>Mobile Number</h2>
          <button style={{ color: '#2874f0', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>
            Edit
          </button>
        </div>
        <input type="tel" value="+91123456789" readOnly style={{ ...inputStyle, background: '#f5f5f5', color: '#878787' }} />
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '20px', color: '#212121' }}>FAQs</h3>
        <FAQ question="What happens when I update my email address (or mobile number)?">
          Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
        </FAQ>
        <FAQ question="When will my Flipkart account be updated with the new email address (or mobile number)?">
          It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.
        </FAQ>
        <FAQ question="What happens to my existing Flipkart account when I update my email address (or mobile number)?">
          Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order History, saved information and personal details.
        </FAQ>
        <FAQ question="Does my Seller account get affected when I update my email address?">
          Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.
        </FAQ>
      </div>

      <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #f0f0f0', display: 'flex', gap: '24px' }}>
        <button style={{ color: '#2874f0', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500', padding: 0 }}>
          Deactivate Account
        </button>
        <button style={{ color: '#ff5722', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500', padding: 0 }}>
          Delete Account
        </button>
      </div>
    </div>
  );
}

function ManageAddresses({ showAddressForm, setShowAddressForm }) {
  const addresses = [
    { name: 'demo', phone: '1234566789', type: 'HOME', address: 'Abc', pincode: '686513' },
    { name: 'demo', phone: '1234566789', type: 'HOME', address: 'Abc', pincode: '682016' },
    { name: 'demo', phone: '1234566789', type: null, address: 'Abc', pincode: '682040' },
    { name: 'demo', phone: '1234566789', type: 'WORK', address: 'Abc', pincode: '686513' }
  ];

  return (
    <div style={{ padding: '30px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: '500', color: '#212121', marginBottom: '24px' }}>Manage Addresses</h2>
      
      {showAddressForm ? (
        <AddressForm onClose={() => setShowAddressForm(false)} />
      ) : (
        <>
          <button 
            onClick={() => setShowAddressForm(true)}
            style={{ 
              width: '100%', 
              padding: '18px', 
              background: '#fff', 
              border: '1px dashed #c2c2c2', 
              borderRadius: '2px', 
              color: '#2874f0', 
              fontSize: '13px', 
              fontWeight: '600', 
              cursor: 'pointer', 
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
          >
            + ADD A NEW ADDRESS
          </button>

          <div>
            {addresses.map((addr, idx) => (
              <div key={idx} style={{ border: '1px solid #e0e0e0', borderRadius: '2px', padding: '20px', marginBottom: '16px', position: 'relative' }}>
                {addr.type && (
                  <span style={{ 
                    position: 'absolute', 
                    top: '16px', 
                    right: '16px', 
                    background: '#f0f0f0', 
                    padding: '4px 12px', 
                    fontSize: '10px', 
                    fontWeight: '600', 
                    color: '#878787', 
                    borderRadius: '2px',
                    letterSpacing: '0.5px'
                  }}>
                    {addr.type}
                  </span>
                )}
                <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '4px', color: '#212121' }}>
                  {addr.name} <span style={{ fontWeight: '600', color: '#212121', marginLeft: '8px' }}>{addr.phone}</span>
                </div>
                <div style={{ fontSize: '14px', color: '#878787', lineHeight: '1.6', marginTop: '8px' }}>
                  {addr.address} - <span style={{ fontWeight: '600', color: '#212121' }}>{addr.pincode}</span>
                </div>
                <div style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
                  <button style={{ background: 'none', border: 'none', color: '#2874f0', fontSize: '13px', fontWeight: '600', cursor: 'pointer', padding: 0 }}>Edit</button>
                  <button style={{ background: 'none', border: 'none', color: '#2874f0', fontSize: '13px', fontWeight: '600', cursor: 'pointer', padding: 0 }}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function AddressForm({ onClose }) {
  return (
    <div style={{ background: '#fafafa', padding: '24px', borderRadius: '2px', border: '1px solid #e0e0e0' }}>
      <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px', color: '#212121', textTransform: 'uppercase', letterSpacing: '0.5px' }}>ADD A NEW ADDRESS</h3>
      
      <button 
        style={{ 
          width: '100%', 
          padding: '12px', 
          background: '#2874f0', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '2px', 
          fontSize: '13px', 
          fontWeight: '500', 
          cursor: 'pointer',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}
      >
        <MapPin size={18} />
        Use my current location
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <input type="text" placeholder="Name" style={formInputStyle} />
        <input type="tel" placeholder="10-digit mobile number" style={formInputStyle} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <input type="text" placeholder="Pincode" style={formInputStyle} />
        <input type="text" placeholder="Locality" style={formInputStyle} />
      </div>

      <textarea 
        placeholder="Address (Area and Street)" 
        style={{ ...formInputStyle, minHeight: '80px', marginBottom: '16px', resize: 'vertical' }}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <input type="text" placeholder="City/District/Town" style={formInputStyle} />
        <select style={formInputStyle}>
          <option>--Select State--</option>
          <option>Kerala</option>
          <option>Karnataka</option>
          <option>Tamil Nadu</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
        <input type="text" placeholder="Landmark (Optional)" style={formInputStyle} />
        <input type="tel" placeholder="Alternate Phone (Optional)" style={formInputStyle} />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <div style={{ fontSize: '13px', fontWeight: '500', marginBottom: '12px', color: '#212121' }}>Address Type</div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}>
            <input type="radio" name="addressType" defaultChecked style={{ accentColor: '#2874f0' }} />
            Home
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}>
            <input type="radio" name="addressType" style={{ accentColor: '#2874f0' }} />
            Work
          </label>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '16px' }}>
        <button style={{ 
          flex: 1, 
          padding: '12px', 
          background: '#2874f0', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '2px', 
          fontSize: '14px', 
          fontWeight: '600', 
          cursor: 'pointer',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          SAVE
        </button>
        <button 
          onClick={onClose}
          style={{ 
            flex: 1, 
            padding: '12px', 
            background: '#fff', 
            color: '#2874f0', 
            border: '1px solid #e0e0e0', 
            borderRadius: '2px', 
            fontSize: '14px', 
            fontWeight: '600', 
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}

function PANCard() {
  return (
    <div style={{ padding: '60px 30px', textAlign: 'center', color: '#878787' }}>
      <CreditCard size={56} color="#c2c2c2" style={{ margin: '0 auto 24px' }} />
      <h3 style={{ fontSize: '18px', marginBottom: '12px', fontWeight: '500', color: '#212121' }}>No PAN Card Added</h3>
      <p style={{ fontSize: '14px', marginBottom: '24px' }}>Add your PAN card details to enable payment options</p>
      <button style={{ padding: '12px 32px', background: '#2874f0', color: '#fff', border: 'none', borderRadius: '2px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
        Add PAN Card
      </button>
    </div>
  );
}

function Orders() {
  return (
    <div style={{ padding: '60px 30px', textAlign: 'center', color: '#878787' }}>
      <Package size={56} color="#c2c2c2" style={{ margin: '0 auto 24px' }} />
      <h3 style={{ fontSize: '18px', marginBottom: '12px', fontWeight: '500', color: '#212121' }}>No orders yet</h3>
      <p style={{ fontSize: '14px' }}>Start shopping to see your orders here</p>
    </div>
  );
}

function FAQ({ question, children }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ fontWeight: '500', fontSize: '14px', marginBottom: '8px', color: '#212121' }}>{question}</div>
      <div style={{ fontSize: '14px', color: '#878787', lineHeight: '1.6' }}>{children}</div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  border: '1px solid #c2c2c2',
  borderRadius: '2px',
  fontSize: '14px',
  outline: 'none',
  transition: 'border 0.2s',
  fontFamily: 'inherit',
  color: '#212121'
};

const formInputStyle = {
  width: '100%',
  padding: '10px 12px',
  border: '1px solid #c2c2c2',
  borderRadius: '2px',
  fontSize: '13px',
  outline: 'none',
  fontFamily: 'inherit',
  color: '#212121'
};