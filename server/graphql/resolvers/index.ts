import { Portfolio } from '@/core/models/api/portfolio.model';
const data = {
  portfolios: [
    {
      _id: 'a1',
      title: 'Job1',
      description: 'xxxx1',
      jobTitle: 'engineer',
      daysOfExperience: true,
      isCurrentlyEmployed: true,
      startDate: '1911/01/01',
      endDate: '1911/01/01',
    },
    {
      _id: 'a2',
      title: 'Job2',
      description: 'xxxx1',
      jobTitle: 'engineer',
      daysOfExperience: true,
      isCurrentlyEmployed: true,
      startDate: '1911/01/01',
      endDate: '1911/01/01',
    },
  ],
};

const portfolioResolvers = {
  hello: () => {
    return 'Hello World!';
  },
  portfolio: ({ id }: { id: string }) => {
    const portfolio = data.portfolios.find((d) => d._id === id);
    return portfolio;
  },
  portfolios: () => {
    return data.portfolios;
  },
  createPortfolio: ({ input }: { input: Portfolio }) => {
    const _id = require('crypto').randomBytes(10).toString('hex');
    const newPortfolio = { ...input };
    newPortfolio._id = _id;
    data.portfolios.push(newPortfolio);
    return newPortfolio;
  },
};

export { portfolioResolvers };
