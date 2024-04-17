import styled from "styled-components";

export const ShopWholePageContainer = styled.div`
  /* border: 1px solid blueviolet; */
`

export const ShopHeaderContainer = styled.div`
border: 2px solid black;
border-radius: 15px;
text-align: center;
margin-top: 8vh;
background-color: white;
color: var(--orange-color);
height: 10vw;
padding-top: 3vh;

.shop-page-shop-name{
  font-size: 4vw;
  font-family: 700;
}

.shop-page-shop-description{
  margin-top:1vh;
  font-size: 1.5vw;
  font-weight: 500;
  font-style: italic;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: black;
}


`

export const ShopMainWrapper = styled.div`
  padding: 0rem 3rem;
  min-height: 80vh;

  .shop-profile-background-pic-container{
    /* object-fit: contain; */
    border: 2px solid black;
    margin-top: 7vh;

  }

 .shop-profile-background-pic{
  object-fit:fill;
  width: 93vw;
  height: 47vh;
    /* width: 50vw;
    height: 40vh; */
  }

  .shop-profile-product-logo {
    img {
      width: 15rem;
      height: 15rem;
      border: 1px solid var(--normal-text-color);
      border-radius: 5px;
    }
  } 

  .shop-profile-product-logo {
    display: flex;
    justify-content: space-between;
    margin: 5vh 0vw 6vh 0vw;
    padding: 0vh 3vw 0vh 1vw;
    /* border: 1px solid blue; */
  }
.shop-owner-pic-and-details{
  display:flex;
}

.shop-profile-shop-logo-container{
  border: 1px solid grey;
  height: 30vh;
  width: 17vw;
  border-radius: 10px;
  background-color: #f2f2f2;
}

#shop-profile-shop-bag-icon{
  object-fit: contain;
  width: 40%;
  height: 40%;
  margin: 8vh 0vw 0vh 5vw;
  border:none;
}

#shop-profile-shop-logo{
  border:none;
  padding: 0.1vh 0vw 0vh 0.1vw;
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

/* .shop-page-shop-description{
  font-size: 1.5vw;
  font-weight: 500;
  font-style: italic;
} */

.shop-address-info{
  font-size: 1vw;
  font-weight:400;
}


  .shop-profile-product-uploads {
   
  }
  .shop-page-title{
    font-size:2.5vw;
    font-weight: 400;
    margin-bottom: 0vh;
    margin-left: 1vw;
  }

  .shop-profile-product-uploads-inner {
    /* border: 1px solid var(--normal-text-color); */
    border-radius: 5px;
    padding: 1rem 2rem 3rem 0.5rem;
    h3 {
      color: var(--black-color);
      font-weight: 200;
      margin-bottom: 1rem;
    }
  }

  .shop-profile-product-uploads-inner-each {
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    p {
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
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    gap: 1rem;
    justify-content: space-between;
    @media (min-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    p {
      color: var(--black-color);
      font-weight: 400;
    }
  }

  .shop-profile-photos-each {
    border-radius: 5px;
    flex-direction: column;
    outline: 1px solid var(--normal-text-color);
    height: 30vh;
    padding: 1vh 0vw;
    cursor: pointer;
    img {
      object-fit:contain;
      /* flex-basis: 90%; */
      /* max-width: 100%; */
      width: 100%;
      height: 80%;
      /* border: 1px solid pink; */
      /* min-height: 80%;
      max-height: 80%; */
      /* flex: 1; */
    }
    /* p {
      font-size: 1rem;
      margin-left: 0.3rem;
    } */

    &:hover{
      height: 31vh;
      padding: 0vh 0vw;
    }
  }


  #shop-profile-product-title{
    font-size: 1.1vw;
    font-weight: 600;
    margin-bottom:0vh;
    margin-left:5vw;
  }

  #shop-profile-product-price{
    font-size: 1vw;
    font-weight: 500;
    color: var(--price-green-color);
    margin-left:8vw;
  }


  .shop-profile-photos-each-2 {
    height: 30vh;
    padding: 2.5rem;
    border-radius: 5px;
    outline: 1px solid var(--normal-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 7rem;
      font-weight: 200;
      margin-bottom: -3rem;
    }
    p {
      align-items: center;
      font-size: 1rem;
    }
  }

  .shop-profile-upload-btn {
    display: flex;
    justify-content: flex-start;
    button {
      background-color: var(--orange-color);
      color: #fff;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      height: 3rem;
      cursor: pointer;
      margin: 2rem 0 7rem 0;
      padding: 0 2rem;
      transition: all 0.3s ease-in-out;
    }
  }

  .upload-box-content {
    border-radius: 5px;
    outline: 1px solid var(--normal-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    span {
      width: 10rem;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }


`


export const ShopOwnerContactDetails = styled.div`
/* border: 1px solid blue; */
font-size: 1vw;
font-weight: 400;
margin-left: 47vw;
margin-top: 5vh;

.shop-owner-contact-title{
  font-size: 1.5vw;
  font-weight: 700;
  color: var(--orange-color);
  margin-bottom: 1vh;
  text-align: center;
  margin-left: 0vw;
}

.shop-owner-profile-pic-container{
  margin-left: 3vw;
  width: 7.1vw;
  /* border: 1px solid blue; */
}

#shop-owner-profile-pic{
  /* object-position:center; */
  object-fit: contain;
  width: 7vw;
  height: 7vw;
  border-radius: 100%;
  border:none;
  /* border: 1px solid green; */

}

.shop-owner-name{
  font-size: 1vw;
  font-weight: 700;
  margin-left: 3vw;
}

.shop-owner-email{
  font-size: 0.9vw;
  font-weight: 500;
  margin-left: 1vw
}

.shop-owner-phoneNumber{
  font-size: 1vw;
  font-weight: 500;
  margin-left: 2vw
}





`