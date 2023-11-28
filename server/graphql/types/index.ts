const rankingSchema = `
type PageInfo {
  totalResults: Int
  resultsPerPage: Int
}

type Localized {
  title: String
  description: String
}

type Maxres {
  url: String
  width: Int
  height: Int
}

type Standard {
  url: String
  width: Int
  height: Int
}

type High {
  url: String
  width: Int
  height: Int
}

type Medium {
  url: String
  width: Int
  height: Int
}

type Default {
  url: String
  width: Int
  height: Int
}

type Thumbnails {
  maxres: Maxres
  standard: Standard
  high: High
  medium: Medium
  default: Default
}

type Snippet {
  publishedAt: String
  channelId: String
  title: String
  description: String
  channelTitle: String
  categoryId: String
  liveBroadcastContent: String
  defaultAudioLanguage: String
  localized: Localized
  thumbnails: Thumbnails
}

type Items {
  kind: String
  etag: String
  id: String
  snippet: Snippet
}

type Ranking {
  kind: String
  etag: String
  pageInfo: PageInfo
  items: [Items]
}


`;

export { rankingSchema };
