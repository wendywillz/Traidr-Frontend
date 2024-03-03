export interface NameYourShopFormDetails {
  shopName: string;
  shopCurrency: string;
  shopCategory: string;
}

export interface nameYourShopState {
  nameYourShop: NameYourShopFormDetails;
}

export interface StockYourShopFormDetails {
  photosURL: string;
  vidoesURL: string;
  title: string;
  category: string;
  description: string;
  price: string;
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
