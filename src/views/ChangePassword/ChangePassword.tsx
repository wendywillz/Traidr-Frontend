import { useState } from "react";
import "./ChangePassword.css";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    if (name === "current_password") setCurrentPassword(value);
    if (name === "new_password") setNewPassword(value);
    if (name === "confirm_password") setConfirmPassword(value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorMessage("New passwords do not match");
      return;
    }

    try {
      const response = await fetch("/api/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        // Password changed successfully
        console.log(data.message);
      } else {
        setErrorMessage(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Something went wrong");
    }
  };

  return (
    <div className="all-content">
      <div className="container-password">
        <h2 className="Pass-word">Passwords</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p className="change-p">
          Please enter your current password to change your password
        </p>
        <form className="form-case" onSubmit={handleSubmit}>
          <label className="label-case" htmlFor="current_password">
            Your current password
          </label>
          <input
            className="input-case"
            type="password"
            name="current_password"
            id="current_password"
            placeholder="Current password"
            value={currentPassword}
            onChange={handleChange}
          />
          <label className="label-case" htmlFor="new_password">
            New password
          </label>
          <input
            className="input-case"
            type="password"
            name="new_password"
            id="new_password"
            placeholder="New password"
            value={newPassword}
            onChange={handleChange}
          />
          <div className="form-text">
            Your new password must be 8-20 characters long.
          </div>
          <label className="label-case" htmlFor="confirm_password">
            Re-enter your new password
          </label>
          <input
            className="input-case"
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleChange}
          />
          <span className="span-button">
            <button type="submit" className="btn-1">
              Save Change
            </button>
            <button type="button" className="btn-2">
              Cancel
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
