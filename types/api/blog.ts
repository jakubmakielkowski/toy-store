import type { Article } from ".";

type Blog = {
    id: string;
    title: string;
    articleByHandle?: Article;
};

export type { Blog };
