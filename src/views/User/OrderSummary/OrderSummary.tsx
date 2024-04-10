import {
  OrderSummaryWholeContainer,
  OrderSummaryMainContainer,
  OrderSummaryMain,
  OrderSummaryOverView,
  OrderSummaryPaymentAndDeliverySection,
  OrderSummaryInformationCard,
  OrderSummaryNavigateButton,
  DownloadButtonsContainer,
} from "./OrderSummary.Styled";

import Header from "../../../components/Header/Header";
import OrderSummaryRow from "./OrderSummaryRow";

import { SaleSummary } from "../../../interfaces/saleInterfaces";

//package and tool imports
import { useState, useEffect, useRef } from "react";
import { fetchSpecifiedOrderHistory } from "../../../api/order";
import { Link, useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import imagesLoaded from 'imagesloaded';
import ReactToPrint from "react-to-print";
import PageLoader from "../../../components/PageLoader/PageLoader"
import BackButton from "../../../components/BackButton/BackButton";

const OrderSummary = () => {
  const { saleId } = useParams();

  const [saleSummary, setSaleSummary] = useState<SaleSummary>();
  const [totalQuantity, setTotalQuantity] = useState<number | undefined>(0);

  useEffect(() => {
    fetchSpecifiedOrderHistory(saleId).then((res: SaleSummary) => {
      if (res) {
        setSaleSummary(res);
        const totalQty = res?.orderedProducts.reduce(
          (acc, curr) => acc + curr.productQuantity,
          0
        );
        setTotalQuantity(totalQty);
        //   console.log(`The total is`, total);
      } else { /* empty */ }
    });
  }, []);
  //Toggling the loader
  const [isLoading, setIsLoading] = useState<boolean>(true)


useEffect(()=>{
    fetchSpecifiedOrderHistory(saleId).then((res:SaleSummary) => {
        if (res) {
          setSaleSummary(res) 
          const totalQty = res?.orderedProducts.reduce((acc, curr)=> acc + (curr.productQuantity), 0)
          setTotalQuantity(totalQty)
        //   console.log(`The total is`, total);
        setIsLoading(false)
        }else{ /* empty */ }
      })
},[])


  const componentRef = useRef<HTMLDivElement>(null);

  const downloadAsJPG = () => {
    if (componentRef.current) {
       imagesLoaded(componentRef.current, () => html2canvas(componentRef.current!, {
         backgroundColor: null,
         scale: window.devicePixelRatio,
       }).then((canvas) => {
         const link = document.createElement('a');
         link.download = 'Traidr receipt.jpg';
         link.href = canvas.toDataURL('image/jpeg');
         link.click();
       }));
    }
   };

  return (
    <OrderSummaryWholeContainer>
      {isLoading && <PageLoader/>}
      <Header />
      <BackButton linkTo={"/user/my-orders"}/>
      <OrderSummaryMainContainer>
      <DownloadButtonsContainer>
          <ReactToPrint
            trigger={() => <button>Download as PDF</button>}
            content={() => componentRef.current!}
          />
          <button onClick={downloadAsJPG}>Download as JPG</button>
        </DownloadButtonsContainer>
        <OrderSummaryMain ref={componentRef}>
          <h2 className="order-summary-page-title">ORDER SUMMARY</h2>
          <OrderSummaryOverView>
            <p className="order-overview-title">Order Overview</p>
            <p className="order-overview-qty">{totalQuantity} Items</p>
            <p className="order-overview-date">
              Placed on {saleSummary?.saleDate}
            </p>
            <p className="order-overview-total">
              Total: ₦{saleSummary?.saleTotal.toLocaleString()}
            </p>
          </OrderSummaryOverView>
          <div className="order-items-list-title">PURCHASED ITEMS</div>
          <div className="order-items">
            {saleSummary?.orderedProducts.map((orderedProduct) => {
              return (
                <OrderSummaryRow
                  orderedProduct={orderedProduct}
                  key={orderedProduct.productId}
                />
              );
            })}
          </div>
          <OrderSummaryPaymentAndDeliverySection>
            <OrderSummaryInformationCard>
              <div className="order-summary-info-title">
                PAYMENT INFORMATION
              </div>
              <div className="order-summary-info-subsection">
                <p className="order-summary-subsection-title">Payment Method</p>
                <p className="order-summary-subsection-text">
                  Paid with bank transfer via Paystck
                </p>
              </div>
              <div className="order-summary-info-subsection">
                <p className="order-summary-subsection-title">
                  Payment Details
                </p>
                <p className="order-summary-subsection-text">
                  Items Total: ₦{saleSummary?.saleTotal.toLocaleString()}{" "}
                </p>
                <p className="order-summary-subsection-text">
                  Delivery fees: ₦0{" "}
                </p>
                <p className="order-summary-subsection-text">
                  Total:₦ {saleSummary?.saleTotal.toLocaleString()}{" "}
                </p>
              </div>
            </OrderSummaryInformationCard>
            <OrderSummaryInformationCard id="delivery-info">
              <div className="order-summary-info-title">
                DELIVERY INFORMATION
              </div>
              <div className="order-summary-info-subsection">
                <p className="order-summary-subsection-title">
                  Delivery Method
                </p>
                <p className="order-summary-subsection-text">Door Delivery</p>
              </div>
              <div className="order-summary-info-subsection">
                <p className="order-summary-subsection-title">
                  Shipping Address
                </p>
                <p className="order-summary-subsection-text">
                  {saleSummary?.recipientName}
                </p>
                <p className="order-summary-subsection-text">
                  0{saleSummary?.recipientPhoneNumber}
                </p>
                <p className="order-summary-subsection-text">
                  {saleSummary?.deliveryAddress}
                </p>
              </div>
              <div className="order-summary-info-subsection">
                <p className="order-summary-subsection-title">
                  Delivery Instructions
                </p>
                <p className="order-summary-subsection-text">
                  {saleSummary?.deliveryInstructions}
                </p>
              </div>
            </OrderSummaryInformationCard>
          </OrderSummaryPaymentAndDeliverySection>
        </OrderSummaryMain>
        <OrderSummaryNavigateButton>
            <Link to="/dashboard" className="order-summary-link">
              Back to my dashboard
            </Link>
          </OrderSummaryNavigateButton>
      </OrderSummaryMainContainer>
    </OrderSummaryWholeContainer>
  );
};

export default OrderSummary;
