import FormStepComponentWrapper from "./FormStepComponentStyle";
import { FaCircle } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";

function FormStepComponent() {
  // const nameYourShop = useSelector(
  //   (state: nameYourShopState) => state.nameYourShop
  // );
  const nameYourShop = localStorage.getItem("nameYourShop");
  const stockYourShop = localStorage.getItem("stockYourShop");
  //const howYouGetPaid = localStorage.getItem("howYouGetPaid");

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
        {/* <div className="form-step">
          {howYouGetPaid ? (
            <FaCircleCheck className="step-icon" />
          ) : (
            <FaCircle className="step-icon" />
          )}
          <p>How you'll get paid</p>
        </div> */}
        <div className="form-step">
          <FaCircle className="step-icon" />
          <p>Shop Security</p>
        </div>
      </div>
    </FormStepComponentWrapper>
  );
}

export default FormStepComponent;
