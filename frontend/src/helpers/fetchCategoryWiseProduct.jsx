import SummaryApi from "@/common";

const fetchCategoryWiseProduct = async (category) => {
  const fetchResponse = await fetch(SummaryApi.category_wise_product.url, {
    method: SummaryApi.category_wise_product.method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      category: category,
    }),
  });

  const dataResponse = await fetchResponse.json();
  return dataResponse;
};

export default fetchCategoryWiseProduct;
