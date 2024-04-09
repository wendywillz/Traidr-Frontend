export interface OrderProductDetail{
    productId: string;
    productTitle: string;
    productImage: string;
    productPrice: number;
    productQuantity: number;
    productTotal: number;
    sourceShop: string;
  }

  export interface OrderHistoryListData{
    saleId: string;
    userId: string;
    orderId: string;
    saleTotal: number;
    saleStatus: string
    createdAt: string;
    updatedAt: string;
  }