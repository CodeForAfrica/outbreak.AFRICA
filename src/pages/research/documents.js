import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, useTheme } from "@material-ui/core";

import Page from "components/Page";
import Hero from "components/Hero";
import DocumentLists from "components/DocumentLists";
import Subscribe from "components/Subscribe";

import config from "config";
import { getSitePage } from "cms";

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
  subscribe: {
    marginTop: "3.5rem",
    [breakpoints.up("md")]: {
      marginTop: "3.8125rem",
    },
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

function FeaturedDocuments({ outbreak, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const {
    page: {
      featured_documents: documents,
      hero_content: heroContent,
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
          heroContent={heroContent}
          isResearch
          classes={{
            description: classes.heroDescription,
            section: classes.section,
          }}
        />
      )}

      <DocumentLists
        documents={documents}
        title={title}
        classes={{ section: classes.section }}
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
  const outbreak = await getSitePage("research-documents", lang);

  return {
    props: {
      outbreak,
    },
  };
}

export default FeaturedDocuments;
