import type { ConnectionArray, Product } from ".";

type ProductsResponse = ConnectionArray<Pick<Product, "id" | "handle" | "priceRange" | "title" | "featuredImage" | "vendor">>;

type ProductsQuery = Partial<{
    title: string;
    vendor: string;
    tag: string;
}>;

export type { ProductsResponse, ProductsQuery };
