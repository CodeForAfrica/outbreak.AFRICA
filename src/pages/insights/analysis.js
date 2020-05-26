import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Hero from "components/Hero";
import JoinUs from "components/JoinUs";
import Page from "components/Page";

import config from "config";
import { getSitePage } from "cms";

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
  joinUs: {
    marginTop: "3.5rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "3.8125rem",
    },
  },
}));

function Analysis({ outbreak, ...props }) {
  const classes = useStyles(props);
  const {
    page: {
      hero_carousel: heroCarousel,
      join_us: joinUs,
      title: { rendered: pageTitle },
    },
  } = outbreak;

  return (
    <Page
      outbreak={outbreak}
      title={pageTitle || "Analysis"}
      classes={{ section: classes.section }}
    >
      <Hero
        heroCarousel={heroCarousel}
        classes={{ section: classes.section }}
      />
      <JoinUs
        classes={{
          root: classes.joinUs,
          section: classes.section,
        }}
        joinUs={joinUs}
        title={joinUs.title}
        subtitle={joinUs.description}
      />
    </Page>
  );
}

export async function getServerSideProps({ query }) {
  const { lang: pageLanguage } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("insights-analysis", lang);

  return {
    props: {
      outbreak,
    },
  };
}

export default Analysis;
