import HeaderStyle from "./AdminHeader.Styled";
import { BsBell } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
export default function AdminHeader() {
  const userData = useSelector((state: RootState) => state.user);
  // useEffect(() => {

  // }, []);

  return (
    <HeaderStyle>
      <div className="header-inner">
        <div className="search-wrapper">
          <input type="text" placeholder="Search for Data..... " />
        </div>
        <div className="header-right-btn-wrapper">
          <BsBell className="admin-notification-icon" />

          <FaUserCircle className="admin-profile-img" />

          <div className="admin-name-wrapper">
            <p>{userData.name}</p>
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
}
