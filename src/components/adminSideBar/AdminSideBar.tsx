import { Link } from "react-router-dom";
import traidrLogo from "../../assets/traidr-logo-orange.png";
import homeIcon from "../../assets/Admin-side-bar/home.png";
import AdminDashboardStyle from "./AdminSideBarStyle";
import tenantIcn from "../../assets/Admin-side-bar/Tenant.png";
import useranalyticsIcon from "../../assets/Admin-side-bar/user.png";
import productIcon from "../../assets/Admin-side-bar/product.png";
import supportTicketIcon from "../../assets/Admin-side-bar/support_agent.png";
import settingsIcon from "../../assets/Admin-side-bar/settings.png";
import logoutIcon from "../../assets/Admin-side-bar/logout.png";
function AdminSideBar() {
  return (
    <AdminDashboardStyle>
      <div className="admin-side-bar-logo-wrapper">
        <Link to="/">
          <img src={traidrLogo} alt="" />
        </Link>
      </div>
      <div className="admin-side-bar-content">
        <Link to="/" className="admin-side-bar-each-content">
          <img src={homeIcon} alt="" />
          <span>Home</span>
        </Link>
        <Link to="/" className="admin-side-bar-each-content">
          <img src={tenantIcn} alt="" />
          <span>Tenant Database</span>
        </Link>
        <Link to="/" className="admin-side-bar-each-content">
          <img src={useranalyticsIcon} alt="" />
          <span>User Analytics</span>
        </Link>
        <Link to="/" className="admin-side-bar-each-content">
          <img src={productIcon} alt="" />
          <span>Product Metrics</span>
        </Link>
        <Link to="/" className="admin-side-bar-each-content">
          <img src={supportTicketIcon} alt="" />
          <span>Support Tickets</span>
        </Link>
        <Link to="/" className="admin-side-bar-each-content">
          <img src={settingsIcon} alt="" />
          <span>Settings</span>
        </Link>
        <Link to="/" className="admin-side-bar-each-content">
          <img src={logoutIcon} alt="" />
          <span>Logout</span>
        </Link>
      </div>
    </AdminDashboardStyle>
  );
}

export default AdminSideBar;
