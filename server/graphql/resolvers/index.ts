import { Portfolio } from "@/core/models/api/portfolio.model";
const data: { portfolios: Portfolio[] } = {
  portfolios: [
    {
      _id: "a1",
      title: "Job1",
      description: "xxxx1",
      jobTitle: "engineer",
      daysOfExperience: true,
      isCurrentlyEmployed: true,
      startDate: "1911/01/01",
      endDate: "1911/01/01",
    },
    {
      _id: "a2",
      title: "Job2",
      description: "xxxx1",
      jobTitle: "engineer",
      daysOfExperience: true,
      isCurrentlyEmployed: true,
      startDate: "1911/01/01",
      endDate: "1911/01/01",
    },
  ],
};

const portfolioQueries = {
  hello: () => {
    return "Hello World!";
  },
  portfolio: (root: any, { id }: { id: string }) => {
    const portfolio = data.portfolios.find((d) => d._id === id);
    return portfolio;
  },
  portfolios: () => {
    return data.portfolios;
  },
};

const portfolioMutations = {
  createPortfolio: (root: any, { input }: { input: Portfolio }) => {
    const _id = require("crypto").randomBytes(10).toString("hex");
    const newPortfolio = { ...input };
    newPortfolio._id = _id;
    data.portfolios.push(newPortfolio);
    return newPortfolio;
  },

  updatePortfolio(root: any, { id, input }: { id: string; input: Portfolio }) {
    const index = data.portfolios.findIndex((d) => d._id === id);
    const oldPortfolio = data.portfolios[index];
    const newPortfolio = { ...oldPortfolio, ...input };
    data.portfolios[index] = newPortfolio;
    return newPortfolio;
  },

  deletePortfolio(root: any, { id }: { id: string }) {
    const index: number = data.portfolios.findIndex((d) => d._id === id);
    data.portfolios.splice(index, 1);
    return id;
  },
};

export { portfolioMutations, portfolioQueries };
