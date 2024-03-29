
import { UserAnalyticsChartsContainer } from './UserAnalytics.Styled';
import LineCharts from '../../../../components/charts/LineChart';
import AdminSideBar from '../../../../components/adminSideBar/AdminSideBar';
import AdminHeader from '../../AdminPagesComponents/AdminHeader/AdminHeader';
import { AdminPageMain, AdminPageTitle, AdminPageContent } from '../../AdminPagesComponents/MainAdminStyles/MainAdminStyles.Styled';

const UserAnalyticsCharts = () => {
  return (
    <UserAnalyticsChartsContainer>
      <AdminSideBar />
      <AdminPageMain>
        <AdminHeader />
        <AdminPageTitle>User Analytics</AdminPageTitle>
        <AdminPageContent>
         
            <LineCharts
              title='Visiting Customers'
              data={{
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [
                  {
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(54, 162, 235)',
                    tension: 0.3,
                  },
                ],
              }}
              chartId='chartId'
            />
         
        </AdminPageContent>
      </AdminPageMain>
    </UserAnalyticsChartsContainer>
  );
};

export default UserAnalyticsCharts;
