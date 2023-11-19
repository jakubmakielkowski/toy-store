import { pickBy } from "lodash-es";
import { fetchShopify } from "~/composables/api/fetchShopify";
import type { Product, ProductsResponse, Variables, ResponseDataArray, ProductsQuery } from "~/types/api";

const createProductsGraphQLQuery = (variables: Variables<string>) => {
  const stringifiedVariables = JSON.stringify(variables);

  return `
    {
      "variables": ${stringifiedVariables},
      "query": "
        query getProducts($after: String, $before: String, $first: Int, $last: Int, $query: String, $reverse: Boolean, $sortKey: ProductSortKeys) {
          products(after: $after, before: $before, first: $first, last: $last, query: $query, reverse: $reverse, sortKey: $sortKey) {
            pageInfo {
              startCursor
              endCursor
              hasPreviousPage
              hasNextPage
            }
            edges {
              cursor
            }
            nodes {
              description
              id
              handle
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              title
              featuredImage {
                  url
                  altText
              }
              vendor
            }
          }
        }
      "
    }
  `;
};

const parseVariables = (variables: Variables<ProductsQuery>) => {
  const truthyQuery = pickBy(variables.query, Boolean);
  const strgifiedQuery = Object.entries(truthyQuery)
    .map(([key, value]) => (key === "title" ? `${key}:${value}*` : `${key}:${value}`))
    .join(" ");
  return { ...variables, query: strgifiedQuery };
};

const useProducts = (variables: Variables<ProductsQuery>) => async (): Promise<ProductsResponse> => {
  const parsedVariables = parseVariables(variables);
  const response = (await fetchShopify(createProductsGraphQLQuery(parsedVariables))) as ResponseDataArray<
    "products",
    Product
  >;
  return response.data.products;
};

export { useProducts };
