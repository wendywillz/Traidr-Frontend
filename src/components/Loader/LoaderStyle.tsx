import styled from "styled-components";

const LoaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  .loader-inner{
    border: 4px solid #f3f3f3;
    border-top: 4px solid var(--orange-color);
    border-radius: 50%;
    margin: 0 auto;
    width: 3vw;
    height: 3vw;
    animation: spin 2s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg);
  }
}
}
  ;`;

export default LoaderStyle;
