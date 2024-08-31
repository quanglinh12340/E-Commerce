import React, { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import "@/assets/css/BannerProduct.css";

import img1 from "@/assets/banner/img1.jpg";
import img2 from "@/assets/banner/img2.jpg";
import img3 from "@/assets/banner/img3.jpg";
import img4 from "@/assets/banner/img4.jpg";
import img5 from "@/assets/banner/img5.jpg";
import img6 from "@/assets/banner/img6.jpg";

const BannerProduct = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery-wrap">
      <FaAngleLeft id="backBtn" onClick={prevImage} />
      <div className="gallery">
        <div>
          {images.map((img, index) => (
            <span
              key={index}
              className={index === currentImage ? "active" : ""}
            >
              <img
                src={img}
                style={{ display: index === currentImage ? "block" : "none" }}
              />
            </span>
          ))}
        </div>
      </div>
      <FaAngleRight id="nextBtn" onClick={nextImage} />
    </div>
  );
};

export default BannerProduct;
