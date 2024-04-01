import { Line } from "react-chartjs-2";
import { AverageUsageTimeStyle } from "../UserAnalytics.Styled";
const data = {
  labels: [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  datasets: [
    {
      label: "Average Usage Time",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgba(75, 192, 192, 0.2)",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
export default function AverageUsageTimeChart() {
  return (
    <>
      <AverageUsageTimeStyle>
        <Line data={data} options={options} />;
      </AverageUsageTimeStyle>
    </>
  );
}
