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


  {/*} const initialFun = () => {
    ck.datasets('#example-2', 'https://opendata.swiss/', {
      fq: 'tags:hospitals',
      rows: 3,
      lang: 'de',
      jsonp: false,
      proxy: '/ckanproxy/'
    });
  }*/}

  return (
    <Page outbreak={outbreak} classes={{ section: classes.section }}>
      <Grid container justify="center">
        <IframeComponent
          title="Data section"
          width="85%"
          height="600"
          frameborder="0"
          style={{ border: 0, margin: 0, padding: 0 }}
          src={`https://data.humdata.org/event/covid-19?sort=if(gt(last_modified,review_date),last_modified,review_date)%20desc#dataset-filter-start`}
          frameBorder="0"
          scrolling="yes"
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
