import FormStepComponentWrapper from "./FormStepComponentStyle";
import { FaCircle } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";
import {
  nameYourShopState,
  stockYourShopState,
  ShopSecurityInterface,
} from "../../interfaces/shopInterfaces";

interface shopSecurityState {
  shopSecurity: ShopSecurityInterface;
}
function FormStepComponent() {
  const nameYourShop = useSelector(
    (state: nameYourShopState) => state.nameYourShop
  );
  const stockYourShop = useSelector(
    (state: stockYourShopState) => state.stockYourShop
  );

  const shopSecurity = useSelector(
    (state: shopSecurityState) => state.shopSecurity
  );
  // const nameYourShop = localStorage.getItem("nameYourShop");
  // const stockYourShop = localStorage.getItem("listingDetails");
  //const howYouGetPaid = localStorage.getItem("howYouGetPaid");

  return (
    <FormStepComponentWrapper>
      <div className="form-step-component">
        <hr className="base-line" />
        <div className="form-step">
          {nameYourShop.shopName ? (
            <FaCircleCheck className="step-icon" />
          ) : (
            <FaCircle className="step-icon" />
          )}
          <p>Name Your Shop</p>
        </div>
        <div className="form-step">
          {stockYourShop.productDescription ? (
            <FaCircleCheck className="step-icon" />
          ) : (
            <FaCircle className="step-icon" />
          )}
          <p>Stock Your Shop</p>
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
          {shopSecurity.isChecked ? (
            <FaCircleCheck className="step-icon" />
          ) : (
            <FaCircle className="step-icon" />
          )}
          <p>Shop Security</p>
        </div>
      </div>
    </FormStepComponentWrapper>
  );
}

export default FormStepComponent;
