// import { images } from "./index";
import { IoIosTimer } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { ChangeEvent, useState } from "react";
import "./TopDescription.css";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineChat } from "react-icons/md";
import { shopProductsInterface } from "../../interfaces/shopInterfaces";
// import { useParams } from "react-router-dom";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import AddToWishListButton from "../AddToWishListButton/AddToWishListButton";

function TopDescription({ ...props }: shopProductsInterface) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const currentProductId = props.productId;

  const [quantityModalVisibility, setQuantityModalVisibility] = useState(false);

  const toggleQuantityModal = () => {
    setQuantityModalVisibility(!quantityModalVisibility);
  };

  return (
    <div>
      <section className="display">
        <div className="top-description-page-wrapper">
          <ul className="home-search">
            <Link to="/">Home /</Link>
            <Link to="/dashboard/">Search /</Link>
            <Link to="">Home appliances</Link>
            <Link to="">Home appliances</Link>
          </ul>

          <div className="product-description-image-wrapper">
            {props.productImages.map((product, index) => (
              <div key={index} className="product-description-image">
                <img src={product} alt={product} />
              </div>
            ))}
          </div>
        </div>

        <div className="sec-section">
          <div className="views">
            <div>
              <p className="views-time"> 3 Views in the last 2 minutes </p>
              <p className="price">₦{props.productPrice}</p>
            <Link to={`/dashboard/shop/${props.shopId}`}>
            <p className="store">{props.shopName}</p>
              </Link> 
              <p className="hens-product">{props.productTitle}</p>
            </div>

            <div>
              <div className="block">
                <p className="promoted">Promoted</p>

                <div className="set-timer">
                  <IoIosTimer width={30} height={30} />
                  <p>Posted 2 mins ago</p>
                </div>

                <div className="set-location">
                  <FaLocationDot width={30} height={30} />
                  <p>Lagos, Gbagada</p>
                </div>
              </div>

              <div className="color-selection">
                <label htmlFor="">Select Colour</label>
                <select
                  className="set-color"
                  value={selectedOption}
                  onChange={handleSelectChange}
                  name=""
                  id=""
                >
                  <option value="">Select...</option>
                  <option value="">Red</option>
                  <option value="">Blue</option>
                  <option value="">Yellow</option>
                </select>
              </div>
            </div>
          </div>

          <div className="sectwo">
            <div className="sub-sec">
              <AddToCartButton
                buttonText={`ADD TO CART`}
                productId={currentProductId}
                toggleVisibility={toggleQuantityModal}
              />
              <p>
                <AddToWishListButton productId={currentProductId}/>
              </p>
            </div>

            <div className="user-info">
              <FaUserCircle style={{ width: "5rem", height: "5rem" }} />

              <div className="data-group">
                <p>{props.shopOwner}</p>
                <p>{props.shopOwnerEmail}</p>
                <div className="chat-group">
                  <MdOutlineChat
                    style={{ width: "1rem", height: "1rem", color: "#219653" }}
                  />
                  <p>start chat</p>
                </div>
                {/* <p>contact: 09085757757,08065443355</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default TopDescription;
