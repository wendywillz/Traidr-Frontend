import axiosInstance from "../utils/axiosInstance";
export const fetchAllProducts = async (category:string = "", search:string = "", sort:string="", price:string="", maxPrice:string = "", minPrice:string="") => {
  const res = await axiosInstance.get(`/products/get-all-products?category=${category}&maxPrice=${maxPrice}&minPrice=${minPrice}&sort=${sort}&search=${search}&price=${price}`);
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
  if (res && res.data.reviews) {
    return res.data.reviews;
  }
};

const productsLink = "/products/get-all-products?category=&maxPrice=&minPrice=&sort=&search=&price="