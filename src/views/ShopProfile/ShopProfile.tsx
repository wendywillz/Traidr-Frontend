import Header from "../../components/Header/Header";
import { ShopProfileMainWrapper } from "./ShopProfilePageStle";
import SmallButton from "../../components/button/smallButton/smallButton";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ShopProfile = () => {
  const { shopId } = useParams();
  const [profileImage, setProfileImage] = useState<string | null>(null); // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigate = useNavigate();

  const handleProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setProfileImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
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
            <div className="upload-box-content" onClick={() => document.getElementById('fileInput')?.click()}>
              {!profileImage ? (
                <div>
                  <span style={{ fontSize: "2rem" }}>+</span>
                  <br />
                  <span>Add New Photo</span>
                </div>
              ) : (
                <img
                  src={profileImage}
                  alt="shop-profile-image"
                />
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
            <h3>Empress Ki Stores</h3>
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


