import Header from "../../components/Header/Header";
import landingPageImage from "../../assets/landing-page-right-image.png";
import landingPageImage2 from "../../assets/landing-page-right-image-2.png";
import tradirImage from "../../assets/traidr-logo-orange.png";
import vanImage from "../../assets/van-image.png";
import cartImage from "../../assets/cart-image.png";
import userImage from "../../assets/user-image.png";
import shopImage from "../../assets/shop-image.png";
import { LandingPageMainWrapper } from "./LandingPageStye";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { shopProductsInterface } from "../../interfaces/shopInterfaces";
import { fetchAllProducts } from "../../api/product";
import AllProductsCard from "../../components/ProductsCard/AllProductsCard";
import { AllProductsWrapper } from "../../components/ProductsCard/AllProductsStyle";
import dummyProducts from "../../assets/products/dummy.png";

export default function LandingPage() {
  const [products, setProducts] = useState<shopProductsInterface[]>();

  // fetching all products
  useEffect(() => {
    fetchAllProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <>
      <Header />
      {/* <PopUpMessageWrapper>
        <div className="icon-wrapper">
          <i className="fa-regular fa-circle-check success-icon"></i>
        </div>
        <div className="message-wrapper">
          <h2 className="success-message">Login Successful</h2>
          <p className="display-pop-up-message"></p>
        </div>
      </PopUpMessageWrapper> */}
      <LandingPageMainWrapper className="landing-page-main-body-wrapper">
        <div className="landing-page-inner-body-wrapper">
          <div className="landing-page-first-section-wrapper">
            <div className="landing-page-left-wrapper">
              <h1>
                Start <span>Trading</span> Today - Sign up and begin buying and
                selling
              </h1>
              <p>
                Never Pay Retail Again - Find great discounts on pre-owned
                items.Trade Your Way - Barter for goods and services on our
                platform.
              </p>
              <div className="input-search-wrapper">
                <input type="text" placeholder="I am looking for....." />
                <button type="submit">Search</button>
              </div>
            </div>
            <div className="landing-page-right-wrapper">
              <img src={landingPageImage} alt="traidr-buying-and-selling" />
            </div>
          </div>
          <div className="landing-page-second-section-wrapper">
            <div className="landing-page-second-section-left-wrapper">
              <h2>
                Why use{" "}
                <span>
                  <img src={tradirImage} alt="traidr-image" />
                </span>{" "}
                ?
              </h2>

              <div className="why-use-traidr-wrapper">
                <div className="each-why-use">
                  <div className="why-use-image-top">
                    <img src={vanImage} alt="van-image" />
                  </div>
                  <div className="why-use-text">
                    <p>
                      Find great discounts on pre-owned items.Trade Your Way-
                      Barter for goods and services on our platform.
                    </p>
                  </div>
                </div>
                <div className="each-why-use">
                  <div className="why-use-image-top">
                    <img src={cartImage} alt="cart-image" />
                  </div>
                  <div className="why-use-text">
                    <p>
                      Find great discounts on pre-owned items.Trade Your Way-
                      Barter for goods and services on our platform.
                    </p>
                  </div>
                </div>
                <div className="each-why-use">
                  <div className="why-use-image-top">
                    <img src={userImage} alt="user-image" />
                  </div>
                  <div className="why-use-text">
                    <p>
                      Find great discounts on pre-owned items.Trade Your Way-
                      Barter for goods and services on our platform.
                    </p>
                  </div>
                </div>
                <div className="each-why-use">
                  <div className="why-use-image-top">
                    <img src={shopImage} alt="shop-image" />
                  </div>
                  <div className="why-use-text">
                    <p>
                      Find great discounts on pre-owned items.Trade Your Way-
                      Barter for goods and services on our platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="landing-page-second-section-right-wrapper">
              <img src={landingPageImage2} alt="traidr-buying-and-selling" />
            </div>
          </div>
          <div className="trending-sales-section">
            <div className="trending-sales-section-heading">
              <h2>Trending Sales</h2>
            </div>
            <div className="trending-sales-product-wrapper">
              {products?.length ? (
                products.map((product) => {
                  return (
                    <AllProductsCard
                      key={product.productId}
                      product={product}
                    />
                  );
                })
              ) : (
                <AllProductsWrapper>
                  <div className="each-product-image">
                    <img src={dummyProducts} alt="" />
                  </div>
                  <p className="each-product-title">Dummy Product</p>
                  <p className="each-product-description">
                    This is a placeholder for the product description
                  </p>
                  <span className="each-product-price">₦100000</span>
                </AllProductsWrapper>
              )}
            </div>
          </div>
        </div>
      </LandingPageMainWrapper>
      <Footer />
    </>
  );
}
