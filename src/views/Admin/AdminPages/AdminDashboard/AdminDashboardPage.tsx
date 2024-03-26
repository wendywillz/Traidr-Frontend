//STYLE IMPORTS
import { AdminPageContainer, AdminPageTitle, AdminPageMain, AdminPageContent } from "../../AdminPagesComponents/MainAdminStyles/MainAdminStyles.Styled"
import { UserGreeting, AllDataCards } from "./AdminDashboardPage.Styled"


//COMPONENT IMPORTS
import AdminHeader from "../../AdminPagesComponents/AdminHeader/AdminHeader"
import AdminSideBar from "../../AdminPagesComponents/AdminSidebar/AdminSideBar"
import DataCard from "./AdminDashboardComponents/DataCard/DataCard"
import RecentActivity from "../../AdminPagesComponents/RecentActivity/RecentActivity"

//PACKAGE IMPORTS
import { useState } from "react"


//INTERFACE DECLARATIONS
interface AdminDataSummary{
  totalOrders: number;
  totalTenants: number;
  supportTickets: number;
}

const AdminDashboardPage = () => {
  const[adminDataSummary, setAdminDataSummary]= useState<AdminDataSummary>({
    totalOrders: 0,
    totalTenants:0,
    supportTickets:0,
  })


  return (
    <AdminPageContainer>
        <AdminSideBar/>
        <AdminPageMain>
            <AdminHeader/>
            <AdminPageTitle>Dashboard</AdminPageTitle>
            <UserGreeting>Welcome {"Janet Lannister"}</UserGreeting>
            <AdminPageContent>
                <AllDataCards>
                    <DataCard cardTitle={"Total Orders Made"} displayedValue={adminDataSummary.totalOrders} reportLink={"/admin/dashboard/order-report"} />

                    <DataCard cardTitle={"Total Tenants"} displayedValue={adminDataSummary.totalTenants} reportLink={"/admin/dashboard/tenants-report"} />

                    <DataCard cardTitle={"Support Tickets"} displayedValue={adminDataSummary.supportTickets} reportLink={"/admin/dashboard/tickets-report"} />
                </AllDataCards>
                

            </AdminPageContent>
            <RecentActivity/>
        </AdminPageMain>
    </AdminPageContainer>
  )
}

export default AdminDashboardPage