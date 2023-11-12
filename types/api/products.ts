import type { ResponseArray, Product } from ".";

type ProductsResponse = ResponseArray<Pick<Product, "id" | "priceRange" | "title" | "featuredImage">>;

export type { ProductsResponse };
