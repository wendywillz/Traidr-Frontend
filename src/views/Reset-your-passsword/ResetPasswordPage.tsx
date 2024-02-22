import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import FormComponent from "../../components/Form/FormComponent";
import axiosInstance from "../../utils/axiosInstance";
import "./reset.css"
export default function ResetPasswordPage() {
  const navigate = useNavigate();

  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!userEmail || !password) {
      setError("All fields are required, try again");
      return;
    }

    try {
      const res = await axiosInstance.post("/users/login", {
        email: userEmail,
        password: password,
      });

      if (res && res.status === 200) {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          navigate(`/dashboard`);
        } else if (res.data.inValidPassword) {
          setError("Invalid password");
          setEmail("");
          setPassword("");
        } else if (res.data.userNotFoundError) {
          setError("User not found, invalid email");
          setEmail("");
          setPassword("");
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
        formTitle="Reset your password"
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
                />
              </fieldset>
              <fieldset className="reset-password-input-wrapper">
                <label htmlFor="password">Conirm Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
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
