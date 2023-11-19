import { fetchShopify } from "~/composables/api/fetchShopify";
import type { Collection, CollectionsResponse, Variables, ResponseDataArray } from "~/types/api";

const collectionsQuery = (variables: Variables<null>) => {
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

const useCollections = (variables: Variables<null>) => async (): Promise<CollectionsResponse> => {
  const response = (await fetchShopify(collectionsQuery(variables))) as ResponseDataArray<"collections", Collection>;
  return response.data.collections;
};

export { useCollections };
