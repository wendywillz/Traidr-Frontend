import FormStepComponentWrapper from "./FormStepComponentStyle";
import { FaCircle } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";
import {
  nameYourShopState,
  TellUsAboutYourShopFormDetails,
  ShopSecurityInterface,
} from "../../interfaces/shopInterfaces";
interface shopSecurityState {
  shopSecurity: ShopSecurityInterface;
}
interface tellUsAboutYourShopState {
  tellUsAboutYourShop: TellUsAboutYourShopFormDetails;
}

interface formStepperState {
  formStepper: {
    currentStepIndex: number;
  };
}

function FormStepComponent() {
  const currentStepIndex = useSelector(
    (state: formStepperState) => state.formStepper
  );

  const nameYourShop = useSelector(
    (state: nameYourShopState) => state.nameYourShop
  );
  const tellUsAboutYourShop = useSelector(
    (state: tellUsAboutYourShopState) => state.tellUsAboutYourShop
  );

  const shopSecurity = useSelector(
    (state: shopSecurityState) => state.shopSecurity
  );

  function returnNameYourShopLineColor() {
    if (nameYourShop.shopCategory) {
      return "base-line-orange";
    } else {
      return "base-line-grey";
    }
  }

  function returnTellUsAboutShopLineColor() {
    if (tellUsAboutYourShop.shopCountry) {
      return "base-line-orange";
    } else {
      return "base-line-grey";
    }
  }

  return (
    <FormStepComponentWrapper>
      <div className="form-step-component">
        <div className="form-step-and-line-wrapper first-wrapper">
          <hr className={`base-line ${returnNameYourShopLineColor()}`} />
          <div className="form-step form-step-start">
            {currentStepIndex.currentStepIndex === 0 ? (
              nameYourShop.shopCategory ? (
                <CiCircleCheck className="step-icon" />
              ) : (
                <FaCircle className="step-icon" />
              )
            ) : nameYourShop.shopCategory ? (
              <CiCircleCheck className="step-icon" />
            ) : (
              <FaCircle className="grey-color" />
            )}

            {/* && nameYourShop.shopCategory */}
            <p>Name Your Shop</p>
          </div>
        </div>
        <div className="form-step-and-line-wrapper second-wrapper">
          <hr className={`base-line2 ${returnTellUsAboutShopLineColor()}`} />

          <div className="form-step">
            {currentStepIndex.currentStepIndex === 1 ? (
              tellUsAboutYourShop.shopCountry ? (
                <CiCircleCheck className="step-icon" />
              ) : (
                <FaCircle className="step-icon" />
              )
            ) : tellUsAboutYourShop.shopCountry ? (
              <CiCircleCheck className="step-icon" />
            ) : (
              <FaCircle className="grey-color" />
            )}

            <p>About Your Shop</p>
          </div>
        </div>

        <div className="form-step-and-line-wrapper">
          <div className="form-step form-step-end">
            {currentStepIndex.currentStepIndex === 2 ? (
              shopSecurity.isChecked ? (
                <CiCircleCheck className="step-icon" />
              ) : (
                <FaCircle className="step-icon" />
              )
            ) : shopSecurity.isChecked ? (
              <CiCircleCheck className="step-icon" />
            ) : (
              <FaCircle className="grey-color" />
            )}

            <p>Shop Security</p>
          </div>
        </div>
      </div>
    </FormStepComponentWrapper>
  );
}

export default FormStepComponent;
