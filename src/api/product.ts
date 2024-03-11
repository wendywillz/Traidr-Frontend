import axiosInstance from "../utils/axiosInstance";
export const fetchAllProducts = async () => {
  const res = await axiosInstance.get("/products/get-all-products");
  if (res && res.data.products) {
    return res.data.products;
  }
};
