import styled from "styled-components";

export const IndividualProductContainer = styled.div`
    
    width: 16rem;
    height: 32vh;
    display: flex;
    flex-direction:column;
    flex-wrap: wrap;
    margin: 1.1vh 0.5rem;
    /* border: 2px solid blue; */



    .user-dashboard-individual-product-image{
         width: 15rem;
        height: 20vh; 
        /* border: 1px solid green; */

    } 

    .user-dashboard-individual-product-description{
        font-size: 0.7vw;
        font-weight: 600;
        color: grey;
        /* border: 1px solid purple; */
       

    }

    .user-dashboard-individual-product-price{
       font-size: 1vw;
       font-weight: 500;
       color: #60ea60;
       margin-top:1vh;
       margin-bottom:0vh;
         /* border: 1px solid red; */
    } 
`


export const ProductNameContainer = styled.div`
    
    display:flex;
    justify-content: space-between;
    height: 3vh;
    width: 15rem;
    margin-top: 0.3vh;
    /* border: 2px solid pink; */

    //This is for the name of the product, just underneath the picture
    .user-dashboard-individual-product-name{
        font-size: 1vw;
        font-weight: 700;
        color: Black;
        /* padding-top:-1vh; */
        border: none;
        margin-top:0vh;
        
    }

    //This is for the heart icon
    .user-dashboard-heart-icon{
        /* margin-left: 0.3rem; */
        width: 1rem;
        height: 1.7vh; 
        
        padding-top:0.5vh;
        /* border: none; */   
        
    }

`

export const AllProductsContainer = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 52rem;
    /* border: 2px solid purple; */
    /* margin-left: 30%; */
`