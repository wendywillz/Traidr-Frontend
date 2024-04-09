import styled from "styled-components";

export const WishlistContainer = styled.div`
  display: block;
  margin-top: 5vh;
  padding: 0 5rem;
  justify-content: center;
  align-items: center;
`;

export const WishlistContent = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow:  1px 0px 5px 4px rgba(0, 0, 0, 0.1);
  padding: 1vh 1vw 0vh 1vw;
  border-bottom: 2px solid #f0f0f0;
  gap: 380px;
  margin-bottom: 3vh;
  height: 15vh;
`;
export const WishlistText = styled.p`
  font-size: 2vw;
  font-weight: 600;
  margin-bottom: 2vh;
`;

export const Wishlistleftcontainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const WishlistleftcontainerImg = styled.div`
  display: block;
  img {
    /* object-fit: contain; */
    width: 7vw;
    /* height: 15vh; */
    margin-right: 1vw;
  }
`;

export const WishlistleftcontainerText = styled.div`
  display: block;

  .wishlistHeading {
    font-size: 24px;
    font-weight: 600;
    line-height: 33.6px;
  }

  .wishlistDescription {
    font-size: 16px;
    opacity: 40%;
  }

  .wishlistPrice {
    font-size: 16px;
    color: #219653;
  }
`;

export const WishListRowBtnsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-self: right;
    margin-top: 1vh;
`

export const DeleteWishItemBtn = styled.div`
  
    display: flex;
    width: 10.5rem;
    height: 3.6rem;
    border-radius: 5px;
    border: 1px solid var(--orange-color);
    margin-top: 1rem;
    margin-left: 4vw;
    font-size: 1rem;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    color: var(--orange-color);
    background-color: white;
    cursor: pointer;

    &:hover {
      font-size: 1.1rem;
      width: 10.6rem;
      height: 3.7rem;
    } 
`
