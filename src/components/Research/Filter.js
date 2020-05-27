import React from "react";
import { PropTypes } from "prop-types";
import classNames from "classnames";

import { Grid, Button, ButtonBase } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "3rem",
    flexGrow: 1,
  },
  activeButton: {
    backgroundColor: "#0050FF",
    color: "white",
  },
  button: {
    border: "1px solid grey",
    fontFamily: theme.typography.fontFamily,
    padding: "auto 1rem",
    textTransform: "capitalize",
    minWidth: "100px",
    "&:hover": {
      backgroundColor: "#0050FF",
      color: "white",
    },
  },
  caption: {
    fontWeight: 500,
    color: "#9D9C9C",
    margin: "1rem",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  itemContainer: {
    display: "flex",
    flexDirection: "column",
  },
  filter: {
    display: "flex",
    padding: "2rem 0rem",
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      flexGrow: 0,
      padding: 0,
    },
  },
}));

function Filter({ activeTopic, onButtonClick, parentTopics, subTopics }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item container spacing={2} classes={classes.filter}>
        {parentTopics.map((item) => (
          <Grid item>
            <Button
              rounded
              className={classNames(classes.button, {
                [classes.activeButton]: item.slug === activeTopic,
              })}
              onClick={() => onButtonClick(item.slug)}
            >
              {item.name}
            </Button>
          </Grid>
        ))}
      </Grid>
      {subTopics.length > 0 && (
        <Grid item xs={12} className={classes.filter}>
          {subTopics.map((item) => (
            <ButtonBase variant="caption" href="#" className={classes.caption}>
              {item.name}
            </ButtonBase>
          ))}
        </Grid>
      )}
    </Grid>
  );
}

Filter.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  parentTopics: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  subTopics: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default Filter;
