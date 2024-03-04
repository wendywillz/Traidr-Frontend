import Header from "../../components/Header/Header";
import { ShopProfileMainWrapper } from "./ShopProfilePageStle";
import shoppingImage from "../../assets/shop-profile-assets/shopping-bag.png";
import aestheticImage from "../../assets/shop-profile-assets/aesthetic-swimsuit.png";
import SmallButton from "../../components/button/smallButton/smallButton";

export default function ShopProfile() {
  return (
    <>
      <Header />
      <ShopProfileMainWrapper>
        <div className="shop-profile-product-logo">
          <img src={shoppingImage} alt="shopping-product" />

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
              <div className="shop-profile-photos-each">
                <img src={aestheticImage} alt="take-photo-of-products" />
                <p>Aesthetic Swimsuit <br />N 20,000</p>
              </div>
              <div className="shop-profile-photos-each-2">
                {/* <img src={shoppingAddItem} alt="add-new-item" /> */}

                <p><span>+</span><br />Add a new Item</p>
              </div>
            </div>
          </div>
        </div>

        <div className="shop-profile-upload-btn">
          <SmallButton button_text={"upload Item"} type={"button"}></SmallButton>
        </div>
      </ShopProfileMainWrapper>
    </>
  );
}
