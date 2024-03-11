import TestProduct from "./TestProduct";
import { useEffect, useState } from "react";
import { AllProductsContainer } from "../DashboardStyles/Product.styled";
import { productsDummy } from "./dummyData";

interface Products {
    productName: string;
    image: string;
    description: string;
    price: number;
    
}

interface Props{
    displayedProducts: Products[]
}

const TestAllProducts = ({displayedProducts}:Props) => {
    
    
    return (
        <AllProductsContainer>
            {displayedProducts.map((product)=>{
                return(
                    <TestProduct product={product}/>
    
                )
            })}
    
           
           
    
        </AllProductsContainer>
       
      )
}

export default TestAllProducts