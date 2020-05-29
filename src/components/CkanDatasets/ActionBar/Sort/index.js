import React from "react";
import PropTypes from "prop-types";

import { Grid, FormControl, InputLabel, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { RichTypography } from "@commons-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
  formControl: {
    display: "flex",
    justifyContent: "space between",
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#9D9C9C",
    },
  },
  input: {
    border: "1px solid #9D9C9D",
  },
  label: {
    marginRight: "1rem",
  },
  select: {
    "& select": {
      paddingBottom: "0.9375rem",
      paddingTop: "0.8375rem",
    },
  },
}));

function Sort({ label, onChange, options, value, ...props }) {
  const classes = useStyles(props);
  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <Grid
      container
      justify="flex-end"
      alignItems="center"
      className={classes.root}
    >
      {label && (
        <Grid item>
          <RichTypography variant="caption" className={classes.label}>
            {label}
          </RichTypography>
        </Grid>
      )}
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="ckandatasets-dataset-sort" />
        <Select
          native
          value={value}
          onChange={handleChange}
          inputProps={{
            name: "age",
            id: "ckandatasets-dataset-sort",
            classes: { input: classes.input },
          }}
          className={classes.select}
        >
          {options.map((option) => (
            <option value={option.value}>{option.label || option.value}</option>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}

Sort.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  value: PropTypes.string.isRequired,
};

Sort.defaultProps = {
  label: undefined,
  onChange: undefined,
};

export default Sort;
