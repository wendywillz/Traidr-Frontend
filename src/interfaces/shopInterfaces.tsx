export interface NameYourShopFormDetails {
  shopName: string;
  shopCurrency: string;
  shopCategory: string;
  shopDescription: string;
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
export interface TellUsAboutYourShopFormDetails {
  shopCountry: string;
  shopStreetAddress: string;
  shopCity: string;
  shopState: string;
  shopZipCode: string;
}

export interface shopProductsInterface {
  productId: string;
  productTitle: string;
  productDescription: string;
  productCategory: string;
  productImage: string;
  productVideo: string;
  productPrice: number;
  shopId: string;
}

export interface shopInterface {
  shopName: string;
  shopCurrency: string;
  shopDescription: string;
  shopCategory: string;
  shopCountry: string;
  shopStreetAddress: string;
  shopCity: string;
  shopState: string;
  shopZipCode: string;
  shopOwner: string;
}
