import { OrderHistoriesWholeContainer, OrderHistoriesMainContainer, OrderHistoriesMain, OrderHistoriesTableContainer, OrderHistoriesTable, OrderHistoriesTableHeadingRow } from "./OrderHistoryList.Styled"
import Header from "../../../components/Header/Header"
import OrderHistoriesTableRow from "./OrderHistoryListRow"

import { OrderHistoryListData } from "../../../interfaces/orderInterfaces"

import { useState, useEffect } from "react"
import { fetchOrderHistoryList } from "../../../api/order"


 

const OrderHistoryList = () => {

    const [historyListData, setHistoryListData] = useState<OrderHistoryListData[]>([])

    useEffect(()=>{
        fetchOrderHistoryList().then((res)=>{
            if(res){
                setHistoryListData(res)
            }

        })
    },[historyListData])



  return (
    <OrderHistoriesWholeContainer>
        <Header/>
        <OrderHistoriesMainContainer>
        <OrderHistoriesMain>
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