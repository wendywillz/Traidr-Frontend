import Header from "../../../components/Header/Header";
import { ShopMainWrapper, ShopWholePageContainer } from "./Shop.Styled";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  shopInterface,
  shopProductsInterface,
} from "../../../interfaces/shopInterfaces";
import SmallButton from "../../../components/button/smallButton/smallButton";
import { fetchShopDetail } from "../../../api/shop";
import { fetchProductsByShopId } from "../../../api/product";
import BackButton from "../../../components/BackButton/BackButton";
// import storeBackgroundplaceholder from "../../../assets/form-background-image.png"
import storeLogoplaceholder from "../../../assets/dashboard-assets/blue_chair.png"

const Shop = () => {
  const { shopId } = useParams();
 // const [profileImage, setProfileImage] = useState<string | null>(null); // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [products, setProducts] = useState<shopProductsInterface[]>();
  const [shop, setShop] = useState<shopInterface>();
  const navigate = useNavigate();

  // fetch shop from database
  useEffect(() => {
    fetchShopDetail(shopId!).then((res) => {
      if (res) {
        setShop(res);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shopId]);

  useEffect(() => {
    fetchProductsByShopId(shopId!).then((res) => {
      if (res) {
        setProducts(res);
      }
    });
  }, [shopId]);

  const handleProductClick = (productId: string) => {
    navigate(`/dashboard/description/${productId}`);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  

  return (
    <ShopWholePageContainer>
      <Header />
      <BackButton linkTo={"/dashboard"} />
      

      <ShopMainWrapper>
      {/* <div className="shop-profile-background-pic-container"><img src={storeBackgroundplaceholder} className="shop-profile-background-pic"/></div> */}
        <div className="shop-profile-product-logo">
          <div className="shop-profile-productpicture">
            <img src={storeLogoplaceholder} className="shop-profile-logopimage"/>
          </div>

          <div className="shop-profile-productname">
            {shop && (
              <>
                <h3>{shop.shopName}</h3>
                <span>{shop.shopDescription}</span>
              </>
            )}
          </div>
        </div>

        <div className="shop-profile-product-uploads">
          <h3>Available Products</h3>
        </div>
        <div className="shop-profile-product-uploads-inner">
          <h3 className="product-list-title"></h3>
          <div className="shop-profile-product-uploads-inner-each">
            
            <div className="shop-profile-photos">
              {products &&
                products.map((product) => (
                  <div className="shop-profile-photos-each" onClick={()=>handleProductClick(product.productId)}>
                    <img
                      src={product.productImages[0]}
                      alt="take-photo-of-products"
                    />
                    <p id="shop-profile-product-title">
                      
                      {product.productTitle.substring(0, 21)}
                      {product.productTitle.length >= 22 ? "..." : ""}
                    </p>
                    <p id="shop-profile-product-price">

                      ₦{product.productPrice.toLocaleString()}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <SmallButton
          type="button"
          button_text="View all products"
          onClick={() => navigate(`/dashboard`)}
        />
      </ShopMainWrapper>
    </ShopWholePageContainer>
  );
};

export default Shop;
