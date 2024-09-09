import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import fetchCategoryWiseProduct from "@/helpers/fetchCategoryWiseProduct";
import displayINRCurrency from "@/helpers/displayCurrency";
import "@/assets/css/HorizontalCardProduct.css";
import addToCart from "@/helpers/addToCart";
import renderStars from "@/helpers/renderStars";
import Context from "@/context";
const CategoryWiseProductDisplay = ({ category, heading }) => {
  const [data, setData] = useState([]);

  const { fetchUserAddToCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  const fetchData = async () => {
    const categoryProduct = await fetchCategoryWiseProduct(category);
    setData(categoryProduct?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2 className="text-2xl font-semibold py-4">{heading}</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,320px))] justify-between md:gap-6 overflow-x-scroll scrollbar-none transition-all ">
        {data.map((product, index) => {
          return (
            <Link
              to={"/product/" + product?._id}
              key={index}
              id="product1"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="pro-container">
                <div className="pro">
                  <img src={product.productImage[0]} alt="" />
                  <div className="des">
                    <h5>{product?.productName}</h5>
                    <span>{product?.category}</span>
                    <div className="star">{renderStars()}</div>
                    <h4>{displayINRCurrency(product?.price)}</h4>
                  </div>
                  <button className="cart">
                    <FaCartPlus
                      className="cart-plus"
                      onClick={(e) => handleAddToCart(e, product?._id)}
                    />
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

CategoryWiseProductDisplay.propTypes = {
  category: PropTypes.string,
  heading: PropTypes.string,
};

export default CategoryWiseProductDisplay;
