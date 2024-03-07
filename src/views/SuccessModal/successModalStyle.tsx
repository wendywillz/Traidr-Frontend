import styled from "styled-components";

const SuccessModalMainWrapper = styled.div` 



    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    right: 0;
    background-color: #000;
    
  
  
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    color: grey;
    height: 60%;
    width: 50%;
    background-color: #fff;
    margin: 0 auto;
    boarder-radius: 5px;
  }
  
  .modal-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: rgba(224, 79, 22, 1);
    text-decoration: none;
    color: white;
    border-radius: 5px;
    padding: 10px;
    margin: 1.9rem;
    border-color: orange;
    
  
    cursor: pointer;
  }

   .modal-title{
    color: rgba(224, 79, 22, 1);
    width: 100%;
    font-weight: normal;
    text-align: center;
    font-size: 2rem;
    padding-bottom: 3rem ;
   }

  .modal-button:hover {
    background-color: rgba(224, 79, 22, 0.8);
  }
  .modal-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 3.5rem;
  }
  


  .modal-message {
    width: 100%;
    text-align: center;
    padding-bottom: 2rem;
    font-size: 1.5rem;
  }
  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

  }`

  

  export default SuccessModalMainWrapper;