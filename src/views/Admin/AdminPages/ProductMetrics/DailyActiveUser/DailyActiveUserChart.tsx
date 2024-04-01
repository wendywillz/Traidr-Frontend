import { Bar } from "react-chartjs-2";
import { DailyActiveUserStyle } from "./DailyActiveUserStyle";
import { fetchDailyActiveUser } from "../../../../../api/admin";
import { useState, useEffect } from "react";

const DailyActiveUser = () => {
  const [dailyActiveUser, setDailyActiveUser] = useState<number[]>();
  const [days, setDays] = useState<string[]>();
  useEffect(() => {
    fetchDailyActiveUser().then((res) => {
      if (res) {
        setDailyActiveUser(Object.values<number>(res));
        setDays(Object.keys(res));
      }
    });
  }, []);
  const data = {
    labels: days,
    datasets: [
      {
        label: "Daily Active User",
        data: dailyActiveUser,
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
          stepSize: 1, // Ensures the y-axis increments by whole numbers
        },
      },
      x: {
        title: {
          display: true,
        },
      },
    },
  };

  return (
    <DailyActiveUserStyle>
      <Bar data={data} options={options} />
    </DailyActiveUserStyle>
  );
};

export default DailyActiveUser;
