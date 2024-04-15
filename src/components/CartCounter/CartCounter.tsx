
import { fetchCartCount } from "../../api/cart"
import { useState, useEffect } from "react"
import { CartCounterWholecontainer } from "./CartCounter.Styled"
import { BsCart } from "react-icons/bs"

const CartCounter = () => {
    const [cartCount, setCartCount] = useState<number>(0)

    useEffect(()=>{
    fetchCartCount().then((res)=>{
    setCartCount(res.totalCartCount)})
    })



  return (
    <CartCounterWholecontainer>
        <div className="cart-counter-icon-container">
            <BsCart size={35} className="cart-counter-icon"/>
        </div>
        <div className="cart-counter-number">{cartCount}</div>
        
    </CartCounterWholecontainer>
  )
}

export default CartCounter