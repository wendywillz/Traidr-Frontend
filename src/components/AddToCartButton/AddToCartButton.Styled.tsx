import styled from "styled-components";

export const AddToCartComponentContainer = styled.div`
    border: 1px solid green;

    .quantity-modal{
    border: 1px solid blue;

}

`

export const AddToCartButtonContainer = styled.div`
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
    color: white;
    background-color: var(--orange-color);
    cursor: pointer;
    &:hover {
font-size: 1.1rem;
  width: 10.6rem;
  height: 3.7rem;
} 

`