/* eslint-disable react-hooks/exhaustive-deps */
import {
  ReviewContainer,
  ReviewHeader,
  ReviewBody,
  ReviewStar,
  ReviewForm,
  ReviewTextField,
  EachReviewWrapper,
  ErrorText,
  SuccessReview,
} from "../DescriptionStyles/Reviews.styled";
import userDataInterface from "../../../interfaces/userInterface";
import Star1 from "../../../assets/dashboard-assets/Star1.png";
import Star4 from "../../../assets/dashboard-assets/Star4.png"; // Import Star4 image
// import { shopProductsInterface } from "../../../interfaces/shopInterfaces";
// import userData from "../../../interfaces/userInterface";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchReviewByProductId } from "../../../api/product";
import SmallButton from "../../../components/button/smallButton/smallButton";
import axiosInstance from "../../../utils/axiosInstance";
import { useSelector } from "react-redux";

interface ReviewsProps {
  // shop: ShopProps;
  reviewId: string;
  user: string;
  reviewStar: number;
  reviewText: string;
  reviewDate: string;
}

export default function Reviews() {
  const { productId } = useParams();
  console.log("reviews", productId);
  const [reviews, setReviews] = useState<ReviewsProps[]>();
  const reviewer = useSelector((state: userDataInterface) => state.userId);
  const [error, setError] = useState("");
  const [successReview, setSuccessReview] = useState("");
  useEffect(() => {
    fetchReviewByProductId(productId!).then((res) => {
      if (res) {
        setReviews(res);
      }
    });
  }, []);
  const [reviewText, setReviewText] = useState<string>("");
  const handleSubmitReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axiosInstance.post(`/reviews/add-review/${productId}`, {
      reviewText,
      reviewer,
    });
    if (res && res.data.reviewCreated) {
      setError("");
      setReviewText("");
      setSuccessReview("Review submitted successfully");
      window.location.reload();
    } else {
      setSuccessReview("");
      setError("Error submitting review");
      setReviewText("");
    }
  };
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

  return (
    <>
      <ReviewContainer>
        <ReviewHeader>Reviews</ReviewHeader>
        <ReviewBody>
          {reviews?.length &&
            reviews.map((review) => {
              return (
                <EachReviewWrapper
                  className="each-review-wrapper"
                  key={review.reviewId}
                >
                  <div className="review-star-wrapper">
                    <img src={Star4} alt="Star 4" />
                  </div>
                  <p className="review-text">{review.reviewText}</p>
                  <p className="reviewer">{review.user}</p>
                  <p className="review-date">{review.reviewDate}</p>
                </EachReviewWrapper>
              );
            })}
          {renderStars()}
          {successReview && <SuccessReview>{error}</SuccessReview>}
          {error && <ErrorText>{error}</ErrorText>}
          <ReviewForm onSubmit={handleSubmitReview}>
            <ReviewTextField
              placeholder="Write your review here..."
              onChange={(e) => setReviewText(e.target.value)}
              value={reviewText}
            />
            <SmallButton type="submit" button_text="Submit review" />
          </ReviewForm>
        </ReviewBody>
      </ReviewContainer>
    </>
  );
}
