import { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormComponent from "../../components/Form/FormComponent";
import axiosInstance from "../../utils/axiosInstance";
import orImage from "../../assets/or.png";
import GoogleSignup from "./component/GoogleSignup";
export default function LoginPage() {
  const navigate = useNavigate();
  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUserEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail((event.currentTarget as HTMLInputElement).value);
  };
  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword((event.currentTarget as HTMLInputElement).value);
  };

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
        if (res.data.successfulLogin) {
          localStorage.setItem("token", res.data.successfulLogin);

          navigate(`/`);
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
        button_text="LOG IN"
        extraText="Don't have an account yet?"
        linkText="Signup here"
        linkPath="/signup"
        formTitle="Welcome back to Traidr"
        children={{
          formElements: (
            <>
              {error && <div className="error-message">{error} </div>}
              <fieldset className="username-input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={userEmail}
                  placeholder="BabalolaYu@gmail.com"
                  onChange={handleUserEmail}
                />
              </fieldset>
              <fieldset className="password-input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  placeholder="********"
                  onChange={handlePassword}
                />
                <Link className="forgot-password" to={"/forgot-password"}>
                  Forgot Password
                </Link>
              </fieldset>
              <div className="or-wrapper">
                <img src={orImage} alt="" />
              </div>
              <GoogleSignup />
            </>
          ),
        }}
        handleSubmit={handleSubmit}
      ></FormComponent>
    </>
  );
}
