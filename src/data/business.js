// ─────────────────────────────────────────────────────────────
// JunkAway Yorba Linda — central business configuration
// Edit this file to update details anywhere on the site.
// (Per portfolio rules: no email addresses on the site.)
// ─────────────────────────────────────────────────────────────

const business = {
  name: 'JunkAway Yorba Linda',
  shortName: 'JunkAway',
  tagline: 'Clutter in. JunkAway out.',
  siteUrl: 'https://junkawayyorbalinda.com',

  phone: {
    display: '(714) 386-1437',
    href: 'tel:+17143861437',
    sms: 'sms:+17143861437',
  },

  address: {
    city: 'Yorba Linda',
    region: 'CA',
    country: 'US',
  },

  // Used for "[City] and nearby areas" copy
  serviceAreaLabel: 'Yorba Linda and nearby areas',

  serviceAreas: [
    'Yorba Linda',
    'Anaheim Hills',
    'Placentia',
    'Brea',
    'Fullerton',
    'Villa Park',
    'Orange',
    'Chino Hills',
    'Corona',
  ],

  hours: 'Mon – Sun: By appointment',

  // Optional: paste a GHL / form webhook URL to receive estimate requests.
  // Left blank, the wizard still completes and shows the call-now confirmation.
  estimateWebhook: '',

  logo: {
    src: '/logo.png',
    light: '/logo-light.png',
    width: 900,
    height: 196,
  },

  colors: {
    cobalt: '#004AAD',
    cobaltDeep: '#00347D',
    ink: '#121212',
    amber: '#FFB400',
    paper: '#F6F8FC',
  },

  services: [
    {
      key: 'furniture',
      title: 'Furniture Removal',
      text: 'Couches, sectionals, mattresses, dressers, patio sets — carried out of any room, down any stairs.',
    },
    {
      key: 'appliance',
      title: 'Appliance Haul-Off',
      text: 'Fridges, washers, dryers, water heaters and more, disposed of the right way.',
    },
    {
      key: 'garage',
      title: 'Garage Cleanouts',
      text: 'Get your parking spot back. We clear years of boxes, tools and forgotten stuff in a single visit.',
    },
    {
      key: 'estate',
      title: 'Estate & Home Cleanouts',
      text: 'Respectful, thorough cleanouts for moves, downsizing, rentals and estates.',
    },
    {
      key: 'yard',
      title: 'Yard Waste & Debris',
      text: 'Branches, old fencing, dirt, sod and green waste hauled from the backyard to the curb and gone.',
    },
    {
      key: 'construction',
      title: 'Construction Debris',
      text: 'Drywall, tile, wood, cabinets and remodel leftovers cleared from homes and job sites.',
    },
    {
      key: 'hottub',
      title: 'Hot Tub & Shed Removal',
      text: 'We take apart and haul away hot tubs, sheds and playsets so you don’t have to.',
    },
    {
      key: 'commercial',
      title: 'Commercial Junk Removal',
      text: 'Offices, retail and property managers — scheduled pickups that work around your hours.',
    },
  ],

  steps: [
    {
      title: 'Call or request an estimate',
      text: 'Tell us what’s going and roughly how much. A quick photo or description is plenty.',
    },
    {
      title: 'Get your upfront price',
      text: 'We confirm the price on site before we touch anything. No surprise add-ons.',
    },
    {
      title: 'We load and haul it away',
      text: 'Our crew does all the lifting, sweeps up behind us, and the junk is gone the same visit.',
    },
  ],

  pricingIncludes: [
    'Free, no-obligation estimates',
    'Price based on how much space your items take in the truck',
    'All labor, loading and lifting included',
    'Disposal, dump and recycling fees included',
    'Sweep-up of the area after we load',
    'No hidden fees — the price we quote is the price you pay',
  ],

  // Real job photos (public/jobs). Section hides if this list is empty.
  beforeAfter: [
    {
      title: 'Backyard Cleanout',
      text: 'Furniture, lumber and debris cleared down to bare ground.',
      before: '/jobs/yard-before.jpg',
      after: '/jobs/yard-after.jpg',
    },
    {
      title: 'Kitchen Remodel Haul-Off',
      text: 'Old cabinets, drawers and a range gone from the driveway.',
      before: '/jobs/cabinets-before.jpg',
      after: '/jobs/cabinets-after.jpg',
    },
    {
      title: 'Mattress & Carpet Removal',
      text: 'Mattress, carpet rolls and glass panel off the patio.',
      before: '/jobs/patio-before.jpg',
      after: '/jobs/patio-after.jpg',
    },
  ],

  // Paste real customer reviews here (e.g. from your Google Business Profile).
  // The Reviews section stays hidden until at least one is added.
  // Example shape: { name: 'First L.', city: 'Yorba Linda', text: '...' }
  reviews: [],

  faqs: [
    {
      q: 'How much does junk removal cost?',
      a: 'Pricing is based on how much space your items take up in our truck, with labor, loading and disposal all included. Call or request a free estimate and we’ll give you an upfront price before any work starts.',
    },
    {
      q: 'Do I need to move items to the curb?',
      a: 'No. We pick up from wherever the junk is — garage, backyard, upstairs bedroom or attic. Just point and we’ll do the rest.',
    },
    {
      q: 'How soon can you come out?',
      a: 'We often have same-week and even same-day openings in Yorba Linda and nearby areas. Call us and we’ll find the soonest time that works.',
    },
    {
      q: 'What items can’t you take?',
      a: 'We can’t haul hazardous materials such as paint, chemicals, fuel, asbestos or medical waste. If you’re not sure about an item, just ask.',
    },
    {
      q: 'What happens to my stuff?',
      a: 'Whenever possible, usable items are donated and materials like metal and cardboard are recycled, so less ends up in the landfill.',
    },
    {
      q: 'Do I need to be home?',
      a: 'Not always. For outdoor or curbside pickups, we can coordinate the details by phone so you don’t have to be there.',
    },
  ],
};

export default business;
