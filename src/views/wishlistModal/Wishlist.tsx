import Header from "../../components/Header/Header";
import {
  WishlistContainer,
  WishlistContent,
  WishlistText,
  Wishlistleftcontainer,
  WishlistleftcontainerImg,
  WishlistleftcontainerText,
} from "./Wishlist.styled";
import ViewMoreButton from "../../components/button/ViewMoreButton/ViewMoreButton";
import blender from "../../assets/Description/blender.png";

export default function Wishlist() {
  return (
    <>
      <Header />
      <WishlistContainer>
        <WishlistText>
            Wishlist
        </WishlistText>
        <WishlistContent>
          <Wishlistleftcontainer>
            <WishlistleftcontainerImg>
              <img src={blender} alt="blender" />
            </WishlistleftcontainerImg>
            <WishlistleftcontainerText>
              <p className="wishlistHeading">Hens Red Blender Set</p>
              <p className="wishlistDescription">
                Lorem ipsum dolor sit amet consectetur. Tellus potenti volutpat
                etiam maecenas feugiat viverra faucibus.
              </p>
              <p className="wishlistPrice">N30,000 Negotiable</p>
            </WishlistleftcontainerText>
          </Wishlistleftcontainer>
          <ViewMoreButton button_text={"View More"} type={"button"} />
        </WishlistContent>

        <WishlistContent>
          <Wishlistleftcontainer>
            <WishlistleftcontainerImg>
              <img src={blender} alt="blender" />
            </WishlistleftcontainerImg>
            <WishlistleftcontainerText>
              <p className="wishlistHeading">Hens Red Blender Set</p>
              <p className="wishlistDescription">
                Lorem ipsum dolor sit amet consectetur. Tellus potenti volutpat
                etiam maecenas feugiat viverra faucibus.
              </p>
              <p className="wishlistPrice">N30,000 Negotiable</p>
            </WishlistleftcontainerText>
          </Wishlistleftcontainer>
          <ViewMoreButton button_text={"View More"} type={"button"} />
        </WishlistContent>

        <WishlistContent>
          <Wishlistleftcontainer>
            <WishlistleftcontainerImg>
              <img src={blender} alt="blender" />
            </WishlistleftcontainerImg>
            <WishlistleftcontainerText>
              <p className="wishlistHeading">Hens Red Blender Set</p>
              <p className="wishlistDescription">
                Lorem ipsum dolor sit amet consectetur. Tellus potenti volutpat
                etiam maecenas feugiat viverra faucibus.
              </p>
              <p className="wishlistPrice">N30,000 Negotiable</p>
            </WishlistleftcontainerText>
          </Wishlistleftcontainer>
          <ViewMoreButton button_text={"View More"} type={"button"} />
        </WishlistContent>

      </WishlistContainer>
    </>
  );
}
