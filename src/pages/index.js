import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import FeaturedData from "components/FeaturedData";
import FeaturedResearch from "components/FeaturedResearch";
import FeaturedResearchers from "components/FeaturedResearchers";
import FeaturedStories from "components/FeaturedStories";
import Hero from "components/Hero";
import MythBusting from "components/MythBusting";
import Page from "components/Page";
import Partners from "components/Partners";
import Ticker from "components/Ticker";

import { getProfiles, getStories } from "lib";

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

function Home(props) {
  const classes = useStyles(props);
  const profiles = getProfiles();
  const stories = getStories();

  return (
    <Page classes={{ section: classes.section }}>
      <Hero classes={{ section: classes.section }}/>
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
        classes={{
          root: classes.featuredResearchers,
          section: classes.section,
        }}
      />
      <FeaturedResearchers
        profiles={profiles}
        classes={{
          root: classes.featuredResearchers,
          section: classes.section,
        }}
      />

      <MythBusting
        title="Myth-busting"
        description={`
              A searchable database of
              <span class="highlight">debunked misinformation</span>
               <br />
              backed up by a transnational team of expert
              <span class="highlight">
              African fact-
              <br />
              checkers
              </span>
              to help you test new questionable claims.
        `}
        linkText="LEARN MORE"
        classes={{ root: classes.mythBusting, section: classes.section }}
      />
      <FeaturedStories
        stories={stories}
        classes={{ root: classes.featuredStories, section: classes.section }}
      />
      <Partners classes={{ root: classes.partners, section: classes.section }} />
    </Page>
  );
}

export default Home;
