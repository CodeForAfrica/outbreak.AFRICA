import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Page from "components/Page";
import Hero from "components/Hero";
import Documents from "components/Research/Documents";

import config from "config";
import { getSitePage } from "cms";

const useStyles = makeStyles(({ breakpoints, widths}) => ({
  root: {},
  section: {
    margin: "0 1.25rem 0 1.375rem",
    width: "auto",
    /** Since our design if of XL, we're going to optimize for space in
     * MD & LG i.e. minimize margins
     */
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
}));

function FeaturedDocuments({ count, documents, outbreak, ...props }) {
  const classes = useStyles(props);
  const {
    page: {
      hero_carousel: heroCarousel,
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
      <Hero
        heroCarousel={heroCarousel}
        classes={{ section: classes.section }}
      />

      <Documents
        documents={documents}
        count={count}
        title={title}
        classes={{ section: classes.section }} />
    </Page>
  );
}

export async function getServerSideProps({ query }) {
  const { lang: pageLanguage } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("research-documents", lang);

  //https://corsanywhere.devops.codeforafrica.org
  const projectId = '462-Dominion-AFRICA';
  const response = await fetch(
    `https://dc.sourceafrica.net/api/search.json?q=projectid:${projectId}`
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
