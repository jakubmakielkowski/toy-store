import type { Article, ResponseArray } from ".";

type ArticlesResponse = ResponseArray<Pick<Article, "excerpt" | "handle" | "title">>;

export type { ArticlesResponse };
