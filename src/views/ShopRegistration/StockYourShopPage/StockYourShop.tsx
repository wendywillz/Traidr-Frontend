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
import { ErrorMessage } from "./stockShopStyle";
//Media imports
import photoIcon from "../../../assets/stock_shop_page_assets/upload_pic_icon.png";
import videoIcon from "../../../assets/stock_shop_page_assets/upload_video_icon.png";
import SmallButton from "../../../components/button/smallButton/smallButton";
//package imports
import { useState, FormEvent, ChangeEvent } from "react";

interface ListingDetails {
  productTitle: string;
  productPrice: number;
  productCategory: string;
  productDescription: string;
}

const StockYourShop = () => {
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //Logic for handling the photo upload
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [listingDetails, setListingDetails] = useState<ListingDetails>({
    productTitle: "",
    productPrice: 0,
    productCategory: "",
    productDescription: "",
  });

  const handleListingDetails = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setListingDetails({
      ...listingDetails,
      [name]: value,
    });
  };
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const handlePhotoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const uploadedPhoto = event.target.files[0];
    const maxSize = 3 * 1024 * 1024;
    if (uploadedPhoto.size > maxSize) {
      setErrorMessage("File size exceeds 3mb");
      return;
    } else {
      setPhotoFile(uploadedPhoto);
      console.log("photo", photoFile);
      return;
    }
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

  /////////////////////////////////////////////////////////////////////////////////
  //submitting the whole form
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    ///////////////////////////
    //Data from the photo upload
    const listingDetailsData = new FormData();
    listingDetailsData.append("photo", photoFile as Blob);

    ///////////////////////////
    //Data from the videoupload
    const videoUploadFormData = new FormData();
    videoUploadFormData.append("video", videoFile as Blob);

    listingDetailsData.append("productTitle", listingDetails.productTitle);
    listingDetailsData.append(
      "productPrice",
      listingDetails.productPrice.toString()
    );
    listingDetailsData.append(
      "productCategory",
      listingDetails.productCategory
    );
    listingDetailsData.append(
      "productDescription",
      listingDetails.productDescription
    );

    console.log("Listing Details Data", listingDetailsData);
  };

  return (
    <>
      <Header />
      <FormStepComponent />
      <StockShopMain>
        <div className="stock-your-shop-inner">
          {" "}
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
                <p className="stock-shop-page-upload-instructions-tips">
                  Tips:
                </p>
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
                <p className="stock-shop-page-upload-max-file-size">
                  Max file size: 3mb
                </p>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
                <p className="stock-shop-page-upload-instructions-tips">
                  Tips:
                </p>
                <ul className="stock-shop-page-upload-instructions-tips-list">
                  <li className="stock-shop-page-upload-instructions-tips-list-item">
                    Film wearable items on a model or show a functional item
                    being used
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
                    name="productTitle"
                    value={listingDetails.productTitle}
                    onChange={handleListingDetails}
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
                    name="productPrice"
                    value={listingDetails.productPrice}
                    onChange={handleListingDetails}
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
                  <select
                    name="productCategory"
                    value={listingDetails.productCategory}
                    onChange={handleListingDetails}
                  >
                    <option value={"furniture"}>Furniture</option>
                    <option value={"Electronics"}>Electronics</option>
                    <option value={"Home Appliances"}>Home Appliances</option>
                  </select>
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
                    name="productDescription"
                    onChange={handleListingDetails}
                  >
                    {" "}
                  </textarea>
                </div>
              </ListingDetailsForm>
            </FormContainer>
            <div className="submit-button-wrapper">
              <SmallButton button_text="Cancel" whiteBg={true} type="button" />
              <SmallButton button_text="Save and Continue" type="submit" />
            </div>
          </StockShopMainForm>
        </div>
      </StockShopMain>
    </>
  );
};

export default StockYourShop;
