const fetchShopify = async (stringifiedBody: string) => {
  const config = useRuntimeConfig() as any;
  const response = await $fetch(config.public.SHOPIFY_API_ENDPOINT, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": config.public.SHOPIFY_API_ACCESS_TOKEN,
    }),
    body: stringifiedBody,
    redirect: "follow",
  });
  return response;
};

export { fetchShopify };
