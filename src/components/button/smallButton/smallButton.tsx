import SmallButtonProps from "../../../interfaces/smallButtonInterface";
import SmallButtonStyle from "./smallButtonStyle";
export default function SmallButton({
  button_text,
  whiteBg,
  onClick,
  disabled,
}: SmallButtonProps) {
  return (
    <SmallButtonStyle
      type="submit"
      whiteBg={whiteBg}
      button_text={button_text}
      onClick={onClick}
      disabled={disabled}
    >
      {button_text}
    </SmallButtonStyle>
  );
}
