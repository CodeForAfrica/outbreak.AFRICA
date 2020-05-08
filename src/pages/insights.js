import React from "react";

import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Page from "components/Page";
import IframeComponent from 'components/Iframe'

import config from "config";
import { getSitePage } from "cms";
import { getProfiles } from "lib";

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
  iframeContainer: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    position: 'relative'
  },
  iframe: {
    position: 'absolute',
    //top: '-100px',
    //left: '-100px',
    //width: '1280px',
    //height: '1200px'
  }
}));

function Research({ outbreak, ...props }) {
  const classes = useStyles(props);
  const {
    page: { hero_carousel: heroCarousel },
  } = outbreak;

  return (
    <Page outbreak={outbreak} classes={{ section: classes.section }}>
      <Grid item className={classes.iframeContainer}>
        <IframeComponent
          title="Map section"
          src={`https://data.humdata.org/event/covid-19`}
          height="1000"
          width="100%"
          frameBorder="0"
          scrolling="yes"
          className={classes.iframe}
        />
      </Grid>

    </Page>
  );
}

Research.getInitialProps = async (props) => {
  const {
    query: { lang: pageLanguage },
  } = props;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("index", lang);

  return {
    outbreak,
  };
};

export default Research;
