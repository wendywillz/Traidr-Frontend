import { useState } from "react";
import {NavigateFunction, useNavigate, redirect, useLocation, Link, useHref, redirectDocument} from "react-router-dom"
import { Location } from "react-router-dom";

const Test = () => {
    const navigate: NavigateFunction = useNavigate();

    
    const [yy, setYy] = useState(false)
    const handleClick = ()=>{
         setYy(!yy)
         window.location.href = "https://paystack.com/pay/traidr"
          
    }
  return (
    <>
    <div onClick={handleClick}
    style={{backgroundColor:`aliceblue`, color:`black`, width:`10vw`, height:`10vh`, cursor:`pointer`}}>CLICK ME</div>

    {yy && <h1>HAPPY</h1>}
    </>
  )
}

export default Test