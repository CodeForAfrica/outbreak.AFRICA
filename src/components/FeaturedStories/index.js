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
  description: {
    "& .highlight": {
      background:
        "linear-gradient(180deg, rgba(255,255,255,0) 50%, #ccdcff 30% )",
    },
  },
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

function FeatureStories({ description, stories, title, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isUpXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isLg = isUpLg && !isUpXl;
  let cellHeight;
  if (isUpLg) {
    cellHeight = isLg ? 438 : 637;
  }

  return (
    <div className={classes.root}>
      <Section
        classes={{ root: classes.section }}
        title={title || "Featured Stories"}
      >
        <Grid
          container
          className={classes.heading}
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={12}>
            <RichTypography variant="subtitle1" className={classes.description}>
              {description ||
                'A selection of the African best <span class="highlight">data-driven</span> reportage or evidence-based analysis of coronavirus.'}
            </RichTypography>
          </Grid>
          <Grid item xs={12}>
            <StoryList
              cellHeight={cellHeight}
              height={cellHeight && cellHeight + 48}
              stories={stories}
              classes={{
                root: classes.storyList,
                story: classes.storyListStory,
                stories: classes.storyListStories,
              }}
            />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

FeatureStories.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FeatureStories;
