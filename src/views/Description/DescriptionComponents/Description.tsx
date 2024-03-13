import { 
    DescriptionContainer, 
    DescriptionTop, 
    DescriptionMain,
    DescriptionAdverts 
} from "../DescriptionStyles/Description.styled"
import Header from "../../../components/Header/Header"
import Reviews from "./Reviews"
import SimilarAdverts from "./SimilarAdverts"

// import AllProducts from "../../Dashboard/DashboardCompnents/AllProducts"
// import { DashboardContainer } from "../../Dashboard/DashboardStyles/Dashboard.styled"
// import { useParams } from "react-router-dom"

export default function Description() {
    // const { shopId } = useParams()
  return (
    <>
        <Header />
        <DescriptionContainer>
            <DescriptionTop>Top</DescriptionTop>
            <DescriptionMain>
                <Reviews />
            </DescriptionMain>
            <DescriptionAdverts>
                <SimilarAdverts />
            </DescriptionAdverts>
        </DescriptionContainer>
        {/* <DashboardContainer>
            <AllProducts shopId={shopId!} />
        </DashboardContainer> */}
    </>
  )
}
