type Variables<T> = Partial<{
  after: string;
  before: string;
  first: number;
  last: number;
  query: T;
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

type ConnectionArray<Type> = {
  pageInfo?: PageInfo;
  edges: Array<Edge>;
  nodes: Array<Type>;
};

type ResponseData<Key extends string, Type> = {
  data: {
    [K in Key]: Type;
  };
};

type RadioItem = {
  label: string;
  value: string;
};

export type { Variables, MoneyV2, Image, ConnectionArray, ResponseData, RadioItem };
