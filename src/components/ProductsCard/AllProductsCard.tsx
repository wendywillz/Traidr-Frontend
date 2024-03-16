import { shopProductsInterface } from "../../interfaces/shopInterfaces";
import { AllProductsWrapper } from "./AllProductsStyle";
import dummyProducts from "../../assets/products/dummy.png";
import { useNavigate } from "react-router-dom";
interface ProductProps {
  product: shopProductsInterface;
}

function AllProductsCard({ product }: ProductProps) {
  const navigate = useNavigate();
  const handleProductClick = (productId: string) => {
    navigate(`/description/${productId}`);
  };
  return (
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
      <p className="each-product-description">{product.productDescription.substring(0, 45)}...</p>
      <span className="each-product-price">₦{product.productPrice.toLocaleString()}</span>
    </AllProductsWrapper>
  );
}

export default AllProductsCard;
