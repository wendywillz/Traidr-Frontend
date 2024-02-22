import "./ChangePassword.css";

const ChangePassword = () => {
  return (
    <div className="all-content">
      <div className="container">
        <h2 className="Pass-word">Passwords</h2>
        <p className="change-p">
          Please enter your current password to change your password
        </p>
        <form>
          <label htmlFor="current_password">Your current password</label>
          <input
            type="password"
            name="current_password"
            id="current_password"
            placeholder="Current password"
          />
          <label htmlFor="new_password">New password</label>
          <input
            type="password"
            name="new_password"
            id="new_password"
            placeholder="New password"
          />
          <label htmlFor="confirm_password">Re-enter your new password</label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm password"
          />
          <span>
            <button className="btn-1">Save Change</button>
            <button className="btn-2">Cancel</button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
