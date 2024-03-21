import Header from "../../components/Header/Header";
import { ShopProfileMainWrapper } from "./ShopProfilePageStle";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  shopInterface,
  shopProductsInterface,
} from "../../interfaces/shopInterfaces";
import SmallButton from "../../components/button/smallButton/smallButton";
import { fetchShopDetail } from "../../api/shop";
import {  fetchProductsByShopId } from "../../api/product";

const ShopProfile = () => {
  const { shopId } = useParams();
  const [profileImage, setProfileImage] = useState<string | null>(null); // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  }, []);

  // fetch product from the database
  useEffect(() => {
    fetchProductsByShopId(shopId!).then((res) => {
      if (res) {
        setProducts(res);
        localStorage.setItem("shopProducts", JSON.stringify(res));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleProfileImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setProfileImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };
  const handleNavigate = () => {
    navigate(`/dashboard/stock-your-shop/${shopId}`);
  };

  return (
    <>
      <Header />

      <ShopProfileMainWrapper>
        <div className="shop-profile-product-logo">
          <div className="shop-profile-productpicture">
            <div
              className="upload-box-content"
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              {!profileImage ? (
                <div>
                  <span style={{ fontSize: "2rem" }}>+</span>
                  <br />
                  <span>Add New Photo</span>
                </div>
              ) : (
                <img src={profileImage} alt="shop-profile-image" />
              )}
            </div>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleProfileImage}
            />
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
          <h3>Upload Images</h3>
        </div>
        <div className="shop-profile-product-uploads-inner">
          <h3>Photos</h3>
          <div className="shop-profile-product-uploads-inner-each">
            {products?.length === 0 && (
              <div className="shop-profile-product-uploads-list">
                <p>Add some Aesthetic Photos for your Shop</p>

                <p>
                  Tips:
                  <ul>
                    <li>Use natural light and no flash.</li>
                    <li>Include a common object for scale. </li>
                    <li>Show the item being held, worn, or used.</li>
                    <li>Shoot against a clean, simple background.</li>
                    <li>
                      Add photos to your variations so buyers can see all their
                      options.
                    </li>
                  </ul>
                </p>
              </div>
            )}
            <div className="shop-profile-photos">
              <div
                className="shop-profile-photos-each-2"
                onClick={handleNavigate}
              >
                <p>
                  <span>+</span>
                  <br />
                  Add a new Item
                </p>
              </div>
              {products &&
                products.map((product) => (
                  <div className="shop-profile-photos-each">
                    <img
                      src={product.productImages[0]}
                      alt="take-photo-of-products"
                    />
                    <p>
                      {product.productTitle} <br />₦{product.productPrice}
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
      </ShopProfileMainWrapper>
    </>
  );
};

export default ShopProfile;
