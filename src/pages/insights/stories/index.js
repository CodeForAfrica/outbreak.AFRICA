import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import { getSitePage } from "@/outbreakafrica/cms";
import InsightPage from "@/outbreakafrica/components/InsightPage";
import Page from "@/outbreakafrica/components/Page";
import config from "@/outbreakafrica/config";

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

function Stories({ outbreak, ...props }) {
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

Stories.propTypes = {
  outbreak: PropTypes.shape({
    page: PropTypes.shape({
      join_us: PropTypes.shape({}),
      posts: PropTypes.arrayOf(PropTypes.shape({})),
      subscribe: PropTypes.shape({}),
      title: PropTypes.shape({
        rendered: PropTypes.string,
      }),
    }),
  }),
};

Stories.defaultProps = {
  outbreak: undefined,
};

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

export default Stories;
