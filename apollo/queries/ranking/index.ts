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
          thumbnails {
            default {
              url
              width
              height
            }
            medium {
              url
              width
              height
            }
            high {
              url
              width
              height
            }
            standard {
              url
              width
              height
            }
            maxres {
              url
              width
              height
            }
          }
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
