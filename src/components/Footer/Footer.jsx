// components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '/assets/logo_2.png';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Bagian Logo dan Alamat */}
        <div className="footer-section logo-section-footer">
          <div className="logo-wrapper-footer">
            <img src={logo} alt="Logo Keuskupan" className="footer-logo" />
            <h3 className="footer-title">Keuskupan Agung Kupang</h3>
          </div>
          <p className="address">
            Jl. Katedral No. 2, Kelurahan Naikoten I,<br />
            Kecamatan Kota Raja, Kupang, NTT<br />
            85228, Indonesia
          </p>
        </div>

        {/* Akses Cepat dengan 2 kolom */}
        <div className="footer-section quick-access">
          <h4 className="section-title-footer">Akses Cepat</h4>
          <div className="quick-links-grid">
            <div className="link-column">
              <Link to="/suara-gembala">Suara Gembala</Link>
              <Link to="/konsultasi-iman">Konsultasi Iman</Link>
              <Link to="/renungan-harian">Renungan Harian</Link>
              <Link to="/download">Download</Link>
            </div>
            <div className="link-column">
              <Link to="/berita-harian">Berita Harian</Link>
              <Link to="/serba-serbi">Serba-Serbi</Link>
              <Link to="/tokoh">Tokoh</Link>
              <Link to="/galeri">Galeri</Link>
            </div>
          </div>
        </div>

        {/* Kontak dengan layout baru */}
        <div className="footer-section contact-section">
          <h4 className="section-title-footer">Kontak</h4>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Telepon:</span>
              <span className="contact-value">(0380) 820032</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <span className="contact-value">info@keuskupanagungkupang.org</span>
            </div>
            <div className="social-media">
              <a href="https://www.facebook.com/DiosesAgungKupang" target="_blank" rel="noreferrer">
                <FaFacebook className="social-icon" />
              </a>
              <a href="https://www.instagram.com/komsos_kak?igshid=ZDdkNTZiNTM%3D" target="_blank" rel="noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://x.com/kupangensis_kak" target="_blank" rel="noreferrer">
                <SiX className="social-icon" />
              </a>
              <a href="https://www.youtube.com/channel/UCRWIe5Cea4s1FPkwW4HQ1Bg" target="_blank" rel="noreferrer">
                <FaYoutube className="social-icon" />
              </a>
              <a href="https://www.tiktok.com/@komsos_kak?_t=8bqWXoOv8bp&_r=1" target="_blank" rel="noreferrer">
                <FaTiktok className="social-icon" />
              </a>    
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright dengan desain baru */}
      <div className="copyright-section">
        <div className="copyright-content">
          <span>© {new Date().getFullYear()} Keuskupan Agung Kupang</span>
          <span>All rights reserved</span>
          <span>Developed by [Genome06]</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;