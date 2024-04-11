import ConfirmationModalMainWrapperStyle from "./ConfirmationModalMainWrapperStyle";

interface ConfirmationModalMainWrapperProps {
  isOpen: boolean;
  modalText: string;
  handleDelete?: () => void;
  setIsOpen?: () => void;
}
const ConfirmationModalMainWrapper = ({
  isOpen,
  modalText,
  handleDelete,
  setIsOpen,
}: ConfirmationModalMainWrapperProps) => {
  if (!isOpen) return null;
  return (
    <ConfirmationModalMainWrapperStyle>
      <div className="modal">
        <div className="modal-content">
          <h4 className="modal-title">{modalText}</h4>
          <div
            style={{
              width: "80%",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              justifyContent: "space-between",
            }}
          >
            <button
              style={{
                backgroundColor: "var(--orange-color)",
                color: "#ffffff",
              }}
              className="modal-button"
              onClick={handleDelete}
            >
              Remove
            </button>
            <button
              style={{
                backgroundColor: "#ffffff",
                color: "var(--orange-color)",
                border: "1px solid var(--orange-color)",
              }}
              className="modal-button"
              onClick={setIsOpen}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </ConfirmationModalMainWrapperStyle>
  );
};

export default ConfirmationModalMainWrapper;
