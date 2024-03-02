import { ReactElement, useState } from "react";

// each step is an array of reactElement
function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStep] = useState(0);

  function next() {
    setCurrentStep((currentStep) => {
      if (currentStep >= steps.length - 1) return currentStep;
      return currentStep + 1;
    });
  }
  function back() {
    setCurrentStep((currentStep) => {
      if (currentStep <= 0) return currentStep;
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
