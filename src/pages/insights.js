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
  }
}));


function Research({ outbreak, ...props }) {
  const classes = useStyles(props);
  const {
    page: { hero_carousel: heroCarousel },
  } = outbreak;

  return (
    <Page outbreak={outbreak} classes={{ section: classes.section }}>
      <Grid container justify="center">
        <IframeComponent
          title="Data section"
          src={`https://data.humdata.org/event/covid-19`}
          frameBorder="0"
          scrolling="yes"
          height="500"
          width='85%'
        />
      </Grid>
    </Page>
  );
}

Research.getInitialProps = async (props) => {
  const {
    query: { lang: pageLanguage },
    url
  } = props;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("index", lang);


  return {
    outbreak,
  };
};

export default Research;
