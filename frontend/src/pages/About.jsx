import React from "react";
import { CiShop, CiBitcoin } from "react-icons/ci";
import { TbShoppingBag, TbMoneybag } from "react-icons/tb";

import "@/assets/css/About.css";
import about_story from "@/assets/banner/about_story.jpg";

import Feature from "@/components/Feature";
import NewsLetter from "@/components/NewsLetter";
const About = () => {
  return (
    <>
      <div className="about-banner">
        <h2>#KnowUs</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="about-story">
        <div className="content">
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="image">
          <img src={about_story} />
        </div>
      </div>
      <div className="about-service">
        <div>
          <CiShop />

          <span>10.5k </span>
          <p>Sallers active our site</p>
        </div>
        <div>
          <CiBitcoin />

          <span>33k </span>
          <p>Mopnthly Produduct Sale</p>
        </div>
        <div>
          <TbShoppingBag />

          <span>45.5k </span>
          <p>Customer active in our site</p>
        </div>
        <div>
          <TbMoneybag />

          <span>25k </span>
          <p>Anual gross sale in our site</p>
        </div>
      </div>
      <Feature />
      <NewsLetter />
    </>
  );
};

export default About;
