import { Section, RichTypography } from "@commons-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import Container from "./Container";
import FlourishContainer from "./FlourishContainer";

import Button from "@/outbreakafrica/components/Link/Button";

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
  root: {},
  section: {},
  sectionTitle: {
    margin: "unset",
    marginBottom: typography.pxToRem(16),
  },
  actionGrid: {
    height: "15%",
    display: "flex",
    alignItems: "flex-end",
  },
  actionIcon: {
    width: "2rem",
    height: "auto",
  },
  buttonExplore: {},
  charts: {
    alignItems: "flex-start",
    [breakpoints.only("md")]: {
      alignItems: "stretch",
    },
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
  chartGrid: {
    marginTop: "2.5rem",
  },
  chartShadow: {
    boxShadow: "0px 4px 4px #00000029",
    border: "1px solid #D6D6D6",
    height: "85%",
  },
  description: {
    "& .highlight": {
      background:
        "linear-gradient(180deg, rgba(255,255,255,0) 50%, #ccdcff 30% )",
    },
    marginTop: typography.pxToRem(8),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem((widths.values.md * 21) / widths.values.xl),
    },
    [breakpoints.up("lg")]: {
      marginTop: typography.pxToRem((widths.values.lg * 21) / widths.values.xl),
    },
    [breakpoints.up("xl")]: {
      marginTop: typography.pxToRem(21),
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
    // eslint-disable-next-line array-callback-return
    Array.from(tmp.querySelectorAll(`div[id^=indicator-`)).map((el) => {
      const chartId = el.getAttribute("id").split("-");
      const geoId = el.getAttribute("data-data-geo-id") || "";
      const chartTitle = el.getAttribute("data-title") || "";
      const chartDescription = el.getAttribute("data-description") || "";

      const type = chartId[1];
      const id = chartId[2];
      charts.push({
        id,
        type,
        geoId,
        title: chartTitle,
        description: chartDescription,
      });
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
          {/* Disable See insights for MVP */}
          {/*
          <Grid item xs={12} md={4} container className={classes.insight}>
            <Button variant="contained" size="large">
              See Insights
            </Button>
          </Grid>
          */}
          {featuredCharts && featuredCharts.length > 0 && (
            <Grid item xs={12} container spacing={2} className={classes.charts}>
              {featuredCharts.map((chart, index) => (
                <Grid
                  item
                  xs={12}
                  md={index === 0 || index === 3 ? 6 : 12}
                  lg={index === 0 || index === 3 ? 4 : 8}
                  container
                  className={clsx(classes.chartGrid, classes[`chart${index}`])}
                  key={chart.id}
                >
                  <Grid item xs={12} className={classes.chartShadow}>
                    {chart.type === "hurumap" ? (
                      <Container action="Explore" featuredChart={chart} />
                    ) : (
                      <FlourishContainer
                        action="Explore"
                        featuredChart={chart}
                      />
                    )}
                  </Grid>
                  <Grid item xs={12} container className={classes.actionGrid}>
                    <Grid item xs={12}>
                      <RichTypography
                        variant="body2"
                        className={classes.description}
                      >
                        {chart.description}
                      </RichTypography>
                    </Grid>
                    <Button
                      href="/data/[geoId]"
                      as={`/data/${chart.geoId}`}
                      variant="contained"
                      size="large"
                      className={classes.buttonExplore}
                    >
                      Explore
                    </Button>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Section>
    </div>
  );
}

FeaturedData.propTypes = {
  featuredContent: PropTypes.string.isRequired,
};
export default FeaturedData;
