import styled from "styled-components";

//This is the whole container for the upload section, consisting of the icon and the tips
export const Upload = styled.div`
  width: 70rem;
  height: 40vh;
  padding: 2.5rem !important;
  display: flex;
  gap: 5rem;
  flex-direction: column;
  overflow: hidden;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  border: 1px solid grey;
  border-radius: 1rem;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 3rem;
`;

export const MultipleUploads = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 70%;
    width: 70%;
    min-height: 100%;
  }
`;
export const UploadInstructions = styled.div`
  @media (min-width: 768px) {
    min-width: 30%;
    max-width: 30%;
  }
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
  @media (min-width: 768px) {
    min-width: 29%;
    max-width: 29%;
    max-height: 100%;
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
      width: 30%;
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
  min-height: 100%;
  overflow: visible;
  @media (min-width: 768px) {
    flex-direction: row;
    min-width: 68%;
    max-width: 68%;
    div {
      flex-basis: 30%;
      min-width: 30%;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      max-width: 30%;
      padding: 1rem;
      height: 100%;
      cursor: pointer;
      border: 1px solid grey;
      img {
        width: 100%;
        height: 100%;
        oveflow: hidden;
        object-fit: contain;
      }
    }
  }
`;
