import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import fetchCategoryWiseProduct from "@/helpers/fetchCategoryWiseProduct";
import displayINRCurrency from "@/helpers/displayCurrency";
import "@/assets/css/HorizontalCardProduct.css";

const HorizontalCardProduct = ({ category, heading }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const categoryProduct = await fetchCategoryWiseProduct(category);
    console.log("🚀 ~ fetchData ~ categoryProduct:", categoryProduct);
    setData(categoryProduct?.data);
  };

  const renderStars = () => {
    const totalStars = 5; // Tổng số sao
    const minFaStars = 3; // Số lượng FaStar tối thiểu
    const faStarsCount =
      minFaStars + Math.floor(Math.random() * (totalStars - minFaStars + 1)); // Random số lượng FaStar, nhưng ít nhất là 3
    const ciStarsCount = totalStars - faStarsCount; // Số lượng CiStar còn lại

    return (
      <>
        {[...Array(faStarsCount)].map((_, index) => (
          <i key={`fa-${index}`}>
            <FaStar />
          </i>
        ))}
        {[...Array(ciStarsCount)].map((_, index) => (
          <i key={`ci-${index}`}>
            <CiStar />
          </i>
        ))}
      </>
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2 className="text-2xl font-semibold py-4">{heading}</h2>
      <div className="flex justify-between ">
        {data.slice(0, 4).map((product, index) => (
          <Link to={"product/" + product?._id} key={index} id="product1">
            <div className="pro-container">
              <div className="pro">
                <img src={product.productImage[0]} alt="" />
                <div className="des">
                  <h5>{product?.productName}</h5>
                  <span>{product?.category}</span>
                  <div className="star">{renderStars()}</div>
                  <h4>{displayINRCurrency(product?.price)}</h4>
                </div>
                <a href="#" className="cart">
                  <i>
                    <FaCartPlus />
                  </i>
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full text-center mt-8">
        <button className="bg-[#db4444] text-white py-5 px-12 hover:bg-[#ac1515]">
          View All Product
        </button>
      </div>
    </>
  );
};

HorizontalCardProduct.propTypes = {
  category: PropTypes.string,
  heading: PropTypes.string,
};

export default HorizontalCardProduct;
