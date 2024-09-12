import { useEffect, useState } from "react";
import SummaryApi from "@/common";
import displayINRCurrency from "@/helpers/displayCurrency";
import moment from "moment";
import { RiShoppingBag4Line } from "react-icons/ri";

const Order = () => {
  const [data, setData] = useState([]);

  const fetchOrderData = async () => {
    const fetchResponse = await fetch(SummaryApi.getOrder.url, {
      method: SummaryApi.getOrder.method,
      credentials: "include",
    });

    const dataResponse = await fetchResponse.json();
    console.log("🚀 ~ fetchOrderData ~ dataResponse:", dataResponse);

    setData(dataResponse.data);
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  return (
    <div className="p-4 w-full">
      {!data[0] && (
        <div className="flex flex-col items-center">
          <RiShoppingBag4Line className="text-red-400 text-[4.75rem] my-5" />
          <p className="text-[1.75rem]">There are no orders</p>
        </div>
      )}
      <div>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <p className="font-medium text-lg">
                {moment(item.createdAt).format("lll")}
              </p>
              <div className="border rounded">
                <div className="flex flex-col lg:flex-row justify-between">
                  <div className="gird gap-1">
                    {item?.productDetails.map((product, index) => {
                      return (
                        <div
                          key={index}
                          className="flex gap-3 bg-slate-100 pt-2"
                        >
                          <img
                            src={product.image[0]}
                            className="w-28 h-28 bg-slate-200 object-scale-down p-2"
                          />
                          <div className="">
                            <div className="font-medium text-lg text-ellipsis line-clamp-1">
                              {product.name}
                            </div>
                            <div className="flex items-center gap-5 mt-1">
                              <div className="text-lg text-red-500">
                                {displayINRCurrency(product.price)}
                              </div>
                              <p>Quantity: {product.quantity}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-col gap-4 p-2 min-w-[320px]">
                    <div>
                      <div className="text-lg font-medium">
                        Payment Details:
                      </div>
                      <p className=" ml-1">
                        Payment method:{" "}
                        {item.paymentDetails.payment_method_type[0]}
                      </p>
                      <p className=" ml-1">
                        Payment Status: {item.paymentDetails.payment_status}
                      </p>
                    </div>
                    <div>
                      <div className="text-lg font-medium">
                        Shipping Details :
                      </div>
                      {item.shipping_options.map((shipping, index) => {
                        return (
                          <div key={index} className="ml-1">
                            Shipping Amount:{shipping.shipping_amount}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="font-semibold ml-auto w-fit lg:text-lg">
                  Total Amount: {item.totalAmount}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
