import { OrderHistoriesWholeContainer, OrderHistoriesMainContainer, OrderHistoriesMain, OrderHistoriesTableContainer, OrderHistoriesTable, OrderHistoriesTableHeadingRow, DownloadButtonsContainer, } from "./OrderHistoryList.Styled"
import Header from "../../../components/Header/Header"
import OrderHistoriesTableRow from "./OrderHistoryListRow"

import { OrderHistoryListData } from "../../../interfaces/orderInterfaces"

import { useState, useEffect, useRef } from "react"
import { fetchOrderHistoryList } from "../../../api/order"
import ReactToPrint from "react-to-print";
import PageLoader from "../../../components/PageLoader/PageLoader"
import BackButton from "../../../components/BackButton/BackButton"


 

const OrderHistoryList = () => {
    
    //Toggling the loader
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const [historyListData, setHistoryListData] = useState<OrderHistoryListData[]>([])

    useEffect(()=>{
        fetchOrderHistoryList().then((res)=>{
            if(res){
                setHistoryListData(res)
                setIsLoading(false)
            }

        })
    },[historyListData])

    const componentRef = useRef<HTMLDivElement>(null);


  return (
    <OrderHistoriesWholeContainer>
        {isLoading && <PageLoader/>}
        <Header/>
        <BackButton linkTo={"/dashboard"}/>
        <OrderHistoriesMainContainer>
        <DownloadButtonsContainer>
          <ReactToPrint
            trigger={() => <button>Download PDF</button>}
            content={() => componentRef.current!}
          />
        </DownloadButtonsContainer>
        <OrderHistoriesMain ref={componentRef}>
            <p className="order-history-list-page-title">Your Order History</p>
            <OrderHistoriesTableContainer>
                <OrderHistoriesTable>
                    <thead>
                        <OrderHistoriesTableHeadingRow>
                            <th>No</th>
                            <th>Order Date</th>
                            <th>Order Reference</th>
                            <th>Total</th>
                            <th>View Summary</th>
                        </OrderHistoriesTableHeadingRow>
                    </thead>
                   {historyListData.map((data, index)=>{
                    return(
                        <OrderHistoriesTableRow historyDetails={data} index={index}/>
                    )
                   })}
                   
                </OrderHistoriesTable>

            </OrderHistoriesTableContainer>

        </OrderHistoriesMain>
        </OrderHistoriesMainContainer>
        

    </OrderHistoriesWholeContainer>
  )
}

export default OrderHistoryList


/*sortedResult = res.sort((a:OrderHistoryListData, b: OrderHistoryListData)=>{ Date.parse(a.createdAt) -  Date.parse(b.createdAt)})
setHistoryListData(sortedResult) */