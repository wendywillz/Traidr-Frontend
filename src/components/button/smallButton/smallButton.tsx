import SmallButtonProps from "../../../interfaces/smallButtonInterface";
import SmallButtonStyle from "./smallButtonStyle";
export default function SmallButton({
  button_text,
  whiteBg,
  onClick,
}: SmallButtonProps) {
  return (
    <SmallButtonStyle
      type="submit"
      whiteBg={whiteBg}
      button_text={button_text}
      onClick={onClick}
    >
      {button_text}
    </SmallButtonStyle>
  );
}
