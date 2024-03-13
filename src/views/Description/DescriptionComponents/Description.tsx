import { 
    DescriptionContainer, 
    // DescriptionTop, 
    DescriptionMain,
    DescriptionAdverts 
} from "../DescriptionStyles/Description.styled"
import Header from "../../../components/Header/Header"
import Reviews from "./Reviews"
import TopDescription from "../../../components/TopDescription/TopDescription";
import SimilarAdverts from "./SimilarAdverts"
import { shopProductsInterface, shopInterface } from "../../../interfaces/shopInterfaces";
import userData from "../../../interfaces/userInterface";
// import AllProducts from "../../Dashboard/DashboardCompnents/AllProducts"
// import { DashboardContainer } from "../../Dashboard/DashboardStyles/Dashboard.styled"
// import { useParams } from "react-router-dom"

interface DescriptionProps {
    shop: shopInterface;
    user: userData;
    product: shopProductsInterface;
}

export default function Description({ shop, user, product }: DescriptionProps) {
    // const { shopId } = useParams()
  return (
    <>
        <Header />
        <DescriptionContainer>
            <TopDescription />
            <DescriptionMain>
            <Reviews shop={{ shop }} user={{ user }} product={{ product }} />
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
