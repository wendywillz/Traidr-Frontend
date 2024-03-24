import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import FormComponent from "../../../components/Form/FormComponent";
import axiosInstance from "../../../utils/axiosInstance";
import Loader from "../../../components/Loader/Loader";

export default function ResetPasswordPage() {
  const navigate = useNavigate();

  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmNewPassword(e.target.value);
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    if (!confirmNewPassword || !password) {
      setIsLoading(false);
      setPassword("");
      setConfirmNewPassword("");
      setError("All fields are required, try again");
      return;
    }
    if (confirmNewPassword === password) {
      setIsLoading(false);
      setPassword("");
      setConfirmNewPassword("");
      setError("Password do not match, try again");
      return;
    }

    try {
      const res = await axiosInstance.post("/users/login", {
        email: confirmNewPassword,
        password: password,
      });

      if (res && res.status === 200) {
        if (res.data.token) {
          setIsLoading(false);
          localStorage.setItem("token", res.data.token);
          setConfirmNewPassword("");
          setPassword("");
          navigate(`/dashboard`);
        } else if (res.data.inValidPassword) {
          setIsLoading(false);
          setError("Invalid password");
          setConfirmNewPassword("");
          setPassword("");
        } else if (res.data.userNotFoundError) {
          setIsLoading(false);
          setError("User not found, invalid email");
          setConfirmNewPassword("");
          setPassword("");
        }
      } else {
        setIsLoading(false);
        setConfirmNewPassword("");
        setPassword("");
        setError("Internal Server Error");
      }
    } catch (error) {
      setIsLoading(false);
      setConfirmNewPassword("");
      setPassword("");
      setError("Internal Server Error");
    }

    // redirect to a different page based on user type
  };
  return (
    <>
      <FormComponent
        button_text="Reset password"
        extraText="Go back to"
        linkText="Sign in"
        linkPath="/login"
        formTitle="Reset your password"
        isLoading={isloading}
        loaderComponent={<Loader />}
        children={{
          formElements: (
            <>
              {error && <div className="error-message">{error} </div>}

              <fieldset className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  placeholder="********"
                  onChange={handlePasswordChange}
                />
              </fieldset>
              <fieldset className="reset-password-input-wrapper">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  id="password"
                  value={confirmNewPassword}
                  onChange={handleConfirmPasswordChange}
                  placeholder="********"
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
