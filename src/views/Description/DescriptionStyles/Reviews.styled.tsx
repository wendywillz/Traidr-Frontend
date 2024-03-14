import styled from "styled-components";

export const ReviewContainer = styled.div`
  display: block;
  margin-top: 5vh;
  padding: 1rem 0;
`;

export const ReviewHeader = styled.h3`
  //   background-color: tomato;
`;

export const ReviewBody = styled.div`
  //   background-color: gold;
  display: block;
`;

export const EachReviewWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;

  .review-text,
  .review-date {
    font-size: 0.8rem;
    color: var(--normal-text-color);
  }
  .reviewer {
    font-size: 0.9rem;
    font-weight: bold;
    margin-top: 1rem;
    color: var(--black-color);
  }
`;
export const ReviewStar = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  cursor: pointer;
  img {
    display: block;
  }
`;

export const ReviewForm = styled.form`
  display: block;
  margin-top: 0.5rem;
`;

export const ReviewTextField = styled.input`
  width: 20rem;
  height: 4rem;
  border-radius: 4px;
  border: 1px solid var(--input-border-color);
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const ReviewText = styled.p<{
  color: string;
  fontSize: string;
  fontWeight: string;
  opacity?: string;
}>`
  color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity || "1"};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;
export const SuccessReview = styled.p`
  color: green;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;
