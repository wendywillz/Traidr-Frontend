import axiosInstance from "../utils/axiosInstance";

export const fetchOrderItems = async()=>{
   const res = await axiosInstance.get(`/order/get-order-items`) 
   if (res && res.data.orderProductDetails) {
    return res.data.orderProductDetails;
  }
}