import { 
    ReviewContainer,
    ReviewHeader,
    ReviewBody,
    ReviewStar,
    ReviewForm 
} from "../DescriptionStyles/Reviews.styled"
// import star 1 from "../../../assets/star1.png"

export default function Reviews() {
  return (
    <>
        <ReviewContainer>
            <ReviewHeader>Reviews</ReviewHeader>
            <ReviewBody>
                <ReviewStar>
                {/* <img className="user-dashboard-heart-icon" src={star 1} /> */}
                </ReviewStar>
                <ReviewForm>Form</ReviewForm>
            </ReviewBody>
        </ReviewContainer>
    </>
  )
}
