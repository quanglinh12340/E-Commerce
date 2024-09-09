import SummaryApi from "@/common";
import VerticalCard from "@/components/VerticalCard";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchProduct = () => {
  const [data, setData] = useState([]);

  const query = useLocation();

  const fetchProduct = async () => {
    const fetchResponse = await fetch(
      SummaryApi.search_product.url + query.search
    );
    const dataResponse = await fetchResponse.json();
    setData(dataResponse.data);
  };
  useEffect(() => {
    fetchProduct();
  }, [query]);
  return (
    <div className="container mx-auto p-4">
      <p className="text-lg font-semibold my-3">
        Search Results : {data.length}
      </p>
      {data.length === 0 ? (
        <p className="bg-white text-lg text-center p-4">No Data Found....</p>
      ) : (
        <VerticalCard data={data} />
      )}
    </div>
  );
};

export default SearchProduct;
