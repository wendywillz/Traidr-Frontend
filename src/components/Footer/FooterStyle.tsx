import styled from "styled-components";

const FooterStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 20rem;
  background-color: #000;
  padding: 0rem 2rem;
  height: 4rem;
  margin-bottom: 2rem;
  .footer-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 100%;
    width: 100%;
    @media (min-width: 1500px) {
      max-width: 1500px;
    }
    .footer-contact{
        display: grid;
        grid-template-columns: repeat(autofil, minmax(200px, 1fr));
    }
  }
`;
export default FooterStyle;
