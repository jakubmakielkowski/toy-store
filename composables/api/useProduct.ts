import { pickBy } from "lodash-es";
import { fetchShopify } from "~/composables/api/fetchShopify";
import type { Product, Variables, ResponseData } from "~/types/api";

const createProductGraphQLQuery = (handle: string) => {
  return `
  {
    "variables": {
      "handle": "${handle}"
    },
    "query": "query getProductByHandle($handle: String!) { 
      product(handle: $handle) {
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
      }
    }"
  } 
  `;
};

const useProduct = (handle: string) => async (): Promise<Product> => {
  const response = (await fetchShopify(createProductGraphQLQuery(handle))) as ResponseData<"product", Product>;
  return response.data.product;
};

export { useProduct };
