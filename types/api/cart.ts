import type { MoneyV2 } from "./base";
import type { ProductVariant } from "./product";

type BaseCartLine = {
    id: string;
    merchandise: Partial<ProductVariant>; 
    quantity: number; 
}

type Cost = {
  totalAmount: MoneyV2;
}

type Cart = {
  checkoutUrl: string;
  cost: Cost;
  createdAt: string;
  id: string;
  totalQuantity: number;
  lines: {
    nodes: Array<BaseCartLine>;
  }
};

export type { Cart, BaseCartLine };
