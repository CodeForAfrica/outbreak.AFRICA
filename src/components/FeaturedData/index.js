import React from "react";
import PropTypes from "prop-types";

import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Section, RichTypography } from "@commons-ui/core";

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

function FeaturedData({ description, title, ...props }) {
  const classes = useStyles(props);
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
              <Container
                action="Explore"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              >
                <img src={chart1} alt="chart1" />
              </Container>
            </Grid>
            <Grid item xs={12} lg={8} className={classes.chart01}>
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
            </Grid>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

FeaturedData.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
FeaturedData.defaultProps = {
  description:
    'Comparative <span class="highlight">data insights</span>, from credible sources, in formats that are instantly re-usable and shareable as infographics or as raw data/research.',
  title: "Featured Data",
};
export default FeaturedData;
