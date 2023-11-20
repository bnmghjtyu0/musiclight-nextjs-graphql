interface Portfolio {
  _id: string;
  title: string;
  description: string;
  jobTitle: string;
  daysOfExperience: boolean;
  isCurrentlyEmployed: boolean;
  startDate: string;
  endDate: string;
}

/** 單筆資料 */
export type PortfolioByIdResponse = {
  portfolio: Portfolio | null;
};

/** 多筆資料 */
export type PortfoliosResponse = {
  portfolios: Portfolio[];
};
