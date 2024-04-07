/* eslint-disable @typescript-eslint/no-unused-vars */
//STYLE IMPORTS
import {
  AdminPageContainer,
  AdminPageTitle,
  AdminPageMain,
  AdminPageContent,
} from "../../AdminPagesComponents/MainAdminStyles/MainAdminStyles.Styled";
import { UserGreeting, AllDataCards } from "./AdminDashboardPage.Styled";

//COMPONENT IMPORTS
import AdminHeader from "../../AdminPagesComponents/AdminHeader/AdminHeader";
import DataCard from "./AdminDashboardComponents/DataCard/DataCard";
import AdminSideBar from "../../../../components/adminSideBar/AdminSideBar";
//PACKAGE IMPORTS
import { useState } from "react";
import RecentActivity from "../../AdminPagesComponents/RecentActivity/RecentActivity";
import MonthlyTrendLineChart from "../MonthlyTrend/LineChart";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
//INTERFACE DECLARATIONS
interface AdminDataSummary {
  totalOrders: number;
  totalTenants: number;
  supportTickets: number;
}

const AdminDashboardPage = () => {
  const [adminDataSummary, _setAdminDataSummary] = useState<AdminDataSummary>({
    totalOrders: 5,
    totalTenants: 3,
    supportTickets: 0,
  });
  const userData = useSelector((state: RootState) => state.user);
  return (
    <AdminPageContainer>
      <AdminSideBar />
      <AdminPageMain>
        <AdminHeader />
        <AdminPageTitle>Dashboard</AdminPageTitle>
        <UserGreeting>Welcome {userData.name}</UserGreeting>
        <AdminPageContent>
          <AllDataCards>
            <DataCard
              cardTitle={"Total Orders Made"}
              displayedValue={adminDataSummary.totalOrders}
              reportLink={"/admin/dashboard/order-report"}
            />

            <DataCard
              cardTitle={"Total Tenants"}
              displayedValue={adminDataSummary.totalTenants}
              reportLink={"/admin/dashboard/tenants-report"}
            />

            <DataCard
              cardTitle={"Support Tickets"}
              displayedValue={adminDataSummary.supportTickets}
              reportLink={"/admin/dashboard/tickets-report"}
            />
          </AllDataCards>
        </AdminPageContent>
        <RecentActivity />
        <MonthlyTrendLineChart />
        <RecentActivity />
      </AdminPageMain>
    </AdminPageContainer>
  );
};

export default AdminDashboardPage;
