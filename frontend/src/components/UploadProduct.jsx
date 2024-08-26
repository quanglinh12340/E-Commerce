import { useState } from "react";
import { CgClose } from "react-icons/cg";
import PropTypes from "prop-types";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

import productCategory from "@/helpers/productCategory.jsx";
import uploadImage from "@/helpers/uploadImage";
import DisplayImage from "./DisplayImage";
import SummaryApi from "@/common";
const UploadProduct = ({ onClose, fetchData }) => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: "",
  });
  const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fetchResponse = await fetch(SummaryApi.upload_product.url, {
      method: SummaryApi.upload_product.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataResponse = await fetchResponse.json();

    if (dataResponse.success) {
      toast.success(dataResponse.message);
      onClose();
      fetchData();
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];

    const uploadImageCloudinary = await uploadImage(file);

    setData((prev) => {
      return {
        ...prev,
        productImage: [...prev.productImage, uploadImageCloudinary.url],
      };
    });
  };

  const handleDeleteProductImage = async (index) => {
    const newProductImage = [...data.productImage];
    newProductImage.splice(index, 1);
    setData((prev) => {
      return {
        ...prev,
        productImage: [...newProductImage],
      };
    });
  };

  return (
    <div className="fixed w-full  h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden">
        <div className="flex justify-between items-center pb-3">
          <h2 className="font-bold text-lg">Upload product</h2>
          <div
            className="w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer"
            onClick={onClose}
          >
            <CgClose />
          </div>
        </div>
        <form
          className="grid p-4 gap-2 overflow-y-scroll h-full pb-5"
          onSubmit={handleSubmit}
        >
          <label htmlFor="productName">Product Name: </label>
          <input
            value={data.productName}
            className="p-2 bg-slate-100 border rounded"
            type="text"
            name="productName"
            id="productName"
            placeholder="Enter product name"
            onChange={handleOnChange}
          />

          <label htmlFor="brandName">Branch Name: </label>
          <input
            value={data.brandName}
            className="p-2 bg-slate-100 border rounded"
            type="text"
            name="brandName"
            id="brandName"
            placeholder="Enter branch name"
            onChange={handleOnChange}
          />

          <label htmlFor="category" className="mt-3">
            Category:{" "}
          </label>
          <select
            required
            value={data.category}
            name="category"
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
          >
            <option value={""}>Select Category</option>
            {productCategory.map((item, index) => {
              return (
                <option key={item.value + index} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>

          <label htmlFor="productImage" className="mt-3">
            Product Image :
          </label>
          <label htmlFor="uploadImageInput">
            <div className="p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer">
              <div className="text-slate-500 flex justify-center items-center flex-col gap-2">
                <span className="text-4xl">
                  <FaCloudUploadAlt />
                </span>
                <p className="text-sm">Upload Product Image</p>
                <input
                  type="file"
                  id="uploadImageInput"
                  className="hidden"
                  onChange={handleUploadProduct}
                />
              </div>
            </div>
          </label>
          <div>
            {data?.productImage[0] ? (
              <div className="flex items-center gap-2">
                {data.productImage.map((img, index) => {
                  return (
                    <div key={index} className="relative group">
                      <img
                        src={img}
                        width={80}
                        height={80}
                        className="bg-slate-100 border"
                        onClick={() => {
                          setOpenFullScreenImage(true);
                          setFullScreenImage(img);
                        }}
                      />
                      <div
                        className="absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer"
                        onClick={() => handleDeleteProductImage(index)}
                      >
                        <MdDelete />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-red-600 text-xs">
                Please upload product image
              </p>
            )}
          </div>
          <label htmlFor="price" className="mt-3">
            Price :
          </label>
          <input
            type="number"
            id="price"
            placeholder="Enter price"
            value={data.price}
            name="price"
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
            required
          />

          <label htmlFor="sellingPrice" className="mt-3">
            Selling Price :
          </label>
          <input
            type="number"
            id="sellingPrice"
            placeholder="Enter selling price"
            value={data.sellingPrice}
            name="sellingPrice"
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
            required
          />

          <label htmlFor="description" className="mt-3">
            Description :
          </label>
          <textarea
            className="h-28 bg-slate-100 border resize-none p-1"
            placeholder="Enter product description"
            rows={3}
            onChange={handleOnChange}
            name="description"
            value={data.description}
          ></textarea>
          <button className="px-3 py-2 bg-red-600 text-white mb-10 hover:bg-red-700">
            Upload Product
          </button>
        </form>
      </div>

      {/***display image */}
      {openFullScreenImage && (
        <DisplayImage
          imgUrl={fullScreenImage}
          onClose={() => setOpenFullScreenImage(false)}
        />
      )}
    </div>
  );
};

UploadProduct.propTypes = {
  onClose: PropTypes.func,
  fetchData: PropTypes.func,
};

export default UploadProduct;
