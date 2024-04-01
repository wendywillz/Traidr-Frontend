import {
  AdminPageContainer,
  AdminPageContent,
  AdminPageMain,
  AdminPageTitle,
} from "../../AdminPagesComponents/MainAdminStyles/MainAdminStyles.Styled";
import AdminSideBar from "../../../../components/adminSideBar/AdminSideBar";
import AdminHeader from "../../AdminPagesComponents/AdminHeader/AdminHeader";
import DailyActiveUser from "./DailyActiveUser/DailyActiveUserChart";

function ProductMetrics() {
  return (
    <AdminPageContainer>
      <AdminSideBar />
      <AdminPageMain>
        <AdminHeader />
        <AdminPageTitle>Product Metrics</AdminPageTitle>
        <AdminPageContent>
          <DailyActiveUser />
        </AdminPageContent>
      </AdminPageMain>
    </AdminPageContainer>
  );
}

export default ProductMetrics;
