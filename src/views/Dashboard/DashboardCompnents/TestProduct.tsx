import {
    ProductNameContainer,
    IndividualProductContainer,
  } from "../DashboardStyles/Product.styled";

import heartIcon from "../../../assets/dashboard-assets/heart-icon.png";
import { productsDummy } from "./dummyData";

interface Products {
    productName: string;
    image: string;
    description: string;
    price: number;
    
}

interface ProductProps{
    product : Products;
   
    
}
  
  const TestProduct = ({product}: ProductProps) => {
    return (
        <div className='user-dashboard-all-products-whole-container'>
            <IndividualProductContainer>
            <img className="user-dashboard-individual-product-image" src={product.image}/>
            
            <ProductNameContainer>
                <p className="user-dashboard-individual-product-name">{product.productName} </p>
                <img className="user-dashboard-heart-icon" src={heartIcon}/>
            </ProductNameContainer>   
           
            <p className="user-dashboard-individual-product-description">{product.description.substring(0, 45)}...</p>
            <h6 className="user-dashboard-individual-product-price">₦{product.price.toLocaleString()}</h6>
    
            </IndividualProductContainer>
           
        </div>
      )
  }
  
  export default TestProduct