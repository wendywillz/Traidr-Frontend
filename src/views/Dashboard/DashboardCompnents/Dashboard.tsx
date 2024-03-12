import {
  DashboardMain,
  DashboardContainer,
  DashBoardTitle,
} from "../DashboardStyles/Dashboard.styled";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import Header from "../../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { shopProductsInterface } from "../../../interfaces/shopInterfaces";
import { fetchProductsByShopId } from "../../../api/product";
import { AllProductsContainer } from "../DashboardStyles/Product.styled";
import AllProductsCard from "../../../components/ProductsCard/AllProductsCard";

const Dashboard = () => {
  const { shopId } = useParams();
  //Constants declarations
  const [displayedProducts, setDisplayedProducts] =
    useState<shopProductsInterface[]>();

  useEffect(() => {
    fetchProductsByShopId(shopId!).then((res) => {
      if (res) {
        setDisplayedProducts(res);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //Functions
  const sortProductsByPriceAscending = () => {
    const sortedProductsAscending = displayedProducts!.sort(
      (a, b) => a.productPrice - b.productPrice
    );
    setDisplayedProducts(sortedProductsAscending);
  };
  const sortProductsByPriceDescending = () => {
    const sortedProductsDescending = displayedProducts!.sort(
      (a, b) => b.productPrice - a.productPrice
    );
    setDisplayedProducts(sortedProductsDescending);
  };
  const returnOriginalOrder = () => {
    setDisplayedProducts(displayedProducts);
  };

  return (
    <>
      <Header />
      <DashboardContainer>
        <SideBar />
        <DashboardMain>
          <SearchBar
            ascendSort={sortProductsByPriceAscending}
            descendSort={sortProductsByPriceDescending}
            originalOrder={returnOriginalOrder}
          />

          <DashBoardTitle>TRENDING SALES</DashBoardTitle>
          <AllProductsContainer>
            {displayedProducts &&
              displayedProducts.map((product) => {
                return (
                  <AllProductsCard product={product} key={product.productId} />
                );
              })}
          </AllProductsContainer>
        </DashboardMain>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
