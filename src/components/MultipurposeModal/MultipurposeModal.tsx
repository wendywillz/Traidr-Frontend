import { MultipurposeModalMainWrapper } from "./MultipurposeModal.Styled"
import icon from "./Icon.png"
import { useState } from "react";


interface MultipurposeModalProps{
    title: string;
    message: string;
    cancelButton?: boolean
    onClickAction: ()=>void;
}

const MultipurposeModal = ({title, message, cancelButton, onClickAction}:MultipurposeModalProps ) => {


const[modalVisibility, setModalVisibility] = useState<boolean>(true)

const closeModal = ()=>{
  setModalVisibility(false)
}


  return (
    <>
    { modalVisibility &&
    <MultipurposeModalMainWrapper>
      <div className="modal">
        <div className="modal-content">
          { cancelButton && <p className="modal-cancel-button" onClick={closeModal}>X</p>}
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
}
    </>
  )
}

export default MultipurposeModal

//{title, message, onClickAction}:MultipurposeModalProps 