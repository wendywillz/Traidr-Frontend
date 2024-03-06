import "./ShopSecurityPage.css";
import FormStepComponent from "../../../components/FormStepComponent/FormStepComponent";
import SmallButton from "../../../components/button/smallButton/smallButton";
import Header from "../../../components/Header/Header";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateTermsAndCondition,
  clearTermsAndCoditions,
} from "../../../app/features/shopRegistration/shopSecuritySlice";
import { clearNameYourShop } from "../../../app/features/shopRegistration/nameYourShopSlice";
import { clearTellUsAboutYourShop } from "../../../app/features/shopRegistration/tellUsAboutYourShopSlice";
import axiosInstance from "../../../utils/axiosInstance";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userDataInterface from "../../../interfaces/userInterface";
import { persistor } from "../../../app/store";
const ShopSecurityPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(
    (state: { user: userDataInterface }) => state.user
  );

  const [isChecked, setisChecked] = useState(false);
  useEffect(() => {
    const storedShopSecurity = JSON.parse(
      localStorage.getItem("shopSecurity")!
    );
    if (storedShopSecurity) {
      setisChecked(storedShopSecurity);
    }
  }, []);

  const handleisChecked = async (e: ChangeEvent<HTMLInputElement>) => {
    setisChecked(e.target.checked);
    localStorage.setItem("shopSecurity", JSON.stringify(e.target.checked));
    dispatch(updateTermsAndCondition({ isChecked: e.target.checked }));
  };

  const handleSubmitOpenYourShop = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const nameYourShop = JSON.parse(localStorage.getItem("nameYourShop")!);
      const tellUsAboutYourShop = JSON.parse(
        localStorage.getItem("tellUsAboutYourShop")!
      );
      const shopSecurity = JSON.parse(localStorage.getItem("shopSecurity")!);
      if (!nameYourShop || !tellUsAboutYourShop || !shopSecurity) {
        alert("Please complete all sections of the form");
      } else {
        console.log("done", userData);
        const res = await axiosInstance.post("/shop/create-shop", {
          ...nameYourShop,
          ...tellUsAboutYourShop,
          shopOwner: userData.userId,
        });
        if (res && res.data.shopCreated) {
          console.log("done");
          localStorage.removeItem("nameYourShop");
          localStorage.removeItem("tellUsAboutYourShop");
          localStorage.removeItem("shopSecurity");
          dispatch(clearNameYourShop());
          dispatch(clearTellUsAboutYourShop());
          dispatch(clearTermsAndCoditions());
          persistor.purge();
          navigate(`/dashboard/shop-profile/${res.data.shopId}`);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <Header />
      <FormStepComponent />
      <div className="shop-security-content">
        <form
          onSubmit={handleSubmitOpenYourShop}
          className="shop-security-content-inner"
        >
          <h4>Keep your shop safe</h4>
          <div className="content-paras">
            <p className="title-para">
              Running an online shop comes with certain risks - your account
              could be compromised or your products copied. That's why we
              provide tools to help keep your shop secure. Enable these optional
              security features for greater protection:
            </p>
            <p className="title-para2">
              - Two-factor authentication - Require an authentication code from
              your phone or email when logging in from a new device. Adds an
              extra layer of account security.
              <br />
              - Custom watermarking - Automatically add a semi-transparent
              watermark with your shop's logo to all product images. Makes it
              harder for others to copy your images.
              <br />- Shop insurance - Optional ShopProtect insurance starts at
              $9.99/month. Covers up to $20,000 in damages from account
              compromise, fraudulent orders, DMCA violations and more. The
              ultimate peace of mind.
            </p>
            <p className="bold-title">
              Please enable any or all of these optional features to better
              secure your online shop from harm. We take the safety of your shop
              seriously and are here to help in any way we can. Contact us at
              support@shopsite.com with any security questions or concerns.
            </p>
            <div className="terms-and-condition-wrapper">
              <input
                type="checkbox"
                id="terms-and-condition"
                checked={isChecked}
                onChange={handleisChecked}
                className="terms-and-condition-checkbox"
              />
              <label htmlFor="terms-and-condition">
                I have read and agree to the above terms and conditions.
              </label>
            </div>
            <div className="submit-button-wrapper reduced-margin">
              <SmallButton button_text="Cancel" whiteBg={true} type="button" />
              <SmallButton
                button_text="Open your Shop"
                type="submit"
                disabled={isChecked ? false : true}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ShopSecurityPage;
