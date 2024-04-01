// import Chart from 'chart.js/auto'; // Import Chart.js library

// interface DailyUserData {
//   date: string;
//   activeUsers: number;
// }

// // Dummy data (replace this with actual data from your endpoint)
// const dummyData: DailyUserData[] = [
//   { date: '2022-01-01', activeUsers: 100 },
//   { date: '2022-01-02', activeUsers: 120 },
//   { date: '2022-01-03', activeUsers: 130 },
//   { date: '2022-01-04', activeUsers: 150 },
//   { date: '2022-01-05', activeUsers: 140 },
// ];

// const dates: string[] = dummyData.map(entry => entry.date);
// const activeUsers: number[] = dummyData.map(entry => entry.activeUsers);

// // Chart.js configuration
// const canvas = document.getElementById('dailyActiveUsersChart') as HTMLCanvasElement;
// const ctx = canvas.getContext('2d');
// const chart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: dates,
//     datasets: [{
//       label: 'Daily Active Users',
//       data: activeUsers,
//       backgroundColor: 'rgba(75, 192, 192, 0.2)', // Adjust background color as needed
//       borderColor: 'rgba(75, 192, 192, 1)', // Adjust border color as needed
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });

// // Add link to this page in the sidebar
// const sidebar = document.getElementById('sidebar');
// const link = document.createElement('a');
// link.href = 'your_page_url_here'; // Replace 'your_page_url_here' with the URL of this page
// link.textContent = 'Daily Active Users'; // Display text for the link
// sidebar.appendChild(link);
