import { Line } from 'react-chartjs-2';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LineCharts = ({title, data, chartId}: {title:string, data:any, chartId:string }) => { 
  return (

    <div>
        <h2>{title}</h2>

      <Line
       data={data}
       datasetIdKey={chartId}
      />
    </div>
  )
}
export default LineCharts   


