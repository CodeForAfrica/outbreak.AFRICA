import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import ArticlePage from "components/ArticlePage";
import Page from "components/Page";

import config from "config";
import { getSitePage, getPostBySlug, getPostById } from "cms";

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

function Analysis({ outbreak, post, author, media, ...props }) {
  const classes = useStyles(props);

  const {
    page: { subscribe, title: pageTitle },
  } = outbreak;

  return (
    <Page
      outbreak={outbreak}
      title={ pageTitle || "Resourcea"}
      classes={{ section: classes.section }}
    >
        <ArticlePage
          pageTitle={pageTitle}
          article={post}
          media={media}
          author={author}
          subscribe={subscribe}
          link={"/insights/resources"}
          classes={{ section: classes.section }}
        />
    </Page>
  );
}

export async function getServerSideProps({ query }) {
  const { lang: pageLanguage, slug: pageSlug  } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("insights-resources", lang);

  const [firstSlug] = pageSlug || [];
  const slug = (firstSlug && firstSlug.toLowerCase()) || null;
  let errorCode = null;
  let articlePost = {};
  let author = {};
  let media = {};

  if (slug) {
    const [post] = await getPostBySlug("posts", slug);
    articlePost = post;
    if(post) {
        author = await getPostById("users", post.author);
        const { media_details: { sizes }} = await getPostById("media", post.featured_media);
        media = sizes;
    } else {
        errorCode = 404;
    }
  }

  return {
    props: {
        errorCode,
      outbreak,
      post: articlePost,
      author,
      media,
    },
  };
}

export default Analysis;
