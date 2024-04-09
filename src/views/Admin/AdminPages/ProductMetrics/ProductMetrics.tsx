import {
  AdminPageContainer,
  AdminPageContent,
  AdminPageContentChartWrapper,
  AdminPageMain,
  AdminPageTitle,
} from "../../AdminPagesComponents/MainAdminStyles/MainAdminStyles.Styled";
import AdminSideBar from "../../../../components/adminSideBar/AdminSideBar";
import AdminHeader from "../../AdminPagesComponents/AdminHeader/AdminHeader";
import DailyActiveUser from "./DailyActiveUser/DailyActiveUserChart";
import MonthlyActiveUser from "./MonthlyActiveUser/MonthlyActiveUserChart";

function ProductMetrics() {
  return (
    <AdminPageContainer>
      <AdminSideBar />
      <AdminPageMain>
        <AdminHeader />
        <AdminPageContent>
          <AdminPageTitle>Product Metrics</AdminPageTitle>
          <AdminPageContentChartWrapper>
            <DailyActiveUser />
            <MonthlyActiveUser />
          </AdminPageContentChartWrapper>
        </AdminPageContent>
      </AdminPageMain>
    </AdminPageContainer>
  );
}

export default ProductMetrics;
