const WP_BACKEND_URL =
  // eslint-disable-next-line no-nested-ternary
  process.env.NODE_ENV === 'development'
    ? 'https://dashboard.takwimu.africa'
    : 'https://dashboard.takwimu.africa';

const config = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://takwimu.africa',
  robots: {
    devHosts: ['dev.takwimu.africa', 'now.sh'],
    dev: `
User-agent: *
Disallow: /
    `,
    prod: `
User-agent: *
Disallow:
    `
  },
  WP_BACKEND_URL,
  WP_HURUMAP_DATA_API: `${WP_BACKEND_URL}/wp-json/hurumap-data`,
  ES_URL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:9200'
      : 'https://search-cfa-openafrica-z56l24lkfbv5erjxxs76sevr3i.eu-west-1.es.amazonaws.com',
  DEFAULT_LANG: 'en',
  country: {},
  tileData: [
    {
      index: 0,
      title: 'Research',
      link: 'https://pesacheck.org/fact-checking-claims-on-ugandas-trade-with-kenya-8797b87844f0',
      mediaSrc: 'http://placekitten.com/g/400/300',
      media: 'img'
    },
    {
      index: 1,
      title: 'Economy',
      link: 'https://pesacheck.org/did-uganda-earn-more-gold-than-from-coffee-for-the-first-time-in-march-2019-1f7f4bb71f6b',
      mediaSrc: 'http://placekitten.com/g/400/300',
      media: 'img'
    },
    {
      index: 2,
      title: 'Health',
      link: 'https://pesacheck.org/can-the-government-of-uganda-afford-to-run-an-airline-47288e3e559f',
      mediaSrc: 'http://placekitten.com/g/400/300',
      media: 'img'
    },
    {
      index: 3,
      title: 'Infrastructure',
      link: 'https://city-press.news24.com/News/a-farmers-15-year-wait-for-land-justice-20180822',
      mediaSrc: 'http://placekitten.com/g/400/300',
      media: 'img'
    }
  ],
  leftColumn: [
    {
      index: 0,
      subtitle: 'Job Creation',
      title: 'Research',
      link: 'https://pesacheck.org/fact-checking-claims-on-ugandas-trade-with-kenya-8797b87844f0',
      mediaSrc: 'http://placekitten.com/g/40/40'
    },
    {
      index: 1,
      subtitle: 'Coronavirus',
      title: 'Example article heading ',
      link: 'https://pesacheck.org/did-uganda-earn-more-gold-than-from-coffee-for-the-first-time-in-march-2019-1f7f4bb71f6b',
      mediaSrc: 'http://placekitten.com/g/40/30'
    },
    {
      index: 2,
      subtitle: 'Economy',
      title: 'Another article heading here',
      link: 'https://pesacheck.org/can-the-government-of-uganda-afford-to-run-an-airline-47288e3e559f',
      mediaSrc: 'http://placekitten.com/g/40/30'
    }
  ],
  countries: [
    {
      isoCode: 'KE',
      name: 'Kenya',
      isoName: 'Kenya',
      shortName: 'Kenya',
      slug: 'kenya',
      lang: 'en',
      published: true
    },
    {
      isoCode: 'NG',
      name: 'Nigeria',
      isoName: 'Nigeria',
      shortName: 'Nigeria',
      slug: 'nigeria',
      lang: 'en',
      published: true
    },
    {
      isoCode: 'ZA',
      name: 'South Africa',
      isoName: 'South Africa',
      shortName: 'South Africa',
      slug: 'south-africa',
      lang: 'en',
      published: true
    }
  ],
  settings: {
    mailingList: {
      href:
        'https://sibforms.com/serve/MUIEAAXyVOKndq92iptN5nNOxxO8YIbsJQ6GRLFcss45EFC4D-346vXQNHit8uLluJ44jcDUNQztzGSQSX3H_AHE7J71-tlgBI4-cS6dnZrjzgxQxnK2Hd89yCpi_SJDZyUAKo9GGBNqQmbJEgpCInlf403iFzCqHf75RaNFWuGd73QH6yNWhnvrmDGgj3N_DcbUt3GLDzcm_wIP'
    },
    navigation: {
      country_profiles:
        '<div class="rich-text"><p>Key Human Development metrics curated and visualised across 10 African countries.</p></div>'
    },
    support: {
      hello: 'hello@codeforafrica.org',
      support: 'support@codeforafrica.org'
    },
    socialMedia: {
      facebook: 'https://facebook.com/CodeForAfrica',
      twitter: 'https://twitter.com/Code4Africa',
      medium: 'https://medium.com/code-for-africa',
      linkedin: 'https://www.linkedin.com/company/code-for-africa/'
    },
    address: {
      locality: '84 Shortmarket St, Cape Town City Centre',
      region: 'Cape Town',
      country: 'South Africa',
      postalCode: '00100'
    }
  },
  page: {},
  name: 'outbreak.AFRICA',
  legalName: 'Code for Africa',
  description:
    'Data driven analysis on development policies, programmes & outcomes in 10 African countries.',
  media: {
    imageUrl: 'https://cfa-outbreakafrica.s3-eu-west-1.amazonaws.com/media/images',
    imageType: '.png'
  },
  populationTables: [
    'allPopulationSex2006S',
    'allPopulationSex2011S',
    'allPopulationSex2012S',
    'allPopulationSex2013S',
    'allPopulationSex2019S',
    'allPopulationResidence2012S',
    'allPopulationResidence2013S',
    /**
     * Countries have their populations in `allTotalPopulations`
     * Make sure we retrieve the latest population total
     */
    [
      'allTotalPopulations',
      {
        orderBy: 'TOTAL_POPULATION_YEAR_DESC',
        first: 1
      }
    ]
  ]
};

if (typeof document !== 'undefined') {
  // Same-Origin Policy
  document.domain = window.location.hostname;
}

export default config;
