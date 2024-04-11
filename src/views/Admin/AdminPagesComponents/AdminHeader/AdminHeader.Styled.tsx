import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  position: sticky;
  background-color: #fff;
  z-index: 100;
  top: 0;
  align-items: center;
  width: 100%;
  oveflow-x: hidden !important;
  padding: 0rem 3rem;
  height: 4rem;
  z-index: 1000;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  .header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 100%;
    width: 100%;
    @media (min-width: 1500px) {
      max-width: 1500px;
    }
  }
  .header-logo-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-basis: 20%;
    width: 20%;
  }
  .search-wrapper {
    flex-basis: 50%;
    width: 50%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid var(--input-border-color);
    border-radius: 4px;
    overflow: hidden;
  }
  .search-wrapper input {
    width: 100%;
    border: none;
    padding: 0.8rem;
    outline: none;
    color: var(--normal-text-color);
  }
    .search-wrapper input::placeholder {
        color: var(--input-placeholder-color);
    }
  .search-wrapper input:focus {
    border: none;
    outline: none:
  }
  .user-profile-img-wrapper {
    height: 4rem;
    width: 4rem;
  }

  .user-profile-img-wrapper img {
    max-width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .header-right-btn-wrapper {
    flex-basis: 50%;
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: flex-end;
  }
  .admin-name-wrapper p {
color: #00000080;
font-size: .9rem;
  }
  .small-screen-icon {
    display: block;
    color: var(--orange-color);
    @media (min-width: 768px) {
      display: none;
    }
  }
  .big-screen {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .admin-notification-icon, .admin-profile-img {
   cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
  }
  .admin-notification-icon {
   font-size: 1.5rem;
  }
`;

export default HeaderStyle;
