import React, { useState } from "react";
import { PropTypes } from "prop-types";

import { Grid, Typography, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "3rem",
    flexGrow: 1,
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
    color: '#9D9C9C',
    margin: '1rem',
    textDecoration: 'none',
    "&:hover": {
      textDecoration: 'none'
    },
  },
  itemContainer: {
    display: "flex",
    flexDirection: 'column'
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

function Filter({ topics }) {
  const classes = useStyles();
  const [ subTopics, setSubTopics ] = useState(
    topics.filter(topic => topic.parent !== 0)
  );
  const [showSubTopic, setShowSubTopic] = useState(false);

  const onButtonClick = () => {
    setShowSubTopic(() => !subTopics);
  };

  const [activeTopic, setActiveTopic] = useState(
    process.browser && window.location.hash.slice(1)
      ? window.location.hash.slice(1)
      : "all"
  );

  const parentTopics = [ { name: 'All', slug: 'all'}, ...topics.filter(topic => topic.parent === 0)];
  return (
    <Grid container className={classes.root}>
      <Grid
        item
        container
        spacing={2}
        classes={classes.filter}
      >
      {parentTopics.map(item => (
        <Grid item>
          <Button rounded className={classes.button}>
              {item.name}
          </Button>
        </Grid>
      ))}
      </Grid>
      {showSubTopic &&
        <Grid item xs={12} className={classes.filter}>
          {subTopics.map(item =>
            <Link variant="caption" href="#" className={classes.caption}>
              {item.name}
            </Link>
          )}
        </Grid>
      }
    </Grid>
  );
}

Filter.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}
export default Filter;
