import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <img className="logo" src="/Traidr.png" alt="footer logo" />
      <h2 className="text">
        We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat... Read More
      </h2>
      <div className="contact">
        <div className="contact-item">
          <img className="img" src="/phonr.png" />
          <div>
            <p className="footer-text">Tel</p>
            <p className="footer-text">310-437-2766</p>
          </div>
        </div>
        <div className="contact-item">
          <img className="img" src="/mail.png" />
          <div>
            <p className="footer-text">Mail</p>
            <p className="footer-text">unreal@outlook.com</p>
          </div>
        </div>
        <div className="contact-item">
          <img className="img" src="/location.png" />
          <div>
            <p className="footer-text">Address</p>
            <p className="footer-text">706 Campfire Ave. Meriden, CT 06450</p>
          </div>
        </div>
        <div className="contact-item">
          <img className="img" src="/Ifax.png" />
          <div>
            <p className="footer-text">Fax</p>
            <p className="footer-text">+1-000-0000</p>
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="nav-inner">
          <h3 className="footer-heading">About</h3>
          <h4 className="footer-heading">About us</h4>
          <h4 className="footer-heading">Blog</h4>
          <h4 className="footer-heading">Careers</h4>
          <h4 className="footer-heading">Jobs</h4>
          <h4 className="footer-heading">In Press</h4>
        </div>
        <div className="nav-inner">
          <h3 className="footer-heading">Support</h3>
          <h4 className="footer-heading">Contact Us</h4>
          <h4 className="footer-heading">Online Chat</h4>
          <h4 className="footer-heading">Whatsapp</h4>
          <h4 className="footer-heading">Telegram</h4>
          <h4 className="footer-heading">Ticketing</h4>
        </div>
        <div className="nav-inner">
          <h3 className="footer-heading">Fag</h3>
          <h4 className="footer-heading">Account</h4>
          <h4>Manage Deliveries</h4>
          <h4>Orders</h4>
          <h4>Payments</h4>
          <h4>Returns</h4>
        </div>
        <div className="nav-inner">
          <h3>About</h3>
          <h4>About us</h4>
          <h4>Blog</h4>
          <h4>Careers</h4>
          <h4>Jobs</h4>
          <h4>In Press</h4>
        </div>
        <div className="nav-inner">
          <h3>Support</h3>
          <h4>Contact Us</h4>
          <h4>Online Chat</h4>
          <h4>Whatsapp</h4>
          <h4>Telegram</h4>
          <h4>Ticketing</h4>
        </div>
        <div className="nav-inner">
          <h3>Fag</h3>
          <h4>Account</h4>
          <h4>Manage Deliveries</h4>
          <h4>Orders</h4>
          <h4>Payments</h4>
          <h4>Returns</h4>
        </div>
      </div>
      <hr></hr>
      <div className="footer">
        <div className="nav-end">
          <h5>About Us</h5>
          <h5>Contact</h5>
          <h5>Privacy Policy</h5>
          <h5>Sitemap</h5>
          <h5>Terms of Use</h5>
        </div>
        <div className="last">
          <img src="/prod.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
