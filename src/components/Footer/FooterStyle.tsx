import styled from "styled-components";

const FooterStyle = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 20rem;
  background-color: #000;
  padding: 0rem 2rem;
  //   @media (min-width: 1000px) {
  //     padding: 0rem 6rem;
  //   }
  .footer-inner {
    display: flex;
    flex-direction: column;
    @media (min-width: 1500px) {
      max-width: 1500px;
    }
  }
  .footer-inner p {
    font-size: 1rem;
    font-weight: 400;
  }
  .footer-logo {
    width: 6rem;
  }
  .footer-contact {
    display: grid;
    gap: 2rem;
    margin: 1rem 0;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  .footer-contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 4rem;
  }
  .footer-image {
    width: 2rem;
  }
  .footer-links {
    display: none;
    margin: 1rem 0;
    @media (min-width: 768px) {
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
  .footer-nav-inner {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .footer-nav-inner p {
    font-size: 1rem;
    font-weight: 400;
    color: var(--orange-color);
  }
  .footer-nav-inner a {
    font-size: 1rem;
    font-weight: 400;
    color: #ffff !important;
    text-decoration: none;
  }
  .footer-nav-inner a:hover {
    color: var(--orange-color) !important;
  }
  .footer-nav-inner a:visited {
    color: var(--orange-color);
  }
  .footer-horizontal-rule {
    margin-top: 2rem;
  }
  .footer-end {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem 0;
    align-items: center;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  .footer-nav-end {
    display: none;
    @media (min-width: 768px) {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
  }
  .footer-nav-end a {
    font-size: 1rem;
    color: #fff;
    font-weight: 400;
    text-decoration: none;
  }
`;
export default FooterStyle;
