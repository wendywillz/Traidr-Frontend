import {
    ProductNameContainer,
    IndividualProductContainer,
  } from "../DescriptionStyles/SimilarAdverts.styled";
  import heartIcon from "../../../assets/dashboard-assets/heart-icon.png";
  import { shopProductsInterface } from "../../../interfaces/shopInterfaces";
  
  interface ProductProps {
    product: shopProductsInterface;
  }

export default function SimilarAdverts() {
  return (
    <div className="user-dashboard-all-products-whole-container">
      <IndividualProductContainer>
        <img
          className="user-dashboard-individual-product-image"
          src={product.productImages[0]}
        />

        <ProductNameContainer>
          <p className="user-dashboard-individual-product-name">
            {product.productTitle}{" "}
          </p>
          <img className="user-dashboard-heart-icon" src={heartIcon} />
        </ProductNameContainer>

        <p className="user-dashboard-individual-product-description">
          {product.productDescription.substring(0, 45)}...
        </p>
        <h6 className="user-dashboard-individual-product-price">
          ₦{product.productPrice.toLocaleString()}
        </h6>
      </IndividualProductContainer>
    </div>
  );
}