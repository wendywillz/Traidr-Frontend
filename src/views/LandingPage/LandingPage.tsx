import Header from "../../components/Header/Header";
import landingPageImage from "../../assets/landing-page-right-image.png";
import landingPageImage2 from "../../assets/landing-page-right-image-2.png";
import tradirImage from "../../assets/traidr-logo-orange.png";
import vanImage from "../../assets/van-image.png";
import cartImage from "../../assets/cart-image.png";
import userImage from "../../assets/user-image.png";
import shopImage from "../../assets/shop-image.png";
import ironImage from "../../assets/products/iron.png";
import { LandingPageMainWrapper } from "./LandingPageStye";
import Footer from "../../components/Footer/Footer";
import axiosInstance from "../../utils/axiosInstance";
import { useEffect, useState } from "react";
import { shopProductsInterface } from "../../interfaces/shopInterfaces";

export default function LandingPage() {
  const [products, setProducts] = useState<shopProductsInterface[]>();
  useEffect(() => {
    const fetchAllProducts = async () => {
      const res = await axiosInstance.get("/products/get-all-products");
      if (res && res.data.products) {
        setProducts(res.data.products);
      }
    };
    fetchAllProducts();
  }, []);
  return (
    <>
      <Header />
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
              <h1>
                Why use{" "}
                <span>
                  <img src={tradirImage} alt="traidr-image" />
                </span>{" "}
                ?
              </h1>

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
              <h1>Trending Sales</h1>
            </div>
            <div className="trending-sales-product-wrapper">
              <div className="each-product-wrapper">
                <div className="each-product-image">
                  <img src={ironImage} alt="" />
                </div>
                <p className="each-product-title">Pressing Iron</p>
                <p className="each-product-description">
                  This is a very good pressing iron
                </p>
                <span className="each-product-price">N50,000</span>
              </div>
              {products &&
                products.map((product) => {
                  return (
                    <div
                      className="each-product-wrapper"
                      key={product.productId}
                    >
                      <div className="each-product-image">
                        <img src={product.productImages[0]} alt="" />
                      </div>
                      <p className="each-product-title">
                        {product.productTitle}
                      </p>
                      <p className="each-product-description">
                        {product.productDescription}
                      </p>
                      <span className="each-product-price">
                        N{product.productPrice}
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </LandingPageMainWrapper>
      <Footer />
    </>
  );
}
