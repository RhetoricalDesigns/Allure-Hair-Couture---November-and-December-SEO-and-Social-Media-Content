import { SearchConsoleAudit, AnalyticsAudit, BusinessConnection } from '../types/campaign';

export const initialSearchConsoleData: SearchConsoleAudit = {
  propertyUrl: 'https://allure-hair-couture.co.za',
  verificationStatus: 'verified',
  verificationToken: 'gsc-allure-couture-2026-verify-8893x',
  sitemapStatus: 'indexed',
  sitemapPages: 18,
  mobileUsability: 'Good',
  coreWebVitals: {
    lcp: '1.2s',
    fid: '14ms',
    cls: '0.01',
    status: 'Pass'
  },
  topQueries: [
    { query: 'bridal hair hermanus', clicks: 480, impressions: 3820, ctr: 12.5, position: 1.4 },
    { query: 'hair salon hemel en aarde', clicks: 390, impressions: 2940, ctr: 13.2, position: 1.1 },
    { query: 'balayage hermanus western cape', clicks: 275, impressions: 2110, ctr: 13.0, position: 1.8 },
    { query: 'allure hair couture', clicks: 610, impressions: 2450, ctr: 24.9, position: 1.0 },
    { query: 'luxury hair extensions south africa', clicks: 185, impressions: 1980, ctr: 9.3, position: 2.6 },
    { query: 'wedding hair stylist overberg', clicks: 140, impressions: 1650, ctr: 8.5, position: 2.1 }
  ]
};

export const initialAnalyticsData: AnalyticsAudit = {
  measurementId: 'G-ALUR2026HC',
  trackingActive: true,
  activeUsersRealtime: 24,
  topChannels: [
    { channel: 'Organic Search (Google)', sessions: 3840, share: 44.2 },
    { channel: 'Social (Instagram & Facebook)', sessions: 3210, share: 36.9 },
    { channel: 'Direct / WhatsApp Referrals', sessions: 1180, share: 13.6 },
    { channel: 'Local Maps / Business Profile', sessions: 460, share: 5.3 }
  ],
  conversionEvents: [
    { name: 'click_book_now', count: 412, description: 'User clicked appointment or bridal inquiry button' },
    { name: 'whatsapp_inquiry', count: 328, description: 'Direct WhatsApp chat initiated from campaign' },
    { name: 'gift_voucher_intent', count: 189, description: 'Viewed or initiated voucher purchase order' },
    { name: 'video_reel_view', count: 2140, description: 'Reel or landscape video preview played to completion' },
    { name: 'campaign_download_asset', count: 96, description: 'Marketing asset, image or MP4 downloaded' }
  ]
};

export const initialBusinessConnections: BusinessConnection[] = [
  {
    platform: 'Google Business Profile',
    status: 'connected',
    details: 'Allure Hair Couture · Hemel & Aarde Village, Hermanus',
    verifiedItems: [
      'Physical Address: 1 Village Lane, Shop 5, Hemel & Aarde Village, Hermanus, 7200',
      'Primary Phone: +27 69 507 5835 (WhatsApp) & 028 316 3845 (Salon)',
      'Primary Category: Hair salon · Secondary: Wedding hairdresser, Beauty salon',
      'Operating Hours verified (Mon-Fri 08:30-17:00, Sat 08:30-14:00)',
      'Google Maps Pin: Coordinates accurate (-34.4093, 19.2312)',
      'Customer Reviews: 4.9 / 5.0 Star Rating (80+ verified client testimonials)'
    ],
    lastChecked: '26 Oct 2026, 09:15 SAST'
  },
  {
    platform: 'Meta Business Suite',
    status: 'connected',
    details: 'Linked Facebook Page & Instagram Professional Account',
    verifiedItems: [
      'Facebook Page: Allure Hair Couture Hermanus (Verified Page ID: 108392184712019)',
      'Instagram Professional: @allurehaircouture (Two-way sync active)',
      'Meta Pixel ID: 8941029481920 (Firing on all landing pages)',
      'WhatsApp Business API: Connected to Meta Catalog (+27 69 507 5835)',
      'Asset Access: Administrator role assigned with post publishing permissions'
    ],
    lastChecked: '26 Oct 2026, 10:30 SAST'
  },
  {
    platform: 'WhatsApp Business',
    status: 'connected',
    details: 'Primary Client Concierge & Booking Hotline (+27 69 507 5835)',
    verifiedItems: [
      'Business Profile Verified with Allure Hair Couture branding',
      'Catalog: Bridal, Colouring, Extensions, and Voucher price list updated',
      'Automated Greeting & Out-of-Office away messages configured',
      'Direct Click-to-Chat deep links active across all social posts'
    ],
    lastChecked: '26 Oct 2026, 11:00 SAST'
  }
];
