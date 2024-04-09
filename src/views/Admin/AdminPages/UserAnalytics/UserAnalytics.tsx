import AdminHeader from "../../AdminPagesComponents/AdminHeader/AdminHeader";
import AdminSideBar from "../../../../components/adminSideBar/AdminSideBar";
import {
  AdminPageContainer,
  AdminPageMain,
  AdminPageTitle,
  AdminPageContent,
  AdminPageContentChartWrapper,
} from "../../AdminPagesComponents/MainAdminStyles/MainAdminStyles.Styled";
import VistingCustomersChart from "./LineCharts/VistingCustomersChart ";
import AverageUsageTimeChart from "./LineCharts/AverageUsageTime";
import { AgePieChart } from "./PieChart/AgePieChart/AgePieChart";
import { GenderPieChart } from "./PieChart/GenderPieChart/GenderPieChart";

export const UserAnalytics = () => {
  return (
    <AdminPageContainer>
      <AdminSideBar />
      <AdminPageMain>
        <AdminHeader />
        <AdminPageContent>
          <AdminPageTitle>User Analytics</AdminPageTitle>
          {/* <TestLineChart/> */}
          <AdminPageContentChartWrapper>
            <VistingCustomersChart />
            <AverageUsageTimeChart />
            <GenderPieChart />
            <AgePieChart />
          </AdminPageContentChartWrapper>
        </AdminPageContent>
      </AdminPageMain>
    </AdminPageContainer>
  );
};
