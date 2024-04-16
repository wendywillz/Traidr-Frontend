//styled imports
import {
  OrderSummaryWholeContainer,
  OrderSummaryMainContainer,
  OrderSummaryMain,
  OrderSummaryOverView,
  OrderSummaryPaymentAndDeliverySection,
  OrderSummaryInformationCard,
  OrderSummaryNavigateButton,
  DownloadButtonsContainer,
  PrintStyledComponent, // Import the PrintStyledComponent
  Text, // Import the Text styled component
  // BorderedDiv, // Import the BorderedDiv styled component
} from "./Receipt.Styled"; 

//component imports
import ReceiptRow from "./ReceiptRow";
import PageLoader from "../../../components/PageLoader/PageLoader";
import { SaleSummary } from "../../../interfaces/saleInterfaces";
import traiderLogo from "../../../assets/traidr-logo-orange.png"

//package and tool imports
import { useState, useEffect, useRef } from "react";
import { fetchReceipt } from "../../../api/sale";
import { Link } from "react-router-dom";
import ReactToPrint from "react-to-print";
import html2canvas from "html2canvas";
import imagesLoaded from 'imagesloaded';


const Receipt = () => {
  
//Toggling the loader
    const [isLoading, setIsLoading] = useState<boolean>(true)

  const [saleSummary, setSaleSummary] =useState<SaleSummary>()
  const [totalQuantity, setTotalQuantity]= useState<number|undefined>(0)

useEffect(()=>{
  fetchReceipt().then((res:SaleSummary) => {
        if (res) {
          setSaleSummary(res) 
          const totalQty = res?.orderedProducts.reduce((acc, curr)=> acc + (curr.productQuantity), 0)
          setTotalQuantity(totalQty)
        //   console.log(`The total is`, total);
        setIsLoading(false)
        }else{ /* empty */ }
      })
},[])

  useEffect(() => {
    fetchReceipt().then((res: SaleSummary) => {
      if (res) {
        setSaleSummary(res);
        const totalQty = res?.orderedProducts.reduce(
          (acc, curr) => acc + curr.productQuantity,
          0
        );
        setTotalQuantity(totalQty);
      }
    });
  }, []);

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
      <OrderSummaryMainContainer>
        <DownloadButtonsContainer>
          <ReactToPrint
            trigger={() => <button>Download as PDF</button>}
            content={() => componentRef.current!}
          />
          <button onClick={downloadAsJPG}>Download as JPG</button>
        </DownloadButtonsContainer>
        <OrderSummaryMain ref={componentRef}>
          <Text>
              <div className="traidr-logo-container"><img src={traiderLogo} className="traidr-logo-image"/></div>
              
            <h2 className="order-summary-page-title">RECEIPT</h2>
          </Text>
          <OrderSummaryOverView>
            <PrintStyledComponent>
              <Text>
                <p className="order-overview-title">Order Overview</p>
              </Text>
              <Text>
                <p className="order-overview-qty">{totalQuantity} Items</p>
              </Text>
              <Text>
                <p className="order-overview-date">
                  Placed on {saleSummary?.saleDate}
                </p>
              </Text>
              <Text>
                <p className="order-overview-total">
                  Total: ₦{saleSummary?.saleTotal.toLocaleString()}
                </p>
              </Text>
            </PrintStyledComponent>
          </OrderSummaryOverView>
          <div className="order-items-list-title"><Text>PURCHASED ITEMS</Text></div>
          <div className="order-items">
            {saleSummary?.orderedProducts.map((orderedProduct) => {
              return (
                <Text><ReceiptRow
                  orderedProduct={orderedProduct}
                  key={orderedProduct.productId}
                /></Text>
              );
            })}
          </div>
          <OrderSummaryPaymentAndDeliverySection>
            <OrderSummaryInformationCard>
              <div className="order-summary-info-title">
              <Text>PAYMENT INFORMATION</Text>
              </div>
              <div className="order-summary-info-subsection">
              <Text><p className="order-summary-subsection-title">Payment Method</p></Text>
              <Text><p className="order-summary-subsection-text">
                  Paid with bank transfer via Paystack
                </p></Text>
              </div>
              <div className="order-summary-info-subsection">
              <Text><p className="order-summary-subsection-title">
                  Payment Details
                </p></Text>
                <Text><p className="order-summary-subsection-text">
                  Items Total: ₦{saleSummary?.saleTotal.toLocaleString()}{" "}
                </p></Text>
                <Text><p className="order-summary-subsection-text">
                  Delivery fees: ₦0{" "}
                </p></Text>
                <Text><p className="order-summary-subsection-text">
                  Total:₦ {saleSummary?.saleTotal.toLocaleString()}{" "}
                </p></Text>
              </div>
            </OrderSummaryInformationCard>
            <OrderSummaryInformationCard id="delivery-info">
              <div className="order-summary-info-title">
              <Text>DELIVERY INFORMATION</Text>
              </div>
              <div className="order-summary-info-subsection">
              <Text><p className="order-summary-subsection-title">
                  Delivery Method
                </p></Text>
                <Text><p className="order-summary-subsection-text">Door Delivery</p></Text>
              </div>
              <div className="order-summary-info-subsection">
              <Text><p className="order-summary-subsection-title">
                  Shipping Address
                </p></Text>
                <Text><p className="order-summary-subsection-text">
                  {saleSummary?.recipientName}
                </p></Text>
                <Text><p className="order-summary-subsection-text">
                  0{saleSummary?.recipientPhoneNumber}
                </p></Text>
                <Text><p className="order-summary-subsection-text">
                  {saleSummary?.deliveryAddress}
                </p></Text>
              </div>
              <div className="order-summary-info-subsection">
              <Text><p className="order-summary-subsection-title">
                  Delivery Instructions
                </p></Text>
                <Text><p className="order-summary-subsection-text">
                  {saleSummary?.deliveryInstructions}
                </p></Text>
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
export default Receipt