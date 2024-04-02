import styled from "styled-components";
import formBackground from "../../../assets/form-background-image.png";

export const DeliveryDetailsContainer = styled.div`

.body-div {
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${formBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 1.4rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  min-height: 400px;
  width: 50%;
 margin: 5.9vh; 
}

.form-div {
  display: flex;
  justify-content: center;
  width: 100%;
}

.FormContainer {
  display: flex;
  flex-direction: column;
  width: 45%;
  margin-bottom: 1.4rem;
}

.FormContainer:not(:last-child) {
  margin-right: 2rem;
}

.form-p {
  margin-bottom: .9rem;
}

.form-p-error{
  color: red;
  font-size: 0.5rem;
}

.form-input {
  display: block;
  width: 100%;
  margin-bottom: .9rem;
  padding: .5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  background-color: #E04F16;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: .7rem 1.4rem;
  cursor: pointer;
  margin-top: 1.4rem;
  width: 100%;
}

.submit-button:hover {
  transform: translateY(-5px);
}
`;
