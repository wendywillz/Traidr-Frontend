import FormStepComponentWrapper from "./FormStepComponentStyle";
import { FaCircle } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";
import {
  nameYourShopState,
  TellUsAboutYourShopFormDetails,
  ShopSecurityInterface,
} from "../../interfaces/shopInterfaces";
import useMultiStepForm from "../HandleMultipleForm/HandleMultipleForm";
import NameYourShopComponent from "../../views/ShopRegistration/NameYourShop/NameYourShop";
import TellUsAboutYourShopComponent from "../../views/ShopRegistration/TellUsAboutYourShop/TellUsAboutYourShop";
import ShopSecurityPage from "../../views/ShopRegistration/ShopSecurityPage/ShopSecurityPage";
interface shopSecurityState {
  shopSecurity: ShopSecurityInterface;
}
interface tellUsAboutYourShopState {
  tellUsAboutYourShop: TellUsAboutYourShopFormDetails;
}
function FormStepComponent() {
  const steps = [
    <NameYourShopComponent />,
    <TellUsAboutYourShopComponent />,
    <ShopSecurityPage />,
  ];
  const { currentStepIndex } = useMultiStepForm(steps);
  const nameYourShop = useSelector(
    (state: nameYourShopState) => state.nameYourShop
  );
  const tellUsAboutYourShop = useSelector(
    (state: tellUsAboutYourShopState) => state.tellUsAboutYourShop
  );

  const shopSecurity = useSelector(
    (state: shopSecurityState) => state.shopSecurity
  );
  // const nameYourShop = localStorage.getItem("nameYourShop");
  // const tellUsAboutYourShop = localStorage.getItem("listingDetails");
  //const howYouGetPaid = localStorage.getItem("howYouGetPaid");

  return (
    <FormStepComponentWrapper>
      <div className="form-step-component">
        <hr className="base-line" />
        <div className="form-step">
          {currentStepIndex === 0 && nameYourShop.shopCategory ? (
            <FaCircleCheck className="step-icon" />
          ) : (
            <FaCircle className="step-icon" />
          )}
          <p>Name Your Shop</p>
        </div>
        <div className="form-step">
          {currentStepIndex === 1 && tellUsAboutYourShop.shopCountry ? (
            <FaCircleCheck className="step-icon" />
          ) : currentStepIndex === 1 && !tellUsAboutYourShop.shopCountry ? (
            <FaCircle className="step-icon" />
          ) : (
            <FaCircle className="grey-color" />
          )}
          <p>About Your Shop</p>
        </div>
        {/* <div className="form-step">
          {howYouGetPaid ? (
            <FaCircleCheck className="step-icon" />
          ) : (
            <FaCircle className="step-icon" />
          )}
          <p>How you'll get paid</p>
        </div> */}
        <div className="form-step">
          {currentStepIndex === 2 && shopSecurity.isChecked ? (
            <FaCircleCheck className="step-icon" />
          ) : currentStepIndex === 2 && !shopSecurity.isChecked ? (
            <FaCircle className="step-icon" />
          ) : (
            <FaCircle className="grey-color" />
          )}
          <p>Shop Security</p>
        </div>
      </div>
    </FormStepComponentWrapper>
  );
}

export default FormStepComponent;
