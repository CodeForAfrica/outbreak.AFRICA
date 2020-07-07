import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import FeaturedData from "components/FeaturedData";
import FeaturedResearch from "components/FeaturedResearch";
import FeaturedExperts from "components/FeaturedExperts";
import FeaturedStories from "components/FeaturedStories";
import Hero from "components/Hero";
import MythBusting from "components/MythBusting";
import Page from "components/Page";
import Partners from "components/Partners";
import Ticker from "components/Ticker";

import config from "config";
import { getSitePage } from "cms";
import { withApollo } from "lib/apollo";
import { getOutbreakStatus } from "lib/";

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
  root: {},
  section: {
    margin: "0 1.25rem 0 1.375rem",
    width: "auto",
    /** Since our design if of XL, we're going to optimize for space in
     * MD & LG i.e. minimize margins
     */
    [breakpoints.up("md")]: {
      margin: "0 auto",
      width: widths.values.md,
    },
    [breakpoints.up("lg")]: {
      width: widths.values.lg,
    },
    [breakpoints.up("xl")]: {
      width: widths.values.xl,
    },
  },
  featuredData: {
    marginTop: typography.pxToRem(46),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(50),
    },
  },
  featuredResearch: {
    marginTop: typography.pxToRem(71),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(50),
    },
  },
  featuredResearchers: {
    marginTop: typography.pxToRem(56),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(50),
    },
  },
  featuredStories: {
    marginTop: typography.pxToRem(58),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(50),
    },
  },
  mythBusting: {
    marginTop: typography.pxToRem(56.5),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(50),
    },
  },
  partners: {
    marginTop: typography.pxToRem(79.5),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(50),
    },
  },
  ticker: {
    marginTop: typography.pxToRem(53.5),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(61),
    },
  },
}));

function Index({ outbreak, featuredExperts, ...props }) {
  const classes = useStyles(props);

  const {
    errorCode,
    status,
    page: {
      myth,
      partners,
      subscribe,
      rendered,
      hero_content: heroContent,
      documents_and_datasets: documentsAndDatasets,
      featured_stories: featuredStories,
      join_us: joinUs,
    },
  } = outbreak;

  return (
    <Page
      errorCode={errorCode}
      outbreak={outbreak}
      classes={{ section: classes.section }}
    >
      <Hero heroContent={heroContent} classes={{ section: classes.section }} />
      <Ticker
        source={{
          title: "CSSE at Johns Hopkins University",
          url: "//github.com/CSSEGISandData/COVID-19",
        }}
        statuses={[
          {
            name: "Infections",
            status: "Confirmed",
            slug: "confirmed",
          },
          {
            name: "Deaths",
            status: "Confirmed",
            slug: "deaths",
            highlight: true,
          },
          {
            name: "Active",
            status: "Confirmed",
            slug: "active",
          },
          {
            name: "Recoveries",
            status: "Confirmed",
            slug: "recovered",
          },
        ]}
        values={status.values}
        title="Covid-19 cases in Africa"
        classes={{ root: classes.ticker, section: classes.section }}
      />
      <FeaturedData
        featuredContent={rendered}
        classes={{ root: classes.featuredData, section: classes.section }}
      />
      <FeaturedResearch
        documentsAndDatasets={documentsAndDatasets}
        classes={{
          root: classes.featuredResearch,
          section: classes.section,
        }}
        heroContent
      />
      <FeaturedExperts
        {...featuredExperts}
        icons={config.settings.icons}
        classes={{
          root: classes.featuredResearchers,
          section: classes.section,
        }}
      />
      <MythBusting
        myth={myth}
        classes={{ root: classes.mythBusting, section: classes.section }}
      />
      <FeaturedStories
        {...featuredStories}
        classes={{ root: classes.featuredStories, section: classes.section }}
      />
      <Partners
        partners={partners}
        subscribe={subscribe}
        joinUs={joinUs}
        classes={{ root: classes.partners, section: classes.section }}
      />
    </Page>
  );
}

Index.propTypes = {
  outbreak: PropTypes.shape({
    language: PropTypes.string,
    page: PropTypes.shape({
      rendered: PropTypes.string,
    }),
  }).isRequired,
};

// withApollo uses page component's getInitialProps to supply GraphQL data &
// hence we must not use getServerSideProps where we're using withApollo.
Index.getInitialProps = async ({ query }) => {
  const { lang: pageLanguage } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const {
    page: { featured_experts: featuredExperts },
  } = await getSitePage("research-experts", lang);
  const outbreak = await getSitePage("index", lang);
  const status = await getOutbreakStatus();
  const errorCode = status.error ? 500 : null;
  if (status.values) {
    outbreak.status = status;
  }

  return {
    errorCode,
    outbreak,
    featuredExperts,
  };
};

export default withApollo({ ssr: true })(Index);
