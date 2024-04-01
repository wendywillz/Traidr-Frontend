import { Bar } from "react-chartjs-2";
import { MonthlyActiveUserStyle } from "./MonthlyActiveUserStyle";
import { fetchMonthlyActiveUser } from "../../../../../api/admin";
import { useState, useEffect } from "react";

export default function MonthlyActiveUser() {
  const [monthlyActiveUser, setMonthlyActiveUser] = useState<number[]>();
  const [months, setMonths] = useState<string[]>();
  useEffect(() => {
    fetchMonthlyActiveUser().then((res) => {
      if (res) {
        setMonthlyActiveUser(Object.values<number>(res));
        setMonths(Object.keys(res).map((month) => month.slice(0, 3)));
      }
    });
  }, []);
  const data = {
    labels: months,
    datasets: [
      {
        label: "Daily Monthly User",
        data: monthlyActiveUser,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "No. of users",
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
    <MonthlyActiveUserStyle>
      <p>Monthly Active Users</p>
      <Bar data={data} options={options} />
    </MonthlyActiveUserStyle>
  );
}
