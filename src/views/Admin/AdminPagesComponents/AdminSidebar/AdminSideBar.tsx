import { AdminSideBarContainer } from "./AdminSideBar.Styled"

const AdminSideBar = () => {
  return (
    <div>
        <AdminSideBarContainer>
            <h3>Traider Logo</h3>
            <ul>
                <li>Dashboard</li>
                <li>Tenant Database</li>
                <li>User Analytics</li>
                <li>Product Metrics</li>
                <li>Support Tickets</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>
        </AdminSideBarContainer>

    </div>
  )
}

export default AdminSideBar