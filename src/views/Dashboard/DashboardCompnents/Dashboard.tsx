
// import { DashboardMain, DashboardContainer } from '../../styles/UserDashboardStyles/Dashboard.styled'
// import SearchBar from './SearchBar/SearchBar'

// import AllProducts from './Products/AllProducts'
// import SideBar from '../SideBar/SideBar'

import { DashboardMain, DashboardContainer, DashBoardTitle } from "../DashboardStyles/Dashboard.styled"
import SearchBar from "./SearchBar"
import AllProducts from "./AllProducts"
import SideBar from "./SideBar"
import Header from "../../../components/ShopHeader/ShopHeader"

{/*This is for the whole dashboard. The final should include the  imported navigation bar and side bar */}
const Dashboard = () => {
  return (
    <>
    <Header/>
    <DashboardContainer>
      <SideBar/>
        <DashboardMain>
          <SearchBar/>
          <DashBoardTitle>TRENDING SALES</DashBoardTitle>
          <AllProducts/>
        </DashboardMain>


    </DashboardContainer>
    </>
  )
}

export default Dashboard
