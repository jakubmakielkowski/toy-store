import { fetchShopify } from "~/composables/api/fetchShopify";
import type { Article, ArticlesResponse, Variables, ResponseDataArray } from "~/types/api";

const articlesQuery = (variables: Variables<null>) => {
  const stringifiedVariables = JSON.stringify(variables);
  return `
    {
      "variables": ${stringifiedVariables},
      "query": "
        query GetArticle($first: Int!) {
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
      "
    }
  `;
};

const useArticles = (variables: Variables<null>) => async (): Promise<ArticlesResponse> => {
  const response = (await fetchShopify(articlesQuery(variables))) as ResponseDataArray<'articles', Article>;
  return response.data.articles;
};

export { useArticles };
