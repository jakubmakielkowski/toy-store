import gql from "graphql-tag";
import { print } from "graphql/language/printer";
import { fetchShopify } from "~/composables/api/fetchShopify";
import type { Product, ResponseData } from "~/types/api";

const productQuery = print(gql`
  query ($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
      tags
      createdAt
      totalInventory
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      featuredImage {
        altText
        url
      }
      images(first: 5) {
        nodes {
          altText
          id
          src
        }
      }
      variants(first: 1) {
        nodes {
          id
        }
      }
    }
  }
`);

const useProduct = (handle: string) => async (): Promise<Product> => {
  const body = {
    variables: { handle },
    query: productQuery,
  };

  const response = (await fetchShopify(body)) as ResponseData<"product", Product>;
  return response.data.product;
};


const productRecommendationsQuery = print(gql`
  query ($productId: ID!) {
    productRecommendations(productId: $productId) {
      id
      handle
      title
      description
      tags
      createdAt
      totalInventory
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      featuredImage {
        altText
        url
      }
    }
  }
`);

const useProductRecommendations = (productId: string) => async (): Promise<Array<Partial<Product>>> => {
  const body = {
    variables: { productId },
    query: productRecommendationsQuery,
  };

  const response = (await fetchShopify(body)) as ResponseData<"productRecommendations", Array<Partial<Product>>>;
  return response.data.productRecommendations;
};

export { useProduct, useProductRecommendations };
