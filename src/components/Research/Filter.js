import React from "react";
import { PropTypes } from "prop-types";
import classNames from "classnames";

import { Grid, Button, ButtonBase } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "1rem",
    flexGrow: 1,
  },
  activeButton: {
    backgroundColor: "#0050FF",
    color: "white",
  },
  button: {
    border: "1px solid grey",
    fontFamily: theme.typography.fontFamily,
    textTransform: "capitalize",
    fontSize: "0.75rem",
    minWidth: "57px",
    "&:hover": {
      backgroundColor: "#0050FF",
      color: "white",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
      padding: "auto 1rem",
      minWidth: "100px",
    },
  },
  caption: {
    fontWeight: 700,
    color: "#9D9C9C",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
    fontSize: "0.75rem",
    paddingRight: theme.typography.pxToRem(16),
    "&:last-of-type": {
      paddingRight: 0,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "initial",
    },
  },
  itemContainer: {
    display: "flex",
    flexDirection: "column",
  },
  filter: {
    display: "flex",
    padding: "1.5rem 0rem",
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      flexGrow: 0,
      padding: 0,
    },
  },
  subtopic: {
    paddingTop: "1rem",
  },
}));

function Filter({
  activeTopic,
  onButtonClick,
  onSubTopicButtonClick,
  parentTopics,
  subTopics,
}) {
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
        <Grid item xs={12} className={classes.subtopic}>
          {subTopics.map((item) => (
            <ButtonBase
              variant="caption"
              href="#"
              onClick={() => onSubTopicButtonClick(item.slug)}
              className={classes.caption}
            >
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
  onSubTopicButtonClick: PropTypes.func.isRequired,
  parentTopics: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  subTopics: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default Filter;
