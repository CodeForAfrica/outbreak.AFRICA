import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Page from "components/Page";
import Hero from "components/Hero";

import Content from 'components/Content'

import SubscribePage from 'components/SubscribePage'

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

function Subscribe({ outbreak, ...props }) {
  const classes = useStyles(props);
  const {
    page: {
      hero_carousel: heroCarousel,
      title: { rendered: pageTitle },
    },
  } = outbreak;

  return (
    <Page
      outbreak={outbreak}
      title={pageTitle || "Subscribe"}
      classes={{ section: classes.section }}
    >
      <Hero
        heroCarousel={heroCarousel}
        classes={{ section: classes.section }}
      />
      <Content
        title="Subscribe"
        subtitle="Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. It was popularised in the 1960s 
        with the release of Letraset sheets containing Lorem Ipsum"
        classes={{ section: classes.section }}
      />
      <SubscribePage />
    </Page>
  );
}

export async function getServerSideProps({ query }) {
  const { lang: pageLanguage } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("subscribe", lang);

  return {
    props: {
      outbreak,
    },
  };
}

export default Subscribe;
