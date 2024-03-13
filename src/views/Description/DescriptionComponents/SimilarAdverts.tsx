import { 
    SimilarProductsContainer, 
    AllProductsContainer2,
    SimilarProductsMain
} from "../DescriptionStyles/SimilarAdverts.styled"
import AllProductsCard from "../../../components/ProductsCard/AllProductsCard"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { shopProductsInterface } from "../../../interfaces/shopInterfaces";
import { fetchProductsByShopId } from "../../../api/product";
import { ReviewText } from "../DescriptionStyles/Reviews.styled"
// import { productsDummy } from "./dummyData";

export default function SimilarAdverts() {

  // const displayedProducts = productsDummy;
    const { shopId } = useParams();
  //Constants declarations
  const [displayedProducts, setDisplayedProducts] =
    useState<shopProductsInterface[]>();

  useEffect(() => {
    fetchProductsByShopId(shopId!).then((res) => {
      if (res) {
        console.log("res", res);
        setDisplayedProducts(res);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

return (
    <>
    <SimilarProductsMain>
        <ReviewText color="black" fontSize="2rem" fontWeight="600">Similar Adverts</ReviewText>
            <AllProductsContainer2>
                    <SimilarProductsContainer>
                    {displayedProducts &&
                        displayedProducts.map((product) => {
                            return (
                                <AllProductsCard product={product} key={product.productId} />
                                // <AllProductsCard displayedProducts={displayedProducts} />
                            );
                        })}
                    </SimilarProductsContainer>
            </AllProductsContainer2>
    </SimilarProductsMain>
    </>
)
}
