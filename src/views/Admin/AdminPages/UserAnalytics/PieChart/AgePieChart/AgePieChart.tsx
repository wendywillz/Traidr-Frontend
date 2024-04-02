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
    <div style={{ padding: "10px", backgroundColor: "#f0f0f0", width: `500px`,
    height: `300px`,}}>
      <p style={{ fontSize: "14px", marginBottom: "-30px" }}>
        User Demographics (Age)
      </p>
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