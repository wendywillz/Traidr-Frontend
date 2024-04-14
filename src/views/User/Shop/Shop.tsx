import Header from "../../../components/Header/Header";
import { ShopMainWrapper, ShopWholePageContainer, ShopOwnerContactDetails, ShopHeaderContainer } from "./Shop.Styled";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  shopInterface,
  shopProductsInterface,
  ShopOwnerDetails
} from "../../../interfaces/shopInterfaces";
import SmallButton from "../../../components/button/smallButton/smallButton";
import { fetchShopDetail, fetchShopOwnerDetails } from "../../../api/shop";
import { fetchProductsByShopId } from "../../../api/product";
import BackButton from "../../../components/BackButton/BackButton";
// import storeBackgroundplaceholder from "../../../assets/form-background-image.png"
import storeLogoplaceholder from "../../../assets/dashboard-assets/blue_chair.png"

const Shop = () => {
  const { shopId } = useParams();
 // const [profileImage, setProfileImage] = useState<string | null>(null); // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [products, setProducts] = useState<shopProductsInterface[]>();
  const [shop, setShop] = useState<shopInterface>();
  const [shopOwnerDetails, setShopOwnerDetails] = useState<ShopOwnerDetails>()
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

useEffect(()=>{
  fetchShopOwnerDetails(shopId!).then((res:ShopOwnerDetails)=>{
    if(res){
      setShopOwnerDetails(res)
    }
  })
},[shopId])

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
      <ShopHeaderContainer>
        <h1 className="shop-page-shop-name">{shop?.shopName}</h1>
        <h4 className="shop-page-shop-description">{shop?.shopDescription}</h4>
      </ShopHeaderContainer>
      
        <div className="shop-profile-product-logo">
          <div className="shop-profile-productpicture">
            <img src={storeLogoplaceholder} className="shop-profile-logopimage"/>
          </div>

          <div className="shop-profile-productname">
            {shop && (
              <div>
                {/* <h3>{shop.shopName}</h3> */}
                {/* <p className="shop-page-shop-description">{shop.shopDescription}</p> */}
                <p className="shop-page-category">{shop.shopCategory}</p>
                <p className="shop-address-info">{shop.shopStreetAddress}</p>
                <p className="shop-address-info">{shop.shopCity}, {shop.shopState}</p>
                <p className="shop-address-info">{shop.shopCountry}</p>
              </div>
            )}
          </div>
          <ShopOwnerContactDetails>
            <p className="shop-owner-contact-title">Contact</p>
            {shopOwnerDetails?.profilePic &&
            <div className="shop-owner-profile-pic-container">
              <img src={shopOwnerDetails?.profilePic}  id="shop-owner-profile-pic"/>
              </div>}

            <p className="shop-owner-name">{shopOwnerDetails?.name}</p>
            <p className="shop-owner-email">{shopOwnerDetails?.email}</p>
            {shopOwnerDetails?.phoneNumber && 
            <p className="shop-owner-phoneNumber">Tel: 0{shopOwnerDetails?.phoneNumber}</p>
            }
          </ShopOwnerContactDetails>
        </div>

        <div className="shop-product-uploads">
          <h3 className="shop-page-title">Available Products</h3>
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
