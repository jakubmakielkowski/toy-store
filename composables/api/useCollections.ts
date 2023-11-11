import { fetchShopify } from "~/services/api/fetchShopify";
import type { CollectionsResponse, QueryVariables, ResponseData } from "~/types/api";

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

const useCollections = (variables: QueryVariables) => async () => {
  const response = (await fetchShopify(collectionsQuery(variables))) as ResponseData<'collections', CollectionsResponse>;
  return response.data.collections;
};

export { useCollections };
