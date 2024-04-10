import Header from "../../../components/Header/Header";
import {
  WishlistContainer,
  WishlistText,
} from "./Wishlist.styled";

import WishListRow from "./WishListRow";
import { fetchWishListItems } from "../../../api/wishlist";
import { useEffect, useState } from "react";
import { WishListProductDetail } from "../../../interfaces/wishListInterface";
import axiosInstance from "../../../utils/axiosInstance"; 
import BackButton from "../../../components/BackButton/BackButton";


export default function Wishlist() {

  const [wishListProducts, setWishListProducts] = useState<WishListProductDetail[]>();

useEffect(()=>{
  fetchWishListItems().then((res)=>{
    if (res) {
      setWishListProducts(res);
    }
  })
},[wishListProducts])



  const handleDelete = async (productId: string) => {
    const selectedProductDetail = {
      productId: productId,
    };
    try {
      const res = await axiosInstance.post(
        `/wishlist/delete-item`,
        selectedProductDetail
      );
      if (res && res.data.success) location.reload();
    } catch (error) {
      console.log(`Error deleting prodct. Reason:`, error);
    }
  };


  return (
    <>
      <Header/>
      <BackButton linkTo={"/dashboard"}/>
      <WishlistContainer>
        <WishlistText>
            Wishlist
        </WishlistText>
        {wishListProducts?.map((product)=>{
          return(
            <WishListRow wishListItem={product} handleDelete={handleDelete} key={product.productId}/>
          )
        })}
        
        

        

      </WishlistContainer>
    </>
  );
}
