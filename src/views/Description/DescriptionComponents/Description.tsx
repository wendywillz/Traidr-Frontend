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
import { shopProductsInterface } from "../../../interfaces/shopInterfaces";
import { useEffect } from "react";
// import { shopProductsInterface, shopInterface } from "../../../interfaces/shopInterfaces";
// import userData from "../../../interfaces/userInterface";
// import AllProducts from "../../Dashboard/DashboardCompnents/AllProducts"
// import { DashboardContainer } from "../../Dashboard/DashboardStyles/Dashboard.styled"
import { useParams } from "react-router-dom"
import { fetchProductsById } from "../../../api/product";

// interface DescriptionProps {
//     shop: shopInterface;
//     user: userData;
//     product: shopProductsInterface;
// }

export default function Description(){
    const { productId } = useParams()
    const [products, setProducts] = useState<shopProductsInterface | null>(null)
    useEffect(() => {
        fetchProductsById(productId!).then((res) => {
            if (res) {
                setProducts(res)
            }
        })
    }, [])
  return (
    <>
        <Header />
        <DescriptionContainer>
            {products && (
                <>
                    <TopDescription
                        productImages={products.productImages}
                        productPrice={products.productPrice}
                        shopId={products.shopId}
                        productTitle={products.productTitle}
                        productId={products.productId} // Add the missing property
                        productDescription={products.productDescription} // Add the missing property
                        productCategory={products.productCategory} // Add the missing property
                        productVideo={products.productVideo} // Add the missing property
                    />
                    <DescriptionMain>
                        <Reviews shop={products.shopId} user={products.shopOwner} product={products.} />
                    </DescriptionMain>
                    <DescriptionAdverts>
                        <SimilarAdverts />
                    </DescriptionAdverts>
                </>
            )}
        </DescriptionContainer>
        {/* <DashboardContainer>
            <AllProducts shopId={shopId!} />
        </DashboardContainer> */}
    </>
  )
}


function useState<T>(arg0: null): [any, any] {
    throw new Error("Function not implemented.");
}
// const MyDescription: React.FC<DescriptionProps> = (props) => {
//     Description(props); 
//     // You can call your function within the component 
//     return (
//       <>
//         {/* Your component JSX here */}
//       </>
//     );
//   };
  
//     export { MyDescription }; // Export your component