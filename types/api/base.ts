type QueryVariables = Partial<{
  after: string;
  before: string;
  first: number;
  last: number;
  query: string;
  reverse: boolean;
  sortKey: string;
}>;

type MoneyV2 = {
  amount: number;
  currencyCode: string;
};

type Image = {
  altText?: string;
  id?: string;
  url: string;
};

type PageInfo = {
  startCursor: string;
  endCursor: string;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

type Edge = {
  cursor: string;
};

type ResponseArray<T> = {
  pageInfo: PageInfo;
  edges: Array<Edge>;
  nodes: Array<T>;
};

export type { QueryVariables, MoneyV2, Image, ResponseArray };
