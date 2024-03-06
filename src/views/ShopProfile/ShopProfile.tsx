import Header from "../../components/Header/Header";
import { ShopProfileMainWrapper } from "./ShopProfilePageStle";
import SmallButton from "../../components/button/smallButton/smallButton";
import { useState } from "react";

const ShopProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [images, setImages] = useState([]);

  const handleProfileImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setProfileImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleFileUpload = (event) => {
    const newImages = [...images];
    newImages.push(event.target.files[0]);
    setImages(newImages);
  };

  return (
    <>
      <Header />
      <ShopProfileMainWrapper>
        <div className="shop-profile-product-logo">
          <div className="shop-profile-productpicture">
            <label htmlFor="profileFileInput">
              <div className="upload-box-content">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="shop-profile-image"
                    width="300"
                    height="300"
                  />
                ) : (
                  
                  <label htmlFor="profileFileInput">
                  <p>
                    <span>+</span>
                    <br />
                    Add a new Item
                  </p>
                </label>
                )}
              </div>
            </label>
            <input
              type="file"
              id="profileFileInput"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleProfileImage}
            />
          </div>
          <div className="shop-profile-productname">
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
              <div className="shop-profile-photos-each-2">
                <label htmlFor="itemFileInput">
                  <p>
                    <span>+</span>
                    <br />
                    Add a new Item
                  </p>
                </label>
                <input
                  type="file"
                  id="itemFileInput"
                  style={{ display: "none" }}
                  onChange={handleFileUpload}
                />
              </div>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`Uploaded Image ${index}`}
                />
              ))}
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
