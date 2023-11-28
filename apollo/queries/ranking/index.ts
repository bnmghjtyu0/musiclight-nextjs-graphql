import { gql } from "apollo-boost";

export const GET_RANKING = gql`
  query Ranking($id: ID) {
    ranking(id: $id) {
      kind
      etag
      pageInfo {
        totalResults
        resultsPerPage
      }
      items {
        kind
        etag
        id
        snippet {
          publishedAt
          channelId
          title
          description
          channelTitle
          categoryId
          liveBroadcastContent
          defaultAudioLanguage
          localized {
            title
            description
          }
        }
      }
    }
  }
`;
