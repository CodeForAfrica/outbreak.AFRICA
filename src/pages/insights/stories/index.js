import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import InsightPage from "components/InsightPage";
import Page from "components/Page";

import config from "config";
import { getSitePage } from "cms";

const useStyles = makeStyles(({ breakpoints, widths }) => ({
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

  const {
    page: { posts, join_us: joinUs, subscribe, title: pageTitle },
  } = outbreak;

  return (
    <Page
      outbreak={outbreak}
      title={pageTitle || "Featured Stories"}
      classes={{ section: classes.section }}
    >
      <InsightPage
        posts={posts}
        joinUs={joinUs}
        subscribe={subscribe}
        title={pageTitle}
        variant="stories"
        classes={{ section: classes.section }}
      />
    </Page>
  );
}

export async function getServerSideProps({ query }) {
  const { lang: pageLanguage } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("insights-stories", lang);

  return {
    props: {
      outbreak,
    },
  };
}

export default Analysis;
