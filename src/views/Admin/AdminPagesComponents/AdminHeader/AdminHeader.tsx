import { AdminHeaderContainer, AdminSearchbarContainer, AdminUserImageContainer } from "./AdminHeader.Styled"
import { BsSearch, BsPersonCircle, BsBell } from "react-icons/bs"

const AdminHeader = () => {
  return (
    <AdminHeaderContainer>
        <AdminSearchbarContainer>
            <BsSearch size={"1.3vw"} className="admin-header-search-icon"/>
            <input type="text" placeholder="Search for Data..." className="admin-header-searchbar"/>

        </AdminSearchbarContainer>

        <AdminUserImageContainer>
            <BsBell size={"1.5vw"} className="admin-header-notification-icon"/>
            <BsPersonCircle size={"3.6vw"} className="admin-header-user-icon"/>
            <p className="admin-header-user-name">Janet Lannister</p>
        </AdminUserImageContainer>

    </AdminHeaderContainer>
  )
}

export default AdminHeader