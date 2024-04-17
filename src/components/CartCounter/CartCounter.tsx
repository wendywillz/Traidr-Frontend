/* eslint-disable react-hooks/exhaustive-deps */
import { fetchCartCount } from "../../api/cart";
import { CartCounterWholecontainer } from "./CartCounter.Styled";
import { BsCart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { setCartCount } from "../../app/features/cart/cartSlice";
import { useEffect } from "react";

// interface CartCounterInterface{
//   totalCartCount: number
// }
const CartCounter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartCount = useSelector((state: RootState) => state.cart.cartCount);
  // const [cartCount, setCartCount] = useState<number>(count);
console.log("cartCountIcon", cartCount);
  useEffect(() => {
    fetchCartCount().then((res) => {
      if (res) {
        dispatch(setCartCount(res));
      }
    });
  }, []);

  return (
    <CartCounterWholecontainer onClick={() => navigate(`/user/my-cart`)}>
      <BsCart className="cart-counter-icon" />

      <div className="cart-counter-number">{cartCount}</div>
    </CartCounterWholecontainer>
  );
};

export default CartCounter;
