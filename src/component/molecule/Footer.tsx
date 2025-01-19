import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Hakkımızda</h4>
          <p>
            Eröz Demir Çelik, kaliteli ürün ve hizmet anlayışıyla sektörün liderlerinden biri olarak faaliyet göstermektedir.
          </p>
        </div>
        <div className="footer-section">
          <h4>İletişim</h4>
          <p>Adres: Örnek Mahallesi, İstanbul</p>
          <p>Telefon: +90 123 456 7890</p>
          <p>Email: info@erozdemircelik.com</p>
        </div>
        <div className="footer-section">
          <h4>Sosyal Medya</h4>
          <div className="footer-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Eröz Demir Çelik. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
}

export default Footer;
