import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import { getSitePage } from "@/outbreakafrica/cms";
import FeaturedExperts from "@/outbreakafrica/components/FeaturedExperts";
import FeaturedResearch from "@/outbreakafrica/components/FeaturedResearch";
import FeaturedStories from "@/outbreakafrica/components/FeaturedStories";
import Hero from "@/outbreakafrica/components/Hero";
import MythBusting from "@/outbreakafrica/components/MythBusting";
import Page from "@/outbreakafrica/components/Page";
import Partners from "@/outbreakafrica/components/Partners";
import Ticker from "@/outbreakafrica/components/Ticker";
import config from "@/outbreakafrica/config";
import { getOutbreakStatus } from "@/outbreakafrica/lib/";
import { withApollo } from "@/outbreakafrica/lib/apollo";

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

function Index({ errorCode, outbreak, featuredExperts, ...props }) {
  const classes = useStyles(props);

  const {
    status,
    page: {
      myth,
      partners,
      subscribe,
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
          url: "https://github.com/CSSEGISandData/COVID-19",
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
  errorCode: PropTypes.number,
  featuredExperts: PropTypes.shape({}),
  outbreak: PropTypes.shape({
    language: PropTypes.string,
    page: PropTypes.shape({
      documents_and_datasets: PropTypes.shape({}),
      featured_experts: PropTypes.shape({
        experts: PropTypes.arrayOf(PropTypes.shape({})),
      }),
      featured_stories: PropTypes.shape({}),
      hero_content: PropTypes.shape({}),
      join_us: PropTypes.shape({}),
      myth: PropTypes.shape({}),
      partners: PropTypes.arrayOf(PropTypes.shape({})),
      rendered: PropTypes.string,
      subscribe: PropTypes.shape({}),
      title: PropTypes.shape({
        rendered: PropTypes.string,
      }),
    }),
    status: PropTypes.shape({
      values: PropTypes.shape({}),
    }),
  }),
};

Index.defaultProps = {
  errorCode: undefined,
  featuredExperts: undefined,
  outbreak: undefined,
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
