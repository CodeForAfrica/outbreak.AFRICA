import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Page from "components/Page";
import Hero from "components/Hero";
import Subscribe from "components/Subscribe";
import ProfileList from "components/Research/ProfileList";
import JoinUs from 'components/JoinUs'

import config from "config";
import { getSitePage } from "cms";
import { getProfiles } from "lib";

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
  featuredExperts: {
    marginTop: "3.5rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "3.8125rem",
    },
  },
  subscribe: {
    marginTop: "3.5rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "3.8125rem",
    },
  },
  joinUS: {
    marginTop: "3.5rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "3.8125rem",
    }
  }
}));

function Research({ outbreak, ...props }) {
  const classes = useStyles(props);
  const {
    page: {
      hero_carousel: heroCarousel,
      join_us: joinUs, },
  } = outbreak;
  const profiles = getProfiles();

  return (
    <Page outbreak={outbreak} classes={{ section: classes.section }}>
      <Hero
        heroCarousel={heroCarousel}
        classes={{ section: classes.section }}
      />
      <ProfileList
        profiles={profiles}
        classes={{
          root: classes.featuredExperts,
          section: classes.section,
        }}
      />
      <Subscribe
        classes={{
          root: classes.subscribe,
          section: classes.section,
        }}
      />
      <JoinUs
        classes={{
          root: classes.joinUS,
          section: classes.section,
        }}
        joinUs={joinUs}
        title="Join Us"
        subtitle="Be part of our initiative"
      />
    </Page>
  );
}

Research.getInitialProps = async (props) => {
  const {
    query: { lang: pageLanguage },
  } = props;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("index", lang);

  return {
    outbreak,
  };
};

export default Research;
