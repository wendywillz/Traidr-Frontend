import Header from "../../../../components/Header/Header";
import FormStepComponent from "../../../../components/FormStepComponent/FormStepComponent";
import TellUsAboutYourShop from "./TellUsAboutYourShopStyle";
import SmallButton from "../../../../components/button/smallButton/smallButton";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { TellUsAboutYourShopFormDetails } from "../../../../interfaces/shopInterfaces";
import { updateTellUsAboutYourShop } from "../../../../app/features/shopRegistration/tellUsAboutYourShopSlice";
import { useDispatch } from "react-redux";
// import useMultiStepForm from "../../../components/HandleMultipleForm/HandleMultipleForm";
// import NameYourShopComponent from "../NameYourShop/NameYourShop";
// import ShopSecurityPage from "../ShopSecurityPage/ShopSecurityPage";

function TellUsAboutYourShopComponent() {
  // const steps = [
  //   <NameYourShopComponent />,
  //   <TellUsAboutYourShopComponent />,
  //   <ShopSecurityPage />,
  // ];
  //const { next } = useMultiStepForm(steps);
  const [tellUsAboutYourShop, SetTellUsAboutYourShop] =
    useState<TellUsAboutYourShopFormDetails>({
      shopCountry: "",
      shopStreetAddress: "",
      shopCity: "",
      shopState: "",
      shopZipCode: "",
    });
  useEffect(() => {
    const storedTellUsAboutYourShop = JSON.parse(
      localStorage.getItem("tellUsAboutYourShop")!
    );
    if (storedTellUsAboutYourShop) {
      SetTellUsAboutYourShop(storedTellUsAboutYourShop);
    }
  }, []);
  function checkInput() {
    if (
      !tellUsAboutYourShop.shopCountry ||
      !tellUsAboutYourShop.shopStreetAddress ||
      !tellUsAboutYourShop.shopCity ||
      !tellUsAboutYourShop.shopState ||
      !tellUsAboutYourShop.shopZipCode
    ) {
      return true;
    }
    return false;
  }

  const dispatch = useDispatch();
  //const check = useSelector((state: nameYourShopState) => state.nameYourShop);
  const handleTellUsAboutYourShop = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    SetTellUsAboutYourShop({ ...tellUsAboutYourShop, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem(
      "tellUsAboutYourShop",
      JSON.stringify(tellUsAboutYourShop)
    );
    dispatch(updateTellUsAboutYourShop(tellUsAboutYourShop));
    //next();
  };
  return (
    <>
      <Header />
      <FormStepComponent />

      <TellUsAboutYourShop onSubmit={handleSubmit}>
        <div className="inner-form-wrapper">
          <div className="inner-form-wrapper-heading">
            <h4>Tell us more about your business</h4>
            <p>Tell the world about your item and why they'll love it.</p>
          </div>
          <div className="inner-form-detail-wrapper">
            <div className="legal-business-adress-wrapper">
              <p className="legal-business">Legal business address</p>
              <p className="legal-business-description">
                Tell the world about your item and why they'll love it.
              </p>
            </div>
            <div className="form-detail-wrapper">
              <fieldset>
                <label htmlFor="shopCountry">Country:</label>
                <input
                  type="text"
                  name="shopCountry"
                  value={tellUsAboutYourShop?.shopCountry}
                  onChange={handleTellUsAboutYourShop}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="shopStreetAddress">Street Address:</label>
                <input
                  type="text"
                  name="shopStreetAddress"
                  value={tellUsAboutYourShop?.shopStreetAddress}
                  onChange={handleTellUsAboutYourShop}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="shopState">State:</label>
                <input
                  type="text"
                  name="shopState"
                  value={tellUsAboutYourShop?.shopState}
                  onChange={handleTellUsAboutYourShop}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="shopCity">City:</label>
                <input
                  type="text"
                  name="shopCity"
                  value={tellUsAboutYourShop?.shopCity}
                  onChange={handleTellUsAboutYourShop}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="shopZipCode">Zip Code:</label>
                <input
                  type="text"
                  name="shopZipCode"
                  value={tellUsAboutYourShop?.shopZipCode}
                  onChange={handleTellUsAboutYourShop}
                />
              </fieldset>
            </div>
          </div>
        </div>
        <div className="submit-button-wrapper">
          <SmallButton button_text="Cancel" whiteBg={true} type="button" />
          <SmallButton
            button_text="Save and Continue"
            type="submit"
            disabled={checkInput()}
          />
        </div>
      </TellUsAboutYourShop>
    </>
  );
}

export default TellUsAboutYourShopComponent;
