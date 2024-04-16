import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { fetchProductSalesDetails } from "../../../../../../api/admin";
import { ProductSalesBarChartContainer } from "./ProductSalesBarChart.Styled";


interface ProductSalesDetails{
    productName: string;
    totalQuantitySold: number;
    totalAmountMade: number;
}

const ProductSalesBarChart = () => {
const [productSalesDetails, setproductSalesDetails] = useState<ProductSalesDetails[]>()

const [salesDetails, setSalesDetails] = useState({
    labels:productSalesDetails?.map((details:ProductSalesDetails, index)=> {
        if(index <=6){
           return details.productName
        }
    } ),
    datasets:[{
        label: "Traidr Product Revenue",
        data: productSalesDetails?.map((details:ProductSalesDetails, index)=> {
            if(index<=6){
                return details.totalAmountMade
            }
        }),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
    }]
})




useEffect(()=>{
    fetchProductSalesDetails().then((res:ProductSalesDetails[])=>{
        if(res){
            setproductSalesDetails(res)
            setSalesDetails({
               labels:res?.map((details, index)=> {
                if(index <=6){
                    return details.productName
                }
               }),
        datasets:[{
        label: "Traidr Product Revenue",
        data: res?.map((details, index)=> {
            if(index<=6){
                return details.totalAmountMade
            }
        }),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
    }] })
        }

    })
},[productSalesDetails, salesDetails])


  const options = {
    scales: {
      y: {
        // beginAtZero: true,
        title: {
          display: true,
          text: "Total Revenue",
        }, 
      },
      x: {
         display: false,
        grid:{
            display: false,
        },
        max: 6,
      },
    },
    plugins: {
      legend: {
        display:false,
        labels:{
            boxWidth: 500,
        }
        
      },
    },
  };




  return (
    <ProductSalesBarChartContainer>
        <p className="chart-title">Product Sales</p>
        <Bar data={salesDetails} options={options}/>
    </ProductSalesBarChartContainer>
  )
}
 
export default ProductSalesBarChart