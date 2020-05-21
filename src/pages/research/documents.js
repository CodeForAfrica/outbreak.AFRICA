import React from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Page from "components/Page";
import Hero from "components/Hero";

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
}));

function FeaturedDocuments({ outbreak, ...props }) {
  const classes = useStyles(props);
  const {
    page: { hero_carousel: heroCarousel },
  } = outbreak;

  return (
    <Page
      outbreak={outbreak}
      title="Featured Documents"
      classes={{ section: classes.section }}
    >
      <Hero
        heroCarousel={heroCarousel}
        classes={{ section: classes.section }}
      />
    </Page>
  );
}

FeaturedDocuments.getInitialProps = async (props) => {
  const {
    query: { lang: pageLanguage },
  } = props;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("index", lang);

  return {
    outbreak,
  };
};

export default FeaturedDocuments;
