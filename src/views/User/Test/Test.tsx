
import PaystackCheckout from '../DeliveryDetail/PaystackCheckout'

const Test = () => {
  return (
    <div>
        <h1>TEST PAGE</h1>
        <div>
            <PaystackCheckout email={`elephantgirlworks@gmail.com`} amount={100000} publicKey={`pk_test_7239e137271f8907ed6cb22348a801ae6dfbfaa9`}/>
        </div>
    </div>
  )
}

export default Test