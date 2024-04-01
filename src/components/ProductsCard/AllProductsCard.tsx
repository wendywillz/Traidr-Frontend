import { shopProductsInterface } from "../../interfaces/shopInterfaces";
import { AllProductsWrapper, AllProductsCardContainer } from "./AllProductsStyle";
import dummyProducts from "../../assets/products/dummy.png";
import { useNavigate } from "react-router-dom";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import { useState } from "react";
interface ProductProps {
  product: shopProductsInterface;
}

function AllProductsCard({ product }: ProductProps) {
  const navigate = useNavigate();
  const handleProductClick = (productId: string) => {
    navigate(`/description/${productId}`);
  };

  const [quantityModalVisibility, setQuantityModalVisibility] = useState(false);
  
  const toggleQuantityModal = () => {
    console.log("modalVisible?", quantityModalVisibility);
    setQuantityModalVisibility(!quantityModalVisibility);
  };

  return (
    <AllProductsCardContainer >
      <AllProductsWrapper
      key={product.productId}
      onClick={() => handleProductClick(product.productId)}
    >
      <div className="each-product-image">
        {product.productImages[0].includes("undefined") ? (
          <img src={dummyProducts} alt="" />
        ) : (
          <img src={product.productImages[0]} alt="" />
        )}
      </div>
      <p className="each-product-title">{product.productTitle}</p>
      <p className="each-product-description">{product.productDescription.substring(0, 30)}{product.productDescription.length >=30? "...":""}</p>
      <span className="each-product-price">₦{product.productPrice.toLocaleString()}</span>
    </AllProductsWrapper>
    <div className="dashboard-add-to-cart-button"> <AddToCartButton productId={product.productId} toggleVisibility={toggleQuantityModal}/>
   </div> 
    </AllProductsCardContainer>
    
  );
}

export default AllProductsCard;
