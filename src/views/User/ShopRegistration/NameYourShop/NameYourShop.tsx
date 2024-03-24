import Header from "../../../../components/Header/Header";
import FormStepComponent from "../../../../components/FormStepComponent/FormStepComponent";
import NameYourShopStyle from "./NameYourShopStyle";
import SmallButton from "../../../../components/button/smallButton/smallButton";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { NameYourShopFormDetails } from "../../../../interfaces/shopInterfaces";
import { updatedNameYourShop } from "../../../../app/features/shopRegistration/nameYourShopSlice";
import { useDispatch } from "react-redux";
import { fetchProductsCategories } from "../../../../api/product";
import Loader from "../../../../components/Loader/Loader";
function NameYourShopComponent() {
  const [nameYourShop, setNameYourShop] = useState<NameYourShopFormDetails>({
    shopName: "",
    shopCategory: "",
    shopCurrency: "NGN",
    shopDescription: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  // checlng if the shop details is in the local storage
  useEffect(() => {
    const storedNameYourShop = JSON.parse(
      localStorage.getItem("nameYourShop")!
    );
    if (storedNameYourShop) {
      setNameYourShop(storedNameYourShop);
    }
  }, []);

  // fetching shop categories
  useEffect(() => {
    fetchProductsCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  function checkInput() {
    if (
      !nameYourShop.shopName ||
      !nameYourShop.shopCategory ||
      !nameYourShop.shopCurrency ||
      !nameYourShop.shopDescription
    ) {
      return true;
    }
    return false;
  }
  const dispatch = useDispatch();
  //const check = useSelector((state: nameYourShopState) => state.nameYourShop);
  const handleNameYourShopForm = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNameYourShop({ ...nameYourShop, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    localStorage.setItem("nameYourShop", JSON.stringify(nameYourShop));
    dispatch(updatedNameYourShop(nameYourShop));
    setIsLoading(false);
    //next();
    //console.log("checking", check);
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
              <div className="left-name-yourshop">
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
                    {categories.map((category: string) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                    {/* <option value="Furniture">Furniture</option>
                    <option value="Electronics and Gadget">
                      Electronics and Gadget
                    </option> */}
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
              <div className="right-name-your-shop">
                <fieldset>
                  <label htmlFor="">Shop Description</label>
                  <textarea
                    name="shopDescription"
                    id="shopDescription"
                    value={nameYourShop?.shopDescription}
                    onChange={handleNameYourShopForm}
                    placeholder="Tell us about your shop and what you sell."
                  ></textarea>
                </fieldset>
              </div>
            </div>
            <div className="submit-button-wrapper">
              <SmallButton button_text="Cancel" whiteBg={true} type="button" />
              <SmallButton
                button_text="Save and Continue"
                type="submit"
                disabled={checkInput()}
                isLoading={isLoading}
                loaderComponent={<Loader />}
              />
            </div>
          </form>
        </div>
      </NameYourShopStyle>
    </>
  );
}

export default NameYourShopComponent;
