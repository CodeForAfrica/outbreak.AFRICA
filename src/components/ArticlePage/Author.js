import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { A, RichTypography } from "@commons-ui/core";

import linkedIn from "assets/Icon awesome-linkedin-in-b.svg";
import twitter from "assets/Icon awesome-twitter-b.svg";
import websiteBlue from "assets/icon web.svg";

import { getPostById } from "cms"; 

const useStyles = makeStyles(
  ({ breakpoints, palette, typography, widths }) => ({
    icon: {
        objectFit: "contain",
        height: "1.375rem",
        width: "1.375rem",
      },
      link: {
        display: "inline-block",
        paddingRight: "1rem",
      },
    author: {},
    image: {
      filter: "grayscale(100%)",
      height: 180,
      width: "auto",
      [breakpoints.up("md")]: {
        height: (widths.values.md * 460) / widths.values.xl,
      },
      [breakpoints.up("lg")]: {
        height: (widths.values.lg * 460) / widths.values.xl,
      },
      [breakpoints.up("xl")]: {
        height: 460,
      },
    },
    imageDiv: {
      width: "100%",
      height: 221,
      padding: "1rem 0.6875rem 1rem 0.8125rem",
      overflow: "hidden",
      position: "relative",
      "&:after": {
        backgroundColor: palette.primary.main,
        bottom: 0,
        content: '""',
        left: 0,
        mixBlendMode: "multiply",
        opacity: 0.3,
        position: "absolute",
        right: 0,
        top: 0,
      },
      [breakpoints.up("md")]: {
        height: (widths.values.md * 546) / widths.values.xl,
        padding: "1.5rem 1rem",
      },
      [breakpoints.up("lg")]: {
        height: (widths.values.lg * 546) / widths.values.xl,
        padding: "2rem 1.5rem",
      },
      [breakpoints.up("xl")]: {
        height: 546,
        padding: "2.6875rem 1.875rem 2.6875rem 2rem",
      },
    },
    contentDiv: {
      [breakpoints.up("md")]: {
        paddingTop: "1.375rem",
      },
    },
    description: {},
    authorDiv: {},
    title: {
      fontWeight: "bold",
    },
  })
);

function Author({
authorId,
  ...props
}) {
  const classes = useStyles(props);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    async function fetchAuthor() {
      const post = await getPostById("users", authorId);
      setAuthor(post);
    }
    fetchAuthor();
   }, [authorId]);


   if(!author) {
       return null;
   }
   const { name, description, avatar_urls: avatar } = author;
  return (
    <Grid
      container
      className={classes.authorDiv}
    >
        <Grid item className={classes.imageDiv}>
          <img src={avatar["96"]} alt="" className={classes.image} />
        </Grid>
      <Grid item className={classes.contentDiv}>
          <Typography variant="subtitle2" className={classes.title}>
            {name}
          </Typography>
          <Typography variant="caption" className={classes.organisation}>
            Code For Africa
          </Typography>
          <Grid item className={classes.socialIcons}>
          <A
                href={""}
                color="textSecondary"
                className={classes.link}
            >
                <img
                src={websiteBlue}
                alt="Website"
                className={classes.icon}
                />
            </A>
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
                src={twitter}
                alt="Twitter"
                className={classes.icon}
                />
            </A>
            </Grid>
          <RichTypography variant="caption" className={classes.description}>
            {description}
          </RichTypography>
      </Grid>
    </Grid>
  );
}

Author.propTypes = {
  authorId: PropTypes.number.isRequired,
};

export default Author;
