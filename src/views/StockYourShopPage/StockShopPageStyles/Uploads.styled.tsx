import styled from "styled-components"

//This is the whole container for the upload section, consisting of the icon and the tips
export const Upload = styled.div`
    width: 70rem;
    height: 40vh;
    padding: 7vh 2.5rem;
    display: flex;
    flex-direction: row;
    border: 1px solid grey;
    border-radius: 1rem;
    margin-bottom: 6vh;

`

export const UploadInstructions = styled.div`
    /* border: 1px solid orange; */
    margin-right: 10rem;
    width: 20rem;
    

    .stock-shop-page-upload-instructions-title{
    font-size: 1.5vw;
    font-weight: 600;
    margin-bottom: 1vh;
    margin-top:0vh;
}

.stock-shop-page-upload-instructions-description{
    font-size: 0.95vw;
    color: grey;
    font-weight: 400;
}

.stock-shop-page-upload-instructions-tips{
        font-size: 0.95vw;
        font-weight: 400;
        color: grey;
        margin-top: 1vh;
        /* margin-bottom:0vh; */
    }

.stock-shop-page-upload-instructions-tips-list{
        color: grey;
        font-size: 0.95vw;
        font-weight: 300;
        margin-top: 1vh;
        /* border: 1px solid red; */
    }

.stock-shop-page-upload-instructions-tips-list-item{
    margin-left:1rem;
    margin-bottom:1vh;
}
`



//This is for the div that would take the icon and the text underneath it
export const UploadPhoto = styled.div`
    border: 1px solid grey;
    border-radius: 0.5rem;
    width: 15rem;
    padding: 3vh 0;

.stock-shop-page-upload-icon{
    margin-left: 4rem;
}

.stock-shop-page-upload-photo-label{
    margin-left: 5rem;
    margin-top: -1vh;  
}
.stock-shop-page-upload-photo-input{
    visibility:hidden;
}

`
export const UploadVideo = styled.div`
    border: 1px solid grey;
    border-radius: 0.5rem;
    width: 15rem;
    padding: 3vh 0;

.stock-shop-page-upload-icon{
    margin-left: 5rem;
    margin-top: 1.5vh;
}

.stock-shop-page-upload-video-label{
    margin-left: 4.5rem;
    /* margin-top: -1vh; */
}
.stock-shop-page-upload-video-input{
    visibility:hidden;
}

.stock-shop-page-upload-max-file-size{
    font-size: 0.95vw;
    font-weight: 100;
    color: grey;
    opacity:80%;
    margin-left: 3rem;
}
`