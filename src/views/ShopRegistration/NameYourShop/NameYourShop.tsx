import Header from "../../../components/Header/Header";
import FormStepComponent from "../../../components/FormStepComponent/FormStepComponent";
import NameYourShopStyle from "./NameYourShopStyle";
function NameYourShopComponent() {
  return (
    <>
      <Header />
      <FormStepComponent />
      <NameYourShopStyle>
        <div className="shop-name-your-shop-inner">
          <h2>Shop Preferences</h2>
          <p>Let's get started Tell us more about your Shop.</p>
          <form>
            <fieldset>
              <label htmlFor="shopName">Name of Shop:</label>
              <input type="text" placeholder="Empress Ki" id="shopName" />
            </fieldset>
            <fieldset>
              <label htmlFor="shopCategory">Category:</label>
              <select name="category" id="shopCategory">
                <option value="" selected>
                  Select your shop category
                </option>
                <option value="shopCategory">Furniture</option>
                <option value="shopCategory">Electronics and Gadget</option>
              </select>
            </fieldset>
            <fieldset>
              <label htmlFor="shopCurrency">Currency:</label>
              <select name="shopCurrency" id="shopCurrency">
                <option value="NGN" selected>
                  NGN
                </option>
                <option value="Dollar">Dollar</option>
              </select>
            </fieldset>
          </form>
        </div>
      </NameYourShopStyle>
    </>
  );
}

export default NameYourShopComponent;
