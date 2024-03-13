import { 
    ReviewContainer,
    ReviewHeader,
    ReviewBody,
    ReviewStar,
    ReviewForm,
    ReviewTextField,
    ReviewText, 
} from "../DescriptionStyles/Reviews.styled"
import Star1 from "../../../assets/dashboard-assets/Star1.png"
import Star4 from "../../../assets/dashboard-assets/Star4.png" // Import Star4 image
import { NameYourShopFormDetails } from "../../../interfaces/shopInterfaces";
import userData from "../../../interfaces/userInterface";

interface ShopProps {
    shop: NameYourShopFormDetails;
}

interface UserProps {
    user: userData;
}

export default function Reviews(shop: ShopProps, user: UserProps) {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const starImage = i < 5 ? Star1 : Star4; // Use Star1 for the first 4 stars, Star4 for the 5th star
            stars.push(
                <ReviewStar key={i}>
                    <img src={starImage} alt={`Star ${i}`} />
                </ReviewStar>
            );
        }
        return stars;
    };

    const getCurrentDate = () => {
        const options = { year: "numeric", month: "long", day: "numeric" } as const;
        return new Date().toLocaleDateString(undefined, options);
    };

    
    return (
        <>
            <ReviewContainer>
                <ReviewHeader>Reviews</ReviewHeader>
                <ReviewBody key={product.productId}>
                    {renderStars()}
                    <ReviewForm>
                        <ReviewTextField placeholder="Write your review here..." />
                        <ReviewText color="#333333" fontSize="" fontWeight="normal">{user.name}</ReviewText>
                        <ReviewText color="#333333" opacity="0.5" fontSize="13px" fontWeight="normal">{shop.shopName}</ReviewText>
                        <ReviewText color="#333333" opacity="0.5" fontSize="13px" fontWeight="normal">{getCurrentDate()}</ReviewText>
                    </ReviewForm>
                </ReviewBody>
            </ReviewContainer>
        </>
    )
}
