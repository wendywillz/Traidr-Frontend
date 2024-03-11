import axiosInstance from "../utils/axiosInstance";

export const fetchShopDetail = async (shopId: string) => {
  const res = await axiosInstance.get(`/shop/get-shop/${shopId}`);
  if (res && res.data.shop) {
    return res.data.shop;
  }
};
