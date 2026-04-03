/**
 * Stub typed client -- replaced by `npm run sync-schema`.
 *
 * Run `npx decoupled-cli schema sync` after connecting to a Drupal space
 * to generate the real typed client with interfaces and queries.
 */

import type { DecoupledClient } from 'decoupled-client'
import type { DrupalNode } from 'decoupled-client'
import type { QueryOptions } from 'decoupled-client'

// Placeholder types -- sync-schema will replace with actual content types
export type ContentNode = DrupalNode
export type ContentTypeName = string

export interface ContentTypeMap {
  [key: string]: DrupalNode
}

export interface TypedClient {
  getEntries<K extends ContentTypeName>(type: K, options?: QueryOptions): Promise<DrupalNode[]>
  getEntry<K extends ContentTypeName>(type: K, id: string): Promise<DrupalNode | null>
  getEntryByPath(path: string): Promise<ContentNode | null>
  raw<T = any>(query: string, variables?: Record<string, any>): Promise<T>
}

const ROUTE_QUERY = `
  query ($path: String!) {
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
            path
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

// Stub factory -- uses raw queryByPath with a comprehensive route query
export function createTypedClient(client: DecoupledClient): TypedClient {
  return {
    async getEntries() { return [] },
    async getEntry() { return null },
    async getEntryByPath(path) {
      return client.queryByPath(path, ROUTE_QUERY)
    },
    async raw(query, variables) { return client.query(query, variables) },
  }
}
