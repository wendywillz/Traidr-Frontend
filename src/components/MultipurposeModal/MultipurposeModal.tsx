import { MultipurposeModalMainWrapper } from "./MultipurposeModal.Styled"
import icon from "./Icon.png"


interface MultipurposeModalProps{
    title: string;
    message: string;
    onClickAction: ()=>void;
}

const MultipurposeModal = ({title, message, onClickAction}:MultipurposeModalProps ) => {
  return (
    <MultipurposeModalMainWrapper>
      <div className="modal">
        <div className="modal-content">
          <h4 className="modal-title">{title}</h4>
          <div className="modal-icon">
            <img src={icon} alt="send symobol" />
          </div>
          <p className="modal-message">
            {message}
          </p>
          <p className="modal-button" onClick={onClickAction}>Continue</p>
        </div>
      </div>
    </MultipurposeModalMainWrapper>
  )
}

export default MultipurposeModal

//{title, message, onClickAction}:MultipurposeModalProps 