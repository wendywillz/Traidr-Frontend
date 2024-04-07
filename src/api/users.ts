import axiosInstance from "../utils/axiosInstance"
export const fetchUserShopDetails = async () => { 
    const res = await axiosInstance.get(`/users/get-user-shopId`);
    if (res && res.data.shopId) {
        return res.data.shopId;
    }
    
}


export const fetchUserId = async ()=>{
    const res = await axiosInstance.get(`/users/get-id`)
    if (res && res.data.response){
        return res.data.response
    }
}