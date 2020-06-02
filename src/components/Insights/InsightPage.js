import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "@commons-ui/core";

import FeaturedCard from "./FeaturedCard";
import JoinUs from "components/JoinUs";
import PostItem from "components/Research/DocumentLists/DocumentItem";
import Subscribe from "components/Subscribe";

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
  root: {},
  section: {},
  featuredCard: {
    marginBottom: 37.5,
    [breakpoints.up("md")]: {
        marginBottom: (widths.values.md * 59) / widths.values.xl,
      },
      [breakpoints.up("lg")]: {
        marginBottom: (widths.values.lg * 59) / widths.values.xl,
      },
      [breakpoints.up("xl")]: {
        marginBottom: 59,
      },
  },
  joinUs: {
    marginTop: "3.5rem",
    [breakpoints.up("md")]: {
      marginTop: "3.8125rem",
    },
  },
  imageDiv: {
    height: 40,
    padding: 0,
    backgroundColor: "unset",
    "&:after": {
        backgroundColor: "unset",
    },
    [breakpoints.up("md")]: {
        height: (widths.values.md * 288) / widths.values.xl,
      },
      [breakpoints.up("lg")]: {
        height: (widths.values.lg * 288) / widths.values.xl,
      },
      [breakpoints.up("xl")]: {
        height: 208,
      },
  },
  postAuthor: {
    fontSize: 12,
  },
  postItem: {
    [breakpoints.up("md")]: {
        paddingRight: typography.pxToRem(16),
        "&:last-of-type": {
        paddingRight: 0,
        },
    },
  },
  postDescription: {
    display: "none",
    [breakpoints.up("md")]: {
        display: "inherit",
    },
  },
  postContentDiv: {
    paddingRight: typography.pxToRem(16),
    [breakpoints.up("md")]: {
      paddingRight: 0,
    },
  },
  postTitle: {
    fontWeight: "normal",
    [breakpoints.up("md")]: {
      fontWeight: "bold",
    },
  },
}));

function InsightPage({ posts, joinUs, subscribe, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <FeaturedCard
        title={posts[0].post_title}
        description={posts[0].post_content}
        image={posts[0].feature_imaged}
        date={posts[0].post_date}
        classes={{ section: classes.section, root: classes.featuredCard }}
        />
      <Section classes={{ root: classes.section }}>
        <Grid container>
          {posts.slice(1, 4).map(post => (
              <Grid item md={4} className={classes.postItem}>
                    <PostItem
                        description={post.post_content}
                        imageUrl={post.feature_imaged}
                        title={post.post_title}
                        md={12}
                        isStory
                        classes={{ 
                            imageDiv: classes.imageDiv,
                            description: classes.postDescription,
                            title: classes.postTitle,
                            author: classes.postAuthor,
                            contentDiv: classes.postContentDiv
                        }} />
              </Grid>
          ))}
        </Grid>
      </Section>
      <JoinUs
        classes={{
          root: classes.joinUs,
          section: classes.section,
        }}
        joinUs={joinUs}
      />
      <Subscribe
        classes={{
            root: classes.joinUs,
            section: classes.section,
          }}
        subscribe={subscribe} />

    </div>
  );
}

InsightPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({

  })).isRequired,
  joinUs: PropTypes.shape({}).isRequired,
  subscribe: PropTypes.shape({}).isRequired,
  title: PropTypes.string,
};
export default InsightPage;
