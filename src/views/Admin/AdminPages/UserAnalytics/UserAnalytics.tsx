import AdminHeader from "../../AdminPagesComponents/AdminHeader/AdminHeader";
import AdminSideBar from "../../../../components/adminSideBar/AdminSideBar";
import {
  AdminPageContainer,
  AdminPageMain,
  AdminPageTitle,
  AdminPageContent,
} from "../../AdminPagesComponents/MainAdminStyles/MainAdminStyles.Styled";
// import TestLineChart from "../../../TestContent/TestCharts/TestLineChart";
// import { GenderPieChart } from "./PieChart/GenderPieChart/GenderPieChart";
import UserAnalyticsDemographyPieChart from "./PieChart/UserAnalyticsDemographyPieChart";
import { UserAnalyticsChartsContainer } from "./UserAnalytics.Styled";
import VistingCustomersChart  from './LineCharts/VistingCustomersChart ';

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
          <VistingCustomersChart/>
          <UserAnalyticsDemographyPieChart />
        </AdminPageContent>
      </AdminPageMain>
    </AdminPageContainer>
  </UserAnalyticsChartsContainer> 
  );
};

