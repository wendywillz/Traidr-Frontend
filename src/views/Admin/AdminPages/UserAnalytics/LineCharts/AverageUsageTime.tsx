import { Line } from "react-chartjs-2";
import { AverageUsageTimeStyle } from "../UserAnalytics.Styled";
import { useEffect, useState } from "react";
import { fetchAverageUsageTime } from "../../../../../api/admin";

export default function AverageUsageTimeChart() {
  const [averageUsageTime, setAverageUsageTime] = useState<number[]>();
  const [days, setDays] = useState<string[]>();

  useEffect(() => {
    fetchAverageUsageTime().then((res) => {
      if (res) {
        setAverageUsageTime(
          Object.values<number>(res).map((value: number) => value / 3600)
        );
        setDays(Object.keys(res));
      }
    });
  }, []);
  const data = {
    labels: days,
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
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    }
  };
  return (
    <AverageUsageTimeStyle>
      <p>Average Usage time</p>
      <Line data={data} options={options} />
    </AverageUsageTimeStyle>
  );
}
