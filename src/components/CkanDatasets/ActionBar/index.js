import React from "react";
import PropTypes from "prop-types";

import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { RichTypography, Section } from "@commons-ui/core";

import Search from "@/outbreakafrica/components/Search";

import Rows from "./Rows";
import Sort from "./Sort";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    boxShadow: "0px 5px 30px #00000029",
    color: "#9D9C9C",
    padding: "0.25rem 0",
  },
  section: {},
  label: {
    color: "#9D9C9C",
    "& .count": {
      fontWeight: "bold",
    },
  },
  search: {
    margin: "0.5rem 0",
    [breakpoints.up("md")]: {
      margin: "unset",
    },
  },
}));

function ActionBar({
  count,
  onClick,
  onPageSize,
  onSearch,
  onSort,
  options,
  q,
  rows,
  sort,
  value,
  ...props
}) {
  const classes = useStyles(props);
  const handlePageSize = (pageSize) => {
    if (onPageSize) {
      onPageSize(pageSize);
    }
  };

  return (
    <Paper square className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container alignItems="center">
          <Grid item xs={12} md={2}>
            <RichTypography variant="subtitle1" className={classes.label}>
              Data <span className="count">{count || 0}</span>
            </RichTypography>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.search}>
              <Search
                onClick={onSearch}
                defaultValue={q}
                ariaLabel="search all datasets"
                placeholder="Search all datasets ..."
              />
            </div>
          </Grid>
          <Grid item xs={12} md={3} container alignItems="baseline">
            <Rows
              count={count}
              label="Show"
              onClick={handlePageSize}
              options={[{ value: "10" }, { value: "25" }, { value: "50" }]}
              value={rows}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Sort
              label="Order by"
              onChange={onSort}
              options={[
                {
                  value: "metadata_modified desc",
                  label: "Last Modified",
                },
                {
                  value: "score desc",
                  label: "Relevance",
                },
                {
                  value: "title_string asc",
                  label: "Name Ascending",
                },
                {
                  value: "title_string desc",
                  label: "Name Descending",
                },
              ]}
              value={sort}
            />
          </Grid>
        </Grid>
      </Section>
    </Paper>
  );
}

ActionBar.propTypes = {
  count: PropTypes.number,
  onPageSize: PropTypes.func,
  onSearch: PropTypes.func,
  onSort: PropTypes.func,
  sort: PropTypes.string.isRequired,
  q: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.shape({})),
  rows: PropTypes.number.isRequired,
};

ActionBar.defaultProps = {
  count: 0,
  onPageSize: undefined,
  onSearch: undefined,
  onSort: undefined,
  q: undefined,
  results: undefined,
};

export default ActionBar;
