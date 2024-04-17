import axiosInstance from "../utils/axiosInstance";

export const fetchCartItems = async () => {
  const res = await axiosInstance.get(`/cart/get-cart-items`);
  if (res && res.data.cartProductDetails) {
    return res.data.cartProductDetails;
  } else {
    return;
  }
};

export const fetchCartCount = async () => {
  const res = await axiosInstance.get(`/cart/get-cart-count`);
  if (res && res.data.userCart) {
    return res.data.userCart;
  }
};
