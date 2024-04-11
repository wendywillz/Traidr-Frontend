import HeaderStyle from "./AdminHeader.Styled";
// import { BsBell } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import traidrLogo from "../../../../assets/traidr-logo-orange.png";
import { Link } from "react-router-dom";
export default function AdminHeader() {
  const userData = useSelector((state: RootState) => state.user);
  // useEffect(() => {

  // }, []);

  return (
    <HeaderStyle>
      <div className="header-inner">
        <div className="header-logo-wrapper">
          <Link to="/">
            <img src={traidrLogo} alt="" />
          </Link>
        </div>
        <div className="header-right-btn-wrapper">
          {/* <BsBell className="admin-notification-icon" /> */}

          <FaUserCircle className="admin-profile-img" />

          <div className="admin-name-wrapper">
            <p>{userData.name}</p>
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
}
