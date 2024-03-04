export interface NameYourShopFormDetails {
  shopName: string;
  shopCurrency: string;
  shopCategory: string;
}

export interface nameYourShopState {
  nameYourShop: NameYourShopFormDetails;
}

// export interface StockYourShopFormDetails {
//   productPhoto: string;
//   productVideo: string;
//   productTitle: string;
//   productCategory: string;
//   productDescription: string;
//   productPrice: string;
// }
export interface ListingDetails {
  productTitle: string;
  productPrice: number;
  productCategory: string;
  productDescription: string;
}
export interface stockYourShopState {
  stockYourShop: ListingDetails;
}

export interface ShopSecurityInterface {
  isChecked: boolean;
}
export interface HowYouWillGetPaidFormDetails {
  paymentDetails: string;
  legalBusinessAddress: {
    country: string;
    streetAddress: string;
    state: string;
    zip: string;
  };
}
