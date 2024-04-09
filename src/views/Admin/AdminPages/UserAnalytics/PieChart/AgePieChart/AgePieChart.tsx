import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import testData from "../../../../../TestContent/testData";

export const AgePieChart = () => {
  const maleNo = testData.filter((user) => user.gender === "M");
  const femaleNo = testData.filter((user) => user.gender === "F");
  const othersNo = testData.filter((user) => user.gender === "O");
  const userDetails = {
    labels: ["18-25", "26-35", "35+"],
    datasets: [
      {
        label: "Corth Main Characters",
        data: [maleNo.length, femaleNo.length, othersNo.length],
        backgroundColor: ["#2D9CDB", "#34101B", "#F2C94C"],
      },
    ],
  };

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        minWidth: `500px`,
        height: `350px`,
      }}
    >
      <p>User Demographics (Age)</p>
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
