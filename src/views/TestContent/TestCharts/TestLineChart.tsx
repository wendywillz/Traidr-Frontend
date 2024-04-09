import { useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // Import necessary Chart.js components automatically
import testData from "../testData"; // Assuming testData contains user data

const TestLineChart = () => {
  const [chartData] = useState({
    labels: testData.map((user) => user.userName),
    datasets: [
      {
        label: "Corth Main Characters (Age)",
        data: testData.map((user) => user.age),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ], // Example color variations
        borderColor: ["#000", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"], // Example border colors
        pointBackgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ], // Example point colors
        pointBorderColor: "#fff", // White borders for better visibility
        pointBorderWidth: 1, // Adjust point border width
      },
    ],
  });

  return (
    <div style={{ width: 500, padding: "10px", backgroundColor: "#f0f0f0" }}>
      <Line data={chartData} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default TestLineChart;
