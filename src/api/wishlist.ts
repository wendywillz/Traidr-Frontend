import axiosInstance from "../utils/axiosInstance";

export const fetchWishListItems = async()=>{
   const res = await axiosInstance.get(`/wishlist/get-items`) 
   if (res && res.data.wishListProductDetails) {
    return res.data.wishListProductDetails;
  }
}