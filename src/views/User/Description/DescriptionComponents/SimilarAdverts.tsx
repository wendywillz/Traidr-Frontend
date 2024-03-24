import {
  SimilarProductsContainer,
  AllProductsContainer2,
  SimilarProductsMain,
} from "../DescriptionStyles/SimilarAdverts.styled";
import AllProductsCard from "../../../../components/ProductsCard/AllProductsCard";
import { shopProductsInterface } from "../../../../interfaces/shopInterfaces";
import { ReviewText } from "../DescriptionStyles/Reviews.styled";
// import { productsDummy } from "./dummyData";
interface SimilarAdvertsProps {
  products: shopProductsInterface[];
}
export default function SimilarAdverts({ products }: SimilarAdvertsProps) {
  return (
    <>
      <SimilarProductsMain>
        <ReviewText color="black" fontSize="2rem" fontWeight="600">
          Similar Adverts
        </ReviewText>
        <AllProductsContainer2>
          <SimilarProductsContainer>
            {products &&
              products.map((product) => {
                return (
                  <AllProductsCard product={product} key={product.productId} />
                  // <AllProductsCard displayedProducts={displayedProducts} />
                );
              })}
          </SimilarProductsContainer>
        </AllProductsContainer2>
      </SimilarProductsMain>
    </>
  );
}
