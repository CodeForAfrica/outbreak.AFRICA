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

const useStyles = makeStyles((theme) => ({
  root: {},
  section: {
    margin: "0 1.25rem 0 1.375rem",
    width: "auto",
    [theme.breakpoints.up("lg")]: {
      margin: "0 auto",
      width: "78.5rem",
    },
    [theme.breakpoints.up("xl")]: {
      margin: "0 auto",
      width: "102.5rem",
    },
  },
  featuredData: {
    marginTop: "2.875rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "9.92125rem",
    },
  },
  featuredResearch: {
    marginTop: "4.375rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "4.375rem",
    },
  },
  featuredResearchers: {
    marginTop: "3.5rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "3.8125rem",
    },
  },
  featuredStories: {
    marginTop: "3rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "8.3125rem",
    },
  },
  mythBusting: {
    marginTop: "6.375rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "11.75rem",
    },
  },
  partners: {
    marginTop: "4.96875rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "11.75rem",
    },
  },
  ticker: {
    marginTop: "6.1875rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "3.8125rem",
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
      rendered,
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
        featuredContent={rendered}
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
