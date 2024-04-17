import styled from "styled-components";

export const PayNowButton = styled.button`
  background: red;
  border-radius: 8px;
  color: white;
  height: 60px;
  width: 120px;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  cursor: pointer;
  &:hover {
    background: darkred;
  }
`;

export const PaystackWholeContainer = styled.div`
  

  .paystack-button{
    background-color: var(--orange-color);
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 3rem;
  cursor: pointer;
  margin: 0.5rem 0;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  }
  .paystack-button:hover {
  background-color: rgba(224, 79, 22, 0.8);
}
`