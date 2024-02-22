import "./FormComponentStyle.tsx";
import traidrLogo from "../../assets/traidr-logo-orange.png";
import { ReactNode } from "react";
import MainButton from "../button/mainButton.tsx";
import FormComponentStyle from "./FormComponentStyle.tsx";

interface formChildrenProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: { formElements: ReactNode };
  formTitle: string;
}
export default function FormComponent({
  children,
  handleSubmit,
  formTitle,
}: formChildrenProps) {
  const { formElements } = children;
  return (
    <FormComponentStyle className="form-component-main-body-wrapper">
      <div className="form-component-inner-body-wrapper">
        <div className="form-component-wrapper">
          <div className="form-component-logo-wrapper">
            <img src={traidrLogo} alt="" />
          </div>
          <p className="form-component-title">{formTitle}</p>
          <form className="form-component" onSubmit={handleSubmit}>
            {formElements}
            <MainButton button_text="LOG IN" />
          </form>
        </div>
      </div>
    </FormComponentStyle>
  );
}
