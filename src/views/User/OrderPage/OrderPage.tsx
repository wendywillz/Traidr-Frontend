import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { fetchOrderItems } from "../../../api/order";
import PaystackCheckout from "../DeliveryDetail/PaystackCheckout";
import { OrderPageContainer, OrderPageMain, OrderTotal, PayNowButton, CancelOrderButton } from "./OrderPage.Styled";
import OrderItemRow from "./OrderItemRow";
import Header from "../../../components/Header/Header";
import { OrderProductDetail } from "../../../interfaces/orderInterfaces";

const OrderPage = () => {
 const userId: string | null = useSelector((state: RootState) => state.user.userId);
 const [orderItems, setOrderItems] = useState<OrderProductDetail[]>();
 const [orderTotal, setOrderTotal] = useState<number | undefined>(0);
 const [email, setEmail] = useState("");
 const [name, setName] = useState("");

 useEffect(() => {
    if (userId) {
      const url = `../../../api/users/${userId}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setEmail(data.email);
          setName(data.name);
        })
        .catch((error) => console.error('Error fetching user info:', error));
    }
 }, [userId]);

 useEffect(() => {
    fetchOrderItems(userId).then((res) => {
      if (res) {
        setOrderItems(res);
        const total = res.reduce(
          (acc: number, curr: { productPrice: number; productQuantity: number; }) => acc + curr.productPrice * curr.productQuantity,
          0
        );
        setOrderTotal(total);
      }
    });
 }, [userId]);

 return (
    <OrderPageContainer>
      <Header />
      <OrderPageMain>
        <h2 className="order-page-Title">Order Summary</h2>
        <div>
          {orderItems?.map((orderItem) => (
            <div key={orderItem.productId}>
              <OrderItemRow orderItem={orderItem} />
              <hr />
            </div>
          ))}
        </div>
        <OrderTotal>
          <div className="order-total-text">ORDER TOTAL</div>
          <div className="order-total-amount">
            ₦{orderTotal?.toLocaleString()}
          </div>
        </OrderTotal>
        <PayNowButton>
          <PaystackCheckout
            email={email}
            amount={orderTotal || 0}
            metadata={{
              custom_fields: [
                {
                 display_name: "Name",
                 variable_name: "name",
                 value: name,
                },
              ],
            }}
            publicKey="pk_test_3f9efe2716c746022a4d663abf58def030f7085f"
          />
        </PayNowButton>
        <CancelOrderButton>CANCEL ORDER</CancelOrderButton>
      </OrderPageMain>
    </OrderPageContainer>
 );
};

export default OrderPage;
