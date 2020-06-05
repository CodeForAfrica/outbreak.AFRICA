import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Content from "components/Content";
import Form from "components/Form";
import Hero from "components/Hero";
import Page from "components/Page";

import config from "config";
import { getSitePage } from "cms";

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
  form: {
    marginBottom: typography.pxToRem(50),
    [breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  subscribe: {},
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
      title={pageTitle || "Join us"}
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
      >
        <Form classes={{ root: classes.form }} />
      </Content>
    </Page>
  );
}

export async function getServerSideProps({ query }) {
  const { lang: pageLanguage } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("join", lang);

  return {
    props: { outbreak },
  };
}

export default About;
