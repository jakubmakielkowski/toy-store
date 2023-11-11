import { fetchShopify } from "~/services/api/fetchShopify";
import type { ProductsResponse, QueryVariables } from "~/types/api";

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
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
              tags
              title
              images(first: 1) {
                nodes {
                  id
                  src
                }
              }
            }
          }
        }
      "
    }
  `;
};

const useProducts = (variables: QueryVariables) => async () => {
  const response = (await fetchShopify(createProductsQuery(variables))) as ProductsResponse;
  return response;
};

export { useProducts };
