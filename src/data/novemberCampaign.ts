import { SocialPost, BlogPost, CampaignPlan } from '../types/campaign';

export const novemberPosts: SocialPost[] = [
  // Showcase Posts
  {
    id: 'nov-showcase-1',
    month: 'november',
    format: 'showcase',
    category: 'Bridal & Events',
    headline: 'Made for the Moment',
    copy: 'Complete hair design for your most important moments. Trials, styling and day-of artistry. Handcrafted elegance designed to last from the ceremony to the final celebration under the stars.',
    ctaText: 'Enquire Now',
    ctaLink: 'https://wa.me/27695075835?text=Hi%20Allure,%20I%20would%20like%20to%20enquire%20about%20Bridal%20Hair%20Design.',
    imageUrl: '/media/bridal1.jpg',
    aspectRatio: '4/5',
    scheduledDate: '2 November 2026',
    platform: 'Instagram',
    hashtags: ['#AllureHairCouture', '#BridalHair', '#HermanusWeddings', '#HemelEnAarde', '#LuxuryHairCouture'],
    dimensions: '1080 × 1350'
  },
  {
    id: 'nov-showcase-2',
    month: 'november',
    format: 'showcase',
    category: 'Colour Artistry',
    headline: 'Summer Luminescence',
    copy: 'Balayage, colour melts and bespoke formulations. Every shade mixed and applied like a master painting, seamlessly contoured to complement your natural tones.',
    ctaText: 'Explore Service',
    ctaLink: 'https://wa.me/27695075835?text=Hi%20Allure,%20I%20am%20interested%20in%20Summer%20Colour%20Artistry.',
    imageUrl: '/media/colouring.jpg',
    aspectRatio: '4/5',
    scheduledDate: '9 November 2026',
    platform: 'Instagram',
    hashtags: ['#ColourArtistry', '#SummerBlonde', '#BalayageHermanus', '#WellaProfessionals', '#HealthyHair'],
    dimensions: '1080 × 1350'
  },
  {
    id: 'nov-showcase-3',
    month: 'november',
    format: 'showcase',
    category: 'Team Spotlight',
    headline: 'Meet the People of Allure',
    copy: 'Thoughtful hairdressing, delivered with warmth and a personal touch. Meet Hanri, Lorenzo, Lane, Helena, Locadia, Thando, Cimone, Angelique and Andiswa — the artists who listen, craft and care.',
    ctaText: 'Discover Our Story',
    ctaLink: 'https://allure-hair-couture.co.za',
    imageUrl: '/media/staff.jpg',
    aspectRatio: '4/5',
    scheduledDate: '16 November 2026',
    platform: 'Cross-Platform',
    hashtags: ['#PeopleOfAllure', '#HermanusStylists', '#SalonCulture', '#MasterStylists', '#HairCraft'],
    dimensions: '1080 × 1350'
  },
  {
    id: 'nov-showcase-4',
    month: 'november',
    format: 'showcase',
    category: 'Gift Voucher',
    headline: 'The Gift of Luxury',
    copy: 'Give the gift of confidence and beauty. Available in any denomination from R500 to R10 000. Valid across all bespoke services and Joico & Wella retail therapies. Never expires.',
    ctaText: 'Purchase Voucher',
    ctaLink: 'https://wa.me/27695075835?text=Hi%20Allure,%20I%20would%20like%20to%20order%20a%20Luxury%20Gift%20Voucher.',
    imageUrl: '/media/product1.jpg',
    aspectRatio: '4/5',
    scheduledDate: '23 November 2026',
    platform: 'Instagram',
    hashtags: ['#GiftOfLuxury', '#LuxurySalonGift', '#HermanusVouchers', '#JoicoSouthAfrica', '#AllureHairCouture'],
    dimensions: '1080 × 1350'
  },
  {
    id: 'nov-showcase-5',
    month: 'november',
    format: 'showcase',
    category: 'Service Spotlight',
    headline: 'Luxury Extensions',
    copy: 'Tapes, wefts, keratin bonds & bespoke clip-ins. Certified specialists deliver seamless length, natural density and boundless confidence.',
    ctaText: 'Book Consultation',
    ctaLink: 'https://wa.me/27695075835?text=Hi%20Allure,%20I%20would%20like%20to%20book%20an%20Extensions%20consultation.',
    imageUrl: '/media/extensions.jpg',
    aspectRatio: '4/5',
    scheduledDate: '27 November 2026',
    platform: 'Instagram',
    hashtags: ['#HairExtensionsSA', '#KeratinBonds', '#LuxuryWefts', '#HermanusExtensions', '#HairTransformation'],
    dimensions: '1080 × 1350'
  },
  {
    id: 'nov-showcase-6',
    month: 'november',
    format: 'showcase',
    category: 'Campaign Cover',
    headline: 'November Glamour',
    copy: 'Bridal · Colour · Extensions. Your ultimate luxury hair experience in Hermanus, nestled in Hemel & Aarde Village.',
    ctaText: 'Book Appointment',
    ctaLink: 'https://wa.me/27695075835?text=Hi%20Allure,%20I%20would%20like%20to%20book%20an%20appointment.',
    imageUrl: '/media/hero.jpg',
    aspectRatio: '2.4/1',
    scheduledDate: '1 November 2026',
    platform: 'Facebook',
    hashtags: ['#NovemberGlamour', '#AllureHairCouture', '#HermanusLiving', '#WesternCapeSalon'],
    dimensions: '1200 × 500'
  },

  // Facebook Native Text Posts
  {
    id: 'nov-fb-1',
    month: 'november',
    format: 'fb-text',
    category: 'Bridal & Events',
    headline: 'Wedding Season Elegance',
    copy: `November is wedding season across the Overberg. From the quiet ritual of getting ready with morning coffee to the final sunset photograph, we create event hair that feels entirely your own.

Bridal trials, bespoke styling and polished looks for every member of your party — composed with precision, never overworked.

Enquire about your event dates or secure your trial:
WhatsApp: +27 69 507 5835 | Tel: 028 316 3845
Location: 1 Village Lane, Shop 5, Hemel & Aarde Village, Hermanus`,
    scheduledDate: '2 November 2026',
    platform: 'Facebook',
    hashtags: ['#AllureHairCouture', '#HermanusWeddings', '#BridalHair', '#WesternCapeWeddings']
  },
  {
    id: 'nov-fb-2',
    month: 'november',
    format: 'fb-text',
    category: 'Colour Artistry',
    headline: 'Summer Luminescence Formula',
    copy: `Summer luminescence has arrived. Balayage, sun-lit colour melts and bespoke formulations tailored specifically to your skin tone and lifestyle.

Every shade is mixed and applied like a master painting: low-maintenance, high-shine, and designed to look even more breathtaking under natural coastal sunshine.

Book your Colour Artistry consultation with our master stylists:
Call: 028 316 3845 or WhatsApp: +27 69 507 5835`,
    scheduledDate: '9 November 2026',
    platform: 'Facebook',
    hashtags: ['#ColourArtistry', '#HermanusHair', '#BalayageSpecialist', '#WellaProfessionals']
  },
  {
    id: 'nov-fb-3',
    month: 'november',
    format: 'fb-text',
    category: 'Team Spotlight',
    headline: 'Thoughtful Hairdressing in Hermanus',
    copy: `Thoughtful hairdressing, delivered with genuine warmth and an artisanal touch.

Meet Hanri, Lorenzo, Lane, Helena, Locadia, Thando, Cimone, Angelique and Andiswa — the passionate artists behind Allure Hair Couture.

Every service begins with listening. Every strand tells a story. Step into our tranquil salon sanctuary at Hemel & Aarde Village and let us treat you to something extraordinary.`,
    scheduledDate: '16 November 2026',
    platform: 'Facebook',
    hashtags: ['#PeopleOfAllure', '#HermanusCommunity', '#ArtisanalHair', '#SalonLife']
  },
  {
    id: 'nov-fb-4',
    month: 'november',
    format: 'fb-text',
    category: 'Holiday Gifting',
    headline: 'The Gift of Luxury — Never Expires',
    copy: `Looking for the perfect token of appreciation or luxury indulgence?

The Allure Hair Couture Gift Voucher is available in any denomination — from R500 to R10 000. Valid for all bespoke styling services and our premium Joico and Wella haircare therapies.

Beautifully presented in luxury embossed packaging with satin ribbon, or delivered instantly via bespoke digital certificate. And best of all? It never expires.

WhatsApp us directly to order yours: +27 69 507 5835`,
    scheduledDate: '23 November 2026',
    platform: 'Facebook',
    hashtags: ['#GiftOfLuxury', '#LuxuryGifting', '#HermanusVouchers', '#HaircarePresents']
  },

  // Square Instagram Posts (1080x1080)
  {
    id: 'nov-square-1',
    month: 'november',
    format: 'square',
    category: 'Bridal & Events',
    headline: 'Made for the Moment',
    copy: 'Architectural softness. Handcrafted bridal updos designed to maintain vitality and structure throughout your wedding day.',
    ctaText: 'Enquire Now',
    imageUrl: '/media/bridal2.jpg',
    aspectRatio: '1/1',
    scheduledDate: '5 November 2026',
    platform: 'Instagram',
    hashtags: ['#BridalHair', '#WeddingUpdo', '#HermanusBride', '#AllureHairCouture'],
    dimensions: '1080 × 1080'
  },
  {
    id: 'nov-square-2',
    month: 'november',
    format: 'square',
    category: 'Colour Artistry',
    headline: 'Summer Luminescence',
    copy: 'Bespoke hand-painted balayage with high-gloss glaze. Effortless dimension that catches every ray of coastal light.',
    ctaText: 'Explore Service',
    imageUrl: '/media/colouring.jpg',
    aspectRatio: '1/1',
    scheduledDate: '12 November 2026',
    platform: 'Instagram',
    hashtags: ['#BalayagePerfection', '#HairGloss', '#HermanusColour', '#SummerHair'],
    dimensions: '1080 × 1080'
  },
  {
    id: 'nov-square-3',
    month: 'november',
    format: 'square',
    category: 'Team Spotlight',
    headline: 'Meet the People of Allure',
    copy: 'A culture built on listening, mastery and uncompromised hospitality. Visit our team at Hemel & Aarde Village.',
    ctaText: 'Discover Our Story',
    imageUrl: '/media/staff.jpg',
    aspectRatio: '1/1',
    scheduledDate: '19 November 2026',
    platform: 'Instagram',
    hashtags: ['#MeetTheTeam', '#SalonFamily', '#HermanusSalon', '#Craftsmanship'],
    dimensions: '1080 × 1080'
  },
  {
    id: 'nov-square-4',
    month: 'november',
    format: 'square',
    category: 'Gift Voucher',
    headline: 'The Gift of Luxury',
    copy: 'Give someone you cherish the ultimate salon indulgence. Custom denominations, valid on all treatments and retail.',
    ctaText: 'Purchase Now',
    imageUrl: '/media/product1.jpg',
    aspectRatio: '1/1',
    scheduledDate: '26 November 2026',
    platform: 'Instagram',
    hashtags: ['#GiftVoucher', '#LuxuryPresent', '#HolidayPrep', '#AllureCouture'],
    dimensions: '1080 × 1080'
  },

  // Portrait Reels (1080x1920) with MP4 files
  {
    id: 'nov-reel-1',
    month: 'november',
    format: 'reel',
    category: 'Bridal & Events',
    headline: 'Made for the Moment',
    copy: 'Complete hair design for your most important moments. Trials, styling and day-of artistry.',
    ctaText: 'Enquire Now',
    imageUrl: '/media/bridal3.jpg',
    mp4Url: '/videos/reel-nov-bridal.mp4',
    aspectRatio: '9/16',
    scheduledDate: '4 November 2026',
    platform: 'Instagram',
    hashtags: ['#BridalReels', '#WeddingHairInspo', '#HermanusBride', '#ReelsInstagram'],
    dimensions: '1080 × 1920',
    isAnimated: true
  },
  {
    id: 'nov-reel-2',
    month: 'november',
    format: 'reel',
    category: 'Colour Artistry',
    headline: 'Summer Luminescence',
    copy: 'Balayage, colour melts and bespoke formulations. Every shade mixed and applied like a master painting.',
    ctaText: 'Explore Service',
    imageUrl: '/media/colouring.jpg',
    mp4Url: '/videos/reel-nov-colour.mp4',
    aspectRatio: '9/16',
    scheduledDate: '11 November 2026',
    platform: 'Instagram',
    hashtags: ['#ColourReel', '#BalayageTransformation', '#BlondeGoals', '#SalonReels'],
    dimensions: '1080 × 1920',
    isAnimated: true
  },
  {
    id: 'nov-reel-3',
    month: 'november',
    format: 'reel',
    category: 'Luxury Extensions',
    headline: 'Luxury Extensions',
    copy: 'Tapes, wefts, keratin bonds & clip-ins. Certified specialist. Length, volume, confidence — seamlessly blended.',
    ctaText: 'Book Now',
    imageUrl: '/media/extensions.jpg',
    mp4Url: '/videos/reel-nov-extensions.mp4',
    aspectRatio: '9/16',
    scheduledDate: '18 November 2026',
    platform: 'Instagram',
    hashtags: ['#ExtensionsReel', '#HairTransformation', '#KeratinBonds', '#HairVolume'],
    dimensions: '1080 × 1920',
    isAnimated: true
  },
  {
    id: 'nov-reel-4',
    month: 'november',
    format: 'reel',
    category: 'November Glamour',
    headline: 'Allure Hair Couture',
    copy: 'Bridal · Colour · Extensions. Your ultimate luxury hair experience in Hermanus.',
    ctaText: 'Book Appointment',
    imageUrl: '/media/hero.jpg',
    mp4Url: '/videos/reel-nov-glamour.mp4',
    aspectRatio: '9/16',
    scheduledDate: '25 November 2026',
    platform: 'Instagram',
    hashtags: ['#AllureHairCouture', '#HermanusHairSalon', '#LuxuryLiving', '#SalonExperience'],
    dimensions: '1080 × 1920',
    isAnimated: true
  },

  // Facebook Landscape Posts (1200x630) with MP4 files
  {
    id: 'nov-landscape-1',
    month: 'november',
    format: 'landscape',
    category: 'Bridal & Events',
    headline: 'Made for the Moment',
    copy: 'Complete hair design for your most important moments. Trials, styling and day-of artistry.',
    ctaText: 'Enquire Now',
    imageUrl: '/media/bridal4.jpg',
    mp4Url: '/videos/fb-nov-bridal.mp4',
    aspectRatio: '1200/630',
    scheduledDate: '6 November 2026',
    platform: 'Facebook',
    hashtags: ['#BridalHair', '#HermanusWeddings', '#WeddingHairStylist'],
    dimensions: '1200 × 630',
    isAnimated: true
  },
  {
    id: 'nov-landscape-2',
    month: 'november',
    format: 'landscape',
    category: 'Colour Artistry',
    headline: 'Summer Luminescence',
    copy: 'Balayage, colour melts and bespoke formulations. Every shade mixed and applied like a master painting.',
    ctaText: 'Explore Service',
    imageUrl: '/media/colouring.jpg',
    mp4Url: '/videos/fb-nov-colour.mp4',
    aspectRatio: '1200/630',
    scheduledDate: '13 November 2026',
    platform: 'Facebook',
    hashtags: ['#ColourArtistry', '#SummerBlonde', '#BalayageHermanus'],
    dimensions: '1200 × 630',
    isAnimated: true
  },
  {
    id: 'nov-landscape-3',
    month: 'november',
    format: 'landscape',
    category: 'Team Spotlight',
    headline: 'Meet the People of Allure',
    copy: 'Thoughtful hairdressing, delivered with warmth and a personal touch. Every strand tells a story.',
    ctaText: 'Discover Our Story',
    imageUrl: '/media/staff.jpg',
    mp4Url: '/videos/fb-nov-team.mp4',
    aspectRatio: '1200/630',
    scheduledDate: '20 November 2026',
    platform: 'Facebook',
    hashtags: ['#TeamSpotlight', '#AllureFamily', '#HairdressersHermanus'],
    dimensions: '1200 × 630',
    isAnimated: true
  },
  {
    id: 'nov-landscape-4',
    month: 'november',
    format: 'landscape',
    category: 'Gift Voucher',
    headline: 'The Gift of Luxury',
    copy: 'Give the gift of confidence and beauty. Available in any denomination — from R500 to R10 000. Never expires.',
    ctaText: 'Purchase Now',
    imageUrl: '/media/product1.jpg',
    mp4Url: '/videos/fb-nov-gift.mp4',
    aspectRatio: '1200/630',
    scheduledDate: '27 November 2026',
    platform: 'Facebook',
    hashtags: ['#GiftOfLuxury', '#LuxurySalonGift', '#HermanusVouchers'],
    dimensions: '1200 × 630',
    isAnimated: true
  }
];

export const novemberBlog: BlogPost = {
  month: 'november',
  title: 'The Art of Bridal Hair: A Guide to Your Perfect Day',
  subtitle: 'Bridal trials, bespoke styling, and architectural hair sculpture for memorable weddings.',
  author: 'Hanri',
  authorRole: 'Salon Owner & Master Stylist',
  readTime: '8 min read',
  date: 'November 2026',
  quote: 'From the quiet ritual of getting ready to the final photograph, we create event hair that feels entirely your own.',
  sections: [
    {
      heading: 'The Architecture of Bridal Hair',
      content: 'Your wedding day is a masterpiece in the making. Every detail has been considered — the venue, the dress, the flowers, the lighting. But there is one element that frames them all: your hair. At Allure Hair Couture, we believe bridal hair is not simply styling. It is architecture. It is sculpture. It is the quiet confidence that carries you from the first look in the mirror to the final dance under the stars.'
    },
    {
      heading: 'The Bridal Consultation: Beginning with Listening',
      content: 'Every bridal journey begins with listening. During your trial, we discuss your dress silhouette, your veil or headpiece, the venue’s lighting, and the atmosphere you wish to create. We consider your hair’s texture, length, and natural movement — because the most beautiful looks are those that feel inevitable.'
    },
    {
      heading: 'Our Artisanal Approach',
      content: 'We specialise in considered artistry: soft romantic updos, sleek architectural chignons, flowing bohemian waves, and polished vintage-inspired sets. Each style is composed with precision, never overworked. We use premium Wella and Joico formulations to ensure your hair looks as vital at midnight as it did at noon.'
    },
    {
      heading: 'What Our Bridal Experience Includes',
      content: 'Our bridal package includes a comprehensive pre-wedding trial session, dedicated day-of styling for the bride, and seamless coordination for your bridal entourage and mothers of the couple. We also offer bespoke on-location services across the Hermanus and Hemel & Aarde wine valley.'
    }
  ],
  images: ['/media/bridal2.jpg', '/media/bridal3.jpg', '/media/bridal4.jpg']
};

export const novemberPlan: CampaignPlan = {
  month: 'november',
  theme: 'November Glamour — Peak Wedding Season & Spring Transition',
  themeDescription: 'Peak wedding season across the Western Cape wine valley meets holiday preparation. A month of refinement, high-gloss colour, and celebratory hair design.',
  pillars: [
    {
      title: 'Bridal & Events',
      description: 'Wedding season peak. Trials, bespoke styling, bridal entourage coordination and day-of artistry.'
    },
    {
      title: 'Colour Artistry',
      description: 'Summer-ready balayage, sun-kissed colour melts and custom gloss formulations.'
    },
    {
      title: 'Team Spotlight',
      description: 'Humanise the brand. Meet Hanri and the master stylists and colourists behind Allure.'
    },
    {
      title: 'Gift Voucher',
      description: 'Early holiday gifting. Position vouchers from R500 to R10,000 as the definitive luxury present.'
    },
    {
      title: 'Treatments & Hair Health',
      description: 'Pre-holiday restoration. Deep conditioning, keratin smoothing and botanical scalp therapies.'
    }
  ],
  calendar: [
    {
      week: 'Week 1 (2–7 Nov)',
      dates: '2–7 November 2026',
      title: 'Bridal Season Grand Launch',
      deliverables: ['2 Instagram Showcase Posts', '1 Facebook Cover Update', '2 Instagram Stories (Behind-the-Scenes)', '1 Native FB Post']
    },
    {
      week: 'Week 2 (9–15 Nov)',
      dates: '9–15 November 2026',
      title: 'Summer Luminescence Colour Artistry',
      deliverables: ['3 Instagram Feed Posts', '1 Animated 1080x1920 Reel', '1 Facebook Native Post', '1 Landscape Video Post']
    },
    {
      week: 'Week 3 (16–20 Nov)',
      dates: '16–20 November 2026',
      title: 'The People of Allure — Team Showcase',
      deliverables: ['2 Instagram Team Highlights', '1 Facebook Story Carousel', '1 FB Native Post', 'Staff Spotlight Quotes']
    },
    {
      week: 'Week 4 (23–29 Nov)',
      dates: '23–29 November 2026',
      title: 'The Gift of Luxury & Summer Prep',
      deliverables: ['2 Voucher Feed Posts', '1 Animated Reel (1080x1920)', '1 Facebook Landscape Video', 'December Early Booking Reminder']
    }
  ],
  keyMessages: [
    "It's a fine art, but you can wear it.",
    'Every strand tells a story.',
    'Considered artistry for days worth remembering.',
    'Where artistic hairdressing meets high-end fashion.'
  ],
  hashtags: [
    '#AllureHairCouture',
    '#HermanusHair',
    '#LuxuryHair',
    '#BridalHair',
    '#ColourArtistry',
    '#HairCouture',
    '#WesternCape',
    '#SouthAfricanHair'
  ]
};
