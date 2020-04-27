import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import FeaturedData from 'components/FeaturedData';
import FeaturedResearch from 'components/FeaturedResearch';
import FeaturedResearchers from 'components/FeaturedResearchers';
import FeaturedStories from 'components/FeaturedStories';
import Hero from 'components/Hero';
import MythBusting from 'components/MythBusting';
import Page from 'components/Page';
import Partners from 'components/Partners';
import Ticker from 'components/Ticker';

import { getProfiles, fromTimestamp, useStories } from 'lib';

const useStyles = makeStyles((theme) => ({
  root: {},
  section: {
    margin: '0 1.25rem 0 1.375rem',
    width: 'auto',
    [theme.breakpoints.up('md')]: {
      margin: '0 auto',
      width: '85.4166667%',
    },
  },
  featuredResearchers: {
    margin: '0 auto',
    padding: '3.8125rem 1.125rem 0 1.125rem',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      padding: '3.8125rem 0 0',
      width: `${(1640 / 1920) * 100}%`,
    },
  },
  featuredResearchersProfiles: {
    width: 'calc(((100vw - 100%) / 2) + 100%)',
  },
  featuredStories: {
    margin: '0 auto',
    padding: '3.8125rem 1.125rem 0 1.125rem',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      padding: '3.8125rem 0 0',
      width: `${(1640 / 1920) * 100}%`,
    },
  },
  featuredStoriesStories: {
    width: 'calc(((100vw - 100%) / 2) + 100%)',
  },
  ticker: {
    margin: '0 auto',
    padding: '3.8125rem 1.125rem 0 1.125rem',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      padding: '3.8125rem 0 0',
      width: `${(1640 / 1920) * 100}%`,
    },
  },
}));

function Home(props) {
  const classes = useStyles(props);
  const profiles = getProfiles();
  const foundStories = useStories(
    'https://pesacheck.org/tagged/public-finance'
  );

  const stories = foundStories.map((story) => ({
    ...story,
    createdAt: fromTimestamp(story.createdAt),
    image: {
      url: `https://cdn-images-1.medium.com/max/480/${story.virtuals.previewImage.imageId}`,
    },
  }));

  return (
    <Page classes={{ section: classes.section }}>
      <Hero />
      <div className={classes.ticker}>
        <Ticker
          source={{
            title: 'openAFRICA',
            url: 'https://open.africa',
          }}
          statuses={[
            {
              name: 'Infections',
              status: 'Confirmed',
              value: '3,721',
            },
            {
              name: 'Deaths',
              status: 'Confirmed',
              value: '670',
              highlight: true,
            },
            {
              name: 'Hospitalisations',
              status: 'Confirmed',
              value: '430',
            },
            {
              name: 'Recoveries',
              status: 'Confirmed',
              value: '730',
            },
          ]}
          title="Covid-19 cases in Africa"
        />
      </div>
      <FeaturedData classes={{ section: classes.section }} />
      <FeaturedResearch classes={{ section: classes.section }} />
      <div className={classes.featuredResearchers}>
        <FeaturedResearchers
          profiles={profiles}
          classes={{ profiles: classes.featuredResearchersProfiles }}
        />
      </div>

      <MythBusting
        title="Myth-busting"
        description={`
              A searchable database of
              <span class="highlight">debunked misinformation</span>
               <br />
              backed up by a transnational team of expert
              <span class="highlight">
              African fact-
              <br />
              checkers
              </span>
              to help you test new questionable claims.
        `}
        linkText="LEARN MORE"
        classes={{ section: classes.section }}
      />
      <div className={classes.featuredStories}>
        <FeaturedStories
          stories={stories}
          classes={{ stories: classes.featuredStoriesStories }}
        />
      </div>
      <Partners />
    </Page>
  );
}

export default Home;
