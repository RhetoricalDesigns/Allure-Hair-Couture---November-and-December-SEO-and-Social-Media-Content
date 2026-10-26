export type CampaignMonth = 'november' | 'december';

export type PostFormat = 
  | 'showcase' 
  | 'fb-text' 
  | 'square' 
  | 'reel' 
  | 'landscape' 
  | 'blog';

export interface SocialPost {
  id: string;
  month: CampaignMonth;
  format: PostFormat;
  category: string;
  headline: string;
  copy: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string;
  mp4Url?: string;
  aspectRatio?: string;
  scheduledDate: string;
  platform: 'Instagram' | 'Facebook' | 'Cross-Platform' | 'Blog';
  hashtags?: string[];
  dimensions?: string;
  isAnimated?: boolean;
}

export interface BlogPost {
  month: CampaignMonth;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  readTime: string;
  date: string;
  quote: string;
  sections: {
    heading: string;
    content: string;
  }[];
  images: string[];
}

export interface CampaignPlan {
  month: CampaignMonth;
  theme: string;
  themeDescription: string;
  pillars: {
    title: string;
    description: string;
  }[];
  calendar: {
    week: string;
    dates: string;
    title: string;
    deliverables: string[];
  }[];
  keyMessages: string[];
  hashtags: string[];
}

export interface SearchConsoleAudit {
  propertyUrl: string;
  verificationStatus: 'verified' | 'pending' | 'checking';
  verificationToken: string;
  sitemapStatus: 'indexed' | 'submitted';
  sitemapPages: number;
  mobileUsability: 'Good' | 'Needs Improvement';
  coreWebVitals: {
    lcp: string;
    fid: string;
    cls: string;
    status: 'Pass' | 'Fail';
  };
  topQueries: {
    query: string;
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
  }[];
}

export interface AnalyticsAudit {
  measurementId: string;
  trackingActive: boolean;
  activeUsersRealtime: number;
  topChannels: {
    channel: string;
    sessions: number;
    share: number;
  }[];
  conversionEvents: {
    name: string;
    count: number;
    description: string;
  }[];
}

export interface BusinessConnection {
  platform: 'Google Business Profile' | 'Meta Business Suite' | 'WhatsApp Business';
  status: 'connected' | 'action_needed';
  details: string;
  verifiedItems: string[];
  lastChecked: string;
}
