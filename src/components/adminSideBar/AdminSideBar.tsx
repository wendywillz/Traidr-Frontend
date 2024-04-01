import { NavLink, useLocation } from "react-router-dom";
import traidrLogo from "../../assets/traidr-logo-orange.png";
import homeIcon from "../../assets/Admin-side-bar/home.png";
import AdminDashboardStyle from "./AdminSideBarStyle";
import tenantIcn from "../../assets/Admin-side-bar/Tenant.png";
import useranalyticsIcon from "../../assets/Admin-side-bar/user.png";
import productIcon from "../../assets/Admin-side-bar/product.png";
import supportTicketIcon from "../../assets/Admin-side-bar/support_agent.png";
import settingsIcon from "../../assets/Admin-side-bar/settings.png";
import logoutIcon from "../../assets/Admin-side-bar/logout.png";
// import { useState } from "react";

function AdminSideBar() {
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    return;
  };
  return (
    <AdminDashboardStyle>
      <div className="admin-side-bar-logo-wrapper">
        <NavLink to="/">
          <img src={traidrLogo} alt="" />
        </NavLink>
      </div>
      <div className="admin-side-bar-content">
        <NavLink
          to="/admin/dashboard"
          className={`admin-side-bar-each-content ${
            location.pathname === "/admin/dashboard" ? "active-link" : ""
          }`}
        >
          <img src={homeIcon} alt="" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/admin/dashboard"
          className={`admin-side-bar-each-content ${
            location.pathname.includes("/tenants/") ? "active-link" : ""
          }`}
        >
          <img src={tenantIcn} alt="" />
          <span>Tenant Database</span>
        </NavLink>
        <NavLink
          to="/admin/dashboard/user-analytics"
          className={`admin-side-bar-each-content ${
            location.pathname.includes("/user-analytics") ? "active-link" : ""
          }`}
        >
          <img src={useranalyticsIcon} alt="" />
          <span>User Analytics</span>
        </NavLink>
        <NavLink
          to="/admin/dashboard"
          className={`admin-side-bar-each-content ${
            location.pathname.includes("/product-metrics") ? "active-link" : ""
          }`}
        >
          <img src={productIcon} alt="" />
          <span>Product Metrics</span>
        </NavLink>
        <NavLink
          to="/admin/dashboard"
          className={`admin-side-bar-each-content ${
            location.pathname.includes("/support-tickets") ? "active-link" : ""
          }`}
        >
          <img src={supportTicketIcon} alt="" />
          <span>Support Tickets</span>
        </NavLink>
        <NavLink
          to="/admin/dashboard"
          className={`admin-side-bar-each-content ${
            location.pathname.includes("/settings") ? "active-link" : ""
          }`}
        >
          <img src={settingsIcon} alt="" />
          <span>Settings</span>
        </NavLink>
        <NavLink
          to="/admin/dashboard"
          className="admin-side-bar-each-content"
          onClick={handleLogout}
        >
          <img src={logoutIcon} alt="" />
          <span>Logout</span>
        </NavLink>
      </div>
    </AdminDashboardStyle>
  );
}

export default AdminSideBar;
