import type { ResponseArray, Product } from ".";

type ProductsResponse = ResponseArray<Pick<Product, "id" | "handle" | "priceRange" | "title" | "featuredImage" | "vendor">>;

type ProductsQuery = Partial<{
    title: string;
    vendor: string;
    tag: string;
}>;

export type { ProductsResponse, ProductsQuery };
