import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Hero from "components/Hero";
import JoinUs from "components/JoinUs";
import Page from "components/Page";
import FeaturedCard from "components/Insights/FeaturedCard";

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
  joinUs: {
    marginTop: "3.5rem",
    [breakpoints.up("md")]: {
      marginTop: "3.8125rem",
    },
  },
}));

function Analysis({ outbreak, ...props }) {
  const classes = useStyles(props);
  const {
    page: {
      posts,
      join_us: joinUs,
      title: { rendered: pageTitle },
    },
  } = outbreak;

  return (
    <Page
      outbreak={outbreak}
      title={pageTitle || "Analysis"}
      classes={{ section: classes.section }}
    >
      <FeaturedCard
        title={posts[0].post_title}
        description={posts[0].post_content}
        image={posts[0].feature_imaged}
        date={posts[0].post_date}
        classes={{ section: classes.section }}
        />
      <JoinUs
        classes={{
          root: classes.joinUs,
          section: classes.section,
        }}
        joinUs={joinUs}
        title={joinUs.title}
        subtitle={joinUs.description}
      />
    </Page>
  );
}

export async function getServerSideProps({ query }) {
  const { lang: pageLanguage } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("insights-analysis", lang);

  return {
    props: {
      outbreak,
    },
  };
}

export default Analysis;
