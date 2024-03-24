import { Link } from "react-router-dom";
import googleIcon from "../../../../assets/Google.png";
import { GoogleSignupStyle } from "./LoginPageComponent.tsx";
export default function GoogleSignup() {
  return (
    <GoogleSignupStyle as={Link} to={""} className="google-signup">
      <img src={googleIcon} /> Sign in with Google
    </GoogleSignupStyle>
  );
}
