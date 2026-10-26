import { SocialPost, BlogPost, CampaignPlan } from '../types/campaign';

export const decemberPosts: SocialPost[] = [
  // Showcase Posts
  {
    id: 'dec-showcase-1',
    month: 'december',
    format: 'showcase',
    category: 'Festive Glamour',
    headline: 'Summer Soirée Coiffure',
    copy: 'December celebrations demand effortless grandeur. Sculpted Hollywood waves, sleek celebratory chignons and light-catching volume tailored for Hermanus evenings and vineyard gala galas.',
    ctaText: 'Book Festive Styling',
    ctaLink: 'https://wa.me/27695075835?text=Hi%20Allure,%20I%20would%20like%20to%20book%20styling%20for%20a%20December%20event.',
    imageUrl: '/media/bridal5.jpg',
    aspectRatio: '4/5',
    scheduledDate: '1 December 2026',
    platform: 'Instagram',
    hashtags: ['#DecemberOpulence', '#FestiveHair', '#HermanusGala', '#HollywoodWaves', '#AllureHairCouture'],
    dimensions: '1080 × 1350'
  },
  {
    id: 'dec-showcase-2',
    month: 'december',
    format: 'showcase',
    category: 'Sun & Tone Defence',
    headline: 'Coastal Summer Balayage',
    copy: 'Protect your luminosity against UV and Atlantic ocean breezes. Bespoke summer glossing, cool beige ribbons and Olaplex bond-strengthening to keep blonde tones vibrant all season.',
    ctaText: 'Reserve Your Tone',
    ctaLink: 'https://wa.me/27695075835?text=Hi%20Allure,%20I%20would%20like%20to%20reserve%20a%20Summer%20Balayage%20and%20Gloss%20session.',
    imageUrl: '/media/colouring.jpg',
    aspectRatio: '4/5',
    scheduledDate: '7 December 2026',
    platform: 'Instagram',
    hashtags: ['#SummerBalayage', '#CoastalBlonde', '#HairGlossing', '#WellaColorTouch', '#HealthyBlonde'],
    dimensions: '1080 × 1350'
  },
  {
    id: 'dec-showcase-3',
    month: 'december',
    format: 'showcase',
    category: 'Curated Gifting',
    headline: 'The Ultimate Holiday Collection',
    copy: 'Bespoke Joico and Wella holiday discovery boxes paired with Allure embossed gift certificates. The premier sensory gift for those who value self-care and authentic luxury.',
    ctaText: 'Order Gift Boxes',
    ctaLink: 'https://wa.me/27695075835?text=Hi%20Allure,%20I%20would%20like%20to%20order%20a%20Holiday%20Gift%20Box.',
    imageUrl: '/media/product2.jpg',
    aspectRatio: '4/5',
    scheduledDate: '14 December 2026',
    platform: 'Cross-Platform',
    hashtags: ['#HolidayGiftGuide', '#LuxuryHaircare', '#HermanusPresents', '#JoicoHoliday', '#AllureGift'],
    dimensions: '1080 × 1350'
  },
  {
    id: 'dec-showcase-4',
    month: 'december',
    format: 'showcase',
    category: 'New Year Elegance',
    headline: 'Step Into 2027 in Style',
    copy: 'Ring in the New Year with statement hair. High-shine blowdrys, architectural updos and festive glam crafted by master stylists. Prime slots are strictly limited.',
    ctaText: 'Secure NYE Appointment',
    ctaLink: 'https://wa.me/27695075835?text=Hi%20Allure,%20I%20would%20like%20to%20secure%20a%20New%20Years%20Eve%20booking.',
    imageUrl: '/media/bridal6.jpg',
    aspectRatio: '4/5',
    scheduledDate: '21 December 2026',
    platform: 'Instagram',
    hashtags: ['#NYEHair', '#NewYearsEveGlam', '#HermanusNightlife', '#HauteCoiffure', '#CelebrationHair'],
    dimensions: '1080 × 1350'
  },
  {
    id: 'dec-showcase-5',
    month: 'december',
    format: 'showcase',
    category: 'Restorative Care',
    headline: 'Post-Sun Moisture Therapy',
    copy: 'Atlantic surf, sea salt and midday sun take a toll. Restore internal lipid balance with in-salon molecular treatments that leave strands supple, glossy and intensely replenished.',
    ctaText: 'Book Hair Therapy',
    ctaLink: 'https://wa.me/27695075835?text=Hi%20Allure,%20I%20would%20like%20to%20book%20a%20Post-Sun%20Moisture%20Treatment.',
    imageUrl: '/media/wella2.jpg',
    aspectRatio: '4/5',
    scheduledDate: '24 December 2026',
    platform: 'Instagram',
    hashtags: ['#HairRehab', '#MoistureTherapy', '#BeachHairCare', '#SummerHairRescue', '#DeepConditioning'],
    dimensions: '1080 × 1350'
  },
  {
    id: 'dec-showcase-6',
    month: 'december',
    format: 'showcase',
    category: 'December Campaign Cover',
    headline: 'December Opulence',
    copy: 'Festive Radiance & Summer Soirées. Experience the peak of bespoke hairdressing this festive season at Hemel & Aarde Village.',
    ctaText: 'Explore Salon',
    ctaLink: 'https://wa.me/27695075835?text=Hi%20Allure,%20I%20am%20enquiring%20about%20December%20appointments.',
    imageUrl: '/media/hero.jpg',
    aspectRatio: '2.4/1',
    scheduledDate: '1 December 2026',
    platform: 'Facebook',
    hashtags: ['#DecemberOpulence', '#HermanusSummer', '#AllureHairCouture', '#OverbergLuxury'],
    dimensions: '1200 × 500'
  },

  // Facebook Native Text Posts
  {
    id: 'dec-fb-1',
    month: 'december',
    format: 'fb-text',
    category: 'Holiday Booking Notice',
    headline: 'December Diary Now Open — Limited Slots',
    copy: `Welcome to December in Hermanus. As holiday celebrations begin and family returns to the coast, our December salon diary is filling rapidly.

Whether you require root touch-ups before coastal photography, a luminous summer balayage melt, or red-carpet styling for holiday celebrations, we recommend securing your chair in advance.

Appointments:
WhatsApp: +27 69 507 5835 | Tel: 028 316 3845
Hemel & Aarde Village, Hermanus`,
    scheduledDate: '1 December 2026',
    platform: 'Facebook',
    hashtags: ['#AllureHairCouture', '#DecemberBookings', '#HermanusHair', '#HolidaySeason']
  },
  {
    id: 'dec-fb-2',
    month: 'december',
    format: 'fb-text',
    category: 'Festive Styling',
    headline: 'Evening Soirées & Celebration Hair',
    copy: `The sun dips behind the Overberg mountains, the champagne is poured, and the celebrations begin.

From understated high-gloss blowdrys to intricate, romantic updos, let our artists create an evening look that turns heads without feeling stiff or overdone.

Book your pre-event blowout or styling appointment:
Call 028 316 3845 or WhatsApp us directly.`,
    scheduledDate: '8 December 2026',
    platform: 'Facebook',
    hashtags: ['#FestiveStyling', '#SummerSoiree', '#EventHair', '#HermanusSocial']
  },
  {
    id: 'dec-fb-3',
    month: 'december',
    format: 'fb-text',
    category: 'Last-Minute Gifting',
    headline: 'Luxury Gifting Made Effortless',
    copy: `Need a thoughtful, high-end gift without the crowded holiday mall rush?

Our Allure Hair Couture gift vouchers can be prepared for you within minutes. Select any value from R500 to R10 000, redeemable for all hair services, styling treatments, and premium retail products.

Pick up your bespoke ribbon-tied voucher at our salon in Hemel & Aarde Village, or request a custom digital voucher sent straight to your WhatsApp or email.

Never expires. Always cherished.`,
    scheduledDate: '15 December 2026',
    platform: 'Facebook',
    hashtags: ['#HolidayGifting', '#GiftVouchers', '#HermanusShopping', '#LuxuryPresents']
  },
  {
    id: 'dec-fb-4',
    month: 'december',
    format: 'fb-text',
    category: 'Holiday Trading Hours',
    headline: 'Holiday Schedule & Summer Hair Defence',
    copy: `A quick note on our festive operating hours so you can plan your salon visits smoothly:

• Monday – Friday: 08:30 – 17:00
• Saturdays: 08:30 – 14:00
• 24 December: 08:00 – 13:00 (Styling & Blowouts only)
• 25–26 December: Closed for family celebrations
• 31 December (NYE): 08:00 – 14:00 (Advance bookings only)

Master stylist tip: Rinse hair with fresh tap water before plunging into the ocean to prevent salt and copper mineral absorption!

Wishing our entire Allure family a glowing, restorative holiday season.`,
    scheduledDate: '22 December 2026',
    platform: 'Facebook',
    hashtags: ['#HolidayHours', '#SalonNotice', '#SummerHairTips', '#AllureFamily']
  },

  // Square Instagram Posts (1080x1080)
  {
    id: 'dec-square-1',
    month: 'december',
    format: 'square',
    category: 'Festive Glamour',
    headline: 'Festive Radiance',
    copy: 'Polished textures that move with effortless grace. Ready for every holiday dinner and vineyard celebration.',
    ctaText: 'Book Styling',
    imageUrl: '/media/bridal5.jpg',
    aspectRatio: '1/1',
    scheduledDate: '4 December 2026',
    platform: 'Instagram',
    hashtags: ['#FestiveGlam', '#HolidayHair', '#HermanusStyle', '#AllureHair'],
    dimensions: '1080 × 1080'
  },
  {
    id: 'dec-square-2',
    month: 'december',
    format: 'square',
    category: 'Summer Blonde',
    headline: 'Sun-Kissed Balayage',
    copy: 'Soft seamless ribbons of gold and honey, formulated to withstand coastal sun and saltwater without turning brassy.',
    ctaText: 'Explore Service',
    imageUrl: '/media/colouring.jpg',
    aspectRatio: '1/1',
    scheduledDate: '11 December 2026',
    platform: 'Instagram',
    hashtags: ['#SunKissedHair', '#CoastalBalayage', '#BlondeSpecialist', '#Hermanus'],
    dimensions: '1080 × 1080'
  },
  {
    id: 'dec-square-3',
    month: 'december',
    format: 'square',
    category: 'Holiday Vouchers',
    headline: 'The Gift of Allure',
    copy: 'The bespoke luxury gift voucher. Hand-tied ribbon presentation, flexible denominations, and no expiration date.',
    ctaText: 'Purchase Gift',
    imageUrl: '/media/product2.jpg',
    aspectRatio: '1/1',
    scheduledDate: '18 December 2026',
    platform: 'Instagram',
    hashtags: ['#LuxuryGift', '#GiftVoucher', '#HolidayPresent', '#AllureCouture'],
    dimensions: '1080 × 1080'
  },
  {
    id: 'dec-square-4',
    month: 'december',
    format: 'square',
    category: 'NYE Countdown',
    headline: 'Haute Coiffure 2027',
    copy: 'Welcome 2027 with radiant confidence. Book your New Year’s Eve blowout before the final chairs are claimed.',
    ctaText: 'Book NYE Chair',
    imageUrl: '/media/bridal6.jpg',
    aspectRatio: '1/1',
    scheduledDate: '28 December 2026',
    platform: 'Instagram',
    hashtags: ['#NYE2027', '#CountdownGlam', '#CelebrationHair', '#HermanusSalon'],
    dimensions: '1080 × 1080'
  },

  // Portrait Reels (1080x1920) with MP4 files
  {
    id: 'dec-reel-1',
    month: 'december',
    format: 'reel',
    category: 'December Opulence',
    headline: 'Festive Soirée Styling',
    copy: 'Sculpted waves, effortless shine and timeless sophistication for coastal celebrations.',
    ctaText: 'Book Now',
    imageUrl: '/media/bridal5.jpg',
    mp4Url: '/videos/reel-dec-festive.mp4',
    aspectRatio: '9/16',
    scheduledDate: '3 December 2026',
    platform: 'Instagram',
    hashtags: ['#FestiveReels', '#HollywoodWaves', '#EventHairstyles', '#ReelsOfInstagram'],
    dimensions: '1080 × 1920',
    isAnimated: true
  },
  {
    id: 'dec-reel-2',
    month: 'december',
    format: 'reel',
    category: 'Sun-Kissed Blonde',
    headline: 'Coastal Summer Balayage',
    copy: 'Custom blended sun-lit tones designed to thrive under South African summer sunshine.',
    ctaText: 'Explore Service',
    imageUrl: '/media/colouring.jpg',
    mp4Url: '/videos/reel-dec-balayage.mp4',
    aspectRatio: '9/16',
    scheduledDate: '10 December 2026',
    platform: 'Instagram',
    hashtags: ['#BalayageReel', '#SummerHairReels', '#BlondeInspo', '#SalonTransformation'],
    dimensions: '1080 × 1920',
    isAnimated: true
  },
  {
    id: 'dec-reel-3',
    month: 'december',
    format: 'reel',
    category: 'The Gift of Luxury',
    headline: 'Holiday Gifting & Vouchers',
    copy: 'The ultimate gift of beauty, relaxation and self-care. Available in physical & digital formats.',
    ctaText: 'Order Voucher',
    imageUrl: '/media/product1.jpg',
    mp4Url: '/videos/reel-dec-voucher.mp4',
    aspectRatio: '9/16',
    scheduledDate: '17 December 2026',
    platform: 'Instagram',
    hashtags: ['#LuxuryGiftGuide', '#VoucherPresents', '#HermanusHoliday', '#SelfCareGift'],
    dimensions: '1080 × 1920',
    isAnimated: true
  },
  {
    id: 'dec-reel-4',
    month: 'december',
    format: 'reel',
    category: 'New Year’s Eve',
    headline: 'Haute Coiffure Celebration',
    copy: 'Crown your year with sublime hair artistry. Reserved sessions for New Year’s Eve.',
    ctaText: 'Secure NYE Slot',
    imageUrl: '/media/bridal6.jpg',
    mp4Url: '/videos/reel-dec-nye.mp4',
    aspectRatio: '9/16',
    scheduledDate: '24 December 2026',
    platform: 'Instagram',
    hashtags: ['#NYEReels', '#NewYearsEveHair', '#GalaGlamour', '#AllureHairCouture'],
    dimensions: '1080 × 1920',
    isAnimated: true
  },

  // Facebook Landscape Posts (1200x630) with MP4 files
  {
    id: 'dec-landscape-1',
    month: 'december',
    format: 'landscape',
    category: 'Festive Glamour',
    headline: 'Summer Soirée Coiffure',
    copy: 'Complete festive styling for gala dinners, private parties and summer weddings in Hermanus.',
    ctaText: 'Book Appointment',
    imageUrl: '/media/bridal1.jpg',
    mp4Url: '/videos/fb-dec-soiree.mp4',
    aspectRatio: '1200/630',
    scheduledDate: '5 December 2026',
    platform: 'Facebook',
    hashtags: ['#SummerSoiree', '#FestiveHair', '#HermanusLuxury'],
    dimensions: '1200 × 630',
    isAnimated: true
  },
  {
    id: 'dec-landscape-2',
    month: 'december',
    format: 'landscape',
    category: 'Summer Defence',
    headline: 'Sun & Saltwater Hair Care',
    copy: 'Protect, nourish and preserve your bespoke colour through warm December beach days.',
    ctaText: 'Explore Treatments',
    imageUrl: '/media/colouring.jpg',
    mp4Url: '/videos/fb-dec-coastal.mp4',
    aspectRatio: '1200/630',
    scheduledDate: '12 December 2026',
    platform: 'Facebook',
    hashtags: ['#HairProtection', '#BeachHairCare', '#OlaplexSalon'],
    dimensions: '1200 × 630',
    isAnimated: true
  },
  {
    id: 'dec-landscape-3',
    month: 'december',
    format: 'landscape',
    category: 'Holiday Wishes',
    headline: 'Warmest Seasons Greetings',
    copy: 'From Hanri and the entire team at Allure Hair Couture, thank you for a remarkable year of beauty and friendship.',
    ctaText: 'Visit Our Salon',
    imageUrl: '/media/staff.jpg',
    mp4Url: '/videos/fb-dec-team.mp4',
    aspectRatio: '1200/630',
    scheduledDate: '19 December 2026',
    platform: 'Facebook',
    hashtags: ['#SeasonsGreetings', '#AllureTeam', '#HermanusFamily'],
    dimensions: '1200 × 630',
    isAnimated: true
  },
  {
    id: 'dec-landscape-4',
    month: 'december',
    format: 'landscape',
    category: 'December Finale',
    headline: 'Step Into 2027 in Style',
    copy: 'Final appointments available for New Year’s Eve celebrations. Finish 2026 looking your absolute best.',
    ctaText: 'Reserve Final Slot',
    imageUrl: '/media/hero.jpg',
    mp4Url: '/videos/fb-dec-nye.mp4',
    aspectRatio: '1200/630',
    scheduledDate: '26 December 2026',
    platform: 'Facebook',
    hashtags: ['#NYEPreparation', '#CountdownTo2027', '#AllureHairCouture'],
    dimensions: '1200 × 630',
    isAnimated: true
  }
];

export const decemberBlog: BlogPost = {
  month: 'december',
  title: 'Summer Radiance: The High-End Guide to Protecting & Perfecting Hair Through the Coastal Festive Season',
  subtitle: 'Mastering UV defence, saltwater moisture replenishment, and gala styling on the South African coast.',
  author: 'Hanri',
  authorRole: 'Salon Owner & Master Stylist',
  readTime: '10 min read',
  date: 'December 2026',
  quote: 'True coastal luxury is hair that looks effortless under the midday sun and radiant under evening chandeliers.',
  sections: [
    {
      heading: 'The Summer Element: Sun, Surf & Hair Health',
      content: 'December in Hermanus is glorious — bright coastal sunlight, cooling Atlantic breezes, and days spent moving between tidal pools, vineyard terraces, and candlelit dinners. However, this idyllic environment presents a unique trifecta of challenges for hair: UV radiation degrades melanin and colour pigments, oceanic salt crystals draw out critical cellular moisture, and wind causes micro-friction in cuticle scales. Maintaining salon-grade vibrancy requires intentional, preventative rituals.'
    },
    {
      heading: 'The Pre-Swim Hydration Shield',
      content: 'Before stepping into the ocean or chlorinated pools, drench your hair in fresh tap water and smooth a generous dollop of leave-in conditioning butter through mid-lengths and ends. Hair operates like a sponge: once saturated with clean moisture, it cannot absorb the harsh saline or mineral-rich saltwater that causes brittleness and brassiness.'
    },
    {
      heading: 'Preserving Your Balayage & Glaze',
      content: 'Sun-kissed blondes and warm brunettes require active antioxidant protection. In December, we transition our clients to restorative lipid-replenishing shampoos and weekly violet or bronze toning glazes. Avoid heavy clarifying shampoos after beach days; instead, opt for clarifying treatments formulated specifically with chelating agents that gently lift minerals without stripping your colour investment.'
    },
    {
      heading: 'From Beachfront to Black-Tie: Effortless Transformation',
      content: 'When transitioning from daytime coastal leisure to evening festive galas, focus on texture rather than stiffness. A dry texturising spray applied at the roots creates modern, airy lift. Pinning one side with an architectural hairpin or drawing lengths into a low, polished chignon provides instant, understated opulence that feels authentic to our Hermanus lifestyle.'
    }
  ],
  images: ['/media/colouring.jpg', '/media/bridal5.jpg', '/media/bridal6.jpg']
};

export const decemberPlan: CampaignPlan = {
  month: 'december',
  theme: 'December Opulence — Festive Radiance & Coastal Summer',
  themeDescription: 'The pinnacle of the Hermanus holiday season. Catering to holidaymakers, festive soirées, summer weddings, high-end gift seekers, and New Year’s Eve celebrations.',
  pillars: [
    {
      title: 'Festive Glamour & Event Styling',
      description: 'End-of-year functions, wine estate parties, and bespoke soirée hair with enduring movement.'
    },
    {
      title: 'Coastal Summer Hair Defence',
      description: 'Sun protection, post-beach hydration rituals, and maintaining balayage brilliance.'
    },
    {
      title: 'Bespoke Luxury Gifting',
      description: 'Packaged holiday gift boxes, luxury vouchers, and stocking fillers from Joico and Wella.'
    },
    {
      title: 'Client Appreciation & Team Gratitude',
      description: 'Celebrating loyalty, community connection, and the craft that makes Allure unique.'
    },
    {
      title: 'New Year’s Eve Grand Finale',
      description: 'Exclusive countdown styling slots for welcoming 2027 in supreme elegance.'
    }
  ],
  calendar: [
    {
      week: 'Week 1 (1–6 Dec)',
      dates: '1–6 December 2026',
      title: 'December Opulence Launch & Diary Notice',
      deliverables: ['1 Facebook Cover Update', '2 Instagram Feed Posts', '1 Animated 1080x1920 Reel', 'Early Booking Urgency Push']
    },
    {
      week: 'Week 2 (7–13 Dec)',
      dates: '7–13 December 2026',
      title: 'Sun-Kissed Balayage & Summer Care',
      deliverables: ['2 Instagram Feed Posts', '1 Facebook Landscape Video', '1 Instagram Reel', 'Product Routine Spotlight']
    },
    {
      week: 'Week 3 (14–20 Dec)',
      dates: '14–20 December 2026',
      title: 'Luxury Gift Vouchers & Holiday Boxes',
      deliverables: ['3 Gifting Highlights', '1 Native Facebook Post', '1 Animated Reel (1080x1920)', 'Digital Voucher WhatsApp Link']
    },
    {
      week: 'Week 4 (21–31 Dec)',
      dates: '21–31 December 2026',
      title: 'Holiday Schedule & NYE Countdown Glamour',
      deliverables: ['Holiday Trading Hours Post', '2 NYE Styling Promos', 'Team Year-End Gratitude Video', 'Last-Minute Booking Alerts']
    }
  ],
  keyMessages: [
    'Radiance under the sun, opulence under the stars.',
    'Give the unforgettable gift of luxury and confidence.',
    'Bespoke coiffure for Hermanus’ most celebrated season.',
    'Where your hair is crafted like fine art.'
  ],
  hashtags: [
    '#DecemberOpulence',
    '#AllureHairCouture',
    '#HermanusSummer',
    '#FestiveHair',
    '#CoastalBlonde',
    '#LuxuryHaircare',
    '#WesternCapeHoliday',
    '#NYEHair2027'
  ]
};
