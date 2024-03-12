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

export default function Reviews() {
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
                        <ReviewText color="#333333" fontSize="">Name from Backend</ReviewText>
                        <ReviewText color="#333333" opacity="0.5" fontSize="13px">Shop Title from Backend</ReviewText>
                        <ReviewText color="#333333" opacity="0.5" fontSize="13px">{getCurrentDate()}</ReviewText>
                    </ReviewForm>
                </ReviewBody>
            </ReviewContainer>
        </>
    )
}
