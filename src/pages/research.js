import React from 'react'

import { makeStyles } from "@material-ui/core/styles";

import Page from 'components/Page';
import Hero from "components/Hero";
import FeaturedResearch from "components/FeaturedResearch";
import FeaturedResearchers from "components/FeaturedResearchers";

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
  }
}));


function Research() {
  const classes = useStyles();
  const profiles = getProfiles();
  const stories = getStories();

  return (
    <Page classes={{ section: classes.section }}>
      <Hero classes={{ section: classes.section }} />
      <FeaturedResearchers
        profiles={profiles}
        classes={{
          root: classes.featuredResearchers,
          section: classes.section,
        }}
      />

      <FeaturedResearch
        classes={{
          root: classes.featuredResearchers,
          section: classes.section,
        }}
      />

    </Page>
  )
}

export default Research;
