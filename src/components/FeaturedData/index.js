import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Section, RichTypography } from "@commons-ui/core";

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

function FeaturedData({ featuredContent, ...props }) {
  const classes = useStyles(props);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [featuredCharts, setFeaturedCharts ] = useState([]);

  useEffect(()=> {
    const tmp = document.createElement( 'div' );
    tmp.innerHTML = featuredContent;

    const featureDiv = tmp.querySelector('div[id=featured-data]');
    setTitle(featureDiv.getAttribute('data-title'));
    setDescription(featureDiv.getAttribute('data-description').replace('” class=”wp-block-hurumap-section-block”>', ''));

    const charts = [];
    Array.from(
      tmp.querySelectorAll(`div[id^=indicator-`)
    ).map((el) => {
      const chartId = el.getAttribute('id').split('-');
      const geoId = el.getAttribute('data-geo-id') || "";

      const type = chartId[1];
      const id = chartId[2];
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
                featuredChart={featuredCharts[0]}
              />}
            </Grid>
            <Grid item xs={12} lg={8} className={classes.chart01}>
              { featuredCharts.length && <Container
                action="Explore"
                featuredChart={featuredCharts[1]}
              />}
            </Grid>
            <Grid item xs={12} lg={8} className={classes.chart02}>
             { featuredCharts.length && <Container
                action="Explore"
                featuredChart={featuredCharts[2]}
              />}
            </Grid>
            <Grid item xs={12} md={6} lg={4} className={classes.chart03}>
             { featuredCharts.length && <Container
                action="Explore"
                featuredChart={featuredCharts[3]}
              />}
            </Grid>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

FeaturedData.propTypes = {
  featuredContent: PropTypes.string.isRequired,
};
export default FeaturedData;
