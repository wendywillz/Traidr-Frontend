import axiosInstance from "../utils/axiosInstance";
export const fetchAllProducts = async (category:string = "", search:string = "", sort:string="", color:string="", price:string="", maxPrice:string = "", minPrice:string="", page:string="", pageSize:string="") => {
  const res = await axiosInstance.get(`/products/get-all-products?category=${category}&maxPrice=${maxPrice}&minPrice=${minPrice}&sort=${sort}&color=${color}&search=${search}&price=${price}&page=${page}&pageSize=${pageSize}`);
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
  else { /* empty */ }
};


export const fetchProductsCategories = async () => {
  const res = await axiosInstance.get(`/products/get-products-categories`);
  if (res && res.data.productCategories) {
    return res.data.productCategories;
  }
};

export const fetchProductsColors = async()=>{
  const res = await axiosInstance.get(`/products/get-products-colors`);
  if (res && res.data.productColors) {
    return res.data.productColors;
  }
}

export const fetchReviewByProductId = async (productId : string) => {
  const res = await axiosInstance.get(`/reviews/get-product-review/${productId}`);
  if (res && res.data.reviews) {
    return res.data.reviews;
  }
};


export const fetchProductCount = async()=>{
  const res = await axiosInstance.get(`/products/get-product-count`)
  if(res && res.data.productCount){
    return res.data.productCount
  }
}