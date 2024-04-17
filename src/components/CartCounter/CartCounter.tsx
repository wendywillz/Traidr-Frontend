import { fetchCartCount } from "../../api/cart";
import { useState, useEffect } from "react";
import { CartCounterWholecontainer } from "./CartCounter.Styled";
import { BsCart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

// interface CartCounterInterface{
//   totalCartCount: number
// }
const CartCounter = () => {
  const navigate = useNavigate()

  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    fetchCartCount().then((res) => {
      setCartCount(res.totalCartCount);
    
    });
  }, [cartCount]);

  return (
    <CartCounterWholecontainer onClick={()=>navigate(`/user/my-cart`)}>
      <BsCart className="cart-counter-icon" />

      <div className="cart-counter-number">{cartCount}</div>
    </CartCounterWholecontainer>
  );
};

export default CartCounter;
