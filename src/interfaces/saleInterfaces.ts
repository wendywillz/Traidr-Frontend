import { OrderProductDetail } from "./orderInterfaces";

export interface SaleSummary{
    saleId: string;
    saleTotal: number;
    saleDate: string;
    orderedProducts: OrderProductDetail[];
    recipientName: string;
    recipientPhoneNumber: number;
    deliveryAddress: string;
    deliveryInstructions: string;
  }

 
