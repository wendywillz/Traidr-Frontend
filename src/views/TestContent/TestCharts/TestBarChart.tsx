/* eslint-disable @typescript-eslint/no-unused-vars */
import  { useState } from "react"

import { Bar } from "react-chartjs-2"
import "chart.js/auto"
import testData from "../testData"

// const gg = {
//     labels: [2000, 2001, 2002],
//     datasets: [{
//         label: "Test Data",
//         data: [600, 700, 600],
//         backgroundColor: ["pink"]
//     }]
// }

const TestBarChart = () => {
    const [userDetails, _setUserDetails] = useState({
        labels: testData.map((user)=>  user.userName),
        datasets: [{
            label: "Corth Main Characters",
            data: testData.map((user)=>user.age),
            backgroundColor: ["pink", "aqua", "green"]
        }]
    })

  return (
    <div style={{width: 500}}>
        <Bar data={userDetails}/>
      
    </div>
  )
}

export default TestBarChart