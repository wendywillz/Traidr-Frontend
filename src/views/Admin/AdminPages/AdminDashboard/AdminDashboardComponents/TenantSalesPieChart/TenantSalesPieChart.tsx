import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { fetchTenantSalesDetails } from "../../../../../../api/admin";
import { TenantsSalesPieChartContainer } from "./TenantsSalesPieChart.Styled";


interface TenantSalesDetails{
    tenantName: string;
    totalItemsSold: number;
    totalRevenue: number
}

interface PieChartLegend{
display: boolean;
position: "bottom"|"top"|"right"|"left"|"center"|"chartArea"
}
interface PieChartOptions{
  plugins: {
    legend:PieChartLegend
  }
  
}


const TenantSalesPieChart = () => {
const [tenantSalesDetails, setTenantSalesDetails] = useState<TenantSalesDetails[]>()

const [salesDetails, setSalesDetails] = useState({
    labels:tenantSalesDetails?.map((details)=> details.tenantName),
    datasets:[{
        label: "Traidr Product Revenue",
        data: tenantSalesDetails?.map((details)=> details.totalRevenue),
        backgroundColor: ["tomato", "green", "grey"],
        
    }]
})


useEffect(()=>{
    fetchTenantSalesDetails().then((res:TenantSalesDetails[])=>{
        if(res){
            setTenantSalesDetails(res)
            setSalesDetails({
               labels:res?.map((details)=> details.tenantName),
        datasets:[{
        label: "Traidr Product Revenue",
        data: res?.map((details)=> details.totalRevenue),
        backgroundColor: ["#2D9CDB", "#B4C150", "grey", "tomato", "aqua", "violet"],
        
    }] })
        }

    })
},[tenantSalesDetails, salesDetails])

  const options:PieChartOptions = {
    plugins: {
      legend: {
         display:true,
         position: "right",
      },
    },
  };



  return (
    <TenantsSalesPieChartContainer>
        <p className="chart-title">Tenant Sales</p>
        <Pie data={salesDetails} options={options}/>
    </TenantsSalesPieChartContainer>
  )
}

export default TenantSalesPieChart