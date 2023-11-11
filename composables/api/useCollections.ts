import { fetchShopify } from "~/services/api/fetchShopify";
import type { ProductsResponse, QueryVariables } from "~/types/api";

const collectionsQuery = (variables: QueryVariables) => {
  const stringifiedVariables = JSON.stringify(variables);
  return `
    {
      "variables": ${stringifiedVariables},
      "query": "
        query GetCollections($first: Int) {
          collections(first: $first) {
            edges {
              cursor
            }
            nodes {
              title
              description
            }
          }
        }
      "
    }
  `;
};

const useCollections = (variables: QueryVariables) => async () => {
  const response = (await fetchShopify(collectionsQuery(variables))) as ProductsResponse;
  return response;
};

export { useCollections };
