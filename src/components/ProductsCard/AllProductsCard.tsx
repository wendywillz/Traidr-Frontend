import { shopProductsInterface } from "../../interfaces/shopInterfaces";
import {
  AllProductsWrapper,
  AllProductsCardContainer,
  CartWishlistBtns,
} from "./AllProductsStyle";

import MiniAddToCartButton from "../MinimalAddtoCartButton/MiniAddToCartButton";
import MiniAddToWishListButton from "../MinimalAddToWishListButton/MiniAddToWishListButton";
import dummyProducts from "../../assets/products/dummy.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
interface ProductProps {
  product: shopProductsInterface;
}

function AllProductsCard({ product }: ProductProps) {
  const navigate = useNavigate();
  const handleProductClick = (productId: string) => {
    navigate(`/dashboard/description/${productId}`);
  };

  // const [quantityModalVisibility, setQuantityModalVisibility] = useState(false);

  // const toggleQuantityModal = () => {
  //   setQuantityModalVisibility(!quantityModalVisibility);
  // };

  const [isInWishList, setIsInWishList] = useState<boolean>(false)
  const toggleIsInWishList = ()=>{
    setIsInWishList(!isInWishList)
  }

  return (
    <AllProductsCardContainer>
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
        <p className="each-product-description">
          {product.productDescription.substring(0, 25)}
          {product.productDescription.length >= 25 ? "..." : ""}
        </p>
       
        <span className="each-product-price">
          ₦{product.productPrice.toLocaleString()}
        </span>

        
        
      </AllProductsWrapper>
      <div className="dashboard-add-to-cart-button">
        {" "}
        {/* <AddToCartButton
          buttonText={`ADD TO CART`}
          productId={product.productId}
          toggleVisibility={toggleQuantityModal}
        /> */}
        <CartWishlistBtns>
          <MiniAddToCartButton productId={product.productId}/>
          <MiniAddToWishListButton productId={product.productId} onClickAction={toggleIsInWishList} isInWishList={isInWishList}/>

        </CartWishlistBtns>
        
        
      </div>
    </AllProductsCardContainer>
  );
}

export default AllProductsCard;
