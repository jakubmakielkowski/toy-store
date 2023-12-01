import gql from "graphql-tag";
import { print } from "graphql/language/printer";
import { fetchShopify } from "~/composables/api/fetchShopify";
import type { Article, ArticlesResponse, Variables, ResponseDataArray } from "~/types/api";

const articlesQuery = print(gql`
  query ($first: Int!) {
    articles(first: $first) {
      edges {
        cursor
      }
      nodes {
        excerpt
        handle
        id
        title
        publishedAt
        image {
          src
        }
      }
    }
  }
`);

const useArticles = (variables: Variables<null>) => async (): Promise<ArticlesResponse> => {
  const body = {
    variables: variables,
    query: articlesQuery,
  }

  const response = (await fetchShopify(body)) as ResponseDataArray<"articles", Article>;
  return response.data.articles;
};

export { useArticles };
