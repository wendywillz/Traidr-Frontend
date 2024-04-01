import { Line } from "react-chartjs-2";
import { AverageUsageTimeStyle } from "../UserAnalytics.Styled";
import { useEffect, useState } from "react";
import { fetchAverageUsageTime } from "../../../../../api/admin";

export default function AverageUsageTimeChart() {
  const [averageUsageTime, setAverageUsageTime] = useState<number[]>();
  useEffect(() => {
    fetchAverageUsageTime().then((res) => {
      if (res) {
        setAverageUsageTime(
          Object.values<number>(res).map((value: number) => value / 60)
        );
      }
    });
  }, []);
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
        data: averageUsageTime,
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
        title: {
          display: true,
          text: "Hours",
        },
      },
      x: {
        title: {
          display: true,
          text: "Days of the Week",
        },
      },
    },
  };

  return (
    <>
      <AverageUsageTimeStyle>
        <Line data={data} options={options} />
      </AverageUsageTimeStyle>
    </>
  );
}
