import gql from "graphql-tag";
import { print } from "graphql/language/printer";
import { fetchShopify } from "~/composables/api/fetchShopify";
import type { Collection, CollectionsResponse, Variables, ResponseDataArray } from "~/types/api";

const collectionsQuery = print(gql`
  query ($first: Int) {
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
`);

const useCollections = (variables: Variables<null>) => async (): Promise<CollectionsResponse> => {
  const body = {
    variables,
    query: collectionsQuery,
  };

  const response = (await fetchShopify(body)) as ResponseDataArray<"collections", Collection>;
  return response.data.collections;
};

export { useCollections };
