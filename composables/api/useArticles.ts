import { fetchShopify } from "~/composables/api/fetchShopify";
import type { Article, ArticlesResponse, QueryVariables, ResponseData } from "~/types/api";

const articlesQuery = (variables: QueryVariables) => {
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
              id
              title
              publishedAt
              excerpt
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

const useArticles = (variables: QueryVariables) => async (): Promise<ArticlesResponse> => {
  const response = (await fetchShopify(articlesQuery(variables))) as ResponseData<'articles', Article>;
  return response.data.articles;
};

export { useArticles };
