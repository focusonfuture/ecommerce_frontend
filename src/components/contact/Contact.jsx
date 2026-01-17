import React, { useState } from 'react';

import { AnimateIcon } from "../ui/AnimateIcon";
import { Send } from "../ui/icons/Send";



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [focused, setFocused] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #f8d358 0%, #e09744 100%)',
        padding: '100px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '20px', letterSpacing: '-1px' }}>
            Get In Touch
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: '0.95', maxWidth: '600px', margin: '0 auto' }}>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div style={{ marginTop: '-60px', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="row" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              {
                icon: '📞',
                title: 'Call Us',
                info: '+1 (123) 456-7890',
                subinfo: 'Mon-Fri 9am-6pm',
                color: '#f1bd0f'
              },
              {
                icon: '✉️',
                title: 'Email Us',
                info: 'support@teashop.com',
                subinfo: 'Online support',
                color: '#f1bd0f'
              },
              {
                icon: '📍',
                title: 'Visit Us',
                info: '26 Rue Pelleport',
                subinfo: 'Paris, France',
                color: '#f1bd0f'
              }
            ].map((item, i) => (
              <div key={i} style={{
                flex: '1',
                minWidth: '250px',
                maxWidth: '320px',
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
                textAlign: 'center',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                }}>
                  {item.icon}
                </div>
                <h5 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '10px', color: '#2d3748' }}>
                  {item.title}
                </h5>
                <p style={{ fontSize: '1.1rem', color: item.color, fontWeight: '600', marginBottom: '5px' }}>
                  {item.info}
                </p>
                <p style={{ fontSize: '0.9rem', color: '#f1bd0f' }}>
                  {item.subinfo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form and Map Section */}
      <div style={{ padding: '100px 20px', background: '#f7fafc' }}>
        <div className="container">
          <div className="row">
            {/* Contact Form */}
            <div className="col-lg-6">
              <div style={{
                background: 'white',
                borderRadius: '24px',
                padding: '50px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                height: '100%'
              }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '15px', color: '#2d3748' }}>
                  Send a Message
                </h2>
                <p style={{ color: '#f1bd0f', marginBottom: '40px', fontSize: '1.05rem' }}>
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  {/* Name Input */}
                  <div style={{ position: 'relative' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#4a5568',
                      marginBottom: '8px'
                    }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused({ ...focused, name: true })}
                      onBlur={() => setFocused({ ...focused, name: false })}
                      placeholder="John Doe"
                      required
                      style={{
                        width: '100%',
                        padding: '15px 20px',
                        border: focused.name ? '2px solid #667eea' : '2px solid #e2e8f0',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        outline: 'none',
                        background: '#fafafa'
                      }}
                    />
                  </div>

                  {/* Email & Phone Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#4a5568',
                        marginBottom: '8px'
                      }}>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocused({ ...focused, email: true })}
                        onBlur={() => setFocused({ ...focused, email: false })}
                        placeholder="john@example.com"
                        required
                        style={{
                          width: '100%',
                          padding: '15px 20px',
                          border: focused.email ? '2px solid #667eea' : '2px solid #e2e8f0',
                          borderRadius: '12px',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          outline: 'none',
                          background: '#fafafa'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#4a5568',
                        marginBottom: '8px'
                      }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused({ ...focused, phone: true })}
                        onBlur={() => setFocused({ ...focused, phone: false })}
                        placeholder="+1 234 567 890"
                        style={{
                          width: '100%',
                          padding: '15px 20px',
                          border: focused.phone ? '2px solid #667eea' : '2px solid #e2e8f0',
                          borderRadius: '12px',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          outline: 'none',
                          background: '#fafafa'
                        }}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#4a5568',
                      marginBottom: '8px'
                    }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocused({ ...focused, subject: true })}
                      onBlur={() => setFocused({ ...focused, subject: false })}
                      placeholder="How can we help you?"
                      required
                      style={{
                        width: '100%',
                        padding: '15px 20px',
                        border: focused.subject ? '2px solid #667eea' : '2px solid #e2e8f0',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        outline: 'none',
                        background: '#fafafa'
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#4a5568',
                      marginBottom: '8px'
                    }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused({ ...focused, message: true })}
                      onBlur={() => setFocused({ ...focused, message: false })}
                      placeholder="Tell us more about your inquiry..."
                      required
                      rows="5"
                      style={{
                        width: '100%',
                        padding: '15px 20px',
                        border: focused.message ? '2px solid #667eea' : '2px solid #e2e8f0',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                        background: '#fafafa'
                      }}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
  onClick={handleSubmit}
  style={{
    width: "100%",
    padding: "18px",
    background: "linear-gradient(135deg, #ffd000 0%, #ff9900 100%)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  }}
>
  <span>Send Message</span>

  <AnimateIcon animateOnHover>
    <Send size={22} />
  </AnimateIcon>
</button>

                </div>
              </div>
            </div>

            {/* Map */}
            <div className="col-lg-6">
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                height: '100%',
                minHeight: '600px',
                position: 'relative'
              }}>
                {/* Map Overlay Info */}
                <div style={{
                  position: 'absolute',
                  top: '30px',
                  left: '30px',
                  right: '30px',
                  background: 'white',
                  padding: '25px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                  zIndex: 10
                }}>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '15px', color: '#2d3748' }}>
                    📍 Main Office
                  </h4>
                  <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
                    26 Rue Pelleport, Saint-Antoine<br />
                    Paris, France 75020
                  </p>
                  <div style={{ 
                    marginTop: '15px', 
                    paddingTop: '15px', 
                    borderTop: '1px solid #e2e8f0',
                    display: 'flex',
                    gap: '15px',
                    fontSize: '0.9rem',
                    color: '#718096'
                  }}>
                    <span>⏰ Mon-Fri: 9AM-6PM</span>
                  </div>
                </div>

                <iframe
                  title="google-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2887268724794!2d2.3916315156744614!3d48.86587597928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b785%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1234567890123"
                  loading="lazy"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    border: 0,
                    filter: 'grayscale(0.2) contrast(1.1)'
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Stores */}
      <div className="location-area pt-70 pb-25">
        <div className="container">
          <div className="row mb-40">
            <div className="col-xl-12">
              <div style={{ textAlign: 'center' }}>
                <span style={{
                  color: '#ffc400',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  textTransform: 'uppercase'
                }}>
                  OUR LOCATIONS
                </span>
                <h4 style={{ fontSize: '2.5rem', fontWeight: '700', margin: '15px 0', color: '#2d3748' }}>
                  Visit Our Stores
                </h4>
                <p style={{ color: '#718096', maxWidth: '700px', margin: '0 auto', fontSize: '1.05rem' }}>
                  Find us in major cities around the world. Stop by for a cup of tea and explore our collection.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {[
              {
                img: "assets/img/location/location-1.jpg",
                title: "Abcd",
                address: "abcd",
                city: "Cochin, Kerala"
              },
              
            ].map((loc, i) => (
              <div className="col-xl-3 col-lg-3 col-md-6" key={i}>
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  marginBottom: '30px',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
                }}>
                  <div style={{ 
                    height: '200px', 
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img 
                      src={loc.img} 
                      alt={loc.title}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                  </div>

                  <div style={{ padding: '25px' }}>
                    <h6 style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: '700', 
                      marginBottom: '15px',
                      color: '#2d3748'
                    }}>
                      {loc.title}
                    </h6>

                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      marginBottom: '12px',
                      color: '#718096',
                      fontSize: '0.95rem'
                    }}>
                      <span style={{ marginRight: '10px' }}>📍</span>
                      <div>
                        <div style={{ fontWeight: '500', color: '#4a5568' }}>{loc.address}</div>
                        <div>{loc.city}</div>
                      </div>
                    </div>

                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '12px',
                      color: '#718096',
                      fontSize: '0.95rem'
                    }}>
                      <span style={{ marginRight: '10px' }}>📞</span>
                      <a href="tel:+1001234567890" style={{ color: '#667eea', textDecoration: 'none' }}>
                        (+100) 123 456 7890
                      </a>
                    </div>

                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      color: '#718096',
                      fontSize: '0.95rem'
                    }}>
                      <span style={{ marginRight: '10px' }}>✉️</span>
                      <a href="mailto:info@example.com" style={{ color: '#667eea', textDecoration: 'none' }}>
                        info@example.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </main>
  );
};

export default Contact;