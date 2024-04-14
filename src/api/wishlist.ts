import axiosInstance from "../utils/axiosInstance";

export const fetchWishListItems = async()=>{
   const res = await axiosInstance.get(`/wishlist/get-items`) 
   if (res && res.data.wishListProductDetails) {
    return res.data.wishListProductDetails;
  }
}


export const fetchWishListItemIds = async()=>{
  const res = await axiosInstance.get(`/wishlist/get-item-ids`)
  if(res && res.data.userWishListItemIds){
    return res.data.userWishListItemIds
  }
}


// export const fetchWishListCount = async()=>{
//   const res = await axiosInstance.get(`/wishlist/get-count`) 
//   if (res && res.data.wishListItemNumber) {
//    return res.data.wishListItemNumber;
//  }
// }