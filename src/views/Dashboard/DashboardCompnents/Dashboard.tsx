import {
  DashboardMain,
  DashboardContainer,
  DashBoardTitle,
} from "../DashboardStyles/Dashboard.styled";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import Header from "../../../components/Header/Header";
import { useState, useEffect, ChangeEvent } from "react";
import { shopProductsInterface } from "../../../interfaces/shopInterfaces";
import { QueryParams } from "../../../interfaces/queryInterfaces";
import { fetchAllProducts} from "../../../api/product";
import { AllProductsContainer } from "../DashboardStyles/Product.styled";
import AllProductsCard from "../../../components/ProductsCard/AllProductsCard";




const Dashboard = () => {
  // const { shopId } = useParams();
  //Constants declarations
  const [displayedProducts, setDisplayedProducts] =
    useState<shopProductsInterface[]>();
    const[queryParams, setQueryParams]= useState<QueryParams>({
      category: "",
      search: "",
      sort: "",
      price: "",
      maxPrice: "",
      minPrice: ""
    })

//{category, search, sort, price, maxPrice, minPrice}
  useEffect(() => {
    fetchAllProducts(queryParams.category, queryParams.search, queryParams.sort, queryParams.price, queryParams.maxPrice, queryParams.minPrice).then((res) => {
      if (res) {
        console.log(`RESPONSE:`, res);
        setDisplayedProducts(res);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams]);


  
  


  //CATEGORY FILTERING
  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>)=>{
    const selectedCategory = event.target.value as string
        console.log(selectedCategory)
    setQueryParams({...queryParams, [event.target.name]:selectedCategory})
  }



  return (
    <>
      <Header />
      <DashboardContainer>
        <SideBar handleFilterChange={handleFilterChange} />
        <DashboardMain>
          <SearchBar
            handleFilterChange={handleFilterChange}
          />

          <DashBoardTitle>TRENDING SALES </DashBoardTitle>
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
