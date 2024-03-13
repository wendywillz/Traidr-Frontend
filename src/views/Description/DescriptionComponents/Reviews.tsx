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
// import { shopProductsInterface } from "../../../interfaces/shopInterfaces";
// import userData from "../../../interfaces/userInterface";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { fetchReviewByProductId } from "../../../api/product";

// interface ShopProps {
//     shop: shopInterface;
// }

// interface UserProps {
//     user: userData;
// }

// interface ProductProps {
//     product: shopProductsInterface;
//   }

  interface ReviewsProps {
    // shop: ShopProps;
    user: string;
    reviewStar: number;
    reviewText: string;
    reviewDate: string;
  }
  
  export default function Reviews({  user, reviewStar, reviewText, reviewDate }: ReviewsProps) {
    const { productId } = useParams();
    const [reviews, setReviews] = useState<ReviewsProps[] | null>(null);
    useEffect(() => {
        fetchReviewByProductId(productId!).then((res) => {
            if (res) {
                setReviews(res);
            }
        });
    }, []);

    
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
                <ReviewBody>
                    {renderStars()}
                    <ReviewForm>
                        <ReviewTextField placeholder="Write your review here..." />
                    </ReviewForm>
                </ReviewBody>
            </ReviewContainer>
        </>
    )
}
