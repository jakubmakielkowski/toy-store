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

type ResponseArray<Type> = {
  pageInfo?: PageInfo;
  edges: Array<Edge>;
  nodes: Array<Type>;
};

type ResponseData<Key extends string, Type> = {
  data: {
    [K in Key]: ResponseArray<Type>;
  };
};

export type { QueryVariables, MoneyV2, Image, ResponseArray, ResponseData };
