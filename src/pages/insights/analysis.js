import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import InsightPage from "components/Insights/InsightPage";
import Page from "components/Page";

import config from "config";
import { getSitePage } from "cms";

const useStyles = makeStyles(({breakpoints, widths}) => ({
  root: {},
  section: {
    margin: "0 1.25rem 0 1.375rem",
    width: "auto",
    [breakpoints.up("md")]: {
      margin: "0 auto",
      width: widths.values.md,
    },
    [breakpoints.up("lg")]: {
      width: widths.values.lg,
    },
    [breakpoints.up("xl")]: {
      margin: "0 auto",
      width: widths.values.xl,
    },
  },
}));

function Analysis({ outbreak, ...props }) {
  const classes = useStyles(props);
  const [ insightStorySlug, setInsightStorySlug ] = useState(null);
  const {
    page: {
      posts,
      join_us: joinUs,
      subscribe,
      title: pageTitle
    },
  } = outbreak;


  useEffect(() => {
    const postSlug = window.location.hash && window.location.hash.split('#')[1];
    setInsightStorySlug(postSlug);
  }, []);

  return (
    <Page
      outbreak={outbreak}
      title={pageTitle || "Analysis"}
      classes={{ section: classes.section }}
    >
      {insightStorySlug ? (
        <StoryPage />
      ): (
        <InsightPage
          posts={posts}
          joinUs={joinUs}
          subscribe={subscribe}
          title={pageTitle}
          classes={{ section: classes.section }} />
      )}
    </Page>
  );
}

export async function getServerSideProps({ query }) {
  const { lang: pageLanguage } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("insights-analysis", lang);

  console.log(outbreak);
  return {
    props: {
      outbreak,
    },
  };
}

export default Analysis;
