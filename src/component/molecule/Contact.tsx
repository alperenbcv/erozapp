import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-details">
        <div className="contact-card">
          <i className="fas fa-map-marker-alt"></i>
          <h3>ADRES</h3>
          <p>Soho 94 Broadway St<br />New York, NY 1001</p>
        </div>
        <div className="contact-card">
          <i className="fas fa-phone"></i>
          <h3>TELEFON</h3>
          <p>234-9876-5400</p>
        </div>
        <div className="contact-card">
          <i className="fas fa-fax"></i>
          <h3>FAX</h3>
          <p>1-234-567-8900</p>
        </div>
        <div className="contact-card">
          <i className="fas fa-envelope"></i>
          <h3>EMAIL</h3>
          <p>hello@thetheme.com</p>
        </div>
      </div>
      <div className="google-maps">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.983727218283!2d-74.00944768459764!3d40.713053379331714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3175e1243b%3A0x53ed9e850765098b!2s94%20Broadway%2C%20New%20York%2C%20NY%2010013%2C%20USA!5e0!3m2!1sen!2sus!4v1696608271616!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
