import { Link } from "react-router-dom"
import { OrderHistoriesTableRow } from "./OrderHistoryList.Styled"

import { OrderHistoryListData } from "../../../interfaces/orderInterfaces"

interface OrderHistoryListRowProps{
  historyDetails: OrderHistoryListData
  index: number;
}

const OrderHistoryListRow = ({historyDetails, index}: OrderHistoryListRowProps) => {
  return (
    < OrderHistoriesTableRow>
        <td className="order-history-row" id="order-history-num-row"> {index +1}</td>
        <td className="order-history-row">{new Date(historyDetails.updatedAt).toDateString()}</td>
        <td className="order-history-row">{historyDetails.saleId}</td>
        <td className="order-history-row" id="order-history-total-row">₦{historyDetails.saleTotal.toLocaleString()}</td>
        <td className="order-history-row" id="order-history-details-row" ><Link to={`/user/my-orders/${historyDetails.saleId}`} id="order-history-details-link" >View Details</Link></td>
    </ OrderHistoriesTableRow>
  )
}

export default OrderHistoryListRow