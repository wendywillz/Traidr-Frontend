import { fetchCartCount } from "../../api/cart";
import { useState, useEffect } from "react";
import { CartCounterWholecontainer } from "./CartCounter.Styled";
import { BsCart } from "react-icons/bs";

const CartCounter = () => {
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    fetchCartCount().then((res) => {
      setCartCount(res.totalCartCount);
    });
  });

  return (
    <CartCounterWholecontainer>
      <BsCart className="cart-counter-icon" />

      <div className="cart-counter-number">{cartCount}</div>
    </CartCounterWholecontainer>
  );
};

export default CartCounter;
