import { useState, FormEvent, ChangeEvent } from "react";
import FormComponent from "../../components/Form/FormComponent";
import axiosInstance from "../../utils/axiosInstance";

export default function ChangePasswordPage() {
  const [passwordInputs, setPasswordInputs] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [error, setError] = useState("");

  const handlepasswordInputsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordInputs({ ...passwordInputs, [name]: value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (
      !passwordInputs.currentPassword ||
      !passwordInputs.newPassword ||
      !passwordInputs.confirmNewPassword
    ) {
      setError("All fields are required, try again");
      return;
    }
    if (passwordInputs.newPassword !== passwordInputs.confirmNewPassword) {
      setError("Passwords do not match, try again");
      return;
    }

    try {
      const res = await axiosInstance.post(
        "/users/change-password",
        passwordInputs
      );

      if (res && res.status === 200) {
        if (res.data.noTokenError) {
          setError("Session expired, please login again.");
          setPasswordInputs({
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
          });
        } else if (res.data.userNotFoundError) {
          setError(res.data.userNotFoundError);
          setPasswordInputs({
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
          });
        } else if (res.data.invalidPasswordError) {
          setError(res.data.invalidPasswordError);
          setPasswordInputs({
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
          });
        } else if (res.data.passwordChangedSuccessfully) {
          setError(res.data.passwordChangedSuccessfully);
          setPasswordInputs({
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
          });
        }
      } else {
        setError("Internal Server Error");
        setPasswordInputs({
          currentPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        });
      }
    } catch (error) {
      setError("Internal Server Error");
      setPasswordInputs({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    }

    // redirect to a different page based on user type
  };
  return (
    <>
      <FormComponent
        button_text="Proceed"
        extraText="Go"
        linkText="back"
        linkPath="/dashboard"
        formTitle="Change Password"
        children={{
          formElements: (
            <>
              {error && <div className="error-message">{error} </div>}

              <fieldset className="input-wrapper">
                <label htmlFor="currentPassword">Current Password</label>
                <input
                  type="password"
                  id="currentPassword"
                  value={passwordInputs.currentPassword}
                  name="currentPassword"
                  placeholder="********"
                  onChange={handlepasswordInputsChange}
                />
              </fieldset>

              <fieldset className="input-wrapper">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  value={passwordInputs.newPassword}
                  name="newPassword"
                  placeholder="********"
                  onChange={handlepasswordInputsChange}
                />
              </fieldset>

              <fieldset className="input-wrapper change-password-input">
                <label htmlFor="confirmNewPassword">Confirm New Password</label>
                <input
                  type="password"
                  id="confirmNewPassword"
                  value={passwordInputs.confirmNewPassword}
                  name="confirmNewPassword"
                  placeholder="********"
                  onChange={handlepasswordInputsChange}
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
