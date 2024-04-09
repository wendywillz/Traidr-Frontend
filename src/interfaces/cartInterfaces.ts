import { ReactNode } from "react";

export interface CartProductDetail{
    [x: string]: ReactNode;
    productId: string;
    productTitle: string;
    productImage: string;
    productPrice: number;
    productQuantity: number;
    productTotal: number;
    sourceShop: string;
  }