import styled from "styled-components";


export const PageLoaderWholeContainer =styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    padding: 14vh 25vw;
    /* border: 1px solid blue; */
    background-color: white;
    
`
export const PageLoaderContent = styled.div`
    /* border: 1px solid red; */
    position:fixed;
    width: 50vw;
    height: 70vh;
    padding: 25vh 20vw;
    background-color: white;
    border-radius: 10px;

    .page-loader-text{
        font-size: 1.3vw;
        font-weight: 500;
        margin-bottom: 1vh;
        /* margin: 20vh 0vw 1vh 22vw; */
        visibility:hidden;
    }

    .loader-container{

    }
`
export const LoaderAndTextContainer = styled.div`
    /* border: 1px solid green; */
    width: 8vw;
`