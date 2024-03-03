//Style imports

import {
  Upload,
  UploadInstructions,
  UploadPhoto,
  UploadVideo,
} from "./StockShopPageStyles/Uploads.styled";
import {
  FormContainer,
  FormTitleAndDescription,
  ListingDetailsForm,
} from "./StockShopPageStyles/StockShopForms.styled";
import {
  StockShopMain,
  StockShopMainForm,
} from "./StockShopPageStyles/StockShop.styled";

//Component imports
import PageDescription from "./StockShopPageComponents/PageDescription";
import Header from "../../../components/Header/Header";
import FormStepComponent from "../../../components/FormStepComponent/FormStepComponent";
//Media imports
import photoIcon from "../../../assets/stock_shop_page_assets/upload_pic_icon.png";
import videoIcon from "../../../assets/stock_shop_page_assets/upload_video_icon.png";
import SmallButton from "../../../components/button/smallButton/smallButton";
//package imports
import { useState, FormEvent, useRef, ChangeEvent } from "react";
import axios from "axios";

interface ListingDetails {
  title: string;
  price: number;
  category: string;
  description: string;
}

const StockYourShop = () => {
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //Logic for handling the photo upload
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const handlePhotoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const uploadedPhoto = event.target.files[0];
    if (uploadedPhoto) setPhotoFile(uploadedPhoto);
    // console.log(photoFile);
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //Logic for handling the Video upload
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const handleVideoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const uploadedVideo = event.target.files[0];
    if (uploadedVideo) setVideoFile(uploadedVideo);
    // console.log(videoFile);
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //Logic for handling the listing Details
  const titleRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  // const descriptionRef = useRef<HTMLInputElement>(null)

  const listingDetails: ListingDetails = {
    title: "",
    price: 0,
    category: "",
    description: "",
  };

  /////////////////////////////////////////////////////////////////////////////////
  //submitting the whole form
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    ///////////////////////////
    //Data from the photo upload
    const photoUploadFormData = new FormData();
    photoUploadFormData.append("photo", photoFile as Blob);
    console.log(`PHOTO ADDED`);
    console.log(photoFile);

    ///////////////////////////
    //Data from the videoupload
    const videoUploadFormData = new FormData();
    videoUploadFormData.append("video", videoFile as Blob);
    console.log(`VIDEO ADDED`);
    console.log(videoFile);

    ///////////////////////////////////
    //data from the listing details form

    if (titleRef.current !== null)
      listingDetails.title = titleRef.current.value;

    if (priceRef.current !== null)
      listingDetails.price = parseInt(priceRef.current.value);

    if (categoryRef.current !== null)
      listingDetails.category = categoryRef.current.value;

    if (descriptionRef.current !== null)
      listingDetails.description = descriptionRef.current.value;
    console.log(`LISTING DETAILS ADDED`);
    console.log(listingDetails);
    const listingDetailsData = new FormData();
    listingDetailsData.append("title", listingDetails.title);
    listingDetailsData.append("price", listingDetails.price.toString());
    listingDetailsData.append("category", listingDetails.category);
    listingDetailsData.append("description", listingDetails.description);

    console.log(`CHECKING THE FORM DATA`);
    console.log(`PHOTO FORM DATA`);
    console.log(photoUploadFormData);
    console.log(`VIDEO FORM DATA`);
    console.log(videoUploadFormData);
    console.log(`LISTING DETAILS FORM DATA`);
    console.log(listingDetailsData);

    //////////////////////////
    //USING AXIOS TO POST

    //Uploading the photo
    try {
      await axios.post("/upload-photo", { data: photoUploadFormData });
      console.log(`Photo has been uploaded successfully`);
    } catch (error) {
      console.error(`Error uploading photo: ${error}`);
    }

    //Uploading the video
    try {
      await axios.post("/upload-video", { data: videoUploadFormData });
      console.log(`Video has been uploaded sucessfully`);
    } catch (error) {
      console.error(`Error uploading video: ${error}`);
    }

    //Submitting the Listing Details
    try {
      await axios.post("/listing-details", { data: listingDetailsData });
      console.log(`Listing Details have been sucessfully submitted`);
    } catch (error) {
      console.error(`Error submitting listting details: ${error}`);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //The cancel button
  //   const handleFormCancel = () => {
  //     const navigate = useNavigate();
  //     return navigate("/");
  //   };
  //////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Header />
      <FormStepComponent />
      <StockShopMain>
        <PageDescription />

        <StockShopMainForm onSubmit={handleSubmit}>
          <Upload>
            <UploadInstructions>
              <h3 className="stock-shop-page-upload-instructions-title">
                Photos
              </h3>
              <p className="stock-shop-page-upload-instructions-description">
                Add some Aesthetic Photos for your Shop
              </p>
              <p className="stock-shop-page-upload-instructions-tips">Tips:</p>
              <ul className="stock-shop-page-upload-instructions-tips-list">
                <li className="stock-shop-page-upload-instructions-tips-list-item">
                  Use natural light and no flash
                </li>
                <li className="stock-shop-page-upload-instructions-tips-list-item">
                  Include a common object for scale
                </li>
                <li className="stock-shop-page-upload-instructions-tips-list-item">
                  Show the item being held, worn or used
                </li>
                <li className="stock-shop-page-upload-instructions-tips-list-item">
                  Shoot against a clean simple background
                </li>
                <li className="stock-shop-page-upload-instructions-tips-list-item">
                  Add photots to your variations so buyers can see all their
                  options
                </li>
              </ul>
            </UploadInstructions>

            <UploadPhoto>
              {/*This whole div would have a visible border */}
              <img src={photoIcon} className="stock-shop-page-upload-icon" />
              <label
                className="stock-shop-page-upload-photo-label"
                htmlFor="photoInput"
              >
                Add a Photo
              </label>
              <input
                className="stock-shop-page-upload-photo-input"
                type="file"
                accept="image/*"
                id="photoInput"
                name="photo"
                onChange={handlePhotoUpload}
              />
            </UploadPhoto>
          </Upload>

          <Upload>
            <UploadInstructions>
              <h3 className="stock-shop-page-upload-instructions-title">
                Videos
              </h3>
              <p className="stock-shop-page-upload-instructions-description">
                Add some Aesthetic Videos for your Shop
              </p>
              <p className="stock-shop-page-upload-instructions-tips">Tips:</p>
              <ul className="stock-shop-page-upload-instructions-tips-list">
                <li className="stock-shop-page-upload-instructions-tips-list-item">
                  Film wearable items on a model or show a functional item being
                  used
                </li>
                <li className="stock-shop-page-upload-instructions-tips-list-item">
                  Adjust your settings to record high resolution videos - aim
                  for 1080p or higher
                </li>
                <li className="stock-shop-page-upload-instructions-tips-list-item">
                  Crop your video after you upload it to get the right
                  dimensions
                </li>
              </ul>
            </UploadInstructions>

            <UploadVideo>
              {/*This whole div would have a visible border */}
              <img src={videoIcon} className="stock-shop-page-upload-icon" />
              <label
                className="stock-shop-page-upload-video-label"
                htmlFor="videoInput"
              >
                Add a Video
              </label>
              <input
                className="stock-shop-page-upload-video-input"
                type="file"
                accept="video/*"
                id="videoInput"
                name="video"
                onChange={handleVideoUpload}
              />
              <p className="stock-shop-page-upload-max-file-size">
                Max file size: 100mb
              </p>
            </UploadVideo>
          </Upload>

          <FormContainer>
            <form>
              <FormTitleAndDescription>
                <h3 className="stock-shop-page-form-title">Listing Details</h3>
                <p className="stock-shop-page-form-description">
                  Tell the world about your item and why they'll love it
                </p>
              </FormTitleAndDescription>
              <ListingDetailsForm>
                <div className="stock-shop-page-listing-details-form-field">
                  <div className="stock-shop-label-title-and-description">
                    <label
                      className="stock-shop-page-listing-details-label"
                      htmlFor="titleInput"
                    >
                      Title*
                    </label>
                    <p className="stock-shop-page-listing-details-label-description">
                      Include keywords that buyers would use to search for your
                      item
                    </p>
                  </div>
                  <input
                    className="stock-shop-page-listing-details-input"
                    type="text"
                    id="titleInput"
                    name="title"
                    ref={titleRef}
                  />
                </div>

                <div className="stock-shop-page-listing-details-form-field">
                  <div className="stock-shop-label-title-and-description">
                    <label
                      className="stock-shop-page-listing-details-label"
                      htmlFor="priceInput"
                    >
                      Price*
                    </label>
                    <p className="stock-shop-page-listing-details-label-description">
                      Include how much your item costs
                    </p>
                  </div>
                  <input
                    className="stock-shop-page-listing-details-input"
                    type="number"
                    id="priceInput"
                    name="price"
                    ref={priceRef}
                  />
                </div>

                <div className="stock-shop-page-listing-details-form-field">
                  <div className="stock-shop-label-title-and-description">
                    <label
                      className="stock-shop-page-listing-details-label"
                      htmlFor="categoryInput"
                    >
                      Category*
                    </label>
                    <p className="stock-shop-page-listing-details-label-description">
                      Type a two- or three-word description of your item to get
                      category suggestions that will help more shoppers find it.{" "}
                    </p>
                  </div>
                  <input
                    className="stock-shop-page-listing-details-input"
                    type="text"
                    id="categoryInput"
                    name="category"
                    ref={categoryRef}
                  />
                </div>

                <div className="stock-shop-page-listing-details-form-field">
                  <div className="stock-shop-label-title-and-description">
                    <label
                      className="stock-shop-page-listing-details-label"
                      htmlFor="descriptionInput"
                    >
                      Description*
                    </label>
                    <p className="stock-shop-page-listing-details-label-description">
                      Start with a brief overview that describes your item’s
                      finest features. Shoppers will only see the first few
                      lines of your description at first, so make it count!{" "}
                      <br /> <br />
                      Not sure what else to say? Shoppers also like hearing
                      about your process, and the story behind this item.{" "}
                    </p>
                  </div>
                  <textarea
                    className="stock-shop-page-listing-details-textarea"
                    id="descriptionInput"
                    name="description"
                    ref={descriptionRef}
                  >
                    {" "}
                  </textarea>
                </div>
              </ListingDetailsForm>
              <div className="submit-button-wrapper">
                <SmallButton
                  button_text="Cancel"
                  whiteBg={true}
                  type="button"
                />
                <SmallButton button_text="Save and Continue" type="submit" />
              </div>
            </form>
          </FormContainer>
        </StockShopMainForm>
      </StockShopMain>
    </>
  );
};

export default StockYourShop;
