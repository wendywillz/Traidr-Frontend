import tradirImage from "../../assets/traidr-logo-orange.png";
import "./OtpVerificationPage.css";

export default function OtpVerificationPage () {
 
    return (
        
        <div className="otp-page">
        <div>
            <img className="img-logo" src= {tradirImage} alt="traidr logo" />
        </div>
            <h1 className="firstheader">OTP Verification</h1>
            <p className="firstpara">Enter the OTP sent to your mobile number below 👇</p>
            <form action="/login" id="form">
        <div className="otp-input">
                <input type="text" maxLength={1} />
                <input type="text" maxLength={1} />
                <input type="text" maxLength={1} />
                <input type="text" maxLength={1} />
                </div>
        <div className="submit-btn">
            <button className="mainbutton" type="submit">Verify</button>
        </div>
                
            </form>

        </div>
    )
 };