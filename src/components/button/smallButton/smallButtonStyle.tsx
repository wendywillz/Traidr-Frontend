import styled from "styled-components";
import SmallButtonProps from "../../../interfaces/smallButtonInterface";

const SmallButtonStyle = styled.button<SmallButtonProps>`
  background-color: var(--orange-color);
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  width: 10rem;
  height: 3rem;
  cursor: pointer;
  margin: 0.5rem 0;
  border: 1px solid var(--orange-color);
  transition: all 0.3s ease-in-out;
  &:disabled {
    background-color: grey;
    color: #000;
    cursor: not-allowed;
    border: 1px solid grey;
  }
  ${(props) =>
    props.whiteBg &&
    `
    background-color: #ffffff; // Changed from #ffff to #ffffff for correct white color
    color: var(--orange-color);
 `}
`;
export default SmallButtonStyle;
