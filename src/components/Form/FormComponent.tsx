import "./FormComponentStyle.tsx";
import traidrLogo from "../../assets/traidr-logo-orange.png";
import { ReactNode } from "react";
import MainButton from "../button/MainButton/mainButton.tsx";
import FormComponentStyle from "./FormComponentStyle.tsx";
import { Link } from "react-router-dom";

interface formChildrenProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: { formElements: ReactNode };
  formTitle: string;
  button_text: string;
  extraText?: string;
  linkText?: string;
  linkPath?: string;
  isLoading?: boolean;
  loaderComponent?: ReactNode;
}
export default function FormComponent({
  children,
  handleSubmit,
  formTitle,
  button_text,
  extraText,
  linkText,
  linkPath,
  isLoading,
  loaderComponent,
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
            <MainButton button_text={button_text} isLoading={isLoading} loaderComponent={loaderComponent} />
          </form>
          {extraText && (
            <p className="extra-text">
              {extraText}{" "}
              <Link className="link-to-text" to={linkPath ?? ""}>
                {linkText}
              </Link>
            </p>
          )}
        </div>
      </div>
    </FormComponentStyle>
  );
}
