import AdminHeader from "../Admin/AdminPagesComponents/AdminHeader/AdminHeader"
import AdminSideBar from "../../components/adminSideBar/AdminSideBar"
import { AdminPageContainer, AdminPageMain, AdminPageTitle, AdminPageContent } from "../Admin/AdminPagesComponents/MainAdminStyles/MainAdminStyles.Styled"
import TestBarChart from "./TestCharts/TestBarChart"
import TestPieChart from "./TestCharts/TestPieChart"

const TestPage = () => {
  return (
    <AdminPageContainer>
        <AdminSideBar/>
        <AdminPageMain>
            <AdminHeader/>
            <AdminPageTitle>Page Title</AdminPageTitle>
            <AdminPageContent>
                <TestBarChart/>
                <TestPieChart />

            </AdminPageContent>
        </AdminPageMain>
    </AdminPageContainer>
  )
}

export default TestPage