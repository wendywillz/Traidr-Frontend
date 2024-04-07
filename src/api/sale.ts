import axiosInstance from "../utils/axiosInstance";

export const fetchSaleSummary = async(userId: string|null)=>{
   const res = await axiosInstance.get(`/sale/get-sale-summary/${userId}`) 
   if (res && res.data.responseData) {
    console.log(res.data.responseData);
    return res.data.responseData;
  }
}