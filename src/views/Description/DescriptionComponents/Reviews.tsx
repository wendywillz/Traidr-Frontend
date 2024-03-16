import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewByProductId } from "../../../api/product";
import Star1 from "../../../assets/dashboard-assets/Star1.png";
import Star4 from "../../../assets/dashboard-assets/Star4.png"; // Import Star4 image
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
import SmallButton from "../../../components/button/smallButton/smallButton";
import axiosInstance from "../../../utils/axiosInstance";

// Interface for review data (replace with your actual interface)
interface ReviewsProps {
  reviewId: string;
  reviewerName: string;
  reviewRating: number;
  reviewText: string;
  date: string;
}

export default function Reviews() {
  const { productId } = useParams();
  console.log("reviews", productId);
  const [reviews, setReviews] = useState<ReviewsProps[]>();
  const token = localStorage.getItem("token");
  console.log("reviewer", token);
  const [error, setError] = useState("");
  const [successReview, setSuccessReview] = useState("");
  const [reviewRating, setreviewRating] = useState(0); // State for new review star rating

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
    if (!token) return setError("You must be logged in to submit a review");
    else {
      const res = await axiosInstance.post(`/reviews/add-review/${productId}`, {
        reviewText,
        reviewRating,
      });
      if (res && res.data.reviewCreated) {
        setError("");
        setReviewText("");
        setreviewRating(0);
        setSuccessReview("Review submitted successfully");
        window.location.reload();
      } else {
        setSuccessReview("");
        setError("Error submitting review");
        setReviewText("");
      }
    }
  };

  const renderStars = (isExistingReview = false, existingreviewRating = 0) => {
    // Differentiate for existing and new review stars
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starImage = (
        isExistingReview ? i <= existingreviewRating : i <= reviewRating
      )
        ? Star1
        : Star4; // Use appropriate star image based on existing or new review
      stars.push(
        <ReviewStar
          key={i}
          onClick={isExistingReview ? undefined : () => setreviewRating(i)}
        >
          {" "}
          {/* Click handler only for new review stars */}
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
                    {renderStars(true, review.reviewRating)}{" "}
                    {/* Render stars for existing reviews (without click handler) */}
                  </div>
                  <p className="review-text">{review.reviewText}</p>
                  <p className="reviewer">{review.reviewerName}</p>
                  <p className="review-date">{review.date.slice(0, 10)}</p>
                </EachReviewWrapper>
              );
            })}
          {renderStars()} {/* Render stars for new review form */}
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
