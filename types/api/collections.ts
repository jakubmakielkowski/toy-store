import type { Collection, ResponseArray } from ".";

type CollectionsResponse = ResponseArray<Pick<Collection, "description" | "title" | "image">>;

export type { CollectionsResponse };
