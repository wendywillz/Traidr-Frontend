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
        }
        p {
            color: var(--normal-text-color);
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.5rem;
        }
        span {
            width: 5rem;
        }
    }

    .shop-profile-product-uploads {
        h3 {
            color: var(--black-color);
            font-weight: 400;

            margin-bottom: 2rem;
        }
    }

    .shop-profile-product-uploads-inner {
        border: 1px solid var(--normal-text-color);
        border-radius: 5px;
        padding: 3rem 2rem 3rem 3rem;
        h3 {
            color: var(--black-color);
            font-weight: 400;
        }
        
    }

    .shop-profile-product-uploads-inner-each {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
    }
`;
