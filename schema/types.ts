// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeBio {
  id: string;
  body: { value: string; summary?: string };
  influences: string[];
  joinedYear: string;
  memberRole: string;
  path: string;
  photo: { url: string; alt: string; width: number; height: number };
  title: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredItemsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeRelease {
  id: string;
  body: { value: string; summary?: string };
  coverArt: { url: string; alt: string; width: number; height: number };
  duration: string;
  genre: any[];
  path: string;
  recordLabel: string;
  releaseDate: { time: string };
  releaseFormat: any[];
  streamingUrl: string;
  title: string;
  trackCount: number;
  tracklist: string[];
}

export interface NodeTourDate {
  id: string;
  body: { value: string; summary?: string };
  city: string;
  country: string;
  eventDate: { time: string };
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  soldOut: boolean;
  supportAct: string;
  ticketPrice: string;
  ticketUrl: string;
  title: string;
  venueName: string;
}
