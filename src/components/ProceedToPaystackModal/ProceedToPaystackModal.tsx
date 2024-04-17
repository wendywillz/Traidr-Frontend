import { ProceedModalMainWrapper } from "./ProceedToPaystackModal.Styled";
import PaystackCheckout from "../../views/User/DeliveryDetail/PaystackCheckout";
import icon from "./Icon.png"
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";


interface MultipurposeModalProps{
    title: string;
    message: string;
    cancelButton?: boolean;
    saleTotal: number
    
}

const ProceedToPaystackModal = ({title, message, cancelButton, saleTotal}:MultipurposeModalProps ) => {

const userEmail = useSelector((state: RootState) => state.user.email);
const paystackPublicKey = `pk_test_7239e137271f8907ed6cb22348a801ae6dfbfaa9`

const[modalVisibility, setModalVisibility] = useState<boolean>(true)
// const [saleTotal, setSaleTotal] = useState<number>(0)

const closeModal = ()=>{
  setModalVisibility(false)
}





  return (
    <>
    { modalVisibility &&
    <ProceedModalMainWrapper>
      <div className="modal">
        <div className="modal-content">
          { cancelButton && <p className="modal-cancel-button" onClick={closeModal}>x</p>}
          <h4 className="modal-title">{title}</h4>
          <div className="modal-icon">
            <img src={icon} alt="send symobol" />
          </div>
          <p className="modal-message">
            {message}
          </p>
          <PaystackCheckout email={userEmail} amount={saleTotal*100} publicKey={paystackPublicKey}/>
        </div>
      </div>
    </ProceedModalMainWrapper>
}
    </>
  )
}

export default ProceedToPaystackModal

//{title, message, onClickAction}:MultipurposeModalProps 