import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import config from "config";
import { getSitePage } from "cms";

import FeaturedData from "components/FeaturedData";
import FeaturedResearch from "components/FeaturedResearch";
import FeaturedResearchers from "components/FeaturedResearchers";
import FeaturedStories from "components/FeaturedStories";
import Hero from "components/Hero";
import MythBusting from "components/MythBusting";
import Page from "components/Page";
import Partners from "components/Partners";
import Ticker from "components/Ticker";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {},
  section: {
    margin: "0 1.25rem 0 1.375rem",
    width: "auto",
    [breakpoints.up("lg")]: {
      margin: "0 auto",
      width: "82.5rem",
    },
    [breakpoints.up("xl")]: {
      margin: "0 auto",
      width: "102.5rem",
    },
  },
  featuredData: {
    marginTop: typography.pxToRem(46),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(78.74),
    },
  },
  featuredResearch: {
    marginTop: typography.pxToRem(71),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(104),
    },
  },
  featuredResearchers: {
    marginTop: typography.pxToRem(56),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(133),
    },
  },
  featuredStories: {
    marginTop: typography.pxToRem(58),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(133),
    },
  },
  mythBusting: {
    marginTop: typography.pxToRem(56.5),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(142.5),
    },
  },
  partners: {
    marginTop: typography.pxToRem(79.5),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(155.5),
    },
  },
  ticker: {
    marginTop: typography.pxToRem(53.5),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(61),
    },
  },
}));

function Home({ outbreak, ...props }) {
  const classes = useStyles(props);

  const {
    page: {
      myth,
      partners,
      subscribe,
      hero_carousel: heroCarousel,
      documents_and_datasets: documentsAndDatasets,
      featured_stories: featuredStories,
      featured_experts: featuredExperts,
      join_us: joinUs,
    },
  } = outbreak;

  return (
    <Page outbreak={outbreak} classes={{ section: classes.section }}>
      <Hero
        heroCarousel={heroCarousel}
        classes={{ section: classes.section }}
      />
      <Ticker
        source={{
          title: "openAFRICA",
          url: "https://open.africa",
        }}
        statuses={[
          {
            name: "Infections",
            status: "Confirmed",
            value: "3,721",
          },
          {
            name: "Deaths",
            status: "Confirmed",
            value: "670",
            highlight: true,
          },
          {
            name: "Active",
            status: "Confirmed",
            value: "2621",
          },
          {
            name: "Recoveries",
            status: "Confirmed",
            value: "730",
          },
        ]}
        title="Covid-19 cases in Africa"
        classes={{ root: classes.ticker, section: classes.section }}
      />
      <FeaturedData
        classes={{ root: classes.featuredData, section: classes.section }}
      />
      <FeaturedResearch
        documentsAndDatasets={documentsAndDatasets}
        classes={{
          root: classes.featuredResearch,
          section: classes.section,
        }}
        heroCarousel
      />
      <FeaturedResearchers
        featuredExperts={featuredExperts}
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
        featuredStories={featuredStories}
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

Home.propTypes = {
  outbreak: PropTypes.shape({
    language: PropTypes.string,
    page: PropTypes.shape({
      rendered: PropTypes.string,
    }),
  }).isRequired,
};

Home.getInitialProps = async (props) => {
  const {
    query: { lang: pageLanguage },
  } = props;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("index", lang);

  return {
    outbreak,
  };
};

export default Home;
