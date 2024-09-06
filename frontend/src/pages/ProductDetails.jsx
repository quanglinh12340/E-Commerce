import React, { useEffect, useState, useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";

import SummaryApi from "@/common";
import displayINRCurrency from "@/helpers/displayCurrency";
import HorizontalCardProduct from "@/components/HorizontalCardProduct";
import renderStars from "@/helpers/renderStars";
import CategoryWiseProductDisplay from "@/components/CategoryWiseProductDisplay";
// import CategoryWiseProductDisplay from "@/components/CategoryWiseProductDisplay";
const ProductDetails = () => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: "",
  });
  const [activeImage, setActiveImage] = useState("");

  const [zoomImageCoordinate, setZoomImageCoordinate] = useState({
    x: 0,
    y: 0,
  });
  const [zoomImage, setZoomImage] = useState(false);

  const { id } = useParams();

  const fetchProductDetails = async () => {
    const fetchResponse = await fetch(SummaryApi.product_details.url, {
      method: SummaryApi.product_details.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        productId: id,
      }),
    });
    const dataResponse = await fetchResponse.json();

    setData(dataResponse?.data);
    setActiveImage(dataResponse?.data?.productImage[0]);
  };

  const handleMouseEnterProduct = (imageUrl) => {
    setActiveImage(imageUrl);
  };

  const handleZoomImage = useCallback(
    (e) => {
      setZoomImage(true);
      const { left, top, width, height } = e.target.getBoundingClientRect();
      console.log("coordinate", left, top, width, height);

      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      setZoomImageCoordinate({
        x,
        y,
      });
    },
    [zoomImageCoordinate]
  );

  const handleLeaveImageZoom = () => {
    setZoomImage(false);
  };
  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="min-h-[200px] flex flex-col lg:flex-row gap-4'">
        {/***product Image */}
        <div className="h-96 flex flex-col lg:flex-row-reverse gap-4 ">
          <div className="h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relative p-2">
            <img
              src={activeImage}
              className="h-full w-full object-scale-down mix-blend-multiply"
              onMouseMove={handleZoomImage}
              onMouseLeave={handleLeaveImageZoom}
            />

            {/**product zoom */}
            {zoomImage && (
              <div className="hidden lg:block absolute min-w-[500px] overflow-hidden min-h-[400px] bg-slate-200 p-1 -right-[510px] top-0">
                <div
                  className="w-full h-full min-h-[400px] min-w-[500px] mix-blend-multiply scale-150"
                  style={{
                    background: `url(${activeImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: `${zoomImageCoordinate.x * 100}% ${
                      zoomImageCoordinate.y * 100
                    }% `,
                  }}
                ></div>
              </div>
            )}
          </div>
          <div className="h-full">
            <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
              {data?.productImage?.map((imgURL, index) => {
                return (
                  <div
                    className="h-20 w-20 bg-slate-200 rounded p-1"
                    key={index}
                  >
                    <img
                      src={imgURL}
                      className="w-full h-full object-scale-down mix-blend-multiply cursor-pointer"
                      onClick={() => handleMouseEnterProduct(imgURL)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/***product details */}
        <div className="flex flex-col gap-1 ml-5">
          <p className="bg-red-200 text-red-600 px-2 rounded-full inline-block w-fit">
            {data?.brandName}
          </p>
          <h2 className="text-2xl lg:text-4xl font-medium">
            {data?.productName}
          </h2>
          <p className="capitalize text-slate-400">{data?.category}</p>

          <div className="text-red-600 flex items-center gap-1">
            {renderStars()}
          </div>

          <div className="flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1">
            <p className="text-red-600">
              {displayINRCurrency(data.sellingPrice)}
            </p>
            <p className="text-slate-400 line-through">
              {displayINRCurrency(data.price)}
            </p>
          </div>

          <div className="flex items-center gap-3 my-2">
            <button
              className="border-2 border-red-600 rounded px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white"
              // onClick={(e) => handleBuyProduct(e, data?._id)}
            >
              Buy
            </button>
            <button
              className="border-2 border-red-600 rounded px-3 py-1 min-w-[120px] font-medium text-white bg-red-600 hover:text-red-600 hover:bg-white"
              // onClick={(e) => handleAddToCart(e, data?._id)}
            >
              Add To Cart
            </button>
          </div>

          <div>
            <p className="text-slate-600 font-medium my-1">Description : </p>
            <p>{data?.description}</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        {data.category && (
          <CategoryWiseProductDisplay
            category={data?.category}
            heading={"Recommended Product"}
          />
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
