import Header from "../../../components/Header/Header";
import FormStepComponent from "../../../components/FormStepComponent/FormStepComponent";
import NameYourShopStyle from "./NameYourShopStyle";
import SmallButton from "../../../components/button/smallButton/smallButton";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  NameYourShopFormDetails,
  nameYourShopState,
} from "../../../interfaces/shopInterfaces";
import { updatedNameYourShop } from "../../../app/features/shopRegistration/nameYourShopSlice";
import { useDispatch, useSelector } from "react-redux";

function NameYourShopComponent() {
  const [nameYourShop, setNameYourShop] = useState<NameYourShopFormDetails>({
    shopName: "",
    shopCategory: "",
    shopCurrency: "NGN",
  });

  useEffect(() => {
    const storedNameYourShop = JSON.parse(
      localStorage.getItem("nameYourShop")!
    );
    if (storedNameYourShop) {
      setNameYourShop(storedNameYourShop);
    }
  }, []);

  const dispatch = useDispatch();
  const check = useSelector((state: nameYourShopState) => state.nameYourShop);
  const handleNameYourShopForm = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNameYourShop({ ...nameYourShop, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("nameYourShop", JSON.stringify(nameYourShop));
    dispatch(updatedNameYourShop(nameYourShop));
    console.log("checking", check);
  };
  return (
    <>
      <Header />
      <FormStepComponent />
      <NameYourShopStyle>
        <div className="shop-name-your-shop-inner">
          <h2>Shop Preferences</h2>
          <p>Let's get started Tell us more about your Shop.</p>
          <form onSubmit={handleSubmit}>
            <div className="name-your-shop-form-inner">
              <fieldset>
                <label htmlFor="shopName">Name of Shop:</label>
                <input
                  type="text"
                  placeholder="Empress Ki"
                  id="shopName"
                  name="shopName"
                  value={nameYourShop?.shopName}
                  onChange={handleNameYourShopForm}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="shopCategory">Category:</label>
                <select
                  name="shopCategory"
                  id="shopCategory"
                  value={nameYourShop?.shopCategory}
                  onChange={handleNameYourShopForm}
                >
                  <option value="" selected>
                    Select your shop category
                  </option>
                  <option value="Furniture">Furniture</option>
                  <option value="Electronics and Gadget">
                    Electronics and Gadget
                  </option>
                </select>
              </fieldset>

              <fieldset>
                <label htmlFor="shopCurrency">Currency:</label>
                <select
                  name="shopCurrency"
                  id="shopCurrency"
                  value={nameYourShop?.shopCurrency}
                  onChange={handleNameYourShopForm}
                >
                  <option value={"NGN"} selected>
                    NGN
                  </option>
                  <option value="Dollar">Dollar</option>
                </select>
              </fieldset>
            </div>
            <div className="submit-button-wrapper">
              <SmallButton button_text="Cancel" whiteBg={true} type="button" />
              <SmallButton button_text="Save and Continue" type="submit" />
            </div>
          </form>
        </div>
      </NameYourShopStyle>
    </>
  );
}

export default NameYourShopComponent;
