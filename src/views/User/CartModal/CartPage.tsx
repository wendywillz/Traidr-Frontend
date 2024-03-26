import Header from "../../../components/Header/Header";
import { CartContainer, CartContent, CartText, Cartleftcontainer, CartleftcontainerImg, CartleftcontainerText } from "./CartPage.Styled";
import ViewMoreButton from "../../../components/button/ViewMoreButton/ViewMoreButton";
import blender from "../../../assets/Description/blender.png";


const CartPage = () => {
  return (
    <>
      <Header />
      <CartContainer>
        <CartText>
            Wishlist
        </CartText>
        <CartContent>
          <Cartleftcontainer>
            <CartleftcontainerImg>
              <img src={blender} alt="blender" />
            </CartleftcontainerImg>
            <CartleftcontainerText>
              <p className="wishlistHeading">Hens Red Blender Set</p>
              <p className="wishlistDescription">
                Lorem ipsum dolor sit amet consectetur. Tellus potenti volutpat
                etiam maecenas feugiat viverra faucibus.
              </p>
              <p className="wishlistPrice">N30,000 Negotiable</p>
            </CartleftcontainerText>
          </Cartleftcontainer>
          <ViewMoreButton button_text={"View More"} type={"button"} />
        </CartContent>

        <CartContent>
          <Cartleftcontainer>
            <CartleftcontainerImg>
              <img src={blender} alt="blender" />
            </CartleftcontainerImg>
            <CartleftcontainerText>
              <p className="wishlistHeading">Hens Red Blender Set</p>
              <p className="wishlistDescription">
                Lorem ipsum dolor sit amet consectetur. Tellus potenti volutpat
                etiam maecenas feugiat viverra faucibus.
              </p>
              <p className="wishlistPrice">N30,000 Negotiable</p>
            </CartleftcontainerText>
          </Cartleftcontainer>
          <ViewMoreButton button_text={"View More"} type={"button"} />
        </CartContent>

        <CartContent>
          <Cartleftcontainer>
            <CartleftcontainerImg>
              <img src={blender} alt="blender" />
            </CartleftcontainerImg>
            <CartleftcontainerText>
              <p className="wishlistHeading">Hens Red Blender Set</p>
              <p className="wishlistDescription">
                Lorem ipsum dolor sit amet consectetur. Tellus potenti volutpat
                etiam maecenas feugiat viverra faucibus.
              </p>
              <p className="wishlistPrice">N30,000 Negotiable</p>
            </CartleftcontainerText>
          </Cartleftcontainer>
          <ViewMoreButton button_text={"View More"} type={"button"} />
        </CartContent>

      </CartContainer>
    </>
  );
}


export default CartPage
