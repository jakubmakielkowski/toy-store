import { fetchShopify } from "~/composables/api/fetchShopify";
import type { Article } from "~/types/api";

const createArticleGraphQLQuery = (handle: string) => {
  return `
    {
      "variables": {
          "blogHandle": "News",
          "articleHandle": "${handle}"
      },
      "query": "query GetBlog($blogHandle: String!, $articleHandle: String!) {
        blogByHandle(handle: $blogHandle) {
          id
          title
          articleByHandle(handle: $articleHandle) {
            content
            id
            tags
            title
          }
        }
      }"
    }
  `;
};

const useArticle = (handle: string) => async (): Promise<Article> => {
  const response = await fetchShopify(createArticleGraphQLQuery(handle));
  return response.data.blogByHandle.articleByHandle;
};

export { useArticle };
