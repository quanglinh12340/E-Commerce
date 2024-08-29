import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

import "@/assets/css/Footer.css";
import logo from "@/assets/image/logo.png";
import app from "@/assets/image/footer/app.jpg";
import pay from "@/assets/image/footer/pay.png";
import play from "@/assets/image/footer/play.jpg";

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <div className="logo">
          <img className="logo" src={logo} alt="" />
        </div>
        <h4>Contact</h4>
        <p>
          <strong>Address:</strong>562 Wellington Road, Street 32, San Francisco
        </p>
        <p>
          <strong>Phone:</strong>+01 2222 365/(+91)01 2345 6789
        </p>
        <p>
          <strong>Hours:</strong>10:00-18:00, Mon - Sat
        </p>
        <div className="follow">
          <h4>Follow us</h4>
          <div className="icon">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaPinterestP />
            </span>
            <span>
              <FaYoutube />
            </span>
          </div>
        </div>
      </div>
      <div className="col">
        <h4>About</h4>
        <a href="#">About us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact us</a>
      </div>
      <div className="col">
        <h4>My Account</h4>
        <a href="#">Sign up</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
          <img src={app} alt="" />
          <img src={play} alt="" />
        </div>
        <p>Secured Payment Gateways</p>
        <img src={pay} alt="" />
      </div>
      <div className="copyright">
        <p>
          © 2024, Web Ecommerce - Explore the world of online shopping with us
        </p>
      </div>
    </footer>
  );
};

export default Footer;
