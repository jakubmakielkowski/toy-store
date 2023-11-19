import { fetchShopify } from "~/composables/api/fetchShopify";
import type { Article, ResponseData } from "~/types/api";
import type { Blog } from "~/types/api/blog";

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
  const response = await fetchShopify(createArticleGraphQLQuery(handle)) as ResponseData<"blogByHandle", Blog>;
  return response.data.blogByHandle.articleByHandle as Article;
};

export { useArticle };
