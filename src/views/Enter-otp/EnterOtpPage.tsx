import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import FormComponent from "../../components/Form/FormComponent";
import axiosInstance from "../../utils/axiosInstance";

export default function EnterOtpPage() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!otp) {
      setError("All fields are required, try again");
      return;
    }

    try {
      const email = localStorage.getItem("signupOTp");
      console.log("email", email);
      const res = await axiosInstance.post("/users-otp/verify", {
        otp,
        email,
      });

      if (res && res.status === 200) {
        if (res.data.otpVerificationSuccessful) {
          navigate("/login");
        } else if (res.data.userNotFoundError) {
          setError(res.data.userNotFoundError);
          setOtp("");
        } else if (res.data.expiredOtpError) {
          setError("expired token");
          setOtp("");
        }
      } else {
        setError("Internal Server Error");
      }
    } catch (error) {
      setError("Internal Server Error");
    }

    // redirect to a different page based on user type
  };
  return (
    <>
      <FormComponent
        button_text="Send reset instructions"
        extraText="Go back to"
        linkText="Sign in"
        linkPath="/login"
        formTitle="Reset your otp"
        children={{
          formElements: (
            <>
              {error && <div className="error-message">{error} </div>}

              <fieldset className="input-wrapper">
                <label htmlFor="otp">Otp</label>
                <input
                  type="otp"
                  id="otp"
                  value={otp}
                  placeholder="********"
                  onChange={(e) => setOtp(e.target.value)}
                />
              </fieldset>
            </>
          ),
        }}
        handleSubmit={handleSubmit}
      ></FormComponent>
    </>
  );
}
