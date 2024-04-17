import axiosInstance from "../utils/axiosInstance";

export const fetchCartItems = async()=>{
   const res = await axiosInstance.get(`/cart/get-cart-items`) 
   if (res && res.data.cartProductDetails) {
    return res.data.cartProductDetails;
  } else{return}
}

export const fetchCartCount = async()=>{
  const res = await axiosInstance.get(`/cart/get-cart-count`)

  if (res && res.data.cartCount) {
<<<<<<< HEAD
    return res.data.cartCount
  } else{return}
=======
    console.log("cart count", res.data.cartCount.totalCartCount)
    return res.data.cartCount.totalCartCount
  }
>>>>>>> d678d9a (cart implementation)
}