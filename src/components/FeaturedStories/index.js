import React from "react";
import PropTypes from "prop-types";

import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { RichTypography, StoryList, Section } from "@commons-ui/core";

import "simplebar/dist/simplebar.min.css";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "visible",
  },
  section: {},
  storyList: {
    color: "white",
    marginTop: "2.375rem",
    "& .simplebar-track": {
      backgroundColor: "#D6D6D6",
      width: "30%",
      [theme.breakpoints.up("lg")]: {
        width: "20%",
      },
    },
    "& .simplebar-track.simplebar-horizontal": {
      marginLeft: "35%",
    },
    "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
      backgroundColor: "#9D9C9C",
    },
    "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar:before": {
      backgroundColor: "#9D9C9C",
    },
  },
  storyListStory: {
    "&:after": {
      backgroundColor: "inherit",
      mixBlendMode: "overlay",
      opacity: 1,
    },
  },
  storyListStories: {},
  title: {},
}));

function FeatureStories({ featuredStories, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isUpXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isLg = isUpLg && !isUpXl;
  let cellHeight;
  if (isUpLg) {
    cellHeight = isLg ? 438 : 637;
  }

  if (!featuredStories) {
    return null
  }
  const { description, stories, title, link_label: linkLabel } = featuredStories;
  const storiesList =
    stories &&
    stories.map((story, index) => {
      return {
        id: index,
        title: story.title,
        description: story.description,
        link: {
          title: linkLabel,
          url: story.link_url,
        },
        image: {
          url: story.image,
        },
      };
    });

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
            cellHeight={cellHeight}
            height={cellHeight && cellHeight + 48}
            stories={storiesList}
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
  featuredStories: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    link_label: PropTypes.string,
    stories: PropTypes.arrayOf(PropTypes.shape({})),
  })
};

FeatureStories.defaultProps = {
  featuredStories: undefined
}

export default FeatureStories;
