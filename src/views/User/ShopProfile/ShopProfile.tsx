/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../../../components/Header/Header";
import { ShopProfileMainWrapper } from "./ShopProfilePageStle";
import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  shopInterface,
  shopProductsInterface,
} from "../../../interfaces/shopInterfaces";
import SmallButton from "../../../components/button/smallButton/smallButton";
import { fetchShopDetail } from "../../../api/shop";
import { fetchProductsByShopId } from "../../../api/product";
import BackButton from "../../../components/BackButton/BackButton";
import axiosInstance from "../../../utils/axiosInstance";
import PageLoader from "../../../components/PageLoader/PageLoader";
import { setShopProfileImage } from "../../../app/features/shopProfileImage/shopProfileImage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
// import {  fetchProductsByShopId } from "../../api/product";

const ShopProfile = () => {
  const { shopId } = useParams();
  const dispatch = useDispatch();
  const [, setPhotoFile] = useState<File | null>(null);
  const [products, setProducts] = useState<shopProductsInterface[]>();
  const [shop, setShop] = useState<shopInterface>();
  const displayedProfilePic = useSelector(
    (state: RootState) => state.shopProfileImage.shopLogo
  );
  const [isLoading, setIsLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const [, setPhotoDisplayError] = useState("");
  // fetch shop from database
  useEffect(() => {
    fetchShopDetail(shopId!).then((res) => {
      if (res) {
        setIsLoading(false);
        setShop(res);
      }
    });
  }, []);

  useEffect(() => {
    fetchProductsByShopId(shopId!).then((res) => {
      if (res) {
        setProducts(res);
      }
    });
  }, []);

  const handleProfileImage = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setUploading(true);
    const maxSize = 3 * 1024 * 1024;
    const displayedPhoto = event.target.files[0];
    const uploadedPhoto = event.target.files[0];
    if (uploadedPhoto.size > maxSize || displayedPhoto.size > maxSize) {
      setPhotoDisplayError("File size exceeds 10mb");
      return;
    }

    if (uploadedPhoto) {
      setPhotoFile(uploadedPhoto);
      const formData = new FormData();

      try {
        formData.append("shopLogo", uploadedPhoto);
        formData.append("shopId", shopId!);
        formData.append("shopName", shop!.shopName);
        const res = await axiosInstance.post(
          `/shop/change-shop-logo`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (res && res.data.shopDetail) {
          setUploading(false);
          dispatch(setShopProfileImage(res.data.shopDetail));
        } else {
          setUploading(false);
        }
      } catch (error) {
        return error;
      }
    }
  };
  const handleNavigate = () => {
    navigate(`/dashboard/stock-your-shop/${shopId}`);
  };

  return (
    <>
      {isLoading && <PageLoader />}
      <Header />
      <BackButton linkTo={"/dashboard"} />

      <ShopProfileMainWrapper>
        <div className="shop-profile-product-logo">
          <div
            className="shop-profile-productpicture"
            style={{ cursor: "pointer", position: "relative" }}
          >
            <div
              className="upload-box-content"
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              {displayedProfilePic?.trim() ? (
                <img src={shop?.shopImageURL} alt="shop-profile-image" />
              ) : (
                <div>
                  <span style={{ fontSize: "2rem" }}>+</span>
                  <br />
                  <span>Add New Photo</span>
                </div>
              )}
            </div>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleProfileImage}
            />
            {uploading && (
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#282828",
                  color: "#ffffff",
                }}
              >
                <span>uploading..</span>
              </div>
            )}
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
          <h3 className="product-list-title">Photos</h3>
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
      </ShopProfileMainWrapper>
    </>
  );
};
export default ShopProfile;
