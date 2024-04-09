import { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormComponent from "../../../components/Form/FormComponent";
import axiosInstance from "../../../utils/axiosInstance";
import orImage from "../../../assets/or.png";
import GoogleSignup from "./component/GoogleSignup";
import Loader from "../../../components/Loader/Loader";
import { useDispatch } from "react-redux";
import { login } from "../../../app/features/userAuth/userAuthSlice";
export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const handleUserEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail((event.currentTarget as HTMLInputElement).value);
  };
  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword((event.currentTarget as HTMLInputElement).value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    if (!userEmail || !password) {
      setIsLoading(false);
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
          setIsLoading(false);
          setEmail("");
          setPassword("");
          setError("");
          localStorage.setItem("token", res.data.successfulLogin.token);
          dispatch(login(res.data.successfulLogin));
          res.data.successfulLogin.isAdmin
            ? navigate(`/admin/dashboard`)
            : navigate(`/dashboard`);
        } else if (res.data.userNotFoundError) {
          setIsLoading(false);
          setError("User does not exist, kindly signup");
          setEmail("");
          setPassword("");
        } else if (res.data.inValidPassword) {
          setIsLoading(false);
          setError("Invalid credentials");
          setEmail("");
          setPassword("");
        } else {
          setIsLoading(false);
          setEmail("");
          setPassword("");
          setError("Internal Server Error");
        }
      } else {
        setIsLoading(false);
        setEmail("");
        setPassword("");
        setError("Internal Server Error");
      }
    } catch (error) {
      setIsLoading(false);
      setEmail("");
      setPassword("");
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
        isLoading={isloading}
        loaderComponent={<Loader />}
        children={{
          formElements: (
            <>
              {error && <div className="error-message">{error} </div>}
              <fieldset className="username-input-wrapper">
                <label htmlFor="username">Email</label>
                <input
                  type="email"
                  id="email"
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
                <Link className="forgot-password" to={"/reset-password"}>
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
