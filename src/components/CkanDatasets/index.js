import { Section } from "@commons-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import ActionBar from "./ActionBar";
import Dataset from "./Dataset";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {},
  section: {},
  sectionTitle: {
    margin: "unset",
    marginBottom: typography.pxToRem(16),
  },
  dataset: {
    [breakpoints.up("md")]: {
      marginBottom: "2rem",
    },
  },
  datasets: {
    marginTop: "1rem",
  },
}));

function CkanDatasets({
  count,
  onPageSize,
  onSearch,
  onSort,
  results,
  rows,
  q,
  sort,
  title,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section
        title={title || "Featured Datasets"}
        classes={{ root: classes.section, title: classes.sectionTitle }}
      />
      <ActionBar
        count={count}
        onPageSize={onPageSize}
        onSearch={onSearch}
        onSort={onSort}
        q={q}
        rows={rows}
        sort={sort}
        classes={{ section: classes.section }}
      />
      {count && (
        <Section classes={{ root: classes.section }}>
          <Grid container className={classes.datasets}>
            {results.map((dataset) => (
              <Grid item key={dataset.id} xs={12}>
                <Dataset
                  dataset={dataset}
                  classes={{ root: classes.dataset }}
                />
              </Grid>
            ))}
          </Grid>
        </Section>
      )}
    </div>
  );
}

CkanDatasets.propTypes = {
  count: PropTypes.number,
  onPageSize: PropTypes.func,
  onSearch: PropTypes.func,
  onSort: PropTypes.func,
  sort: PropTypes.string.isRequired,
  title: PropTypes.string,
  q: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.shape({})),
  rows: PropTypes.number.isRequired,
};

CkanDatasets.defaultProps = {
  count: 0,
  onPageSize: undefined,
  onSearch: undefined,
  onSort: undefined,
  q: undefined,
  title: undefined,
  results: undefined,
};
export default CkanDatasets;
