import type { Product } from "./product";

type BaseCartLine = {
    merchandise: {
        productVariant: Partial<Product>;
    } 
    quantity: number; 
}

type Cart = {
  checkoutUrl: string;
  createdAt: string;
  id: string;
  totalQuantity: number;
  lines: {
    nodes: Array<BaseCartLine>;
  }
};

export type { Cart, BaseCartLine };
