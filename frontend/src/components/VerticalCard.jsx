import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import renderStars from "@/helpers/renderStars";
import displayINRCurrency from "@/helpers/displayCurrency";
import Context from "@/context";
import addToCart from "@/helpers/addToCart";

const VerticalCard = ({ data = [] }) => {
  const { fetchUserAddToCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
  };
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,300px))] justify-center md:justify-between md:gap-4 overflow-x-scroll scrollbar-none transition-all">
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
  );
};

VerticalCard.propTypes = {
  data: PropTypes.array.isRequired,
};
export default VerticalCard;
