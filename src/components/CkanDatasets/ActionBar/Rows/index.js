import { RichTypography } from "@commons-ui/core";
import { Button, Divider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

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

  const disable = (i) => {
    if (count < 1) {
      return true;
    }
    if (i === 0) {
      return false;
    }
    const prevValueNum = Number.parseInt(options[i - 1].value, 10);
    if (prevValueNum >= count) {
      return true;
    }
    return false;
  };

  return (
    <Grid container alignItems="center" className={classes.root}>
      {label && (
        <Grid item>
          <RichTypography variant="caption">{label}</RichTypography>
        </Grid>
      )}
      {options.map((option, i) => (
        <div key={option.value}>
          <Button
            data-rows={option.value}
            disabled={disable(i)}
            onClick={() => handleClick(option.value)}
            size="small"
            className={classes.button}
          >
            {option.label || option.value}
          </Button>
          <Divider
            orientation="vertical"
            flexItem
            className={clsx(classes.divider, {
              [classes.dividerLast]: i === options.length - 1,
            })}
          />
        </div>
      ))}
    </Grid>
  );
}

Rows.propTypes = {
  count: PropTypes.number.isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
};

Rows.defaultProps = {
  label: undefined,
  onClick: undefined,
};

export default Rows;
