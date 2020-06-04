import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { A, RichTypography, Section } from "@commons-ui/core";

import logo from "assets/logo-C4A.svg";
import facebook from "assets/Icon awesome-facebook-f-b.svg";
import instagram from "assets/Icon awesome-instagram-b.svg";
import linkedIn from "assets/Icon awesome-linkedin-in-b.svg";
import twitter from "assets/Icon awesome-twitter-b.svg";

import { getPostBySlug } from "cms";
import useStyles from "./useStyles";

function ArticlePage({ slug, ...props }) {
  const classes = useStyles(props);
  const [article, setArticle] = useState(null);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
      async function fetchArticle() {
        const [post] = await getPostBySlug("posts", slug);
        setArticle(post);
      }
      fetchArticle();
  }, [slug]);

  if(!article) {
      return null;
  }
  const date = new Date(article.date).toDateString().slice(4, 10);
  return (
    <div className={classes.root}>
      <img src={""} alt="" />
      <Section classes={{ root: classes.section }}>
        <Grid container>
            <Grid item container md={3} />
            <Grid item container md={6}>
                <Typography variant="h3" className={classes.title}>
                    {article.title.rendered}
                </Typography>
                <Grid item container className={classes.attributes} direction={isDesktop? "column": "row"} >
                    <Grid item container direction={isDesktop? "row": "row-reverse"} alignItems="flex-end" justify={!isDesktop && "space-between"} >
                        <Grid item xs={6}>
                            <img src={logo} alt="Code for Africa" className={classes.logo} />
                        </Grid>
                        <Grid item container xs={6} className={classes.readAttr} direction={isDesktop? "column": "column-reverse"}>
                            <Typography variant="caption" className={classes.organization}>
                                Code for Africa
                            </Typography>
                            <Typography variant="caption" className={classes.date}>
                            {date}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.socialIcons}>
                        <A
                            href={""}
                            color="textSecondary"
                            className={classes.link}
                        >
                            <img
                            src={linkedIn}
                            alt="LinkedIn"
                            className={classes.icon}
                            />
                        </A>
                        <A
                            href={""}
                            color="textSecondary"
                            className={classes.link}
                        >
                            <img
                            src={instagram}
                            alt="Instagram"
                            className={classes.icon}
                            />
                        </A>
                        <A
                            href={""}
                            color="textSecondary"
                            className={classes.link}
                        >
                            <img
                            src={facebook}
                            alt="Facebook"
                            className={classes.icon}
                            />
                        </A>
                        <A
                            href={""}
                            color="textSecondary"
                            className={classes.link}
                        >
                            <img
                            src={twitter}
                            alt="Twitter"
                            className={classes.icon}
                            />
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
