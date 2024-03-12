import { images, number } from "./index";
import { IoIosTimer } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import "./TopDescription.css";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineChat } from "react-icons/md";

function TopDescription() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <section className="display">
        <div>
          <ul className="home-search">
            <Link to="">Home /</Link>
            <Link to="">Search /</Link>
            <Link to="">Home appliances</Link>
            <Link to="">Home appliances</Link>
          </ul>

          <div className="img-container">
            {images.map((item, index) => (
              <div key={index}>
                <img src={item.imgURL} alt={item.name} />
              </div>
            ))}
          </div>
        </div>

        <div className="sec-section">
          <div className="views">
            <div>
              <p className="views-time"> 3 Views in the last 2 minutes </p>
              <h2 className="price">N30,000</h2>
              <p className="store">Wallphy Store</p>
              <p className="hens-product">Hans Blender Set</p>
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
              <p></p>
              <Link className="wishlist" to="">
                Add to Wishlist
              </Link>
            </div>

            <div className="user-info">
              <FaUserCircle style={{ width: "7rem", height: "7rem" }} />

              <div className="data-group">
                <h2>Bankole Yusuf</h2>
                <p>BankoleYusuf@gmail.com</p>
                <div className="chat-group">
                  <MdOutlineChat
                    style={{ width: "1rem", height: "1rem", color: "#219653" }}
                  />
                  <p>start chat</p>
                </div>
                <p>contact: 09085757757,08065443355</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default TopDescription;
