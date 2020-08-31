import React from "react";

import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import virus from "assets/about-illo.png";
import outbreak404 from "assets/404.svg";
import { Typography, Grid } from "@material-ui/core";
import Link from "components/Link";
import PostItem from "components/DocumentLists/DocumentItem";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  section: {},
  errorContainer: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  tagline: {
    maxWidth: typography.pxToRem(769),
  },
  virus: {
    height: "100%",
  },
  text404: {
    height: "8rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${outbreak404})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    backgroundSize: "contain",
    [breakpoints.up("md")]: {
      height: "16rem",
    },
  },
  link: {
    color: "unset",
    "&:hover": {
      textDecoration: "none",
      color: "unset",
    },
  },
  postAuthor: {
    fontSize: 12,
  },
  postContentDiv: {
    paddingRight: typography.pxToRem(16),
    [breakpoints.up("md")]: {
      paddingRight: 0,
    },
  },
  postDescription: {
    display: "none",
    [breakpoints.up("md")]: {
      display: "inherit",
    },
  },
  postItem: {
    width: "100%",
    [breakpoints.up("md")]: {
      paddingRight: typography.pxToRem(16),
      "&:last-of-type": {
        paddingRight: 0,
      },
    },
  },
  postImage: {
    filter: "unset",
  },
  postTitle: {
    fontWeight: "normal",
    [breakpoints.up("md")]: {
      fontWeight: "bold",
    },
  },
}));

function Error({ articles, variant, tagline, title, ...props }) {
  const classes = useStyles(props);
  const linkHref = `/insights/${variant}/[slug]`;
  const linkAs = (slug) => `/insights/${variant}/${slug}`;

  return (
    <div className={classes.section}>
      <Grid container spacing={4} className={classes.errorContainer}>
        <Grid item xs={12} md={6}>
          <Typography variant='h1' className={classes.title}>
            {title}
          </Typography>
          <Typography variant='body1' className={classes.tagline}>
            {tagline}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.text404}>
            <img src={virus} alt='404' className={classes.virus} />
          </div>
        </Grid>
      </Grid>
      <Grid container>
        {articles &&
          articles.length &&
          articles.slice(0, 3).map((post) => (
            <Grid key={post.post_name} item md={4} className={classes.postItem}>
              <Link
                as={linkAs(post.post_name)}
                href={linkHref}
                className={classes.link}
              >
                <PostItem
                  description={post.post_excerpt}
                  imageUrl={post.featured_image}
                  title={post.post_title}
                  md={12}
                  isStory
                  classes={{
                    author: classes.postAuthor,
                    description: classes.postDescription,
                    contentDiv: classes.postContentDiv,
                    image: classes.postImage,
                    title: classes.postTitle,
                  }}
                />
              </Link>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

Error.propTypes = {
  tagline: PropTypes.string,
  title: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf({}).isRequired,
};

Error.defaultProps = {
  tagline: undefined,
};

export default Error;
