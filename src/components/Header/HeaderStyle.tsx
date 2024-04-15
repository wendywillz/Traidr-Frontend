import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  position: sticky;
  background-color: #fff;
  z-index: 100;
  top: 0;
  align-items: center;
  padding: 0rem 2rem;
  height: 4rem;
  margin-bottom: 2rem;
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
  .logo-wrapper {
    flex-basis: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  logo-wrapper a {
    text-decoration: none;
  }
  .traidr-header-logo {
    width: 6rem;
  }
  .user-profile-img-wrapper {
    height: 2.5rem;
    min-width: 2.5rem;
    cursor: pointer;
    display: flex;
    gap: 0.2rem;
    color: #000000;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s;
  }

  .user-profile-img-wrapper:hover {
    color: var(--orange-color);
    transition: all 0.3s;
  }
  .user-profile-img-wrapper img {
    max-width: 100%;
    object-fit: contain;
  }
  .header-right-btn-wrapper {
    flex-basis: 40%;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
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
  .header-right-login-btn {
    background-color: #fff;
    color: var(--orange-color);
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
  }
  .header-right-signup-btn {
    background-color: var(--orange-color);
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
  }

  .shop-header-right-btn-wrapper {
    flex-basis: 40%;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
    margin-right: 2rem;
  }

  .shop-profile-header-icon,
  .shop-profile-notification-wrapper {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .shop-profile-notification-wrapper > *,
  .shop-profile-header-icon > * {
    cursor: pointer;
  }

  .user-drop-down-icon {
    font-size: 1.5rem;
    height: 15px;
    width: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: var(--orange-color);
    stroke-width: 10;
    drop-shadow: 10px 10px 10px red;
  }
  .notification-badge {
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--orange-color);
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 50%;
    font-size: 0.8rem;
  }
`;

export default HeaderStyle;
