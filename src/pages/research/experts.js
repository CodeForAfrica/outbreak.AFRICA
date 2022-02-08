import React from "react";

import { useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Page from "@/outbreakafrica/components/Page";
import Hero from "@/outbreakafrica/components/Hero";
import Subscribe from "@/outbreakafrica/components/Subscribe";
import ExpertsGrid from "@/outbreakafrica/components/ExpertsGrid";

import config from "@/outbreakafrica/config";
import { getSitePage } from "@/outbreakafrica/cms";

const useStyles = makeStyles(({ breakpoints, widths }) => ({
  root: {},
  section: {
    margin: "0 1.25rem 0 1.375rem",
    width: "auto",
    [breakpoints.up("md")]: {
      margin: "0 auto",
      width: widths.values.md,
    },
    [breakpoints.up("lg")]: {
      width: widths.values.lg,
    },
    [breakpoints.up("xl")]: {
      margin: "0 auto",
      width: widths.values.xl,
    },
  },
  featuredExperts: {},
  subscribe: {
    marginTop: "3.5rem",
    [breakpoints.up("md")]: {
      marginTop: "3.8125rem",
    },
  },
  icon: {
    objectFit: "contain",
    height: "1rem",
    width: "1rem",
    [breakpoints.up("md")]: {
      height: "1.375rem",
      width: "1.375rem",
    },
  },
  link: {
    display: "inline-block",
    paddingRight: "1rem",
  },
  profileItemChildren: {
    zIndex: 1,
  },
  heroDescription: {
    [breakpoints.up("md")]: {
      maxWidth: (widths.values.md * 536) / widths.values.xl,
    },
    [breakpoints.up("lg")]: {
      maxWidth: (widths.values.lg * 536) / widths.values.xl,
    },
    [breakpoints.up("xl")]: {
      maxWidth: "33.5rem",
    },
  },
}));

function Research({ outbreak, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const {
    page: {
      hero_content: heroContent,
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
        contacts: {
          linkedIn: {
            url: profile.linkedin_profile_url,
          },
          twitter: {
            url: profile.twitter_profile_url,
          },
          website: {
            url: profile.website_url,
          },
        },
        description: profile.biography,
        image: {
          url: profile.image,
        },
        name: profile.name,
        title: profile.affiliation,
        topic: profile.topic,
      };
    });

  return (
    <Page
      outbreak={outbreak}
      title={pageTitle || "Featured Experts"}
      classes={{ section: classes.section }}
    >
      {isDesktop && (
        <Hero
          heroContent={heroContent}
          isResearch
          classes={{
            description: classes.heroDescription,
            section: classes.section,
          }}
        />
      )}
      <ExpertsGrid
        experts={profiles}
        icons={config.settings.icons}
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
