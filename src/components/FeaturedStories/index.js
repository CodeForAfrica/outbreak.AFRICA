import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { RichTypography, StoryList, Section } from "@commons-ui/core";

import "simplebar/dist/simplebar.min.css";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "visible",
  },
  section: {},
  storyList: {},
  storyListStory: {
    "& .story-0:after": {
      backgroundColor: theme.palette.primary.main,
    },
    "& .story-1:after": {
      backgroundColor: `#000000`,
    },
    "& .story-2:after": {
      backgroundColor: theme.palette.highlight.main,
    },
  },
  storyListStories: {},
}));

function FeatureStories({ description, stories, title, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid
          container
          className={classes.heading}
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={12}>
            <RichTypography variant="h2" className={classes.title}>
              {title || "Featured Stories"}
            </RichTypography>
          </Grid>
          <Grid item>
            <RichTypography variant="subtitle1" className={classes.description}>
              {description ||
                "View and explore how we visualise Kenya’s budget data to show how much money each county has received from the national government, and how the money is allocated and utilized based on each county’s priorities"}
            </RichTypography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <StoryList
            stories={stories}
            classes={{
              root: classes.storyList,
              story: classes.storyListStory,
              stories: classes.storyListStories,
            }}
          />
        </Grid>
      </Section>
    </div>
  );
}

FeatureStories.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FeatureStories;
