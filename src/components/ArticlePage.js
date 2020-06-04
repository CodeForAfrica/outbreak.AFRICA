import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "@commons-ui/core";

import logo from "assets/logo-C4A.svg";

import { getPostBySlug } from "cms";

const useStyles = makeStyles(() => ({
  root: {},
  section: {},
}));

function ArticlePage({ slug, ...props }) {
  const classes = useStyles(props);
  const [article, setArticle] = useState(null);

  useEffect(() => {
      async function fetchArticle() {
        const [post] = await getPostBySlug("posts", slug);
        console.log(post);
        setArticle(post);
      }
      fetchArticle();
  }, [slug]);

  if(!article) {
      return null;
  }
  return (
    <div className={classes.root}>
      <img src={""} alt="" />
      <Section classes={{ root: classes.section }}>
        <Grid container>
            <Grid item container md={3} />
            <Grid item container md={6}>
                <Typography variant="h3">
                    {article.title.rendered}
                </Typography>
                <Grid item>
                </Grid>
            </Grid>
            <Grid item container md={3} />
        </Grid>
      </Section>
    </div>
  );
}

ArticlePage.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default ArticlePage;
