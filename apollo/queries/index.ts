import { gql } from "apollo-boost";

export const GET_PORTFOLIO = gql`
  query Portfolio($id: ID) {
    portfolio(id: $id) {
      _id
      title
      description
      jobTitle
      startDate
      endDate
    }
  }
`;

export const GET_PORTFOLIOS = gql`
  query Portfolios {
    portfolios {
      _id
      title
      description
      jobTitle
      startDate
      endDate
    }
  }
`;

export const CREATE_PORTFOLIO = gql`
  mutation CreatePortfolio {
    createPortfolio(
      input: {
        title: "Job3"
        description: "xxxx1"
        jobTitle: "engineer"
        daysOfExperience: true
        isCurrentlyEmployed: true
        startDate: "1911/01/01"
        endDate: "1911/01/01"
      }
    ) {
      _id
      title
      description
      jobTitle
      daysOfExperience
      isCurrentlyEmployed
      startDate
      endDate
    }
  }
`;

export const UPDATE_PORTFOLIO = gql`
  mutation UpdatePortfolio($id: ID) {
    updatePortfolio(id: $id, input: { title: "Job6667" }) {
      _id
      title
      description
      jobTitle
      daysOfExperience
      isCurrentlyEmployed
      startDate
      endDate
    }
  }
`;
export const DELETE_PORTFOLIO = gql`
  mutation DeletePortfolio($id: ID) {
    deletePortfolio(id: $id)
  }
`;
