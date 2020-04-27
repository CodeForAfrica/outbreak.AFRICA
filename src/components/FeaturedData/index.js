import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";
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
}));

function FeaturedData({ description, title, ...props }) {
  const classes = useStyles(props);
  return (
    <Section title={title} classes={{ root: classes.section }}>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={8}>
          <RichTypography variant="subtitle1">{description}</RichTypography>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* Button */}
        </Grid>
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={12} md={6} lg={4} className={classes.chart00}>
            <Container description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
              <img src={chart1} alt="chart1" />
            </Container>
          </Grid>
          <Grid item xs={12} lg={8} className={classes.chart01}>
            <Container description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
              <img src={chart2} alt="chart1" />
            </Container>
          </Grid>
          <Grid item xs={12} lg={8} className={classes.chart02}>
            <Container description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
              <img src={chart2} alt="chart1" />
            </Container>
          </Grid>
          <Grid item xs={12} md={6} lg={4} className={classes.chart03}>
            <Container description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
              <img src={chart1} alt="chart1" />
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
}

FeaturedData.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
FeaturedData.defaultProps = {
  description:
    "Comparative data insights, from credible sources, in formats that are instantly re-usable and shareable as infographics or as raw data/research.",
  title: "Featured Data",
};
export default FeaturedData;
