import Header from "../../components/Header/Header";
import { ShopProfileMainWrapper } from "./ShopProfilePageStle";
import aestheticImage from "../../assets/shop-profile-assets/aesthetic-swimsuit.png";
import SmallButton from "../../components/button/smallButton/smallButton";
import { useEffect, useState } from "react";

const ShopProfile = () => {
  const [profileImage, setProfileImage] = useState("null");
  const [shopOwnerName, setShopOwnerName] = useState("");

  useEffect(() => {
    fetchShopOwnerName();
  }, []);

  const fetchShopOwnerName = async () => {
    try {
      const response = await fetch("http://localhost:3001/");
      const data = await response.json();
      setShopOwnerName(data.shopOwnerName);
    } catch (error) {
      console.error("Error fetching shop owner name:", error);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleProfileImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setProfileImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };
  return (
    <>
      <Header />
      <ShopProfileMainWrapper>
        <div className="shop-profile-product-logo">
          <div className="shop-profile-productpicture">
            <label htmlFor="fileInput">
              <div className="upload-box-content" onClick={handleProfileImage}>
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="shop-profile-image"
                    width="300"
                    height="300"
                  />
                ) : (
                  <span>Click here to upload a picture</span>
                )}
              </div>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleProfileImage}
            />
          </div>
          <div className="shop-profile-productname">
            {/* <h3>{shopOwnerName}</h3> */}
            <h3>Empress Ki Store</h3>
            <input type="text" placeholder="+ Add a Short Description" />
          </div>
        </div>

        <div className="shop-profile-product-uploads">
          <h3>Upload Images</h3>
        </div>
        <div className="shop-profile-product-uploads-inner">
          <h3>Photos</h3>
          <div className="shop-profile-product-uploads-inner-each">
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
            <div className="shop-profile-photos">
              <div className="shop-profile-photos-each">
                <img src={aestheticImage} alt="take-photo-of-products" />
                <p>
                  Aesthetic Swimsuit <br />N 20,000
                </p>
              </div>
              <div className="shop-profile-photos-each-2">
                <p>
                  <span>+</span>
                  <br />
                  Add a new Item
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="shop-profile-upload-btn">
          <SmallButton
            button_text={"upload Item"}
            type={"button"}
          ></SmallButton>
        </div>
      </ShopProfileMainWrapper>
    </>
  );
};

export default ShopProfile;
