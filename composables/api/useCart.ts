import { fetchShopify } from "~/composables/api/fetchShopify";
import type { BaseCartLine, Cart } from "~/types/api";

const createCart = () => {

  return `
  {
    "query": "mutation { cartCreate { cart { id createdAt updatedAt attributes { key value } totalQuantity lines(first: 10) { nodes { id quantity merchandise { ... on ProductVariant { id product { title } price { amount } image { url } } } } } cost { totalAmount { amount currencyCode } } } } }"
  } 
  `;
};

const addToCart = (cartId: string, cartLine: BaseCartLine) => {
  const quantity = Number(cartLine.quantity);
  const merchandiseId = cartLine.merchandise.productVariant.id;

  return `
  {
    "variables": {
        "cartId": "${cartId}",
        "merchandiseId": "${merchandiseId}",
        "quantity": ${quantity}
    },
    "query": "mutation ($cartId: ID! $quantity: Int! $merchandiseId: ID!) { cartLinesAdd(cartId: $cartId, lines: [ { quantity: $quantity merchandiseId: $merchandiseId } ]) { cart { id createdAt updatedAt attributes { key value } totalQuantity lines(first: 10) { nodes { id quantity merchandise { ... on ProductVariant { id product { title } price { amount } image { url } } } } } cost { totalAmount { amount currencyCode } } } } }"
  } 
  `;
}
const useCreateCart = async (): Promise<Cart> => {
  const response = await fetchShopify(createCart());
  return response.data.cartCreate.cart;
};

const useAddToCart = async (cartId: string, cartLine: BaseCartLine): Promise<Cart> => {
  const response = await fetchShopify(addToCart(cartId, cartLine));
  return response.data.cartLinesAdd.cart;
};

export { useCreateCart, useAddToCart };
