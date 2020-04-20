import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import FeaturedResearchers from 'components/FeaturedResearchers';
import FeaturedStories from 'components/FeaturedStories';
import Page from 'components/Page';

import { getProfiles, fromTimestamp, useStories } from 'lib';

const useStyles = makeStyles(theme => ({
  root: {},
  featuredResearchers: {
    margin: '0 auto',
    padding: '3.8125rem 1.125rem 0 1.125rem',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      padding: '3.8125rem 0 0',
      width: `${(1640 / 1920) * 100}%`
    }
  },
  featuredResearchersProfiles: {
    width: 'calc(((100vw - 100%) / 2) + 100%)'
  },
  featuredStories: {
    margin: '0 auto',
    padding: '3.8125rem 1.125rem 0 1.125rem',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      padding: '3.8125rem 0 0',
      width: `${(1640 / 1920) * 100}%`
    }
  },
  featuredStoriesStories: {
    width: 'calc(((100vw - 100%) / 2) + 100%)'
  }
}));

function Home(props) {
  const classes = useStyles(props);
  const profiles = getProfiles();
  const foundStories = useStories(
    'https://pesacheck.org/tagged/public-finance'
  );

  const stories = foundStories.map(story => ({
    ...story,
    createdAt: fromTimestamp(story.createdAt),
    image: {
      url: `https://cdn-images-1.medium.com/max/480/${story.virtuals.previewImage.imageId}`
    }
  }));

  return (
    <Page>
      <div className={classes.featuredResearchers}>
        <FeaturedResearchers
          profiles={profiles}
          classes={{ profiles: classes.featuredResearchersProfiles }}
        />
      </div>
      <div className={classes.featuredStories}>
        <FeaturedStories
          stories={stories}
          classes={{ stories: classes.featuredStoriesStories }}
        />
      </div>
    </Page>
  );
}

export default Home;
