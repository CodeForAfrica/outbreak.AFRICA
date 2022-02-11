import { RichTypography } from "@commons-ui/core";
import { Grid, FormControl, InputLabel, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    margin: "0.5rem 0",
    [breakpoints.up("md")]: {
      margin: 0,
      justifyContent: "flex-end",
    },
  },
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
      height: "1.6rem",
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
    <Grid container alignItems="center" className={classes.root}>
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
