// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        heroTitle
        heroSubtitle
        heroDescription { processed }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription { processed }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_RELEASES = gql`
  query GetReleases($first: Int = 10) {
    nodeReleases(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeRelease {
          releaseFormat { ... on TermReleaseFormat { name } }
          genre { ... on TermGenre { name } }
          releaseDate { timestamp }
          trackCount
          duration
          recordLabel
          coverArt { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          tracklist
          streamingUrl
          body { processed }
        }
      }
    }
  }
`

export const GET_RELEASE_BY_PATH = gql`
  query GetReleaseByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeRelease {
            id
            title
            path
            releaseFormat { ... on TermReleaseFormat { name } }
            genre { ... on TermGenre { name } }
            releaseDate { timestamp }
            trackCount
            duration
            recordLabel
            coverArt { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
            tracklist
            streamingUrl
            body { processed }
          }
        }
      }
    }
  }
`

export const GET_TOUR_DATES = gql`
  query GetTourDates($first: Int = 10) {
    nodeTourDates(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeTourDate {
          eventDate { timestamp }
          venueName
          city
          country
          ticketUrl
          ticketPrice
          soldOut
          supportAct
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          body { processed }
        }
      }
    }
  }
`

export const GET_TOUR_DATE_BY_PATH = gql`
  query GetTourDateByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeTourDate {
            id
            title
            path
            eventDate { timestamp }
            venueName
            city
            country
            ticketUrl
            ticketPrice
            soldOut
            supportAct
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
            body { processed }
          }
        }
      }
    }
  }
`

export const GET_BIOS = gql`
  query GetBios($first: Int = 10) {
    nodeBios(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeBio {
          memberRole
          joinedYear
          influences
          photo { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          body { processed }
        }
      }
    }
  }
`

export const GET_BIO_BY_PATH = gql`
  query GetBioByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeBio {
            id
            title
            path
            memberRole
            joinedYear
            influences
            photo { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
            body { processed }
          }
        }
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          __typename
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription { processed }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription { processed }
            ctaPrimary
            ctaSecondary
          }
          ... on NodePage {
            id
            title
            body { processed }
          }
          ... on NodeRelease {
            id
            title
            path
            releaseFormat { ... on TermReleaseFormat { name } }
            genre { ... on TermGenre { name } }
            releaseDate { timestamp }
            trackCount
            duration
            recordLabel
            coverArt { url alt width height }
            tracklist
            streamingUrl
            body { processed }
          }
          ... on NodeTourDate {
            id
            title
            path
            eventDate { timestamp }
            venueName
            city
            country
            ticketUrl
            ticketPrice
            soldOut
            supportAct
            image { url alt width height }
            body { processed }
          }
          ... on NodeBio {
            id
            title
            path
            memberRole
            joinedYear
            influences
            photo { url alt width height }
            body { processed }
          }
        }
      }
    }
  }
`
