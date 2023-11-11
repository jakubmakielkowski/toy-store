const SHOPIFY_API_ENDPOINT = String(process.env.SHOPIFY_API_ENDPOINT);
const SHOPIFY_API_ACCESS_TOKEN = String(process.env.SHOPIFY_API_ACCESS_TOKEN);

const fetchShopify = async (stringifiedBody: string) => {
  const response = await $fetch(SHOPIFY_API_ENDPOINT, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_API_ACCESS_TOKEN,
    }),
    body: stringifiedBody,
    redirect: "follow",
  });
  return response;
};

export { fetchShopify };
