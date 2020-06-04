import React, { useState } from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "@commons-ui/core";

import JoinUs from "components/JoinUs";
import Link from "components/Link";
import PostItem from "components/DocumentLists/DocumentItem";
import Filter from "components/Filter";
import Subscribe from "components/Subscribe";
import FeaturedCard from "./FeaturedCard";

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
  root: {},
  section: {},
  link: {
    color: "unset",
    "&:hover": {
      textDecoration: "none",
      color: "unset",
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

function InsightPage({ posts, joinUs, subscribe, title, ...props }) {
  const classes = useStyles(props);

  const [activeTopic, setActiveTopic] = useState("all");
  const [subTopics, setSubTopics] = useState([]);

  const onButtonClick = (value) => {
    setActiveTopic(value);
  };

  const onSubTopicButtonClick = () => {
    setSubTopics([]);
  };

  const parentTopics = [{ name: "All", slug: "all" }];

  return (
    <div className={classes.root}>
      <Section title={title} classes={{ root: classes.section }}>
        <Filter
          activeTopic={activeTopic}
          onButtonClick={onButtonClick}
          onSubTopicButtonClick={onSubTopicButtonClick}
          parentTopics={parentTopics}
          subTopics={subTopics}
        />
        {posts && posts.length > 0 && (
          <Link
            as={`#${posts[0].post_name}`}
            href={`#${posts[0].post_name}`}
            className={classes.link}
          >
            <FeaturedCard
              title={posts[0].post_title}
              description={posts[0].post_excerpt}
              image={posts[0].feature_imaged}
              date={posts[0].post_date}
            />
          </Link>
        )}
        <Grid container>
          {posts &&
            posts.length > 1 &&
            posts.slice(1, 4).map((post) => (
              <Grid item md={4} className={classes.postItem}>
                <Link
                  as={`#${post.post_name}`}
                  href={`#${post.post_name}`}
                  className={classes.link}
                >
                  <PostItem
                    description={post.post_excerpt}
                    imageUrl={post.feature_imaged}
                    title={post.post_title}
                    md={12}
                    isStory
                    classes={{
                      imageDiv: classes.imageDiv,
                      description: classes.postDescription,
                      title: classes.postTitle,
                      author: classes.postAuthor,
                      contentDiv: classes.postContentDiv,
                      image: classes.postImage,
                    }}
                  />
                </Link>
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
      <Section classes={{ root: classes.section }}>
        <Grid container>
          {posts &&
            posts.length > 4 &&
            posts.slice(4).map((post) => (
              <Grid item md={4} className={classes.postItem}>
                <Link
                  as={`#${post.post_name}`}
                  href={`#${post.post_name}`}
                  className={classes.link}
                >
                  <PostItem
                    description={post.post_excerpt}
                    imageUrl={post.feature_imaged}
                    title={post.post_title}
                    md={12}
                    isStory
                    classes={{
                      imageDiv: classes.imageDiv,
                      description: classes.postDescription,
                      title: classes.postTitle,
                      author: classes.postAuthor,
                      contentDiv: classes.postContentDiv,
                      image: classes.postImage,
                    }}
                  />
                </Link>
              </Grid>
            ))}
        </Grid>
      </Section>
      <Subscribe
        classes={{
          root: classes.joinUs,
          section: classes.section,
        }}
        subscribe={subscribe}
      />
    </div>
  );
}

InsightPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  joinUs: PropTypes.shape({}).isRequired,
  subscribe: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
};

export default InsightPage;
