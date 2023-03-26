import React from 'react';
import { FaTiktok, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import "./foter.css"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Poppins:wght@300&display=swap');
</style>

function Footer() {
  return (
    <footer>
        <div className="footer-content">
        <h5>Contact Us</h5>
        <h6>Accessibility</h6>
        </div>
      <div className="social-media">
        <div className="TikTok">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FaTiktok size={20} />
        </a>
        </div>
        <div className="whatsApp">
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FaWhatsapp size={20} />
        </a>
        </div>
        <div className="Instagram">
        <a href="https://www.instagram.com/damdam.suit/" target="_blank" rel="noreferrer">
          <FaInstagram size={20} />
        </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
