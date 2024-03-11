import { shopProductsInterface } from "../../interfaces/shopInterfaces";
import { AllProductsWrapper } from "./AllProductsStyle";
import dummyProducts from "../../assets/products/dummy.png";
interface ProductProps {
  product: shopProductsInterface;
}
function AllProductsCard({ product }: ProductProps) {
  return (
    <AllProductsWrapper key={product.productId}>
      <div className="each-product-image">
        {product.productImages[0].includes("undefined") ? (
          <img src={dummyProducts} alt="" />
        ) : (
          <img src={product.productImages[0]} alt="" />
        )}
      </div>
      <p className="each-product-title">{product.productTitle}</p>
      <p className="each-product-description">{product.productDescription}</p>
      <span className="each-product-price">₦{product.productPrice}</span>
    </AllProductsWrapper>
  );
}

export default AllProductsCard;
