import {
  DashboardMain,
  DashboardContainer,
  DashBoardTitle,
} from "../DashboardStyles/Dashboard.styled";
import SearchBar from "./SearchBar";
import AllProducts from "./AllProducts";
import SideBar from "./SideBar";
import Header from "../../../components/Header/Header";
import { useParams } from "react-router-dom";
{
  /*This is for the whole dashboard. The final should include the  imported navigation bar and side bar */
}
const Dashboard = () => {
  const { shopId } = useParams();
  return (
    <>
      <Header />
      <DashboardContainer>
        <SideBar />
        <DashboardMain>
          <SearchBar />
          <DashBoardTitle>TRENDING SALES</DashBoardTitle>
          <AllProducts shopId={shopId!} />
        </DashboardMain>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
