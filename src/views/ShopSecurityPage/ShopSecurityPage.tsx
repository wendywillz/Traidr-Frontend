import "./ShopSecurityPage.css";

const ShopSecurityPage = () => {
  return (
    <>
      <div className="content">
        <h2 className="title-header">Keep your shop Safe</h2>
        <div className="content-paras">
          <p className="title-para">
            Running an online shop comes with certain risks - your account could
            be compromised or your products copied. That's why we provide tools
            to help keep your shop secure. Enable these optional security
            features for greater protection:
          </p>
          <p className="title-para2">
            - Two-factor authentication - Require an authentication code from
            your phone or email when logging in from a new device. Adds an extra
            layer of account security.
            <br />
            - Custom watermarking - Automatically add a semi-transparent
            watermark with your shop's logo to all product images. Makes it
            harder for others to copy your images.
            <br />- Shop insurance - Optional ShopProtect insurance starts at
            $9.99/month. Covers up to $20,000 in damages from account
            compromise, fraudulent orders, DMCA violations and more. The
            ultimate peace of mind.
          </p>
          <h5 className="bold-title">
            Please enable any or all of these optional features to better secure
            your online shop from harm. We take the safety of your shop
            seriously and are here to help in any way we can. Contact us at
            support@shopsite.com with any security questions or concerns.
          </h5>
        </div>
      </div>
    </>
  );
};

export default ShopSecurityPage;
