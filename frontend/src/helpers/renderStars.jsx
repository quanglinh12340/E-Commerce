// StarRating.js
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

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

export default renderStars;
