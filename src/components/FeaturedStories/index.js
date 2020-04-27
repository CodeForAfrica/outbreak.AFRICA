import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { StoryList } from '@commons-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  stories: {},
}));

function FeatureStories({ stories, ...props }) {
  const classes = useStyles(props);

  return (
    <StoryList
      description="View and explore how we visualise Kenya’s budget data to show how much money each county has received from the national government, and how the money is allocated and utilized based on each county’spriorities"
      md={3.3}
      spacing={0}
      stories={stories}
      title="Featured Stories"
      xs={1.3}
      classes={{ root: classes.root, stories: classes.stories }}
    />
  );
}

FeatureStories.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FeatureStories;
