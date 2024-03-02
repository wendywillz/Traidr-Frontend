import { PageDescriptionStyle } from "../StockShopPageStyles/StockShop.styled"

const PageDescription = () => {
  return (
    <PageDescriptionStyle>
        <h4 className="stock-shop-page-instruction-title">Creating a listing</h4>
        <p className="stock-shop-page-instruction-description">Add some photos and details about your item. Fill out what you can for now—you’ll be able to edit this later.</p>
    </PageDescriptionStyle>
  )
}

export default PageDescription  