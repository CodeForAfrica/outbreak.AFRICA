import React from 'react'

import { makeStyles } from "@material-ui/core/styles";

import Page from 'components/Page';
import Hero from "components/Hero";
import Subscribe from "components/Subscribe";
import ProfileList from 'components/Research/ProfileList'

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
  subscribe: {
    marginTop: '4rem'
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
  return (
    <Page classes={{ section: classes.section }}>
      <Hero classes={{ section: classes.section }} />
      <div classes={{ section: classes.section }} >
        <ProfileList profiles={profiles} />
      </div>
      <div className={classes.sectionGrid}>
        <Subscribe />
      </div>
    </Page>
  )
}

export default Research;
