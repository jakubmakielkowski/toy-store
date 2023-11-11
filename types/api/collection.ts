import type { Image } from ".";

type Collection = {
  description: string;
  handle: string;
  image?: Image;
  onlineStoreUrl?: string;
  title: string;
  updatedAt: string;
};

export type { Collection };
