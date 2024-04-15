import axiosInstance from "../utils/axiosInstance";

export const fetchOrderItems = async()=>{
   const res = await axiosInstance.get(`/order/get-order-items`) 
   if (res && res.data.orderProductDetails) {
    return res.data.orderProductDetails;
  }
}

export const fetchOrderHistoryList = async()=>{
  const res = await axiosInstance.get(`/order/order-history`)

  if (res && res.data.previousOrders){
    return res.data.previousOrders
  }
}


export const fetchSpecifiedOrderHistory = async(saleId: string|undefined|null)=>{
  const res = await axiosInstance.get(`/order/order-history/${saleId}`)
  if(res && res.data.responseData){
    return res.data.responseData
  }

}