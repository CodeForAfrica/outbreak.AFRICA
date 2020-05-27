import React from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { A } from "@commons-ui/core";

import Page from "components/Page";
import Hero from "components/Hero";
import Subscribe from "components/Subscribe";
import ExpertList from "components/Research/ExpertList";

import config from "config";
import { getSitePage } from "cms";

import linkedIn from "assets/Icon awesome-linkedin-in.svg";
import twitter from "assets/Icon awesome-twitter.svg";
import website from "assets/icon web-white.svg";

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
  featuredExperts: {},
  subscribe: {
    marginTop: "3.5rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "3.8125rem",
    },
  },
  icon: {
    objectFit: "contain",
  },
  link: {
    display: "inline-block",
    paddingRight: "1rem",
  },
  profileItemChildren: {
    zIndex: 1,
  },
}));

function Research({ outbreak, ...props }) {
  const classes = useStyles(props);
  const {
    page: {
      hero_carousel: heroCarousel,
      subscribe,
      featured_experts: { experts },
      section_title: title,
      title: { rendered: pageTitle },
    },
  } = outbreak;

  const profiles =
    experts &&
    experts.map((profile, index) => {
      return {
        id: index,
        name: profile.name,
        title: profile.affiliation,
        description: profile.biography,
        image: {
          url: profile.image,
        },
        topic: profile.topic,
        itemChildren: (
          <Grid className={classes.profileItemChildren}>
            {profile.linkedin_profile_url && (
              <A
                href={profile.linkedin_profile_url}
                color="textSecondary"
                className={classes.link}
              >
                <img
                  src={linkedIn}
                  alt="LinkedIn Profile"
                  className={classes.icon}
                />
              </A>
            )}
            {profile.twitter_profile_url && (
              <A
                href={profile.twitter_profile_url}
                color="textSecondary"
                className={classes.link}
              >
                <img
                  src={twitter}
                  alt="Twitter Profile"
                  className={classes.icon}
                />
              </A>
            )}
            {profile.website_url && (
              <A
                href={profile.website_url}
                color="textSecondary"
                className={classes.link}
              >
                <img src={website} alt="Website" className={classes.icon} />
              </A>
            )}
          </Grid>
        ),
      };
    });

  return (
    <Page
      outbreak={outbreak}
      title={pageTitle || "Featured Experts"}
      classes={{ section: classes.section }}
    >
      <Hero
        heroCarousel={heroCarousel}
        classes={{ section: classes.section }}
      />
      <ExpertList
        experts={profiles}
        title={title}
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
        subscribe={subscribe}
      />
    </Page>
  );
}

export async function getServerSideProps({ query }) {
  const { lang: pageLanguage } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("research-experts", lang);

  return {
    props: {
      outbreak,
    },
  };
}

export default Research;
