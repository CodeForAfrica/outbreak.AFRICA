import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, useTheme } from "@material-ui/core";

import Page from "components/Page";
import Hero from "components/Hero";
import Documents from "components/Research/Documents";
import Subscribe from "components/Subscribe";

import config from "config";
import { getSitePage } from "cms";

const useStyles = makeStyles(({ breakpoints, widths}) => ({
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
  subscribe: {
    marginTop: "3.5rem",
    [breakpoints.up("md")]: {
      marginTop: "3.8125rem",
    },
  },
}));

function FeaturedDocuments({ count, documents, outbreak, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const {
    page: {
      hero_carousel: heroCarousel,
      subscribe,
      section_title: title,
      title: { rendered: pageTitle },
    },
  } = outbreak;

  return (
    <Page
      outbreak={outbreak}
      title={pageTitle || "Featured Documents"}
      classes={{ section: classes.section }}
    >
       {isDesktop && (
        <Hero
          heroCarousel={heroCarousel}
          isResearch
          classes={{ section: classes.section }}
        />
      )}

      <Documents
        documents={documents}
        count={count}
        title={title}
        classes={{ section: classes.section }} />

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
  const outbreak = await getSitePage("research-documents", lang);

  //https://corsanywhere.devops.codeforafrica.org
  const response = await fetch(
    'https://dc.sourceafrica.net/api/search.json?q=coronavirus&per_page=40&sections=true&mentions=3&contributor=true'
  );
  const { documents, total: count} = response.ok ? await response.json() : {};

  return {
    props: {
      outbreak,
      documents,
      count,
    },
  };
}

export default FeaturedDocuments;
