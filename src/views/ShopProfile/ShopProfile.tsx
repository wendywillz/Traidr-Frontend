import ShopHeader from "../../components/ShopHeader/ShopHeader";
import { ShopProfileMainWrapper } from "./ShopProfilePageStle";
import shoppingImage from "../../assets/shopping-bag.png";
import cameraImage from "../../assets/camera.png";

export default function ShopProfile () {
    return(
        <>
        <ShopHeader />
        <ShopProfileMainWrapper>
        <div className="shop-profile-product-logo">
            <img src={shoppingImage} alt="shopping-product" />

            <div className="shop-profile-productname">
                <h3>
                    Empress Ki Stores
                </h3>
                <p>
                    <span>+</span> Add a Short Description
                </p>
            </div>
        </div>

        
        <div className="shop-profile-product-uploads">
        <h3>Upload Images</h3>
        </div>
            <div className="shop-profile-product-uploads-inner">
                <div className="shop-profile-product-uploads-inner-each">
                    <h3>Photos</h3>
                </div>
                <p>Add some Aesthetic Photos for your Shop</p>

                <p>Tips:
                    <ul>
                        <li>Use natural light and no flash.</li>
                        <li>Include a common object for scale. </li>
                        <li>Show the item being held, worn, or used.</li>
                        <li>Shoot against a clean, simple background.</li>
                        <li>Add photos to your variations so buyers can see all their options.</li>
                    </ul>
                </p>

                    <img src={cameraImage} alt="take-photo-of-products" />
                    <p>Add a Photo</p>
                    <img src={cameraImage} alt="take-photo-of-products" />
                    <p>Add a Photo</p>
                    <img src={cameraImage} alt="take-photo-of-products" />
                    <p>Add a Photo</p>
            </div>
           

            <div>
                <div>
                    <h3>Description*</h3>
                    <p>Include keywords that buyers will use to search for your items</p>
                    <input type="text"  />
                </div>
                <div>
                    <h3>Prices*</h3>
                    <p>Include keywords that buyers will use to search for your items</p>
                    <input type="text"  />
                </div>
                
                <div>
                <button type="submit">Upload Item</button>
                </div>
                
            </div>
        
        </ShopProfileMainWrapper>
        </>
    )
    
}