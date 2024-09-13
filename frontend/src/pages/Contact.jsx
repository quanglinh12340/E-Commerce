import React from "react";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

import "@/assets/css/Contact.css";
import NewsLetter from "@/components/NewsLetter";
import Feature from "@/components/Feature";

const Contact = () => {
  return (
    <>
      <div className="contact-banner">
        <h2>#Let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </div>
      <div className="contact-container">
        <div className="left">
          <div className="left-call">
            <div className="icon">
              <IoIosCall />
              <p>Call To Us</p>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <div className="left-email">
            <div className="icon">
              <MdOutlineEmail />
              <p>Write To US</p>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
          </div>
        </div>
        <div className="right">
          <div className="right-info">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <input type="text" placeholder="Your Phone" />
          </div>
          <div className="right-message">
            <input type="text" placeholder="Your Message" />
          </div>
          <div className="right-button">
            <button>Send Message</button>
          </div>
        </div>
      </div>
      <Feature />
      <NewsLetter />
    </>
  );
};

export default Contact;
