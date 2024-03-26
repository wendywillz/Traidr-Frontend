import { RecentActivityContainer } from './RecentActivity.Styled';

import { FaUserCircle } from 'react-icons/fa'; 


// Define types for recent activities
interface Activity {
  name: string;
  action: string;
}

const RecentActivity = () => {
  // Data for recent activities
  const recentActivities: Activity[] = [
    // { name: 'Olachi Iwuagwu', action: 'Paid for Order 774747' },
    // { name: 'Chukwuemeka Adekunle', action: 'Created an account' },
    // { name: 'Amara Okonjo', action: 'Paid for Order 774747' },
    // { name: 'Yetunde Okadigbo', action: 'Paid for Order 774747' },
    // { name: 'Obinna Amadi', action: 'Paid for Order 774747' },
    // { name: 'Ifeanyi Ndubuisi', action: 'Paid for Order 774747' },
    // { name: 'Musa Yusuf', action: 'Paid for Order 774747' },
    // { name: 'Adebayo Adewale', action: 'Paid for Order 774747' },
  ];

  return (
    <div>
        <RecentActivityContainer>
    <div className="recent-activity">
      <h2 className="activity-h2">Recent Activity</h2>
      <div className="activities">
        {recentActivities.map((activity, index) => (
          <div key={index} className="activity">
            <div className="avatar">
              <FaUserCircle size="2em" />
            </div>
            <div className="details">
              <p className="activity-p">{activity.name}</p>
  <p className="activity-p2">
    {activity.action.includes('Paid for Order') ? (
      <>
        <span className="action-grey">Paid for </span> 
        <span className="action-orange">Order {activity.action.split('Order ')[1]}</span>
      </>
    ) : (
      activity.action
    )}
  </p>

            </div>
          </div>
        ))}
      </div>
    </div>
    </RecentActivityContainer>
    </div>
  );
};

export default RecentActivity;


