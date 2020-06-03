const WP_BACKEND_URL =
  process.env.NODE_ENV === "development"
    ? "https://dashboard.hurumap.org"
    : "https://dashboard.hurumap.org";

const GRAPHQL_ORIGIN =
  process.env.NODE_ENV === "development"
    ? "https://graphql.hurumap.org"
    : "https://graphql.hurumap.org";

const config = {
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://takwimu.africa",
  graphqlOrigin: GRAPHQL_ORIGIN,
  graphqlURI: `${GRAPHQL_ORIGIN}/graphql`,
  robots: {
    devHosts: ["dev.hurumap.org", "now.sh"],
    dev: `
User-agent: *
Disallow: /
    `,
    prod: `
User-agent: *
Disallow:
    `,
  },
  WP_BACKEND_URL,
  WP_HURUMAP_DATA_API: `${WP_BACKEND_URL}/wp-json/hurumap-data`,
  ES_URL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:9200"
      : "https://search-cfa-openafrica-z56l24lkfbv5erjxxs76sevr3i.eu-west-1.es.amazonaws.com",
  MAPIT_URL: "https://dev.mapit.hurumap.org",
  DEFAULT_LANG: "en",
  country: {},
  researchMenu: [
    {
      name: "Featured Expert",
      href: "/research/featured-experts",
    },
    {
      name: "Featured Documents",
      href: "/research/featured-documents",
    },
    {
      name: "Featured Datasets",
      href: "/research/featured-datasets",
    },
  ],
  insightsMenu: [
    {
      name: "Analysis",
      href: "/insights/analysis",
    },
    {
      name: "Myth-Busters",
      href: "/insights/mythbusters",
    },
    {
      name: "Featured Stories",
      href: "/insights/featured-stories",
    },
    {
      name: "Resources",
      href: "/insights/resources",
    },
  ],

  tileData: [
    {
      index: 0,
      title: "Research",
      link:
        "https://pesacheck.org/fact-checking-claims-on-ugandas-trade-with-kenya-8797b87844f0",
      mediaSrc: "http://placekitten.com/g/400/300",
      media: "img",
    },
    {
      index: 1,
      title: "Economy",
      link:
        "https://pesacheck.org/did-uganda-earn-more-gold-than-from-coffee-for-the-first-time-in-march-2019-1f7f4bb71f6b",
      mediaSrc: "http://placekitten.com/g/400/300",
      media: "img",
    },
    {
      index: 2,
      title: "Health",
      link:
        "https://pesacheck.org/can-the-government-of-uganda-afford-to-run-an-airline-47288e3e559f",
      mediaSrc: "http://placekitten.com/g/400/300",
      media: "img",
    },
    {
      index: 3,
      title: "Infrastructure",
      link:
        "https://city-press.news24.com/News/a-farmers-15-year-wait-for-land-justice-20180822",
      mediaSrc: "http://placekitten.com/g/400/300",
      media: "img",
    },
  ],
  leftColumn: [
    {
      index: 0,
      subtitle: "Job Creation",
      title: "Research",
      link:
        "https://pesacheck.org/fact-checking-claims-on-ugandas-trade-with-kenya-8797b87844f0",
      mediaSrc: "http://placekitten.com/g/40/40",
    },
    {
      index: 1,
      subtitle: "Coronavirus",
      title: "Example article heading ",
      link:
        "https://pesacheck.org/did-uganda-earn-more-gold-than-from-coffee-for-the-first-time-in-march-2019-1f7f4bb71f6b",
      mediaSrc: "http://placekitten.com/g/40/30",
    },
    {
      index: 2,
      subtitle: "Economy",
      title: "Another article heading here",
      link:
        "https://pesacheck.org/can-the-government-of-uganda-afford-to-run-an-airline-47288e3e559f",
      mediaSrc: "http://placekitten.com/g/40/30",
    },
  ],
  countries: [
    {
      isoCode: "KE",
      name: "Kenya",
      isoName: "Kenya",
      shortName: "Kenya",
      slug: "kenya",
      lang: "en",
      published: true,
    },
    {
      isoCode: "NG",
      name: "Nigeria",
      isoName: "Nigeria",
      shortName: "Nigeria",
      slug: "nigeria",
      lang: "en",
      published: true,
    },
    {
      isoCode: "ZA",
      name: "South Africa",
      isoName: "South Africa",
      shortName: "South Africa",
      slug: "south-africa",
      lang: "en",
      published: true,
    },
    {
      isoCode: "GH",
      name: "Ghana",
      isoName: "Ghana",
      shortName: "Ghana",
      slug: "ghana",
      lang: "en",
      published: true,
    },
    {
      isoCode: "MA",
      name: "Morocco",
      isoName: "Morocco",
      shortName: "Morocco",
      slug: "morocco",
      lang: "en",
      published: true,
    },
  ],
  settings: {
    mailingList: {
      href:
        "https://sibforms.com/serve/MUIEAAXyVOKndq92iptN5nNOxxO8YIbsJQ6GRLFcss45EFC4D-346vXQNHit8uLluJ44jcDUNQztzGSQSX3H_AHE7J71-tlgBI4-cS6dnZrjzgxQxnK2Hd89yCpi_SJDZyUAKo9GGBNqQmbJEgpCInlf403iFzCqHf75RaNFWuGd73QH6yNWhnvrmDGgj3N_DcbUt3GLDzcm_wIP",
    },
    navigation: {
      country_profiles:
        '<div class="rich-text"><p>Key Human Development metrics curated and visualised across 10 African countries.</p></div>',
    },
    support: {
      hello: "hello@codeforafrica.org",
      support: "support@codeforafrica.org",
    },
    socialMedia: {
      facebook: "https://facebook.com/CodeForAfrica",
      twitter: "https://twitter.com/Code4Africa",
      medium: "https://medium.com/code-for-africa",
      linkedin: "https://www.linkedin.com/company/code-for-africa/",
    },
    address: {
      locality: "84 Shortmarket St, Cape Town City Centre",
      region: "Cape Town",
      country: "South Africa",
      postalCode: "00100",
    },
  },
  page: {},
  name: "outbreak.AFRICA",
  legalName: "Code for Africa",
  description:
    "Data driven analysis on development policies, programmes & outcomes in 10 African countries.",
  media: {
    imageUrl:
      "https://cfa-outbreakafrica.s3-eu-west-1.amazonaws.com/media/images",
    imageType: ".png",
  },
  populationTables: [
    "allPopulationSex2019S",
    "allPopulationResidence2009S",
    "allPopulationZa2016S",
  ],
  colorIndexTable: {
    all: "allFinalVulnerabilityIndices",
    "demographic-vulnerability": "allDemographicsVulnerabilityIndices",
    "epidemiological-factors": "allEpidemiologicalFactorsVulnerabilityIndices",
    "healthcare-system-factors": "allHealthcareSystemsVulnerabilityIndices",
    "wash-basic-services": "allWashVulnerabilityIndices",
  },
  colorIndexField: "rating",
  colorScoreField: "score",
  colorScoreLabel: {
    all: "All Section Vulnerability Score",
    "demographic-vulnerability": "Demographics Vulnerability Score",
    "epidemiological-factors": "Epidemiological Factors Vulnerability Score",
    "healthcare-system-factors":
      "Healthcare Systems Factors Vulnerability Score",
    "wash-basic-services": "WASH/ Basic Services Vulnerability Score",
  },
  vulnerabilityIndexColor: {
    "very high": "#004cff",
    high: "#266cff",
    moderate: "#4d8cff",
    low: "#73acff",
    "very low": "#99ccff",
  },
  faqTopics: [
    {
      title: 'Topic 1',
      slug: 'topic-1',
      topics: [
        {
          panel: 'panel1',
          subtitle: 'Question',
          content: `Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure
                Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical
                literature, discovered the undoubtable source.`

        },
        {
          panel: 'panel2',
          subtitle: 'Question',
          content: `Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure
                Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical
                literature, discovered the undoubtable source.`

        },
        {
          panel: 'panel3',
          subtitle: 'Question',
          content: `Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure
                Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical
                literature, discovered the undoubtable source.`

        },
        {
          panel: 'panel4',
          subtitle: 'Question',
          content: `Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure
                Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical
                literature, discovered the undoubtable source.`

        }
      ]
    },
    {
      title: 'Topic 2',
      slug: 'topic-2',
      topics: [
        {
          panel: 'panel5',
          subtitle: 'Question',
          content: `Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure
                Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical
                literature, discovered the undoubtable source.`

        },
        {
          panel: 'panel6',
          subtitle: 'Question',
          content: `Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure
                Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical
                literature, discovered the undoubtable source.`

        },
        {
          panel: 'panel7',
          subtitle: 'Question',
          content: `Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure
                Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical
                literature, discovered the undoubtable source.`

        },
        {
          panel: 'panel8',
          subtitle: 'Question',
          content: `Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure
                Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical
                literature, discovered the undoubtable source.`

        }
      ]
    },
    {
      title: 'Topic 3',
      slug: 'topic-3',
      topics: [
        {
          panel: 'panel9',
          subtitle: 'Question',
          content: `Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure
                Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical
                literature, discovered the undoubtable source.`

        },
        {
          panel: 'panel10',
          subtitle: 'Question',
          content: `Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure
                Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical
                literature, discovered the undoubtable source.`

        },
        {
          panel: 'panel11',
          subtitle: 'Question',
          content: `Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure
                Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical
                literature, discovered the undoubtable source.`

        },
        {
          panel: 'panel12',
          subtitle: 'Question',
          content: `Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure
                Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical
                literature, discovered the undoubtable source.`

        }
      ]
    },
    {
      title: 'Topic 4',
      slug: 'topic-4',
      topics: [
        {
          panel: 'panel13',
          subtitle: 'Question',
          content: `Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure
                Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical
                literature, discovered the undoubtable source.`

        },
        {
          panel: 'panel14',
          subtitle: 'Question',
          content: `Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure
                Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical
                literature, discovered the undoubtable source.`

        },
        {
          panel: 'panel15',
          subtitle: 'Question',
          content: `Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure
                Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical
                literature, discovered the undoubtable source.`

        },
        {
          panel: 'panel16',
          subtitle: 'Question',
          content: `Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure
                Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical
                literature, discovered the undoubtable source.`

        }
      ]
    }
  ],
  CKAN_BACKEND_URL: "https://openafrica.net",
  DATA_OPTIONS: {
    day: "short",
    month: "long",
    year: "numeric",
  },

};

if (typeof document !== "undefined") {
  // Same-Origin Policy
  document.domain = window.location.hostname;
}

export default config;
