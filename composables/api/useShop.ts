import gql from "graphql-tag";
import { print } from "graphql/language/printer";
import { fetchShopify } from "~/composables/api/fetchShopify";
import type { Shop, ResponseData } from "~/types/api";
import type { Blog } from "~/types/api/blog";

const shopQuery = print(gql`
  query {
    shop {
      description
      id
      name
      refundPolicy {
        body
        handle
        id
        title
      }
      shippingPolicy {
        body
        handle
        id
        title
      }
      termsOfService {
        body
        handle
        id
        title
      }
    }
  }
`);

const useShop = async (): Promise<Shop> => {
  const body = {
    query: shopQuery,
  }

  const response = (await fetchShopify(
    body
  )) as ResponseData<"shop", Shop>;
  return response.data.shop as Shop;
};

export { useShop };
