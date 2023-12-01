const fetchShopify = async (body: unknown) => {
  const config = useRuntimeConfig() as any;
  const response = await $fetch(config.public.SHOPIFY_API_ENDPOINT, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": config.public.SHOPIFY_API_ACCESS_TOKEN,
    }),
    body: JSON.stringify(body),
    redirect: "follow",
  });
  return response;
};

export { fetchShopify };
