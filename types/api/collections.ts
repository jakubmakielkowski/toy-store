import type { Collection, ResponseArray } from ".";

type CollectionsResponse = ResponseArray<Pick<Collection, "description" | "title">>;

export type { CollectionsResponse };
