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
