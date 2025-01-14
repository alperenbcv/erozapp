import React from 'react'
import companylogo from '../../icon/transparent-background,-no-shadow-designify.png'
import instagramlogo from '../../icon/pngfind.com-instagram-png-white-2773517.png'
import whatsapplogo from '../../icon/toppng.com-white-whatsapp-n-256x256.png'
import './TopBar.css'

function TopBar() {
    return (
      <div className="topbar-container">
        <div className="logo-col">
          <img className="company-logo" src={companylogo} alt="company-logo" />
        </div>
        <div className="name-col">
          <h2 className="company-name">Eröz Demir Çelik</h2>
        </div>
        <div className="top-link">
          <a className="link-label" href='#'>Ürünlerimiz</a>
        </div>
        <div className="top-link">
            <a className="link-label" href='#'>Hakkımızda</a>
        </div>
        <div className="top-link">
            <a className="link-label" href='#'>İletişim</a>
        </div>
        <div className="social-col">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img className="instagram-logo" src={instagramlogo} alt="Instagram" />
            </a>
            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                <img className="whatsapp-logo" src={whatsapplogo} alt="WhatsApp" />
            </a>
        </div>

      </div>
    );
  }
  
  export default TopBar;
  