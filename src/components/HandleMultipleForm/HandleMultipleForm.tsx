import { ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentStepIndex } from "../../app/features/formStepper/formStepperSlice";
// each step is an array of reactElement
function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStep] = useState(0);
  const dispatch = useDispatch();
  function next() {
    setCurrentStep((currentStep) => {
      if (currentStep >= steps.length - 1) {
        dispatch(setCurrentStepIndex(currentStep));
        return currentStep;
      }
      dispatch(setCurrentStepIndex(currentStep + 1));
      return currentStep + 1;
    });
  }
  function back() {
    setCurrentStep((currentStep) => {
      if (currentStep <= 0) {
        dispatch(setCurrentStepIndex(currentStep));
        return currentStep;
      }
      dispatch(setCurrentStepIndex(currentStep - 1));
      return currentStep - 1;
    });
  }

  return {
    next,
    back,
    currentStep: steps[currentStepIndex],
    currentStepIndex,
  };
}

export default useMultiStepForm;
