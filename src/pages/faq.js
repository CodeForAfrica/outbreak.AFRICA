import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Page from "components/Page";
import Hero from "components/Hero";

import Content from 'components/Content';
import FaqSection from 'components/Faq'
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
  }
}));

function FAQ({ outbreak, ...props }) {
  const classes = useStyles(props);
  const {
    page: {
      hero_content: heroContent,
      subscribe,
      title: { rendered: pageTitle },
    },
  } = outbreak;

  return (
    <Page
      outbreak={outbreak}
      title={pageTitle || "FAQ"}
      classes={{ section: classes.section }}
    >
      <Hero
        heroContent={heroContent}
        classes={{ section: classes.section }}
      />
      <Content
        subscribe={subscribe}
        classes={{
          root: classes.content,
          section: classes.section,
        }}
      />
      <FaqSection />
    </Page>
  );
}

export async function getServerSideProps({ query }) {
  const { lang: pageLanguage } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("faq", lang);

  return {
    props: {
      outbreak,
    },
  };
}

export default FAQ;
