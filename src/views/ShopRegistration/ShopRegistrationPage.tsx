import NameYourShopComponent from "./NameYourShop/NameYourShop";
import StockYourShop from "./StockYourShopPage/StockYourShop";
import useMultiStepForm from "../../components/HandleMultipleForm/HandleMultipleForm";
import SmallButton from "../../components/button/smallButton/smallButton";

export default function ShopRegistrationPage() {
  const steps = [<NameYourShopComponent />, <StockYourShop />];
  const { next, back, currentStep, currentStepIndex } = useMultiStepForm(steps);
  return (
    <>
      {currentStep}
      {currentStepIndex === 0 ? (
        <SmallButton button_text="Next" onClick={next} type="button" />
      ) : currentStepIndex >= steps.length - 1 ? (
        <SmallButton
          button_text="Go to previous"
          whiteBg={true}
          onClick={back}
          type="button"
        />
      ) : (
        <>
          <SmallButton button_text="Next" onClick={next} type="button" />
          <SmallButton
            button_text="Go to previous"
            whiteBg={true}
            onClick={back}
            type="button"
          />
        </>
      )}
    </>
  );
}
