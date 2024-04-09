import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { fetchUserGender } from "../../../../../../api/admin";

// interface GenderDetails {
//   maleCount: number;
//   femaleCount: number;
// }

export const GenderPieChart = () => {
  const [genderDetails, setGenderDetails] = useState({
    maleCount: 50,
    femaleCount: 30,
  });

  const userDetails = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Traidr User Gender Demographics",
        data: [genderDetails.maleCount, genderDetails.femaleCount],
        backgroundColor: ["#2D9CDB", "#B4C150"],
      },
    ],
  };

  useEffect(() => {
    fetchUserGender().then((res) => {
      if (res) {
        setGenderDetails({
          maleCount: res.totalMaleCount,
          femaleCount: res.totalFemaleCount,
        });
      }
    });
    return () => {};
  }, []); // Removed genderDetails from the dependency array to avoid infinite loops

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
      <p>User Demographics (sex)</p>
      <Pie
        data={userDetails}
        options={{
          plugins: {
            legend: {
              position: "right",
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const value = context.dataset.data[context.dataIndex];
                  const percentage = ((value / total) * 100).toFixed(2) + "%";
                  return context.label + ": " + value + " (" + percentage + ")";
                },
              },
            },
          },
        }}
      />
    </div>
  );
};
