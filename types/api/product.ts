import type { MoneyV2, Image } from ".";

type ProductPriceRange = {
  maxVariantPrice: MoneyV2;
  minVariantPrice: MoneyV2;
};

type Product = {
  availableForSale: boolean;
  createdAt: string;
  description: string;
  featuredImage?: Image;
  handle: string;
  id: string;
  isGiftCard: boolean;
  priceRange: ProductPriceRange;
  productType: string;
  totalInventory?: boolean;
  tags: Array<string>;
  title: string;
  vendor: string;
  images: {
    nodes: Array<Image>;
  };
  variants: {
    nodes: Array<ProductVariant>;
  };
};

type ProductVariant = {
  id: string;
  price: MoneyV2;
  product: Product;
  image: Image;
};

export type { Product, ProductVariant };
