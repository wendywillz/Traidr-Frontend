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
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 0px solid #ccc;
`;

export const ReviewText = styled.p<{ color: string; fontSize: string; opacity?: string }>`
    color: ${({ color }) => color};
    opacity: ${({ opacity }) => opacity || "1"};
    font-size: ${({ fontSize }) => fontSize};
`;


