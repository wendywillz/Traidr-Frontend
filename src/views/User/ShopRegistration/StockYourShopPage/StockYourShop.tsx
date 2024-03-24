/* eslint-disable react-hooks/exhaustive-deps */
//Style imports

import {
  Upload,
  UploadInstructions,
  UploadFile,
  MultipleUploads,
  UploadedImagesPreview,
  UploadVideoFile,
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
import Header from "../../../../components/Header/Header";
import {
  ErrorMessage,
  CategorySelectStyle,
  UploadedPhotoName,
} from "./stockShopStyle";
//Media imports
import photoIcon from "../../../../assets/stock_shop_page_assets/upload_pic_icon.png";
import videoIcon from "../../../../assets/stock_shop_page_assets/upload_video_icon.png";
import SmallButton from "../../../../components/button/smallButton/smallButton";
//package imports
import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { ListingDetails } from "../../../../interfaces/shopInterfaces";
import { useParams } from "react-router-dom";
import SuccessModal from "../../../../components/SuccessModal/SuccessModalComponent";
import axiosInstance from "../../../../utils/axiosInstance";
import { fetchProductsCategories } from "../../../../api/product";
import Loader from "../../../../components/Loader/Loader";


const StockYourShop = () => {
  //////////////////////////////////////////////////////////////////////////////////////////////////
  const { shopId } = useParams();

  //const navigate = useNavigate();
  //Logic for handling the photo upload
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [listingDetails, setListingDetails] = useState<ListingDetails>({
    productTitle: "",
    productPrice: 0,
    productCategory: "",
    productDescription: "",
  });
  const [photoFiles, setPhotoFiles] = useState<File[]>([]);
  const [photoDataURLs, setPhotoDataURLs] = useState<string[]>([]);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // checking if the listing details is in the local storage
  useEffect(() => {
    const storedListingDetails = localStorage.getItem("listingDetails")!;
    if (storedListingDetails) {
      setListingDetails(JSON.parse(storedListingDetails));
    }
  }, []);

  // checking uploaded photo in local storage
  useEffect(() => {
    const storedUploadedPhotoURL = localStorage.getItem(
      "displayUploadedPhotoName"
    )!;
    if (storedUploadedPhotoURL) {
      setPhotoDataURLs(JSON.parse(storedUploadedPhotoURL));
    }
  }, []);

  // fetching shop categories
  useEffect(() => {
    fetchProductsCategories().then((res) => {
      setCategories(res);
    });
  }, []);

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

  const handlePhotoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const files = Array.from(event.target.files);
    const maxSize = 3 * 1024 * 1024;

    const validFiles = files.filter((file) => {
      if (file.size > maxSize) {
        setErrorMessage("File size exceeds 3mb");
        return false;
      } else {
        setErrorMessage("");
        return true;
      }
    });

    setPhotoFiles((prevFiles) => [...prevFiles, ...validFiles]);

    // Read each file as a data URL and update the state
    validFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoDataURLs((prevURLs) => [...prevURLs, reader.result as string]);
      };

      reader.readAsDataURL(file);
    });
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //Logic for handling the Video upload
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [displayUploadedVideoName, setDisplayUploadedVideoName] =
    useState<string>();
  const [videoDisplayError, setVideoDisplayError] = useState<string>();

  // checking if the displayUploadedVideoName is in the local storage
  useEffect(() => {
    const storedUploadedVideoName = localStorage.getItem(
      "displayUploadedVideoName"
    );
    if (storedUploadedVideoName) {
      setDisplayUploadedVideoName(JSON.parse(storedUploadedVideoName));
    }
  }, []);

  const handleVideoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const uploadedVideo = event.target.files[0];
    const maxSize = 10 * 1024 * 1024;
    if (uploadedVideo.size > maxSize) {
      setVideoDisplayError("File size exceeds 10mb");
      return;
    } else {
      setVideoDisplayError("");
      setVideoFile(uploadedVideo);
      setDisplayUploadedVideoName(uploadedVideo.name);

      return;
    }
    // console.log(videoFile);
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //Logic for handling the listing Details

  /////////////////////////////////////////////////////////////////////////////////
  //submitting the whole form
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      ///////////////////////////
      //Data from the photo upload
      setIsLoading(true);
      const listingDetailsData = new FormData();
      if (!photoFiles) {
        setIsLoading(false);
        setErrorMessage("Please upload a photo of your product");
        return;
      }
      photoFiles.forEach((file) => {
        // Use the same key for all files to send them as an array
        listingDetailsData.append("productPhoto", file);
      });

      ///////////////////////////
      //Data from the videoupload
      if (videoFile)
        listingDetailsData.append("productVideo", videoFile as Blob);

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

      localStorage.setItem(
        "displayUploadedVideoName",
        JSON.stringify(videoFile?.name)
      );
      // setting the listing details in the local storage

      localStorage.setItem("listingDetails", JSON.stringify(listingDetails));
      localStorage.setItem(
        "displayUploadedPhotoName",
        JSON.stringify(photoDataURLs)
      );
      const res = await axiosInstance.post(
        `/products/add-product/${shopId}`,
        listingDetailsData
      );
      if (res && res.data.productAdded) {
        setIsLoading(false);
        localStorage.removeItem("listingDetails");
        localStorage.removeItem("displayUploadedPhotoName");
        localStorage.removeItem("displayUploadedVideoName");
        setDisplayPopup(true);
        //navigate(`/dashboard/shop-profile/${shopId}`);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("product error", error);
    }

    //localStorage.setItem("stockYourShop", JSON.stringify(listingDetailsData));
  };

  return (
    <>
      <Header />
      <SuccessModal isOpen={displayPopup} shopId={shopId} />
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
              <MultipleUploads>
                {photoDataURLs.length < 3 && (
                  <UploadFile>
                    {/*This whole div would have a visible border */}
                    <img
                      src={photoIcon}
                      className="stock-shop-page-upload-icon"
                    />
                    <span className="stock-shop-page-upload-photo-label">
                      Click to add a Photo
                    </span>
                    <span className="max-file-size">
                      (Maximum file size: 3mb)
                    </span>
                    <input
                      className="stock-shop-page-upload-photo-input"
                      type="file"
                      accept="image/*"
                      id="photoInput"
                      name="photo"
                      onChange={handlePhotoUpload}
                      required
                    />

                    {errorMessage && (
                      <ErrorMessage>{errorMessage}</ErrorMessage>
                    )}
                  </UploadFile>
                )}

                <UploadedImagesPreview>
                  {photoDataURLs &&
                    photoDataURLs.map((dataURL, index) => (
                      <div key={index}>
                        <img src={dataURL} alt={`Uploaded photo ${index}`} />
                      </div>
                    ))}
                </UploadedImagesPreview>
              </MultipleUploads>
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

              <UploadVideoFile>
                {/*This whole div would have a visible border */}
                <div>
                  <img
                    src={videoIcon}
                    className="stock-shop-page-upload-icon"
                  />
                  <span className="stock-shop-page-upload-photo-label">
                    Click to add a Video
                  </span>
                  <input
                    className="stock-shop-page-upload-photo-input"
                    type="file"
                    accept="video/*"
                    id="videoInput"
                    name="video"
                    onChange={handleVideoUpload}
                  />

                  <span className="max-file-size">
                    (Maximum file size: 10mb)
                  </span>
                  {displayUploadedVideoName && (
                    <UploadedPhotoName>
                      {displayUploadedVideoName}
                    </UploadedPhotoName>
                  )}
                  {videoDisplayError && (
                    <ErrorMessage>{videoDisplayError}</ErrorMessage>
                  )}
                </div>
              </UploadVideoFile>
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
                    required
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
                    required
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
                  <CategorySelectStyle
                    name="productCategory"
                    value={listingDetails.productCategory}
                    onChange={handleListingDetails}
                    required
                  >
                    <option value={""} selected>
                      Select your category
                    </option>
                    {categories.map((category: string) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </CategorySelectStyle>
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
                    required
                    value={listingDetails.productDescription}
                  >
                    {" "}
                  </textarea>
                </div>
              </ListingDetailsForm>
            </FormContainer>
            <div className="submit-button-wrapper">
              <SmallButton button_text="Cancel" whiteBg={true} type="button" />
              <SmallButton
                button_text="Save and Continue"
                type="submit"
                isLoading={isLoading}
                loaderComponent={<Loader />}
              />
            </div>
          </StockShopMainForm>
        </div>
      </StockShopMain>
    </>
  );
};

export default StockYourShop;
