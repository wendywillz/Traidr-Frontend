import { AllProductsContainer } from '../DashboardStyles/Product.styled'
import Product from './Product'
import { productsDummy } from './dummyData'



const AllProducts = () => {
  return (
    <AllProductsContainer>
        {productsDummy.map((product)=>{
            return(
                <Product product={product}/>

            )
        })}

       
       

    </AllProductsContainer>
   
  )
}

export default AllProducts



//Notes:

 // <div className='user-dashboard-all-products-whole-container'>
    //     {/*NOTE!!!: THIS DIV WILL NOT CONTAIN THE TRENDING SALES HEADING OR THE SEARCH BAR */}
    //     {/*Inside this div is where you map and return a <Product> tag for each individual product and pass in as props the image, title, price and description */}
    //     {/*Also, you flex the contents of this div, the flex direction should be row and the you wrap the contents of this div */}
    //     <div className='user-dashboard-individual-product-whole-container'>Product 1</div>
    //     <div className='user-dashboard-individual-product-whole-container'> Product 2</div>
    // </div>