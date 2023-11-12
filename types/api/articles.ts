import type { Article, ResponseArray } from ".";

type ArticlesResponse = ResponseArray<Pick<Article, "excerpt" | "title">>;

export type { ArticlesResponse };
