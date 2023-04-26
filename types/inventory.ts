export type Reward = {
  Id: number;
  title: string;
  CreatedAt: string;
  UpdatedAt: string;
  type: string | null;
  shipping_date: string | null;
  used: boolean | null;
  shipped: boolean | null;
  claimed: boolean | null;
  image_url: string;
  code: string | null;
};

type PageInfo = {
  totalRows: number;
  page: number;
  pageSize: number;
  isFirstPage: boolean;
  isLastPage: boolean;
};

export type ListTitle = {
  title: string;
};

export type RewardResponse = {
  list: Reward[];
  pageInfo: PageInfo;
};
