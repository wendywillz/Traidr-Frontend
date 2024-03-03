import NameYourShopComponent from "./NameYourShop/NameYourShop";
import StockYourShop from "./StockYourShopPage/StockYourShop";
import useMultiStepForm from "../../components/HandleMultipleForm/HandleMultipleForm";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { NextIcon, PrevIcon } from "./ShopRegistrationPageStyle";
import ShopSecurityPage from "./ShopSecurityPage/ShopSecurityPage";

export default function ShopRegistrationPage() {
  const steps = [
    <NameYourShopComponent />,
    <StockYourShop />,
    <ShopSecurityPage />,
  ];
  const { next, back, currentStep, currentStepIndex } = useMultiStepForm(steps);
  return (
    <>
      {currentStep}
      {currentStepIndex === 0 ? (
        <NextIcon>
          <FaAngleRight onClick={next} className="next-icon" />
        </NextIcon>
      ) : currentStepIndex >= steps.length - 1 ? (
        <PrevIcon>
          <FaAngleLeft onClick={back} className="prev-icon" />
        </PrevIcon>
      ) : (
        <>
          <NextIcon>
            <FaAngleRight onClick={next} className="next-icon" />
          </NextIcon>
          <PrevIcon>
            <FaAngleLeft onClick={back} className="prev-icon" />
          </PrevIcon>
        </>
      )}
    </>
  );
}
