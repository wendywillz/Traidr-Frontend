import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { LineChartContainer } from "../UserAnalytics.Styled";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const VistingCustomersChart = () => {
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: `Visting customers`,
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(54, 162, 235)",
        tension: 0.3,
        // backgroundColor: `rgba(255, 255, 255, 1)`
      },
    ],
  };
  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: "No. of visitors",
        },
        ticks: {
          stepSize: 1,
        },
      },
      x: {
        title: {
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <LineChartContainer>
      <p>Visiting Customer</p>
      <Line data={data} datasetIdKey={`chartId`} options={options} />
    </LineChartContainer>
  );
};
export default VistingCustomersChart;
