import "./mainButton.css";

interface MainButtonProps {
  button_text: string;
}
export default function MainButton({ button_text }: MainButtonProps) {
  return (
    <button type="submit" className="main-btn-component">
      {button_text}
    </button>
  );
}
