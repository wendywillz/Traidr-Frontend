import styled from "styled-components";

export const ShopProfileMainWrapper = styled.div`
  padding: 0rem 3rem;
  min-height: 80vh;

  .shop-profile-product-logo {
    img{
        border: 1px solid var(--normal-text-color);
        border-radius: 5px;
        padding: 4rem;
        background-color: lightgray;
    }
    }

  .shop-profile-product-logo {
    display: flex;
    margin: 5rem 0 5rem;
    }

    .shop-profile-productname {
        margin-left: 2rem;
        align-self: center;
        h3 {
            color: var(--black-color);
            font-weight: 200;
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        input {
            width: 30rem;
            height: 2.5rem;
            border: none;
            outline: none;
            // padding: 0 1rem;
        }
        input:focus {
            border: 1px solid var(--normal-text-color);
            outline: 1px solid var(--normal-text-color);
            border-radius: 5px;
        }
        input::placeholder {
            color: var(--normal-text-color);
            font-weight: 200;
            font-size: 1.5rem;
            display: inline-block;
            align-items: center;
        }
    }

    .shop-profile-product-uploads {
        h3 {
            color: var(--black-color);
            font-weight: 200;
            margin-bottom: 1rem;
        }
    }

    .shop-profile-product-uploads-inner {
        border: 1px solid var(--normal-text-color);
        border-radius: 5px;
        padding: 3rem 2rem 3rem 3rem;
        h3 {
            color: var(--black-color);
            font-weight: 200;
        }
        
    }

    .shop-profile-product-uploads-inner-each {
        display: flex;
        flex-direction: row;
        // justify-content: space-between;
        p{
            margin-bottom: 2rem;
            color: var(--normal-text-color);
            // width: 25rem;
        }
        
    }

    .shop-profile-product-uploads-list {
        ul {
            color: var(--normal-text-color);
            margin-left: 1.5rem;
        }
    }

    .shop-profile-photos {
        margin: -3rem 0 0 -2rem;
        img {
            margin-bottom: 0.5rem; 
        }
        p {
            color: var(--black-color);
            font-weight: 400;
        }
    }

    .shop-profile-photos-each {
        box-sizing: border-box;
        display: inline-block;
        border: 1px solid var(--normal-text-color);
        border-radius: 5px;
        padding: .5rem 2.5rem;
        margin: 0 1.5rem 0 0;
    }

    .shop-profile-description-price {
        h3{
            color: var(--black-color);
            font-weight: 400;
        }
        p{
            color: var(--normal-text-color);
            font-weight: 200;
            font-size: 1rem;
            line-height: 1.5rem;
            width: 13rem;
        }
    }

    .shop-profile-description {
        margin-top: 7rem;
        h3 {
            color: var(--black-color);
            font-weight: 400;
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    }

    .shop-profile-description-para {
        display: flex;
        input{
            width: 60%;
            margin-left: 5rem;
            border-radius: 5px;
            border: 1px solid var(--normal-text-color);
        }
    }

    .shop-profile-description-para-price {
        display: flex;
        margin-top: 5rem;
        h3 {
            color: var(--black-color);
            font-weight: 400;
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        input {
            width: 60%;
            margin-left: 11.5rem;
            border-radius: 5px;
            border: 1px solid var(--normal-text-color);
        }
    }

    .shop-profile-upload-btn {
        display: flex;
        justify-content: flex-end;
        button {
            background-color: var(--orange-color);
            color: #fff;
            font-size: 1rem;
            border: none;
            border-radius: 5px;
            height: 3rem;
            cursor: pointer;
            margin: 2rem 0 2rem 0;
            padding: 0 2rem;
            transition: all 0.3s ease-in-out;
        }
        
    }
    
`;


  

