import SmallButtonProps from "../../../interfaces/smallButtonInterface";
import SmallButtonStyle from "./ViewMoreButton.styled";
export default function ViewMoreButton({
  button_text,
  whiteBg,
  onClick,
  disabled,
  isLoading,
  loaderComponent,
}: SmallButtonProps) {
  return (
    <SmallButtonStyle
      type="View More"
      whiteBg={whiteBg}
      button_text={button_text}
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? loaderComponent : button_text}
    </SmallButtonStyle>
  );
}
