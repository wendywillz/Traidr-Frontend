import axiosInstance from "../utils/axiosInstance";

export const fetchSaleSummary = async()=>{
   const res = await axiosInstance.get(`/sale/get-sale-summary`) 
   if (res && res.data.responseData) {
    console.log(res.data.responseData);
    return res.data.responseData;
  }
}