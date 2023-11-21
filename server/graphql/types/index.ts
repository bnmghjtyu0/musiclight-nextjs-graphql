const portfolioTypes = `
type Portfolio {
    _id: ID
    title: String
    content: String
    jobTitle: String
    description: String
    daysOfExperience: Boolean
    isCurrentlyEmployed: Boolean
    startDate:String
    endDate: String
  }

  input PortfolioInput {
    title: String
    content: String
    jobTitle: String
    description: String
    daysOfExperience: Boolean
    isCurrentlyEmployed: Boolean
    startDate:String
    endDate: String
  }
`;

export { portfolioTypes };
