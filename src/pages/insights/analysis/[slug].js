import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import { getArticle, getSitePage } from "@/outbreakafrica/cms";
import ArticlePage from "@/outbreakafrica/components/ArticlePage";
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

function Analysis({ outbreak, article: { post, author, media }, ...props }) {
  const classes = useStyles(props);
  const {
    page: { subscribe, title },
  } = outbreak;
  const pageTitle = title || "Analysis";

  return (
    <Page
      outbreak={outbreak}
      title={pageTitle}
      classes={{ section: classes.section }}
    >
      <ArticlePage
        author={author}
        link={{ href: "/insights/analysis", title: pageTitle }}
        media={media}
        post={post}
        subscribe={subscribe}
        classes={{ section: classes.section }}
      />
    </Page>
  );
}

Analysis.propTypes = {
  article: PropTypes.shape({
    author: PropTypes.shape({}),
    media: PropTypes.shape({}),
    post: PropTypes.shape({}),
  }),
  outbreak: PropTypes.shape({
    page: PropTypes.shape({
      subscribe: PropTypes.shape({}),
      title: PropTypes.shape({
        rendered: PropTypes.string,
      }),
    }),
  }),
};

Analysis.defaultProps = {
  article: undefined,
  outbreak: undefined,
};

export async function getServerSideProps({ query }) {
  const { lang: pageLanguage, slug } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("insights-analysis", lang);
  const article = await getArticle(slug, lang);
  const errorCode = article ? null : 404;

  return {
    props: {
      article,
      errorCode,
      outbreak,
    },
  };
}

export default Analysis;
