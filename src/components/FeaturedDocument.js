import React from "react";
import PropTypes from "prop-types";

import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "@commons-ui/core";

import chart1 from "assets/chart-1.png";
import chart2 from "assets/chart-2.png";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {},
  section: {},
  sectionTitle: {
    margin: "unset",
    marginBottom: typography.pxToRem(16),
  },
  chart00: {
    [breakpoints.only("md")]: {
      order: 2,
    },
  },
  chart01: {
    [breakpoints.only("md")]: {
      order: 1,
    },
  },
  chart02: {
    [breakpoints.only("md")]: {
      order: 4,
    },
  },
  chart03: {
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

function FeaturedDocument({ title, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Section
        title={title}
        classes={{ root: classes.section, title: classes.sectionTitle }}
      >
        <Grid container>
          <Grid item xs={12} md={4} container className={classes.insight}>
            <Button variant="contained" size="large">
              See Insights
            </Button>
          </Grid>
          <Grid item xs={12} container spacing={2}>
            
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

FeaturedDocument.propTypes = {
  title: PropTypes.string,
};
FeaturedDocument.defaultProps = {
  title: "Featured Document",
};
export default FeaturedDocument;
