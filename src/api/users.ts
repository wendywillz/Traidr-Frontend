import axiosInstance from "../utils/axiosInstance"
export const fetchUserShopDetails = async () => { 
    const res = await axiosInstance.get(`/users/get-user-shopId`);
    if (res && res.data.shopId) {
        console.log("res.data.shopId", res.data.shopId)
        return res.data.shopId;
    }
    
}