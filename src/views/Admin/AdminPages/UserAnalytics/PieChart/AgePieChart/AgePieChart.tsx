import { useState } from "react";

import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import testData from "../../../../../TestContent/testData";

export const AgePieChart = () => {
  const maleNo = testData.filter((user) => user.gender === "M");
  const femaleNo = testData.filter((user) => user.gender === "F");
  const othersNo = testData.filter((user) => user.gender === "O");
  const [userDetails, setUserDetails] = useState({
    labels: ["Male", "Female", "Others"],
    datasets: [
      {
        label: "Corth Main Characters",
        data: [maleNo.length, femaleNo.length, othersNo.length],
        backgroundColor: ["#2D9CDB", "#34101B", "#F2C94C"],
      },
    ],
  });

  return (
    <div style={{ width: 300, padding: "10px", backgroundColor: "#f0f0f0" }}>
      <p style={{ fontSize: "14px", marginBottom: "-30px"}}>User Demographics (Age)</p>
    <Pie
      data={userDetails}
      options={{
        plugins: {
          legend: {
            position: "right",
          },
        },
      }}
    />
  </div>
  );
};
