import axiosInstance from "../utils/axiosInstance";

export const fetchOrderItems = async(userId: string|null)=>{
   const res = await axiosInstance.get(`/order/get-order-items/${userId}`) 
   if (res && res.data.orderProductDetails) {
    console.log(res.data.orderProductDetails);
    return res.data.orderProductDetails;
  }
}