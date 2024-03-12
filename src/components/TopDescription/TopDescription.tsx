import { images, number } from "./index";
import { IoIosTimer } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import "./TopDescription.css";

function TopDescription() {
  return (
    <div>
      <section className="display">
        <div>
          <ul className="home-search">
            <li>
              <a href="">Home /</a>
            </li>
            <li>
              <a href="">search /</a>
            </li>
            <li>
              <a href="">Home appliances /</a>
            </li>
            <li>
              <a href="">Hans Red Blender set</a>
            </li>
          </ul>

          <div className="img-container">
            {images.map((item, index) => (
              <div key={index}>
                <img src={item.imgURL} alt={item.name} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="views">
            <div>
              <p> 3 Views in the last 2 minutes </p>
              <p>N30,000</p>
              <p>Wallphy Store</p>
              <p>Hans Blender Set</p>
            </div>

            <div>
              <p>Promoted</p>

              <div>
                <IoIosTimer />
                <p>Posted 2 mins ago</p>
              </div>

              <div>
                <FaLocationDot />
                <p>Lagos, Gbagada</p>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </section>
    </div>
  );
}
export default TopDescription;
