import type { ResponseArray, Product } from ".";

type ProductsResponse = ResponseArray<Pick<Product, "description" | "id" | "priceRange" | "tags" | "title" | "images">>;

export type { ProductsResponse };
