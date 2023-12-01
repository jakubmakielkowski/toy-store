import gql from "graphql-tag";
import { print } from "graphql/language/printer";
import { fetchShopify } from "~/composables/api/fetchShopify";
import type { BaseCartLine, Cart } from "~/types/api";

const createCartMutation = print(gql`
  mutation {
    cartCreate {
      cart {
        id
        createdAt
        updatedAt
        attributes {
          key
          value
        }
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 10) {
          nodes {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                product {
                  title
                }
                price {
                  amount
                  currencyCode
                }
                image {
                  url
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`);

const useCreateCart = async (): Promise<Cart> => {
  const body = {
    query: createCartMutation,
  };
  const response = await fetchShopify(body);
  return response.data.cartCreate.cart;
};

const addToCartMutation = print(gql`
  mutation ($cartId: ID!, $quantity: Int!, $merchandiseId: ID!) {
    cartLinesAdd(cartId: $cartId, lines: [{ quantity: $quantity, merchandiseId: $merchandiseId }]) {
      cart {
        id
        createdAt
        updatedAt
        attributes {
          key
          value
        }
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 10) {
          nodes {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                product {
                  title
                }
                price {
                  amount
                  currencyCode
                }
                image {
                  url
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`);

const useAddToCart = async (cartId: string, cartLine: BaseCartLine): Promise<Cart> => {
  const body = {
    variables: {
      cartId: cartId,
      merchandiseId: cartLine.merchandise.productVariant.id,
      quantity: Number(cartLine.quantity),
    },
    query: addToCartMutation,
  };
  const response = await fetchShopify(body);
  return response.data.cartLinesAdd.cart;
};

const removeFromCartMutation = print(gql`
  mutation ($cartId: ID!, $lineId: ID!) {
    cartLinesRemove(cartId: $cartId, lineIds: [$lineId]) {
      cart {
        id
        createdAt
        updatedAt
        attributes {
          key
          value
        }
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 10) {
          nodes {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                product {
                  title
                }
                price {
                  amount
                  currencyCode
                }
                image {
                  url
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`);

const useRemoveFromCart = async (cartId: string, lineId: string): Promise<Cart> => {
  const body = {
    variables: {
      cartId: cartId,
      lineId: lineId,
    },
    query: removeFromCartMutation,
  };
  const response = await fetchShopify(body);
  return response.data.cartLinesRemove.cart;
};

export { useCreateCart, useAddToCart, useRemoveFromCart };
