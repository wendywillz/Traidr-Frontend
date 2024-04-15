import {
  DescriptionContainer,
  // DescriptionTop,
  DescriptionMain,
  DescriptionAdverts,
  DescriptionWholePageContainer
} from "../DescriptionStyles/Description.styled";
import Header from "../../../../components/Header/Header";
import BackButton from "../../../../components/BackButton/BackButton";
import Reviews from "./Reviews";
import TopDescription from "../../../../components/TopDescription/TopDescription";
import SimilarAdverts from "./SimilarAdverts";
import { shopProductsInterface } from "../../../../interfaces/shopInterfaces";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsById } from "../../../../api/product";


export default function Description() {
  const { productId } = useParams();
  const [products, setProducts] = useState<shopProductsInterface | null>(null);
  useEffect(() => {
    fetchProductsById(productId!).then((res) => {
      if (res) {
        return setProducts(res);
      }
    });
  }, [productId]);
  return (
    <DescriptionWholePageContainer>
      <Header />
      <div className="back-button-container"><BackButton linkTo="/dashboard"/></div>
      <DescriptionContainer>
        {products && (
          <>
            <TopDescription
              productImages={products.productImages}
              productPrice={products.productPrice}
              shopOwner={products.shopOwner}
              shopName={products.shopName}
              shopOwnerEmail={products.shopOwnerEmail}
              shopId={products.shopId}
              productTitle={products.productTitle}
              productId={products.productId} // Add the missing property
              productDescription={products.productDescription} // Add the missing property
              productCategory={products.productCategory} // Add the missing property
              productVideo={products.productVideo} // Add the missing property
            />
            <DescriptionMain>
              <Reviews />
            </DescriptionMain>
            <DescriptionAdverts>
              <SimilarAdverts products={products.similarProducts!} />
            </DescriptionAdverts>
          </>
        )}
      </DescriptionContainer>
      {/* <DashboardContainer>
            <AllProducts shopId={shopId!} />
        </DashboardContainer> */}
    </DescriptionWholePageContainer>
  );
}
