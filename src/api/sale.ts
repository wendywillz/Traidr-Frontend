import axiosInstance from "../utils/axiosInstance";

export const fetchReceipt = async()=>{
   const res = await axiosInstance.get(`/sale/receipt`) 
   if (res && res.data.responseData) {
    return res.data.responseData;
  }
}