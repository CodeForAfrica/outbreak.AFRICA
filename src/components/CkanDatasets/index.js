import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { RichTypography, Section } from "@commons-ui/core";

import Dataset from "./Dataset";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  section: {},
  sectionTitle: {
    margin: "unset",
    marginBottom: typography.pxToRem(16),
  },
  dataset: {
    marginBottom: "2rem",
    "&:last-of-type": {
      marginBottom: "unset",
    },
  },
}));

function CkanDatasets({ count, results, title, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section
        title={title || "Featured Datasets"}
        classes={{ root: classes.section, title: classes.sectionTitle }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <RichTypography variant="subtitle1">{count}</RichTypography>
          </Grid>
          {count && (
            <Grid item xs={12}>
              {results.map((dataset) => (
                <Dataset
                  dataset={dataset}
                  classes={{ root: classes.dataset }}
                />
              ))}
            </Grid>
          )}
        </Grid>
      </Section>
    </div>
  );
}

CkanDatasets.propTypes = {
  count: PropTypes.number,
  results: PropTypes.arrayOf(PropTypes.shape({})),
};

CkanDatasets.defaultProps = {
  count: 0,
  results: undefined,
};
export default CkanDatasets;
