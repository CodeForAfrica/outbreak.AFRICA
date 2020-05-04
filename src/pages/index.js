import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import config from "config";
import { getSitePage } from "cms";

import FeaturedData from "components/FeaturedData";
import FeaturedResearch from "components/FeaturedResearch";
import FeaturedResearchers from "components/FeaturedResearchers";
import FeaturedStories from "components/FeaturedStories";
import Hero from "components/Hero";
import MythBusting from "components/MythBusting";
import Page from "components/Page";
import Partners from "components/Partners";
import Ticker from "components/Ticker";

import { getProfiles } from "lib";

const useStyles = makeStyles((theme) => ({
  root: {},
  section: {
    margin: "0 1.25rem 0 1.375rem",
    width: "auto",
    [theme.breakpoints.up("lg")]: {
      margin: "0 auto",
      width: "78.5rem",
    },
    [theme.breakpoints.up("xl")]: {
      margin: "0 auto",
      width: "102.5rem",
    },
  },
  featuredData: {
    marginTop: "2.875rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "9.92125rem",
    },
  },
  featuredResearch: {
    marginTop: "4.375rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "4.375rem",
    },
  },
  featuredResearchers: {
    marginTop: "3.5rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "3.8125rem",
    },
  },
  featuredStories: {
    marginTop: "3rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "8.3125rem",
    },
  },
  mythBusting: {
    marginTop: "6.375rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "11.75rem",
    },
  },
  partners: {
    marginTop: "4.96875rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "11.75rem",
    },
  },
  ticker: {
    marginTop: "6.1875rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "3.8125rem",
    },
  },
}));

function Home(props) {
  const classes = useStyles(props);
  const profiles = getProfiles();

  const {
    pageContent: {
      news_carousel: newsCarouselItems,
      hero_link_title: newsCarouselLinkTitle,
      documents_datasets_title: documentsDatasetsTitle,
      documents_datasets_description: documentsDatasetsDescription,
      documents_datasets_link_label: documentsDatasetsLinkLabel,
      document_title: documentTitle,
      document_description: documentDescription,
      document_link: documentLink,
      dataset_title: datasetTitle,
      dataset_description: datasetDescription,
      dataset_link: datasetLink,
      featured_experts_title: featuredExpertsTitle,
      featured_experts_brief: featuredExpertsBrief,
      myth_title: mythTitle,
      myth_description: mythDescription,
      myth_link_label: mythLinkLabel,
      myth_link_url: mythLinkUrl,
      featured_stories_title: featuredStoriesTitle,
      featured_stories_description: featuredStoriesDescription,
      featured_stories_link_label: featuredStoriesLinkLabel,
      stories
    },
  } = props;

  return (
    <Page classes={{ section: classes.section }}>
      <Hero
        carouselItems={newsCarouselItems}
        carouselLinkTitle={newsCarouselLinkTitle}
        classes={{ section: classes.section }}
      />
      <Ticker
        source={{
          title: "openAFRICA",
          url: "https://open.africa",
        }}
        statuses={[
          {
            name: "Infections",
            status: "Confirmed",
            value: "3,721",
          },
          {
            name: "Deaths",
            status: "Confirmed",
            value: "670",
            highlight: true,
          },
          {
            name: "Active",
            status: "Confirmed",
            value: "2621",
          },
          {
            name: "Recoveries",
            status: "Confirmed",
            value: "730",
          },
        ]}
        title="Covid-19 cases in Africa"
        classes={{ root: classes.ticker, section: classes.section }}
      />
      <FeaturedData
        classes={{ root: classes.featuredData, section: classes.section }}
      />
      <FeaturedResearch
        title={documentsDatasetsTitle}
        description={documentsDatasetsDescription}
        linkLabel={documentsDatasetsLinkLabel}
        documentTitle={documentTitle}
        documentDescription={documentDescription}
        documentLink={documentLink}
        datasetTitle={datasetTitle}
        datasetDescription={datasetDescription}
        datasetLink={datasetLink}
        classes={{
          root: classes.featuredResearchers,
          section: classes.section,
        }}
      />
      <FeaturedResearchers
        title={featuredExpertsTitle}
        brief={featuredExpertsBrief}
        profiles={profiles}
        classes={{
          root: classes.featuredResearchers,
          section: classes.section,
        }}
      />

      <MythBusting
        title={mythTitle}
        description={mythDescription}
        linkText={mythLinkLabel}
        link={mythLinkUrl}
        classes={{ root: classes.mythBusting, section: classes.section }}
      />
      <FeaturedStories
        title={featuredStoriesTitle}
        description={featuredStoriesDescription}
        linkLabel={featuredStoriesLinkLabel}
        stories={stories}
        classes={{ root: classes.featuredStories, section: classes.section }}
      />
      <Partners
        classes={{ root: classes.partners, section: classes.section }}
      />
    </Page>
  );
}

Home.getInitialProps = async (props) => {
  const {
    query: { lang: pageLanguage },
  } = props;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const { page: pageContent } = await getSitePage("index", lang);
  return {
    pageContent,
  };
};

export default Home;
