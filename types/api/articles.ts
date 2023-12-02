import type { Article, ConnectionArray } from ".";

type ArticlesResponse = ConnectionArray<Pick<Article, "excerpt" | "handle" | "title">>;

export type { ArticlesResponse };
