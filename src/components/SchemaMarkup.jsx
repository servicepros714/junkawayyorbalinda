import business from '../data/business.js';

export default function SchemaMarkup() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${business.siteUrl}/#business`,
    name: business.name,
    url: business.siteUrl,
    logo: `${business.siteUrl}${business.logo.src}`,
    image: `${business.siteUrl}${business.logo.src}`,
    telephone: '+1-714-386-1437',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    areaServed: business.serviceAreas.map((city) => ({
      '@type': 'City',
      name: `${city}, ${business.address.region}`,
    })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
      description: 'By appointment',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Junk Removal Services',
      itemListElement: business.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
