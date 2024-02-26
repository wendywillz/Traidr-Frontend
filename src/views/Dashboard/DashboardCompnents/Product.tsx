import { ProductNameContainer, IndividualProductContainer  } from '../DashboardStyles/Product.styled';
import heartIcon from "../../../assets/dashboard-assets/heart-icon.png"



interface Products {
    productName: string;
    image: string;
    description: string;
    price: number;
    
}

interface ProductProps{
    product : Products;
   
    
}


const Product = ({product}: ProductProps) => {
  return (
    <div className='user-dashboard-all-products-whole-container'>
        <IndividualProductContainer>
        <img className="user-dashboard-individual-product-image" src={product.image}/>
        
        <ProductNameContainer>
            <p className="user-dashboard-individual-product-name">{product.productName} </p>
            <img className="user-dashboard-heart-icon" src={heartIcon}/>
        </ProductNameContainer>   
       
        <p className="user-dashboard-individual-product-description">{product.description}</p>
        <h6 className="user-dashboard-individual-product-price">₦{product.price.toLocaleString()}</h6>

        </IndividualProductContainer>
       
    </div>
  )
}

{/* Later on, clicking each photograph should take you somewere? I think. */}

export default Product