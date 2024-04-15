import {
  SimilarProductsContainer,
  AllProductsContainer2,
  SimilarProductsMain,
} from "../DescriptionStyles/SimilarAdverts.styled";
import AllProductsCard from "../../../../components/ProductsCard/AllProductsCard";
import { shopProductsInterface } from "../../../../interfaces/shopInterfaces";
import { ReviewText } from "../DescriptionStyles/Reviews.styled";
import { fetchWishListItemIds } from "../../../../api/wishlist";
import { useEffect, useState } from "react";
// import { productsDummy } from "./dummyData";
interface SimilarAdvertsProps {
  products: shopProductsInterface[];
}
export default function SimilarAdverts({ products }: SimilarAdvertsProps) {
  const [wishListItemIds, setWishListItemIds] = useState<string[]>()
  useEffect(()=>{
     fetchWishListItemIds().then((res)=>{
      if(res){
        setWishListItemIds(res)
      }
    })
  }, [wishListItemIds])


  return (
    <>
      <SimilarProductsMain>
        <ReviewText color="black" fontSize="2rem" fontWeight="600">
          Similar Adverts
        </ReviewText>
        <AllProductsContainer2>
          <SimilarProductsContainer>
            {products &&
              products.map((product, index) => {
                if(index <=6)
                return (
                <div className="all-products-card-container">
                  <AllProductsCard product={product} key={product.productId} wishListIds={wishListItemIds} />
                
                  
                   {/* <AllProductsCard displayedProducts={displayedProducts} /> */}

                </div>
                );
              })}
          </SimilarProductsContainer>
        </AllProductsContainer2>
      </SimilarProductsMain>
    </>
  );
}
