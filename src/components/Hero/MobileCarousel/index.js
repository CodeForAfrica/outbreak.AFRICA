import { Section, StoryList } from "@commons-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  root: {
    overflow: "visible",
    marginLeft: -8, // compensate for GridListLayout 8px padding
  },
  section: {},
  storyList: {
    marginTop: 0,
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
  storyListStoryContents: {
    padding: "1rem",
    "&:before": {
      background:
        "transparent linear-gradient(180deg, #FFFFFF 0%, #000000 60%, #000000 100%) 0% 0% no-repeat padding-box",
    },
  },
  storyListStoryContentsRoot: {
    color: palette.text.secondary,
  },
  storyListStoryPicture: {
    height: "auto",
    width: "100%",
  },
}));

function FeatureStories({
  carouselItems,
  carouselLinkTitle,
  isResearch,
  ...props
}) {
  const classes = useStyles(props);

  if (isResearch || !(carouselItems && carouselItems.length)) {
    return null;
  }
  const stories = carouselItems.map((item, index) => {
    return {
      id: index,
      title: item.title,
      description: item.brief,
      link: {
        title: carouselLinkTitle,
        url: item.link_url && new URL(item.link_url).pathname,
      },
      image: {
        url: item.image,
      },
    };
  });

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <StoryList
          stories={stories}
          classes={{
            root: classes.storyList,
            story: classes.storyListStory,
            storyContentsRoot: classes.storyListStoryContentsRoot,
            storyContents: classes.storyListStoryContents,
            storyPicture: classes.storyListStoryPicture,
          }}
        />
      </Section>
    </div>
  );
}

FeatureStories.propTypes = {
  carouselItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
  carouselLinkTitle: PropTypes.string,
  isResearch: PropTypes.bool,
};

FeatureStories.defaultProps = {
  carouselItems: undefined,
  carouselLinkTitle: undefined,
  isResearch: false,
};

export default FeatureStories;
