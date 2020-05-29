import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { Button, Divider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { RichTypography } from "@commons-ui/core";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    margin: "0.5rem 0",
    [breakpoints.up("md")]: {
      margin: "0 1rem",
    },
  },
  button: {
    marginLeft: "1rem",
    marginRight: "1rem",
  },
  divider: {},
  dividerLast: {
    display: "none",
  },
}));

function Rows({ count, label, onClick, options, value, ...props }) {
  const classes = useStyles(props);
  const handleClick = (rows) => {
    if (onClick) {
      onClick(rows);
    }
  };

  return (
    <Grid container alignItems="center" className={classes.root}>
      {label && (
        <Grid item>
          <RichTypography variant="caption">{label}</RichTypography>
        </Grid>
      )}
      {options.map((option, i) => (
        <>
          <Button
            data-rows={option.value}
            disabled={
              option.value === value ||
              count <= Number.parseInt(option.value, 10)
            }
            onClick={() => handleClick(option.value)}
            size="small"
            className={classes.button}
          >
            {option.label || option.value}
          </Button>
          <Divider
            orientation="vertical"
            flexItem
            className={classNames(classes.divider, {
              [classes.dividerLast]: i === options.length - 1,
            })}
          />
        </>
      ))}
    </Grid>
  );
}

Rows.propTypes = {
  count: PropTypes.number.isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  value: PropTypes.string.isRequired,
};

Rows.defaultProps = {
  label: undefined,
  onClick: undefined,
};

export default Rows;
