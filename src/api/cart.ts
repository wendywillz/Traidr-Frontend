import axiosInstance from "../utils/axiosInstance";

export const fetchCartItems = async(userId: string|null)=>{
   const res = await axiosInstance.get(`/cart/get-cart-items/${userId}`) 
   if (res && res.data.cartProductDetails) {
    console.log(res.data.cartProductDetails);
    return res.data.cartProductDetails;
  }
}