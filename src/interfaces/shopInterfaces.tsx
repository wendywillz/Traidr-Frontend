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
  productImages: string[];
  productVideo: string;
  productPrice: number;
  shopId: string;
  shopName?: string;
  shopOwner?: string;
  shopOwnerEmail?: string;
  similarProducts?: shopProductsInterface[];
}

export interface shopInterface {
  shopName: string;
  shopCurrency: string;
  shopDescription: string;
  shopCategory: string;
  shopImageURL: string;
  shopCountry: string;
  shopStreetAddress: string;
  shopCity: string;
  shopState: string;
  shopZipCode: string;
  shopOwner: string;
}

export interface ShopOwnerDetails{
  email: string;
  name:string;
  phoneNumber:number|null;
  profilePic: string|undefined|null;
}