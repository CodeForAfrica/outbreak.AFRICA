import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Page from "components/Page";
import Hero from "components/Hero";

import config from "config";
import { getSitePage } from "cms";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {},
  section: {
    margin: "0 1.25rem 0 1.375rem",
    width: "auto",
    [breakpoints.up("lg")]: {
      margin: "0 auto",
      width: "78.5rem",
    },
    [breakpoints.up("xl")]: {
      margin: "0 auto",
      width: "102.5rem",
    },
  },
}));

function Resources({ outbreak, ...props }) {
  const classes = useStyles(props);
  const {
    page: {
      hero_content: heroContent,
      title: { rendered: pageTitle },
    },
  } = outbreak;

  return (
    <Page
      outbreak={outbreak}
      title={pageTitle || "Resources"}
      classes={{ section: classes.section }}
    >
      <Hero
        heroContent={heroContent}
        classes={{ section: classes.section }}
      />
    </Page>
  );
}

export async function getServerSideProps({ query }) {
  const { lang: pageLanguage } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("resources", lang);

  return {
    props: {
      outbreak,
    },
  };
}

export default Resources;
