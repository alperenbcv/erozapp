import React from 'react';
import companylogo from '../../icon/transparent-background,-no-shadow-designify.png';
import instagramlogo from '../../icon/pngfind.com-instagram-png-white-2773517.png';
import whatsapplogo from '../../icon/toppng.com-white-whatsapp-n-256x256.png';
import './TopBar.css';

function TopBar() {
    return (
        <div className="topbar-container">
            <div className="logo-name-container">
                <img className="company-logo" src={companylogo} alt="company-logo" />
                <h2 className="company-name">Eröz Demir Çelik</h2>
            </div>
            <nav className="navigation">
                <a className="nav-link" href="#">Ürünlerimiz</a>
                <a className="nav-link" href="#">Hakkımızda</a>
                <a className="nav-link" href="#">İletişim</a>
            </nav>
            <div className="social-icons">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img className="social-logo" src={instagramlogo} alt="Instagram" />
                </a>
                <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                    <img className="social-logo" src={whatsapplogo} alt="WhatsApp" />
                </a>
            </div>
        </div>
    );
}

export default TopBar;
