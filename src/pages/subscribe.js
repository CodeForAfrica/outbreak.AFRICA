import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Content from "@/outbreakafrica/components/Content";
import Form from "@/outbreakafrica/components/Form";
import Hero from "@/outbreakafrica/components/Hero";
import Page from "@/outbreakafrica/components/Page";

import config from "@/outbreakafrica/config";
import { getSitePage } from "@/outbreakafrica/cms";

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
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
      width: widths.values.xl,
    },
  },
  content: {},
  contentAsideMobile: {
    border: "none",
  },
  form: {
    marginBottom: typography.pxToRem(50),
    [breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  subscribe: {},
  heroDescription: {
    [breakpoints.up("md")]: {
      maxWidth: (widths.values.md * 1385) / widths.values.xl,
    },
    [breakpoints.up("lg")]: {
      maxWidth: (widths.values.lg * 1385) / widths.values.xl,
    },
    [breakpoints.up("xl")]: {
      maxWidth: "86.5625rem",
    },
  },
}));

function About({ errorCode, outbreak, slug, ...props }) {
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
      errorCode={errorCode}
      outbreak={outbreak}
      title={pageTitle || "Subscribe"}
      classes={{ section: classes.section }}
    >
      <Hero
        heroContent={heroContent}
        classes={{
          description: classes.heroDescription,
          section: classes.section,
        }}
      />
      <Content
        classes={{
          root: classes.content,
          section: classes.section,
          asideMobile: classes.contentAsideMobile,
        }}
        subscribe={subscribe}
      >
        <Form selector="#mc_embed_signup" classes={{ root: classes.form }}>
          {config.settings.subscribe.embedCode}
        </Form>
      </Content>
    </Page>
  );
}

export async function getServerSideProps({ query }) {
  const { lang: pageLanguage } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("subscribe", lang);

  return {
    props: { outbreak },
  };
}

export default About;
