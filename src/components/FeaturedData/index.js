import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Section, RichTypography } from "@commons-ui/core";
import config from 'config';

import chart1 from "assets/chart-1.png";
import chart2 from "assets/chart-2.png";

import Container from "./Container";

const useStyles = makeStyles((theme) => ({
  root: {},
  section: {},
  chart00: {
    [theme.breakpoints.only("md")]: {
      order: 2,
    },
  },
  chart01: {
    [theme.breakpoints.only("md")]: {
      order: 1,
    },
  },
  chart02: {
    [theme.breakpoints.only("md")]: {
      order: 4,
    },
  },
  chart03: {
    [theme.breakpoints.only("md")]: {
      order: 3,
    },
  },
  description: {
    "& .highlight": {
      background:
        "linear-gradient(180deg, rgba(255,255,255,0) 50%, #ccdcff 30% )",
    },
  },
  insight: {
    [theme.breakpoints.up("md")]: {
      alignItems: "flex-start",
      justifyContent: "flex-end",
    },
  },
}));

function FeaturedData({ description, title, featuredContent, ...props }) {
  const classes = useStyles(props);

  const [featuredCharts, setFeaturedCharts ] = useState([]);
  useEffect(()=> {
    const tmp = document.createElement( 'div' );
    tmp.innerHTML = featuredContent;

    const chardIds = [];
    const charts = [];

    Array.from(
      tmp.querySelectorAll(`div[id^=indicator-`)
    ).map((el) => {
      const chartId = el.getAttribute('id').split('-');
      const geoId = el.getAttribute('data-geo-id');

      const type = chartId[1];
      const id = chartId[2];

      //let url = `${config.WP_BACKEND_URL}/wp-json/hurumap-data/flourish/${id}`;
      // if(type == 'hurumap') {
      //   url =  `${config.WP_BACKEND_URL}/wp-json/hurumap-data/charts/${id}`
      // }

     // fetch(url).then((res) => res.json()).then(data => charts.push({ ...data, geoId}) );
     charts.push({ id, type, geoId })
    });
    setFeaturedCharts(charts);

  }, [featuredContent]);

  return (
    <div className={classes.root}>
      <Section title={title} classes={{ root: classes.section }}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <RichTypography variant="subtitle1" className={classes.description}>
              {description}
            </RichTypography>
          </Grid>
          <Grid item xs={12} md={4} container className={classes.insight}>
            <Button variant="contained" size="large">
              See Insights
            </Button>
          </Grid>
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={12} md={6} lg={4} className={classes.chart00}>
              { featuredCharts.length && <Container
                action="Explore"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                featuredChart={featuredCharts[0]}
              >
                <img src={chart1} alt="chart1" />
              </Container>}
            </Grid>
            {/* <Grid item xs={12} lg={8} className={classes.chart01}>
              <Container
                action="Explore"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              >
                <img src={chart2} alt="chart1" />
              </Container>
            </Grid>
            <Grid item xs={12} lg={8} className={classes.chart02}>
              <Container
                action="Explore"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              >
                <img src={chart2} alt="chart1" />
              </Container>
            </Grid>
            <Grid item xs={12} md={6} lg={4} className={classes.chart03}>
              <Container
                action="Explore"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              >
                <img src={chart1} alt="chart1" />
              </Container>
            </Grid> */}
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

FeaturedData.propTypes = {
  featuredContent: PropTypes.string.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
};
FeaturedData.defaultProps = {
  description:
    'Comparative <span class="highlight">data insights</span>, from credible sources, in formats that are instantly re-usable and shareable as infographics or as raw data/research.',
  title: "Featured Data",
};
export default FeaturedData;
