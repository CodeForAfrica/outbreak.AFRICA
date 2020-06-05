import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { A, RichTypography, Section } from "@commons-ui/core";

import logo from "assets/logo-C4A.svg";
import facebook from "assets/Icon awesome-facebook-f-b.svg";
import instagram from "assets/Icon awesome-instagram-b.svg";
import linkedIn from "assets/Icon awesome-linkedin-in-b.svg";
import twitter from "assets/Icon awesome-twitter-b.svg";

import { getPostById, getPostBySlug } from "cms";
import Author from "./Author";
import useStyles from "./useStyles";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";

function ArticlePage({ slug, ...props }) {
  const classes = useStyles(props);
  const [article, setArticle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [media, setMedia] = useState(null);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    async function fetchArticle() {
      const [post] = await getPostBySlug("posts", slug);
      setArticle(post);
      
      if(post) {
          const authorObject = await getPostById("users", post.author);
          setAuthor(authorObject);

          const { media_details: { sizes }} = await getPostById("media", post.featured_media);
          setMedia(sizes);
      }
    }
    fetchArticle();
  }, [slug]);

  if (!article) {
    return null;
  }
  const date = new Date(article.date).toDateString().slice(4, 10);
  let imageUrl = "";
  if (media) {
      imageUrl = isDesktop? media["full"]["source_url"] : media["medium_large"]["source_url"];
  }
  return (
    <div className={classes.root}>
      <img src={imageUrl} alt="" className={classes.heroImage} />
      <Section classes={{ root: classes.section }}>
        <Grid container>
          <Grid item container md={3} className={classes.authorDiv}>
            <Author author={author} />
          </Grid>
          <Grid item container xs={12} md={6}>
            <Typography variant="h3" className={classes.title}>
              {article.title.rendered}
            </Typography>
            <Grid
              item
              container
              className={classes.attributes}
              direction={isDesktop ? "column" : "row"}
            >
              <Grid
                item
                container
                direction={isDesktop ? "row" : "row-reverse"}
                alignItems="flex-end"
                justify={!isDesktop && "space-between"}
              >
                <Grid item xs={6}>
                  <img
                    src={logo}
                    alt="Code for Africa"
                    className={classes.logo}
                  />
                </Grid>
                <Grid
                  item
                  container
                  xs={6}
                  className={classes.readAttr}
                  direction={isDesktop ? "column" : "column-reverse"}
                >
                  <Typography
                    variant="caption"
                    className={classes.organization}
                  >
                    Code for Africa
                  </Typography>
                  <Typography variant="caption" className={classes.date}>
                    {date}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item className={classes.socialIcons}>
                <A href="" color="textSecondary" className={classes.link}>
                  <img src={linkedIn} alt="LinkedIn" className={classes.icon} />
                </A>
                <A href="" color="textSecondary" className={classes.link}>
                  <img
                    src={instagram}
                    alt="Instagram"
                    className={classes.icon}
                  />
                </A>
                <A href="" color="textSecondary" className={classes.link}>
                  <img src={facebook} alt="Facebook" className={classes.icon} />
                </A>
                <A href="" color="textSecondary" className={classes.link}>
                  <img src={twitter} alt="Twitter" className={classes.icon} />
                </A>
              </Grid>
            </Grid>
            <RichTypography variant="subtitle1" className={classes.highlight}>
              {article.excerpt.rendered}
            </RichTypography>
            <RichTypography variant="body2" className={classes.content}>
              {article.content.rendered}
            </RichTypography>
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
