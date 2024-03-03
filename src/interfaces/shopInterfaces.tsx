export interface NameYourShopProps {
  nameYourShop: string;
  currency: string;
  category: string;
}
export interface StockYourShopProps {
  photosURL: string;
  vidoesURL: string;
  title: string;
  category: string;
  description: string;
  price: string;
}
export interface HowYouWillGetPaidProps {
  paymentDetails: string;
  legalBusinessAddress: {
    country: string;
    streetAddress: string;
    state: string;
    zip: string;
  };
}
