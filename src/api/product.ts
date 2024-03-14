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

export const fetchProductsById = async (productId: string) => {
  const res = await axiosInstance.get(`/products/get-single-product/${productId}`);
  if (res && res.data.product) {
    console.log("res.data.product", res.data.product);
    return res.data.product;
  }
  else {
    console.log("res.error", res.data);
  }
};


export const fetchProductsCategories = async () => {
  const res = await axiosInstance.get(`/products/get-products-categories`);
  if (res && res.data.productCategories) {
    return res.data.productCategories;
  }
};

export const fetchReviewByProductId = async (productId : string) => {
  const res = await axiosInstance.get(`/reviews/get-product-review/${productId}`);
  if (res && res.data.productCategories) {
    return res.data.productCategories;
  }
};
