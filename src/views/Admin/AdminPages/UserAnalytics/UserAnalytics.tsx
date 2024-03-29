
import { UserAnalyticsChartsContainer } from './UserAnalytics.Styled';
import VistingCustomersChart  from './LineCharts/VistingCustomersChart ';
import AdminSideBar from '../../../../components/adminSideBar/AdminSideBar';
import AdminHeader from '../../AdminPagesComponents/AdminHeader/AdminHeader';
import { AdminPageMain, AdminPageTitle, AdminPageContent } from '../../AdminPagesComponents/MainAdminStyles/MainAdminStyles.Styled';

const UserAnalytics = () => {
  return (
    <UserAnalyticsChartsContainer>
      <AdminSideBar />
      <AdminPageMain>
        <AdminHeader />
        <AdminPageTitle>User Analytics</AdminPageTitle>
        <AdminPageContent>
         
            <VistingCustomersChart  />
         
        </AdminPageContent>
      </AdminPageMain>
    </UserAnalyticsChartsContainer>
  );
};

export default UserAnalytics;
