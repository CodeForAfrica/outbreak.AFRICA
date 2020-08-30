import imgLinkedIn from "assets/Icon awesome-linkedin-in-b.svg";
import imgLinkedInDesktop from "assets/Icon awesome-linkedin-in.svg";
import imgTwitter from "assets/Icon awesome-twitter-b.svg";
import imgTwitterDesktop from "assets/Icon awesome-twitter.svg";
import imgWebsite from "assets/icon web.svg";
import imgWebsiteDesktop from "assets/icon web-white.svg";

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
      : "https://covid19.dev.hurumap.org",
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
  MAPIT_URL: "https://mapit.hurumap.org",
  DEFAULT_LANG: "en",
  country: {},
  navigation: [
    {
      title: "Data",
      url: "#",
      subnav: false,
    },
    {
      title: "Research",
      url: "/research",
      subnav: [
        {
          title: "Featured Expert",
          url: "/research/featured-experts",
        },
        {
          title: "Featured Documents",
          url: "/research/featured-documents",
        },
        {
          title: "Featured Datasets",
          url: "/research/featured-datasets",
        },
      ],
    },
    {
      title: "Insights",
      url: "/insights",
      subnav: [
        {
          title: "Analysis",
          url: "/insights/analysis",
        },
        {
          title: "Myth-Busters",
          url: "/insights/mythbusters",
        },
        {
          title: "Featured Stories",
          url: "/insights/featured-stories",
        },
        {
          title: "Resources",
          url: "/insights/resources",
        },
      ],
    },
  ],
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
      isoCode: "ZA",
      name: "South Africa",
      isoName: "South Africa",
      shortName: "South Africa",
      slug: "south-africa",
      lang: "en",
      published: true,
    },
  ],
  settings: {
    icons: {
      mobile: {
        linkedIn: {
          image: {
            url: imgLinkedIn,
          },
        },
        twitter: {
          image: {
            url: imgTwitter,
          },
        },
        website: {
          image: {
            url: imgWebsite,
          },
        },
      },
      desktop: {
        linkedIn: {
          image: {
            url: imgLinkedInDesktop,
          },
        },
        twitter: {
          image: {
            url: imgTwitterDesktop,
          },
        },
        website: {
          image: {
            url: imgWebsiteDesktop,
          },
        },
      },
    },
    subscribe: {
      embedCode: `
        <!-- Begin Mailchimp Signup Form -->
        <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">
        <style type="text/css">
          #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
          /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
             We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
        </style>
        <div id="mc_embed_signup">
        <form action="https://codeforafrica.us6.list-manage.com/subscribe/post?u=65e5825507b3cec760f272e79&amp;id=286e6e3985" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
          <label for="mce-EMAIL">Subscribe</label>
          <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Enter your email address" required>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_65e5825507b3cec760f272e79_286e6e3985" tabindex="-1" value=""></div>
            <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
            </div>
        </form>
        </div>
        <!--End mc_embed_signup-->
      `,
    },
    join: {
      embedCode: `
        <!-- Begin Mailchimp Signup Form -->
        <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
        <style type="text/css">
          /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
             We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
        </style>
        <div id="mc_embed_signup">
        <form action="https://codeforafrica.us6.list-manage.com/subscribe/post?u=65e5825507b3cec760f272e79&amp;id=286e6e3985" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
          <h2>Subscribe</h2>
        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
        <div class="mc-field-group">
          <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
        </label>
          <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
        </div>
        <div class="mc-field-group">
          <label for="mce-FNAME">First Name </label>
          <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
        </div>
        <div class="mc-field-group">
          <label for="mce-LNAME">Last Name </label>
          <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
        </div>
        <div class="mc-field-group size1of2">
          <label for="mce-PHONE">WhatsApp Number </label>
          <input type="text" name="PHONE" class="" value="" id="mce-PHONE">
        </div>
        <div class="mc-field-group">
          <label for="mce-MMERGE3">Organisation </label>
          <input type="text" value="" name="MMERGE3" class="" id="mce-MMERGE3">
        </div>
        <div class="mc-field-group input-group">
            <strong>Update Preferences </strong>
            <ul><li><input type="checkbox" value="1" name="group[13586][1]" id="mce-group[13586]-13586-0"><label for="mce-group[13586]-13586-0">Code for Africa news and project updates</label></li>
        <li><input type="checkbox" value="2" name="group[13586][2]" id="mce-group[13586]-13586-1"><label for="mce-group[13586]-13586-1">Outbreak.AFRICA alerts</label></li>
        <li><input type="checkbox" value="4" name="group[13586][4]" id="mce-group[13586]-13586-2"><label for="mce-group[13586]-13586-2">Misinformation updates</label></li>
        <li><input type="checkbox" value="8" name="group[13586][8]" id="mce-group[13586]-13586-3"><label for="mce-group[13586]-13586-3">New datasets</label></li>
        <li><input type="checkbox" value="16" name="group[13586][16]" id="mce-group[13586]-13586-4"><label for="mce-group[13586]-13586-4">New research papers</label></li>
        <li><input type="checkbox" value="32" name="group[13586][32]" id="mce-group[13586]-13586-5"><label for="mce-group[13586]-13586-5">New coalition members</label></li>
        <li><input type="checkbox" value="64" name="group[13586][64]" id="mce-group[13586]-13586-6"><label for="mce-group[13586]-13586-6">How to support Outbreak.AFRICA</label></li>
        </ul>
        </div>
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_65e5825507b3cec760f272e79_286e6e3985" tabindex="-1" value=""></div>
            <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
            </div>
        </form>
        </div>
        <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[4]='PHONE';ftypes[4]='phone';fnames[3]='MMERGE3';ftypes[3]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
        <!--End mc_embed_signup-->
      `,
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
  page: {
    about: {
      about:
        "How should Africa, with its fragile healthcare systems and large informal economies tailor global strategies for fighting Covid-19 to ensure they are feasible and effective locally? African policymakers and health agencies need evidence-based insights with strong local context to make informed decisions. Outbreak.AFRICA seeks to help by giving actionable data and expert insights.",
      initiative:
        "This Code for Africa initiative was made possible with support from the Pulitzer Center on Crisis Reporting.",
    },
    initiative_logo: {
      image:
        "https://dashboard.hurumap.org/wp-content/uploads/2020/05/pulitzer.png",
      link: "#",
      alt: "Pulitzer Center",
    },
    legal_links: [
      {
        label: "PRIVACY POLICY",
        href: "/legal/privacy",
      },
      {
        label: "TERMS OF SERVICE",
        href: "/legal/terms",
      },
    ],
    organization_logo: {
      image: "https://dashboard.hurumap.org/wp-content/uploads/2020/05/cfa.png",
      link: "//codeforafrica.org",
      alt: "CodeforAfrica",
    },
    quick_links: [
      {
        title: "About Us",
        links: [
          {
            label: "The project",
            href: "/about/project",
          },
          {
            label: "The team",
            href: "/about/team",
          },
          {
            label: "The partners",
            href: "/about/partners",
          },
          {
            label: "Methodology",
            href: "/methodology",
          },
        ],
      },
      {
        title: "More",
        links: [
          {
            label: "Subscribe",
            href: "/subscribe",
          },
          {
            label: "Join Us",
            href: "/join",
          },
        ],
      },
    ],
    social_media: [
      {
        url: "https://www.linkedin.com/company/code-for-africa/",
        image: {
          url:
            "https://dashboard.hurumap.org/wp-content/uploads/2020/07/linkedin-1.png",
          alt: "",
        },
      },
      {
        url:
          "https://twitter.com/Code4Africa?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        image: {
          url:
            "https://dashboard.hurumap.org/wp-content/uploads/2020/07/twitter-1.png",
          alt: "",
        },
      },
      {
        url: "https://www.facebook.com/CodeForAfrica/",
        image: {
          url:
            "https://dashboard.hurumap.org/wp-content/uploads/2020/07/facebook-1.png",
          alt: "",
        },
      },
      {
        url: "https://github.com/codeforafrica",
        image: {
          url:
            "https://dashboard.hurumap.org/wp-content/uploads/2020/07/github-image-1.png",
          alt: "",
        },
      },
    ],
  },
  name: "Outbreak.africa",
  legalName: "Code for Africa",
  description:
    "Contextual data with actionable insights: Data driven analysis on Covid-19 in Africa",
  media: {
    imageUrl:
      "https://cfa-outbreakafrica.s3-eu-west-1.amazonaws.com/media/images",
    imageType: ".png",
  },
  populationTables: ["allPopulationKe2019S", "allPopulationZa2016S"],
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
  status: {
    url:
      "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports",
    countries: [
      "Algeria",
      "Angola",
      "Benin",
      "Botswana",
      "Burkina Faso",
      "Burundi",
      "Cabo Verde",
      "Cameroon",
      "Central African Republic",
      "Chad",
      "Comoros",
      "Congo (Brazzaville)",
      "Congo (Kinshasa)",
      "Cote d'Ivoire",
      "Djibouti",
      "Egypt",
      "Equatorial Guinea",
      "Eritrea",
      "Eswatini",
      "Ethiopia",
      "Gabon",
      "Gambia, The",
      "Ghana",
      "Guinea",
      "Guinea Bissau",
      "Kenya",
      "Lesotho",
      "Liberia",
      "Libya",
      "Madagascar",
      "Malawi",
      "Mali",
      "Mauritania",
      "Mauritius",
      "Morocco",
      "Mozambique",
      "Namibia",
      "Niger",
      "Nigeria",
      "Rwanda",
      "Sao Tome and Principe",
      "Senegal",
      "Seychelles",
      "Sierra Leone",
      "Somalia",
      "South Africa",
      "South Sudan",
      "Sudan",
      "Tanzania",
      "Togo",
      "Tunisia",
      "Uganda",
      "Western Sahara",
      "Zambia",
      "Zimbabwe",
    ],
    values: null,
    lastUpdated: null,
  },
  CKAN_BACKEND_URL: "https://openafrica.net",
  DATA_OPTIONS: {
    day: "short",
    month: "long",
    year: "numeric",
  },
};

if (typeof document !== "undefined") {
  // Same-Origin Policy
  if (!window.location.hostname.includes("hurumap.org")) {
    document.domain = window.location.hostname;
  } else {
    document.domain = "hurumap.org";
  }
}

export default config;
