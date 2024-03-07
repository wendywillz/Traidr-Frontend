import SuccessModalMainWrapper from "./successModalStyle";
import { Link } from "react-router-dom";
import icon from "./Icon.png";

 const SuccessModal = () => {

  return (
    <SuccessModalMainWrapper>

      <div className="modal">
        <div className="modal-content">
          <h4 className="modal-title">Items Successfully uploaded</h4>
          <div className="modal-icon">
            <img src= {icon} alt="send symobol">
            </img>
          </div>
          <p className="modal-message">{"Your items have been successfully added to your shop!!"}</p>
          <Link to = "/ " className="modal-button">Continue</Link>
        </div>
      
      
      </div>
    </SuccessModalMainWrapper>
  );
}

export default SuccessModal;