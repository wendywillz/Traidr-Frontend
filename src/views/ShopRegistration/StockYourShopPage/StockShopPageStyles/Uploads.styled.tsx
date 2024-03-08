import styled from "styled-components";

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
`;

export const MultipleUploads = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  flex-wrap: wrap;
  background-color: green;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const UploadInstructions = styled.div`
  /* border: 1px solid orange; */
  margin-right: 10rem;
  width: 30%;

  .stock-shop-page-upload-instructions-title {
    font-size: 1.5vw;
    font-weight: 600;
    margin-bottom: 1vh;
    margin-top: 0vh;
  }

  .stock-shop-page-upload-instructions-description {
    font-size: 0.95vw;
    color: grey;
    font-weight: 400;
  }

  .stock-shop-page-upload-instructions-tips {
    font-size: 0.95vw;
    font-weight: 400;
    color: grey;
    margin-top: 1vh;
    /* margin-bottom:0vh; */
  }

  .stock-shop-page-upload-instructions-tips-list {
    color: grey;
    font-size: 0.95vw;
    font-weight: 300;
    width: 100%;
    margin-top: 1vh;
    /* border: 1px solid red; */
  }

  .stock-shop-page-upload-instructions-tips-list-item {
    margin-left: 1rem;
    margin-bottom: 1vh;
    width: 100%;
  }
`;

//This is for the div that would take the icon and the text underneath it
export const UploadFile = styled.div`
  border: 1px solid grey;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 35%;
  .stock-shop-page-upload-icon {
    height: 4rem;
    margin-bottom: 0.5rem;
  }
  .stock-shop-page-upload-photo-label {
    display: block;
  }
  .stock-shop-page-upload-photo-input {
    display: block;
    margin-top: 2rem;
    width: 90%;
    position: absolute;
    height: 90%;
    margin: auto;
    opacity: 0;
    cursor: pointer;
    border: 2px solid var(--input-border-color);
  }
  .max-file-size {
    color: grey;
    font-size: 0.8rem;
  }
`;
export const UploadVideoFile = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
  align-items: flex-start;
  justify-content: center;
  div {
    border: 1px solid grey;
    border-radius: 0.5rem;
    padding: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    @media (min-width: 768px) {
      width: 35%;
    }
  }

  .stock-shop-page-upload-icon {
    height: 4rem;
    margin-bottom: 0.5rem;
  }
  .stock-shop-page-upload-photo-label {
    display: block;
  }
  .stock-shop-page-upload-photo-input {
    display: block;
    margin-top: 2rem;
    width: 90%;
    position: absolute;
    height: 90%;
    margin: auto;
    opacity: 0;
    cursor: pointer;
    border: 2px solid var(--input-border-color);
  }
  .max-file-size {
    color: grey;
    font-size: 0.8rem;
  }
`;

export const UploadedImagesPreview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-basis: 65%;
  }
  div {
    flex-basis: 30%;
    img {
      width: 100%;
      min-height: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
`;
