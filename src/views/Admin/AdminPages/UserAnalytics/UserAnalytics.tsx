import AdminHeader from "../../AdminPagesComponents/AdminHeader/AdminHeader";
import AdminSideBar from "../../../../components/adminSideBar/AdminSideBar";
import {
  AdminPageContainer,
  AdminPageMain,
  AdminPageTitle,
  AdminPageContent,
} from "../../AdminPagesComponents/MainAdminStyles/MainAdminStyles.Styled";
import { UserAnalyticsChartsContainer } from "./UserAnalytics.Styled";
import VistingCustomersChart from "./LineCharts/VistingCustomersChart ";
import AverageUsageTimeChart from "./LineCharts/AverageUsageTime";
import { AgePieChart } from "./PieChart/AgePieChart/AgePieChart";
import { GenderPieChart } from "./PieChart/GenderPieChart/GenderPieChart";

export const UserAnalytics = () => {
  return (
    <UserAnalyticsChartsContainer>
      <AdminPageContainer>
        <AdminSideBar />
        <AdminPageMain>
          <AdminHeader />
          <AdminPageTitle>User Analytics</AdminPageTitle>
          <AdminPageContent>
            {/* <TestLineChart/> */}
            <VistingCustomersChart />
            <AverageUsageTimeChart />
            <GenderPieChart />
            <AgePieChart />
          </AdminPageContent>
        </AdminPageMain>
      </AdminPageContainer>
    </UserAnalyticsChartsContainer>
  );
};
