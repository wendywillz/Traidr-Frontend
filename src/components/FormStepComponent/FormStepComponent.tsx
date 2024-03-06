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
// import useMultiStepForm from "../HandleMultipleForm/HandleMultipleForm";
// import NameYourShopComponent from "../../views/ShopRegistration/NameYourShop/NameYourShop";
// import TellUsAboutYourShopComponent from "../../views/ShopRegistration/TellUsAboutYourShop/TellUsAboutYourShop";
// import ShopSecurityPage from "../../views/ShopRegistration/ShopSecurityPage/ShopSecurityPage";
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
  // const steps = [
  //   <NameYourShopComponent />,
  //   <TellUsAboutYourShopComponent />,
  //   <ShopSecurityPage />,
  // ];

  // const { currentStepIndex } = useMultiStepForm(steps);
  // console.log("currentStep", currentStep);
  const currentStepIndex = useSelector(
    (state: formStepperState) => state.formStepper
  );
  //console.log("currentStepIndex", currentStepIndex);
  const nameYourShop = useSelector(
    (state: nameYourShopState) => state.nameYourShop
  );
  const tellUsAboutYourShop = useSelector(
    (state: tellUsAboutYourShopState) => state.tellUsAboutYourShop
  );

  const shopSecurity = useSelector(
    (state: shopSecurityState) => state.shopSecurity
  );

  // const [nameYourShop, setNameYourShop] = useState<NameYourShopFormDetails>({
  //   shopName: "",
  //   shopCategory: "",
  //   shopCurrency: "NGN",
  //   shopDescription: "",
  // });
  // useEffect(() => {
  //   const storedNameYourShop = JSON.parse(
  //     localStorage.getItem("nameYourShop")!
  //   );
  //   if (storedNameYourShop) {
  //     setNameYourShop(storedNameYourShop);
  //   }
  // }, []);

  // const [tellUsAboutYourShop, SetTellUsAboutYourShop] =
  //   useState<TellUsAboutYourShopFormDetails>({
  //     shopCountry: "",
  //     shopStreetAddress: "",
  //     shopCity: "",
  //     shopState: "",
  //     shopZipCode: "",
  //   });
  // useEffect(() => {
  //   const storedTellUsAboutYourShop = JSON.parse(
  //     localStorage.getItem("tellUsAboutYourShop")!
  //   );
  //   if (storedTellUsAboutYourShop) {
  //     SetTellUsAboutYourShop(storedTellUsAboutYourShop);
  //   }
  // }, []);

  // const [shopSecurity, setShopSecurity] = useState(false);
  // useEffect(() => {
  //   const storedShopSecurity = JSON.parse(
  //     localStorage.getItem("shopSecurity")!
  //   );
  //   if (storedShopSecurity) {
  //     setShopSecurity(storedShopSecurity);
  //   }
  // }, []);
  //const nameYourShop = JSON.parse(localStorage.getItem("nameYourShop")!);
  // const tellUsAboutYourShop = JSON.parse(
  //   localStorage.getItem("tellUsAboutYourShop")!
  // );
  //const shopSecurity = JSON.parse(localStorage.getItem("shopSecurity")!);

  //const howYouGetPaid = localStorage.getItem("howYouGetPaid");

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
            {/* {currentStepIndex.currentStepIndex === 2 && shopSecurity ? (
              <CiCircleCheck className="step-icon" />
            ) : currentStepIndex.currentStepIndex === 2 && !shopSecurity ? (
              <FaCircle className="step-icon" />
            ) : (
              <FaCircle className="grey-color" />
            )} */}
            <p>Shop Security</p>
          </div>
        </div>
      </div>
    </FormStepComponentWrapper>
  );
}

export default FormStepComponent;
