import {
  DashboardMain,
  DashboardContainer,
  DashBoardTitle,
} from "../DashboardStyles/Dashboard.styled";
import SearchBar from "./SearchBar";
import AllProducts from "./AllProducts";
import SideBar from "./SideBar";
import Header from "../../../components/Header/Header";
import { useParams } from "react-router-dom";
import TestAllProducts from "./Test-AllProducts";
import { productsDummy } from "./dummyData";
import { useState } from "react";
{
  /*This is for the whole dashboard. The final should include the  imported navigation bar and side bar */
}
const Dashboard = () => {

  //Constants declarations
  const [displayedProducts, setDisplayedProducts]= useState([...productsDummy])

  //Functions  
   const sortProductsByPriceAscending = ()=>{
        const sortedProductsAscending =[...productsDummy].sort((a,b)=> a.price - b.price)
        setDisplayedProducts(sortedProductsAscending)
    }
    const sortProductsByPriceDescending = ()=>{
        const sortedProductsDescending =[...productsDummy].sort((a,b)=> b.price - a.price)
        setDisplayedProducts(sortedProductsDescending)
    }
    const returnOriginalOrder = ()=>{
      setDisplayedProducts([...productsDummy])
    }
  const { shopId } = useParams();
  return (
    <>
      <Header />
      <DashboardContainer>
        <SideBar />
        <DashboardMain >
          <SearchBar ascendSort={sortProductsByPriceAscending}  descendSort={sortProductsByPriceDescending} originalOrder={returnOriginalOrder}/>

          <DashBoardTitle>TRENDING SALES</DashBoardTitle>
          <TestAllProducts displayedProducts={displayedProducts}/>
          {/* <AllProducts shopId={shopId!} /> */}
        </DashboardMain>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
