import { shopProductsInterface } from "../../../interfaces/shopInterfaces";
import axiosInstance from "../../../utils/axiosInstance";
import { AllProductsContainer } from "../DashboardStyles/Product.styled";
import Product from "./Product";
import { useEffect, useState } from "react";
interface productsProps {
  shopId: string;
}
const AllProducts = ({ shopId }: productsProps) => {
  const [products, setProducts] = useState<shopProductsInterface[]>();
  // fetch product from the database
  useEffect(() => {
    const fetchShopProducts = async () => {
      const res = await axiosInstance.get(`/products/get-products/${shopId}`);
      if (res && res.data.products) {
        console.log("products", res.data.products);
        setProducts(res.data.products);
      }
    };
    fetchShopProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AllProductsContainer>
      {products &&
        products.map((product) => {
          return <Product product={product} key={product.productId} />;
        })}
    </AllProductsContainer>
  );
};

export default AllProducts;
