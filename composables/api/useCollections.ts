import { fetchShopify } from "~/composables/api/fetchShopify";
import type { Collection, CollectionsResponse, QueryVariables, ResponseData } from "~/types/api";

const collectionsQuery = (variables: QueryVariables) => {
  const stringifiedVariables = JSON.stringify({ ...variables });
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
              image {
                altText
                url
              }
            }
          }
        }
      "
    }
  `;
};

const useCollections = (variables: QueryVariables) => async (): Promise<CollectionsResponse> => {
  const response = (await fetchShopify(collectionsQuery(variables))) as ResponseData<'collections', Collection>;
  return response.data.collections;
};

export { useCollections };
