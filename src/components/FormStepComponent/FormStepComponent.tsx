import FormStepComponentWrapper from "./FormStepComponentStyle";
import { FaCircle } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { useState } from "react";
import {
  NameYourShopProps,
  StockYourShopProps,
  HowYouWillGetPaidProps,
} from "../../interfaces/shopInterfaces";

function FormStepComponent() {
  const [nameYourShop, setNameYourShop] = useState<NameYourShopProps>();
  const [stockYourShop, setstockYourShop] = useState<StockYourShopProps>();
  const [howYouGetPaid, sethowYouGetPaid] = useState<HowYouWillGetPaidProps>();

  return (
    <FormStepComponentWrapper>
      <div className="form-step-component">
        <hr className="base-line" />
        <div className="form-step">
          {nameYourShop ? (
            <FaCircleCheck className="step-icon" />
          ) : (
            <FaCircle className="step-icon" />
          )}
          <p>Name Your Shop</p>
        </div>
        <div className="form-step">
          {stockYourShop ? (
            <FaCircleCheck className="step-icon" />
          ) : (
            <FaCircle className="step-icon" />
          )}
          <p>Stock Your Shop</p>
        </div>
        <div className="form-step">
          {howYouGetPaid ? (
            <FaCircleCheck className="step-icon" />
          ) : (
            <FaCircle className="step-icon" />
          )}
          <p>How you'll get paid</p>
        </div>
        <div className="form-step">
          <FaCircle className="step-icon" />
          <p>Shop Security</p>
        </div>
      </div>
    </FormStepComponentWrapper>
  );
}

export default FormStepComponent;
