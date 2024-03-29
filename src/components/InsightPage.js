import { Section } from "@commons-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect, useMemo, useState } from "react";

import FeaturedCard from "./FeaturedCard";

import PostItem from "@/outbreakafrica/components/DocumentLists/DocumentItem";
import Filter from "@/outbreakafrica/components/Filter";
import JoinUs from "@/outbreakafrica/components/JoinUs";
import Link from "@/outbreakafrica/components/Link";
import Subscribe from "@/outbreakafrica/components/Subscribe";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {},
  section: {},
  joinUs: {
    marginTop: "3.5rem",
    [breakpoints.up("md")]: {
      marginTop: "3.8125rem",
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

function InsightPage({ joinUs, posts, subscribe, title, variant, ...props }) {
  const classes = useStyles(props);
  const linkHref = `/insights/${variant}/[slug]`;
  const linkAs = (slug) => `/insights/${variant}/${slug}`;
  const [activeTopic, setActiveTopic] = useState("all");
  const [subTopics, setSubTopics] = useState([]);
  const [topicPosts, setTopicPosts] = useState(posts);

  const uniqueTopics = useMemo(
    () =>
      posts
        ? posts
            .reduce((a, b) => a.concat(b.categories), [])
            .reduce((acc, current) => {
              const x = acc.find((item) => item.term_id === current.term_id);
              if (!x) {
                return acc.concat([current]);
              }
              return acc;
            }, [])
        : [],
    [posts]
  );

  const onButtonClick = (value) => {
    setActiveTopic(value);
  };

  const onSubTopicButtonClick = (value) => {
    setTopicPosts(
      posts.filter(({ topic: t }) => {
        const found = t.find((x) => x.slug === value);
        if (found) {
          return true;
        }
        return false;
      })
    );
  };

  const parentTopics = [
    { name: "All", slug: "all" },
    ...(uniqueTopics && uniqueTopics.filter((topic) => topic.parent === 0)),
  ];

  useEffect(() => {
    const foundActiveTopic =
      uniqueTopics && uniqueTopics.find((a) => a.slug === activeTopic);
    if (foundActiveTopic) {
      setSubTopics(
        uniqueTopics.filter((top) => top.parent === foundActiveTopic.term_id)
      );
      setTopicPosts(
        posts.filter(({ categories: t }) => {
          const found = t.find(
            (x) =>
              x.term_id === foundActiveTopic.term_id ||
              x.parent === foundActiveTopic.term_id
          );
          if (found) {
            return true;
          }
          return false;
        })
      );
    } else {
      setSubTopics([]);
      setTopicPosts(posts);
    }
  }, [activeTopic, posts, uniqueTopics]);

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
        {topicPosts && topicPosts.length > 0 && (
          <Link
            as={linkAs(posts[0].post_name)}
            href={linkHref}
            className={classes.link}
          >
            <FeaturedCard
              title={topicPosts[0].post_title}
              description={topicPosts[0].post_excerpt}
              image={topicPosts[0].featured_image}
              date={
                topicPosts[0].published_date
                  ? topicPosts[0].published_date
                  : topicPosts[0].post_date
              }
            />
          </Link>
        )}
        <Grid container>
          {topicPosts &&
            topicPosts.length > 1 &&
            topicPosts.slice(1, 4).map((post) => (
              <Grid
                key={post.post_name}
                item
                md={4}
                className={classes.postItem}
              >
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
      </Section>
      <JoinUs
        classes={{
          root: classes.joinUs,
          section: classes.section,
        }}
        joinUs={joinUs}
      />
      <Section classes={{ root: classes.section }}>
        {topicPosts && topicPosts.length > 3 && (
          <Link
            as={linkAs(posts[4].post_name)}
            href={linkHref}
            className={classes.link}
          >
            <FeaturedCard
              title={topicPosts[4].post_title}
              description={topicPosts[4].post_excerpt}
              image={topicPosts[4].featured_image}
              date={
                topicPosts[4].published_date
                  ? topicPosts[0].published_date
                  : topicPosts[4].post_date
              }
            />
          </Link>
        )}
        <Grid container>
          {topicPosts &&
            topicPosts.length > 5 &&
            topicPosts.slice(5).map((post) => (
              <Grid
                key={post.post_name}
                item
                md={4}
                className={classes.postItem}
              >
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
  joinUs: PropTypes.shape({}).isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      post_name: PropTypes.string,
    })
  ).isRequired,
  subscribe: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["analysis", "myth-busting", "resources", "stories"])
    .isRequired,
};

export default InsightPage;
