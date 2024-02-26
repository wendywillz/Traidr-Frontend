import FooterStyle from "./FooterStyle";
import traidrLogo from "../../assets/traidr-logo-orange.png";
import { Link } from "react-router-dom";
import mailIcon from "../../assets/mail.png";
import phoneIcon from "../../assets/mail.png";
import faxIcon from "../../assets/fax.png";
import locationIcon from "../../assets/location.png";
const Footer = () => {
  return (
    <FooterStyle>
      <div className="footer-inner">
        <img className="footer-logo" src={traidrLogo} alt="footer logo" />
        <p className="footer-text">
          We are a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat... Read More
        </p>

        <div className="footer-contact">
          <div className="footer-contact-item">
            <img className="footer-image" src={phoneIcon} alt="phone icon" />
            <div className="paragraph-text">
              <p>Tel</p>
              <p>310-437-2766</p>
            </div>
          </div>

          <div className="footer-contact-item">
            <img className="footer-image" src={mailIcon} alt="mail icon" />
            <div className="paragraph-text">
              <p>Mail</p>
              <p>unreal@outlook.com</p>
            </div>
          </div>

          <div className="footer-contact-item">
            <img
              className="footer-image"
              src={locationIcon}
              alt="location icon"
            />
            <div className="paragraph-text">
              <p>Address</p>
              <p>706 Campfire Ave. Meriden, CT 06450</p>
            </div>
          </div>

          <div className="footer-contact-item">
            <img className="footer-image" src={faxIcon} alt="fax icon" />
            <div className="paragraph-text">
              <p>Fax</p>
              <p>+1-000-0000</p>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-nav-inner ">
            <p>About</p>
            <Link to={""}>About us</Link>
            <Link to={""}>Blog</Link>
            <Link to={""}>Careers</Link>
            <Link to={""}>Jobs</Link>
            <Link to={""}>In Press</Link>
          </div>

          <div className="footer-nav-inner">
            <p>SupportLink</p>
            <Link to={""}>Contact us</Link>
            <Link to={""}>Online Chat</Link>
            <Link to={""}>WhatsApp</Link>
            <Link to={""}>Telegram</Link>
            <Link to={""}>Ticketing</Link>
          </div>

          <div className="footer-nav-inner">
            <p>FAQ</p>
            <Link to={""}>Account</Link>
            <Link to={""}>Manage Deliveries</Link>
            <Link to={""}>Orders</Link>
            <Link to={""}>Payments</Link>
            <Link to={""}>Returns</Link>
          </div>
        </div>
        <hr className="footer-horizontal-rule"></hr>

        <div className="footer-end">
          <div className="footer-nav-end">
            <Link to={""}>About Us</Link>
            <Link to={""}>Privacy Policy</Link>
            <Link to={""}>Contact</Link>
            <Link to={""}>Privacy Policy</Link>
            <Link to={""}>Sitemap</Link>
            <Link to={""}>Terms of Use</Link>
          </div>
          <div className="footer-last">© 2000-2024, All Rights Reserved</div>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
