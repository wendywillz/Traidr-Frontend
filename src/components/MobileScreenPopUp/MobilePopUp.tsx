import "./MobilePopUp.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MobilePopUp = () => {
  const navigate = useNavigate();

  function handleClick() {
    axios
      .get("http://localhost:3001/user/logout", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200 && response.data.successMessage) {
          navigate("/");
        }
      })
      .catch((error) => {
        return error;
      });
  }
  return (
    <aside>
      <div className="logo">
        <h1 className="logo-text">Traidr</h1>
      </div>
      <hr />
      <div className="cont">
        <Link to="/customerdashboard" className="sidebar-item">
          <img src="src/assets/home.png" alt="Home Icon" />
          <span className="home">Home</span>
        </Link>
        <Link to="/menupage" className="sidebar-item">
          <img src="src/assets/menu.png" alt="Menu Icon" />
          <span className="home">Menu</span>
        </Link>
        <a href="#" className="sidebar-item">
          <img src="src/assets/bullseye-arrow.png" alt="Home Icon" />
          <span className="home">Track Order</span>
        </a>
        <Link to="orderhistory" className="sidebar-item">
          <img src="src/assets/history.png" alt="Home Icon" />
          <span className="home">Order History</span>
        </Link>
        <a href="#" className="sidebar-item">
          <img src="src/assets/cog.png" alt="Home Icon" />
          <span className="home">Settings</span>
        </a>
        <Link to="" className="sidebar-item">
          <img src="src/assets/logout.png" alt="Home Icon" />
          <span className="home" onClick={handleClick}>
            Logout
          </span>
        </Link>
      </div>
    </aside>
  );
};

export default MobilePopUp;
