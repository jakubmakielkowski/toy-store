import { fetchShopify } from "~/composables/api/fetchShopify";
import type { Product, ProductsResponse, QueryVariables, ResponseData } from "~/types/api";

const createProductsQuery = (variables: QueryVariables) => {
  const stringifiedVariables = JSON.stringify(variables);

  return `
    {
      "variables": ${stringifiedVariables},
      "query": "
        query getProducts($after: String, $before: String, $first: Int, $last: Int, $query: String, $reverse: Boolean, $sortKey: ProductSortKeys) {
          products(after: $after, before: $before, first: $first, last: $last, query: $query, reverse: $reverse, sortKey: $sortKey) {
            pageInfo {
              startCursor
              endCursor
              hasPreviousPage
              hasNextPage
            }
            edges {
              cursor
            }
            nodes {
              description
              id
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              title
              featuredImage {
                  url
                  altText
              }
            }
          }
        }
      "
    }
  `;
};

const useProducts = (variables: QueryVariables) => async (): Promise<ProductsResponse> => {
  const response = (await fetchShopify(createProductsQuery(variables))) as ResponseData<'products', Product>;
  return response.data.products;
};

export { useProducts };
