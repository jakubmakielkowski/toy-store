import gql from "graphql-tag";
import { print } from "graphql/language/printer";
import { fetchShopify } from "~/composables/api/fetchShopify";
import type { Article, ResponseData } from "~/types/api";
import type { Blog } from "~/types/api/blog";

const articleQuery = print(gql`
  query ($blogHandle: String!, $articleHandle: String!) {
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
  }
`);

const useArticle = (handle: string) => async (): Promise<Article> => {
  const body = {
    variables: {
      blogHandle: "News",
      articleHandle: handle,
    },
    query: articleQuery,
  }

  const response = (await fetchShopify(
    body
  )) as ResponseData<"blogByHandle", Blog>;
  return response.data.blogByHandle.articleByHandle as Article;
};

export { useArticle };
