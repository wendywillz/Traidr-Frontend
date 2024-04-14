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
import { useState, useEffect } from "react";
import { fetchWishListItemIds } from "../../api/wishlist";
interface ProductProps {
  product: shopProductsInterface;
}

function AllProductsCard({ product }: ProductProps) {
  const [wishListItemIds, setWishListItemIds] = useState<string[]>()
  

  useEffect(()=>{
    fetchWishListItemIds().then((res)=>{
      if(res){
        setWishListItemIds(res)
      }
    })
  },[wishListItemIds])


  const navigate = useNavigate();
  const handleProductClick = (productId: string) => {
    navigate(`/dashboard/description/${productId}`);
  };


  const [isInWishList, setIsInWishList] = useState<boolean>(false)
  const toggleIsInWishList = ()=>{
    setIsInWishList(!isInWishList)
  }

    const checkIsInWishList = ()=>{
      if(wishListItemIds?.includes(product?.productId)){
      return true
    } else return false
    }
    
  
  // const [quantityModalVisibility, setQuantityModalVisibility] = useState(false);

  // const toggleQuantityModal = () => {
  //   setQuantityModalVisibility(!quantityModalVisibility);
  // };

  

  return (
    <AllProductsCardContainer>
      <AllProductsWrapper
        key={product.productId}
        onClick={() => handleProductClick(product.productId)}
      >
        <div className="each-product-image">
          {product.productImages[0].includes("undefined") ? (
            <img src={dummyProducts} alt="" className="dashboard-product-image"/>
          ) : (
            <img src={product.productImages[0]} alt={product.productTitle} className="dashboard-product-image"/>
          )}
        </div>
        <p className="each-product-title">
        {product.productTitle.substring(0, 21)}
          {product.productTitle.length >= 22 ? "..." : ""}
        </p>
        <p className="each-product-description">
          {product.productDescription.substring(0, 25)}
          {product.productDescription.length >= 27 ? "..." : ""}
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
          <MiniAddToWishListButton productId={product.productId} onClickAction={toggleIsInWishList} isInWishList={checkIsInWishList()}/>

        </CartWishlistBtns>
        
        
      </div>
    </AllProductsCardContainer>
  );
}

export default AllProductsCard;
