import { GenderPieChart } from "./GenderPieChart/GenderPieChart";
import { AgePieChart } from "./AgePieChart/AgePieChart";
import { UserAnalyticsPieChart } from "./UserAnalyticsDemographyPieChart.styled";

export default function UserAnalyticsDemographyPieChart() {
  return (
    <UserAnalyticsPieChart>
      <GenderPieChart />
      <AgePieChart />
    </UserAnalyticsPieChart>
  );
}
