import axiosInstance from "../utils/axiosInstance";
export const fetchAllProducts = async () => {
  const res = await axiosInstance.get("/products/get-all-products");
  if (res && res.data.products) {
    return res.data.products;
  }
};

export const fetchProductsByShopId = async (shopId: string) => {
  const res = await axiosInstance.get(`/products/get-products/${shopId}`);
  if (res && res.data.products) {
    return res.data.products;
  }
};


export const fetchProductsCategories = async () => {
  const res = await axiosInstance.get(`/products/get-products-categories`);
  if (res && res.data.productCategories) {
    return res.data.productCategories;
  }
};
