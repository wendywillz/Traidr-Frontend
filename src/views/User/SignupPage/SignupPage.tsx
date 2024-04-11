import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import FormComponent from "../../../components/Form/FormComponent";
import axiosInstance from "../../../utils/axiosInstance";
import orImage from "../../../assets/or.png";
import GoogleSignup from "./component/GoogleSignup";
import Loader from "../../../components/Loader/Loader";
export default function SignupPage() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aboutUs, setAboutUs] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const handleUserName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName((event.currentTarget as HTMLInputElement).value);
  };
  const handleUserEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail((event.currentTarget as HTMLInputElement).value);
  };
  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword((event.currentTarget as HTMLInputElement).value);
  };
  const handleAboutUs = (event: ChangeEvent<HTMLSelectElement>) => {
    setAboutUs((event.currentTarget as HTMLSelectElement).value);
  };
  const handleDateOfBirth = (event: ChangeEvent<HTMLInputElement>) => {
    setDateOfBirth((event.currentTarget as HTMLInputElement).value);
  };
  const handleGender = (event: ChangeEvent<HTMLSelectElement>) => {
    setGender((event.currentTarget as HTMLSelectElement).value);
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
      const res = await axiosInstance.post("/users/createUser", {
        name: userName,
        email: userEmail,
        password: password,
        hearAboutUs: aboutUs,
        dateOfBirth: dateOfBirth,
        gender: gender,
      });

      if (res && res.status === 200) {
        if (res.data.otpSentSuccessfully) {
          setIsLoading(false);
          setError("");
          setEmail("");
          setPassword("");
          localStorage.setItem("signupOTp", res.data.otpSentSuccessfully);
          navigate(`/otp-verification`);
        } else if (res.data.emailExistError) {
          setIsLoading(false);
          setError(res.data.emailExistError);
          setEmail("");
          setPassword("");
        } else if (res.data.unableToCreateUser) {
          setIsLoading(false);
          setError(res.data.unableToCreateUser);
          setEmail("");
          setPassword("");
        } else {
          setIsLoading(false);
          setError("Internal Server Error");
          setEmail("");
          setPassword("");
        }
      } else {
        setError("Internal Server Error");
      }
    } catch (error) {
      setEmail("");
      setPassword("");
      setError("Internal Server Error");
    }

    // redirect to a different page based on user type
  };
  return (
    <>
      <FormComponent
        button_text="SIGN UP"
        extraText="Already have an account?"
        linkText="Log in here"
        linkPath="/login"
        formTitle="Create an Account"
        isLoading={isloading}
        loaderComponent={<Loader />}
        children={{
          formElements: (
            <>
              {error && <div className="error-message">{error} </div>}
              <fieldset className="input-wrapper">
                <label htmlFor="name"> Name</label>
                <input
                  type="text"
                  id="name"
                  value={userName}
                  placeholder="Babalola"
                  onChange={handleUserName}
                  required
                />
              </fieldset>
              <fieldset className="input-wrapper">
                <label> Email Address</label>
                <input
                  type="text"
                  id="email"
                  value={userEmail}
                  placeholder="babalola@gmail.com"
                  onChange={handleUserEmail}
                  required
                />
              </fieldset>
              <fieldset className="input-wrapper">
                <label>Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  placeholder="********"
                  onChange={handlePassword}
                />
              </fieldset>
              <fieldset className="input-wrapper">
                <label>How did you hear about us</label>
                <select
                  className="how-did-you-hear"
                  value={aboutUs}
                  onChange={handleAboutUs}
                >
                  <option value="select">Select</option>
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="twitter">Twitter</option>
                </select>
              </fieldset>
              <fieldset className="input-wrapper">
                <label htmlFor="dateOfBirthInput">Date of Birth</label>
                <input
                  id="dateOfBirthInput"
                  name="dateOfBirth"
                  type="date"
                  placeholder=""
                  className="profile-seetings-form-input"
                  value={dateOfBirth}
                  onChange={handleDateOfBirth}
                />
              </fieldset>
              <fieldset className="input-wrapper">
                <label htmlFor="password">Gender</label>
                <select value={gender} onChange={handleGender}>
                  <option value="select">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
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
