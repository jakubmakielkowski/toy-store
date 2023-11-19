import type { Image } from ".";

type Article = {
  content: string;
  excerpt?: string;
  handle: string;
  id: string;
  image?: Image;
  onlineStoreUrl?: string;
  title: string;
  publishedAt: string;
  tags: string;
};

export type { Article };
