export interface DrupalTerm {
  name: string
}

export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

export interface DrupalHomepage {
  id: string
  title: string
  path?: string
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: { processed: string }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: { processed: string }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface DrupalPage {
  id: string
  title: string
  path?: string
  body?: { processed: string }
}

export interface DrupalRelease {
  id: string
  title: string
  path?: string
  releaseFormat?: DrupalTerm[]
  genre?: DrupalTerm[]
  releaseDate?: { timestamp: string }
  trackCount?: number
  duration?: string
  recordLabel?: string
  coverArt?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
  tracklist?: string[]
  streamingUrl?: string
  body?: { processed: string }
}

export interface DrupalTourDate {
  id: string
  title: string
  path?: string
  eventDate?: { timestamp: string }
  venueName?: string
  city?: string
  country?: string
  ticketUrl?: string
  ticketPrice?: string
  soldOut?: boolean
  supportAct?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
  body?: { processed: string }
}

export interface DrupalBio {
  id: string
  title: string
  path?: string
  memberRole?: string
  joinedYear?: string
  influences?: string[]
  photo?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
  body?: { processed: string }
}

export interface ReleasesData {
  nodeReleases: {
    nodes: DrupalRelease[]
  }
}

export interface TourDatesData {
  nodeTourDates: {
    nodes: DrupalTourDate[]
  }
}

export interface BiosData {
  nodeBios: {
    nodes: DrupalBio[]
  }
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}
