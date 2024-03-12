import { ReactNode } from "react";

export default interface SmallButtonProps {
  button_text: string;
  whiteBg?: boolean;
  type: "submit" | "button" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  loaderComponent?: ReactNode;
}
