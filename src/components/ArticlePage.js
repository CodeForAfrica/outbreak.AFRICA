import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { A, RichTypography, Section } from "@commons-ui/core";

import logo from "assets/logo-C4A.svg";
import facebook from "assets/Icon awesome-facebook-f-b.svg";
import instagram from "assets/Icon awesome-instagram-b.svg";
import linkedIn from "assets/Icon awesome-linkedin-in-b.svg";
import twitter from "assets/Icon awesome-twitter-b.svg";

import { getPostBySlug } from "cms";

const useStyles = makeStyles(({ breakpoints, widths }) => ({
  root: {},
  section: {},
  attributes: {
    display: "flex",
    alignItems: "flex-end",
    width: "100%",
    position: "relative",
  },
  date: {
    paddingLeft: 7,
    fontSize: 12,
    [breakpoints.up("md")]: {
      fontSize: "initial",
      paddingLeft: 0,
    },
  },
  icon: {
    objectFit: "contain",
    height: "1.375rem",
    width: "1.375rem",
    [breakpoints.up("xl")]: {
      height: "2.125rem",
      width: "2.125rem",
    },
  },
  link: {
    display: "inline-block",
    paddingRight: "1rem",
  },
  organization: {
    fontSize: 14,
    fontWeight: "bold",
    [breakpoints.up("md")]: {
      display: "block",
      fontSize: "initial",
    },
  },
  readAttr: {
    paddingTop: 7,
    [breakpoints.up("md")]: {
      paddingLeft: (widths.values.md * 74) / widths.values.xl,
    },
    [breakpoints.up("lg")]: {
      paddingLeft: (widths.values.lg * 74) / widths.values.xl,
    },
    [breakpoints.up("xl")]: {
      paddingLeft: 74,
    },
  },
  socialIcons: {
      [breakpoints.up("md")]: {
        position: "absolute",
        right: (widths.values.md * -307) / widths.values.xl ,
      },
      [breakpoints.up("lg")]: {
        right: (widths.values.lg * -307) / widths.values.xl,
      },
      [breakpoints.up("xl")]: {
        right: "-307px",

      },
  },
  title: {
    marginBottom: "2rem",
  },
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
                <Grid item container className={classes.attributes}>
                    <img src={logo} alt="Code for Africa" className={classes.logo} />
                    <Grid item className={classes.readAttr}>
                        <Typography variant="caption" className={classes.organization}>
                            Code for Africa
                        </Typography>
                        <Typography variant="caption" className={classes.date}>
                        {date}
                        </Typography>
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
                <RichTypography>
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
