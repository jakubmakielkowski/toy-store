import type { Collection, ConnectionArray } from ".";

type CollectionsResponse = ConnectionArray<Pick<Collection, "description" | "title" | "image">>;

export type { CollectionsResponse };
