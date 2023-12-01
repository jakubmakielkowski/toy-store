type ShopPolicy = {
  body: string;
  handle: string;
  id: string;
  title: string;
};

type Shop = {
  description?: string;
  id: string;
  name: string;
  refundPolicy?: ShopPolicy;
  shippingPolicy?: ShopPolicy;
  termsOfService?: ShopPolicy;
};

export type { ShopPolicy, Shop }
