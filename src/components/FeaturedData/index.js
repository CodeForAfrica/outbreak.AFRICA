import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Section, RichTypography } from "@commons-ui/core";

import Container from "./Container";
import FlourishContainer from "./FlourishContainer";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {},
  section: {},
  sectionTitle: {
    margin: "unset",
    marginBottom: typography.pxToRem(16),
  },
  chart0: {
    [breakpoints.only("md")]: {
      order: 2,
    },
  },
  chart1: {
    [breakpoints.only("md")]: {
      order: 1,
    },
  },
  chart2: {
    [breakpoints.only("md")]: {
      order: 4,
    },
  },
  chart3: {
    [breakpoints.only("md")]: {
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
    [breakpoints.up("md")]: {
      alignItems: "flex-start",
      justifyContent: "flex-end",
    },
  },
}));

function FeaturedData({ featuredContent, ...props }) {
  const classes = useStyles(props);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [featuredCharts, setFeaturedCharts] = useState([]);

  useEffect(() => {
    const tmp = document.createElement("div");
    tmp.innerHTML = featuredContent;

    const featureDiv = tmp.querySelector("div[id=featured-data]");
    setTitle(featureDiv.getAttribute("data-title"));
    setDescription(
      featureDiv
        .getAttribute("data-description")
        .replace("” class=”wp-block-hurumap-section-block”>", "")
    );

    const charts = [];
    Array.from(tmp.querySelectorAll(`div[id^=indicator-`)).map((el) => {
      const chartId = el.getAttribute("id").split("-");
      const geoId = el.getAttribute("data-geo-id") || "";
      const chartTitle = el.getAttribute("data-title") || "";
      const chartDescription = el.getAttribute("data-description") || "";

      const type = chartId[1];
      const id = chartId[2];
      charts.push({ id, type, geoId, title: chartTitle, description:chartDescription });
    });
    setFeaturedCharts(charts);
  }, [featuredContent]);

  return (
    <div className={classes.root}>
      <Section
        title={title}
        classes={{ root: classes.section, title: classes.sectionTitle }}
      >
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
            {featuredCharts.length > 0 &&
              featuredCharts.map((chart, index) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={index === 0 || index === 3 ? 4 : 8}
                  className={`chart${index}`}
                  key={chart.id}
                >
                  {chart.type === "hurumap" ? (
                    <Container action="Explore" featuredChart={chart} />
                  ) : (
                    <FlourishContainer action="Explore" featuredChart={chart} />
                  )}
                </Grid>
              ))}
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
