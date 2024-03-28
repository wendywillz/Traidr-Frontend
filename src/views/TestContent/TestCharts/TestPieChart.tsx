/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react"

import { Pie } from "react-chartjs-2"
import "chart.js/auto"
import testData from "../testData"

const TestPieChart = () => {
    const maleNo = testData.filter((user)=> user.gender === "M")
    const femaleNo = testData.filter((user)=> user.gender === "F")
    const [userDetails, _setUserDetails] = useState({
        labels: ["Male characters", "Female Characters"],
        datasets: [{
            label: "Corth Main Characters",
            data: [maleNo.length, femaleNo.length],
            backgroundColor: ["pink", "aqua"]
        }]
    })

  return (
   <div style={{width: 300}}>
        <Pie data={userDetails}/>
      
    </div>
  )
}

export default TestPieChart