import axiosInstance from "../utils/axiosInstance";

export const fetchCartItems = async()=>{
   const res = await axiosInstance.get(`/cart/get-cart-items`) 
   if (res && res.data.cartProductDetails) {
    console.log(res.data.cartProductDetails);
    return res.data.cartProductDetails;
  }
}