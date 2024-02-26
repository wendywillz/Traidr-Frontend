import FooterStyle from "./FooterStyle";
import traidrLogo from "../../assets/traidr-logo-orange.png";
const Footer = () => {
  return (
    <FooterStyle>
      <div className="footer-inneer">
        <img className="footer-logo" src={traidrLogo} alt="footer logo" />
        <p className="footer-text">
          We are a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat... Read More
        </p>

        <div className="footer-contact">
          <div className="footer-contact-item">
            <img className="footer-image" src="/phonr.png" alt="phone icon" />
            <div className="paragraph-text">
              <p>Tel</p>
              <p>310-437-2766</p>
            </div>
          </div>

          <div className="footer-contact-item">
            <img className="footer-image" src="/mail.png" alt="mail icon" />
            <div className="paragraph-text">
              <p>Mail</p>
              <p>unreal@outlook.com</p>
            </div>
          </div>

          <div className="footer-contact-item">
            <img
              className="footer-image"
              src="/location.png"
              alt="location icon"
            />
            <div className="paragraph-text">
              <p>Address</p>
              <p>706 Campfire Ave. Meriden, CT 06450</p>
            </div>
          </div>

          <div className="footer-contact-item">
            <img className="footer-image" src="/Ifax.png" alt="fax icon" />
            <div className="paragraph-text">
              <p>Fax</p>
              <p>+1-000-0000</p>
            </div>
          </div>
        </div>

        <div className="footer-nav">
          <div className="footer-nav-inner">
            <h3>About</h3>
            <h4>About us</h4>
            <h4>Blog</h4>
            <h4>Careers</h4>
            <h4>Jobs</h4>
            <h4>In Press</h4>
          </div>

          <div className="footer-nav-inner">
            <h3>Support</h3>
            <h4>Contact us</h4>
            <h4>Online Chat</h4>
            <h4>WhatsApp</h4>
            <h4>Telegram</h4>
            <h4>Ticketing</h4>
          </div>

          <div className="footer-nav-inner">
            <h3>FAQ</h3>
            <h4>Account</h4>
            <h4>Manage Deliveries</h4>
            <h4>Orders</h4>
            <h4>Payments</h4>
            <h4>Returns</h4>
          </div>

          <div className="footer-nav-inner">
            <h3 className="footer-orange-heading">About</h3>
            <h4>About Us</h4>
            <h4>Blog</h4>
            <h4>Careers</h4>
            <h4>Jobs</h4>
            <h4>In Press</h4>
          </div>

          <div className="footer-nav-inner">
            <h3 className="footer-orange-heading">Support</h3>
            <h4>Contact Us</h4>
            <h4>Online Chat</h4>
            <h4>WhatsApp</h4>
            <h4>Telegram</h4>
            <h4>Ticketing</h4>
          </div>

          <div className="footer-nav-inner">
            <h3 className="footer-orange-heading">Account</h3>
            <h4>Manage Deliveries</h4>
            <h4>Orders</h4>
            <h4>Payment</h4>
            <h4>Returns</h4>
          </div>

          <hr className="footer-horizontal-rule"></hr>

          <div className="footer-end">
            <div className="footer-nav-end">
              <h5 className="footer-nav-last-end">About Us</h5>
              <h5>Contact</h5>
              <h5>Privacy Policy</h5>
              <h5>Sitemap</h5>
              <h5>Terms of Use</h5>
            </div>
            <div className="footer-last">
              <img src="/prod.png" alt="product icon" />
            </div>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
