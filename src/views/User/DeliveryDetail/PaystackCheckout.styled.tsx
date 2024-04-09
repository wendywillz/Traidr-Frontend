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
}`;