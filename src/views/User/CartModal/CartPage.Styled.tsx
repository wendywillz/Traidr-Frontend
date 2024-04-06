import styled from "styled-components";

export const CartContainer = styled.div`
  display: block;
  margin-top: 5vh;
  padding: 0 5rem;
  justify-content: center;
  align-items: center;
`;

export const CartHeaderContainer = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2vh;
`

export const CartContent = styled.div`
  box-shadow:  -5px 0px 10px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-evenly;
  padding: 0vh 1vw 0vh 0vw;
  border-bottom: 2px solid #f0f0f0;
  gap: 380px;
  margin-bottom: 2.5vh;
`;
export const CartPageTitle = styled.p`
  font-size: 2.3vw;
  font-weight: 600;
 
`;

export const CartTotal = styled.p`
  font-size: 2.2vw;
  font-weight: 500;
  color:var(--price-green-color);

`

export const Cartleftcontainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  gap: 30px;
  width: 50vw;
  
`;

export const CartleftcontainerImg = styled.div`
  
  display: block;
  img {
    object-fit: contain;
    width: 200px;
  }
`;

export const CartleftcontainerText = styled.div`
  display: block;

  .productHeading {
    font-size: 1.7vw;
    font-weight: 600;
    line-height: 33.6px;
  }

 

  .productPrice {
    font-size: 1vw;
    color: var(--price-green-color);
  }

  .sourceShop{
    font-size: 1vw;
  }
  .productStock{
    font-size: 1vw;
  }


`;

 export const CartRightContainer = styled.div`
 /* border: 1px solid green; */
 width: 40vw;
 display: flex;
 flex-direction: column;
 padding-bottom: 2vh;

 
 `

export const CartItemQtyAndTotal = styled.div`
/* border: 1px solid red; */
display: flex;
justify-content: space-between;
margin-bottom: 4vh;
padding: 0 2vw;

.cart-item-total{
  font-size: 1.5vw;
  font-weight: 600;
  color:var(--orange-color);
 }
`

export const CartUpdateAndDeleteBtns = styled.div`
  /* border: 1px solid red; */
display: flex;
justify-content: space-between;

.delete-item-button{
  display: flex;
    width: 10.5rem;
    height: 3.6rem;
    border-radius: 5px;
    border: 1px solid var(--orange-color);
    margin-top: 1rem;
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
 }
`

export const OrderButton = styled.div`
  /* border: 2px solid green; */
  width: 50vw;
  height: 5vh;
 text-align: center;
 color: white;
 background-color: var(--price-green-color);
 border-radius: 10px;
 margin-left: 20vw;
 margin-top: 2vh;
 margin-bottom: 2vh;
 padding-top: 1vh;
 font-size: 1.5vw;
 font-weight: 600;
 cursor: pointer;
 &:hover {
font-size: 1.6vw;
width: 50.1vw;
  height: 5.1vh;
} 
`
