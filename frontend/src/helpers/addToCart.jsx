import SummaryApi from "@/common";
import { toast } from "react-toastify";

const addToCart = async (e, id) => {
  e?.stopPropagation();
  e?.preventDefault();

  const fetchResponse = await fetch(SummaryApi.addToCart_product.url, {
    method: SummaryApi.addToCart_product.method,
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      productId: id,
    }),
  });

  const dataResponse = await fetchResponse.json();

  if (dataResponse.success) {
    toast.success(dataResponse.message);
  }
  if (dataResponse.error) {
    toast.error(dataResponse.message);
  }
};

export default addToCart;
