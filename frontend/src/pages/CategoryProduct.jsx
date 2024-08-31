import React from "react";
import { useParams } from "react-router-dom";

const CategoryProduct = () => {
  const { categoryName } = useParams();
  console.log("🚀 ~ CategoryProduct ~ categoryName:", categoryName);

  return <div>Category: {categoryName}</div>;
};

export default CategoryProduct;
