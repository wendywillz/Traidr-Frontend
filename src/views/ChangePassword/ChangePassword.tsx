import "./ChangePassword.css";

const ChangePassword = () => {
  return (
    <div className="all-content">
      <div className="container-password">
        <h2 className="Pass-word">Passwords</h2>
        <p className="change-p">
          Please enter your current password to change your password
        </p>
        <form className="form-case">
          <label className="label-case" htmlFor="current_password">
            Your current password
          </label>
          <input
            className="input-case"
            type="password"
            name="current_password"
            id="current_password"
            placeholder="Current password"
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
          />
          <span className="span-button">
            <button className="btn-1">Save Change</button>
            <button className="btn-2">Cancel</button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;


