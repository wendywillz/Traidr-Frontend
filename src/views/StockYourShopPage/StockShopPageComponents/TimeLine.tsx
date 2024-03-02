import { StockShopTimeline } from "../StockShopPageStyles/StockShop.styled"
import timeline from "../../../assets/stock_shop_page_assets/Timeline.png"
const TimeLine = () => {
  return (
    <StockShopTimeline>
        <img src={timeline}/>
        <div className="stock-shop-page-timeline-sections">
            <p className="stock-shop-page-timeline-complete-section">Name your Shop</p>
            <p className="stock-shop-page-timeline-complete-section">Stock your Shop</p>
            <p className="stock-shop-page-timeline-incomplete-section">How you'll get paid</p>
            <p className="stock-shop-page-timeline-incomplete-section">Shop Security</p>
        </div>
    </StockShopTimeline>
  )
}

export default TimeLine