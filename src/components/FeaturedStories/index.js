import { RichTypography, Section, StoryList } from "@commons-ui/core";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    overflow: "visible",
  },
  section: {},
  sectionTitle: {
    margin: "unset",
    marginBottom: typography.pxToRem(16),
  },
  description: {
    "& .highlight": {
      background:
        "linear-gradient(180deg, rgba(255,255,255,0) 50%, #ccdcff 30% )",
    },
  },
  storyList: {
    marginTop: "2.375rem",
    "& .simplebar-track": {
      backgroundColor: "#D6D6D6",
      width: "30%",
      [breakpoints.up("lg")]: {
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
  storyListStory: {},
  storyListStoryContentsRoot: {
    color: palette.text.secondary,
  },
  storyListStoryContents: {
    padding: "1rem",
    "&:before": {
      background:
        "transparent linear-gradient(180deg, #FFFFFF 0%, #000000 60%, #000000 100%) 0% 0% no-repeat padding-box",
    },
  },
  storyListStoryPicture: {
    height: "auto",
    width: "100%",
  },
  title: {},
}));

function FeatureStories({
  description,
  link_label: linkLabel,
  stories,
  title,
  ...props
}) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isUpXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isLg = isUpLg && !isUpXl;
  let cellHeight;
  if (isUpLg) {
    cellHeight = isLg ? 438 : 637;
  }

  if (!stories || !stories.length) {
    return null;
  }
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
        </Grid>
        <Grid item xs={12}>
          <StoryList
            cellHeight={cellHeight}
            height={cellHeight && cellHeight + 48}
            stories={storiesList}
            classes={{
              root: classes.storyList,
              story: classes.storyListStory,
              storyContentsRoot: classes.storyListStoryContentsRoot,
              storyContents: classes.storyListStoryContents,
              storyPicture: classes.storyListStoryPicture,
            }}
          />
        </Grid>
      </Section>
    </div>
  );
}

FeatureStories.propTypes = {
  description: PropTypes.string,
  link_label: PropTypes.string,
  stories: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
};

FeatureStories.defaultProps = {
  description: undefined,
  link_label: undefined,
  stories: undefined,
  title: undefined,
};

export default FeatureStories;
