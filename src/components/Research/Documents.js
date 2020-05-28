import React from "react";
import PropTypes from "prop-types";

import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { A, Section } from "@commons-ui/core";

import websiteBlue from "assets/icon web.svg";

const useStyles = makeStyles(({ breakpoints, typography, palette }) => ({
  root: {
    marginTop: "0.85rem",
  },
  link: {
    display: "flex",
    paddingTop: "1rem",
  },
  icon: {
    objectFit: "contain",
    height: "1rem",
    width: "1rem",
    [breakpoints.up("md")]: {
      height: "1.375rem",
      width: "1.375rem",
    },
  },
  image: {
    width: '100%',
  },
  imageDiv: {
    width: "100%",
    height: 220,
    overflow: "hidden",
    position: "relative",
    padding: "1rem 0.6875rem",
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
      padding: "1rem",
      height: 340,
    },
    [breakpoints.up("lg")]: {
      padding: "1rem",
      height: 440,
    },
    [breakpoints.up("xl")]: {
      height: 500,
    },
  },
  contentDiv: {
    [breakpoints.up("md")]: {
      marginTop: '1.375rem',
    }
  },
  documentDiv: {
    borderTop: "1px solid #9D9C9C",
    paddingTop: typography.pxToRem(16),
    paddingBottom: typography.pxToRem(16),
    [breakpoints.up("md")]: {
      border: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  section: {},
  sectionTitle: {
    margin: "unset",
    marginBottom: typography.pxToRem(16),
  },
  title: {
    fontWeight: "bold",
  },
}));

function Documents({ documents, title, ...props }) {
  const classes = useStyles(props);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isUpXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isLg = isUpLg && !isUpXl;
  let imageHeight = 180;
  if (isUpLg) {
    imageHeight = isLg ? 400 : 460;
  }
  if (isDesktop && !isUpLg && !isUpXl) {
    imageHeight = 300;
  }

  return (
    <div className={classes.root}>
      <Section
        title={title}
        classes={{ root: classes.section, title: classes.sectionTitle }}
      >
        <Grid container direction="row" spacing={2}>
          {documents &&
            documents.map(
              ({
                title: documentTitle,
                description,
                canonical_url: url,
                resources: {
                  page: { image },
                },
              }) => {
                const imageUrl = image
                  .replace("{page}", "1")
                  .replace("{size}", "large");
                return (
                  <Grid
                    item
                    container
                    xs={12}
                    md={3}
                    direction={isDesktop ? "row" : "row-reverse"}
                    className={classes.documentDiv}
                  >
                    <Grid item xs={6} md={12} className={classes.imageDiv}>
                      <img
                        src={imageUrl}
                        alt=""
                        className={classes.image}
                        height={imageHeight}
                      />
                    </Grid>
                    <Grid item xs={6} md={12} className={classes.contentDiv}>
                      <Typography variant="subtitle1" className={classes.title}>
                        {documentTitle}
                      </Typography>
                      <Typography variant="caption">{description}</Typography>
                      <A
                        href={url}
                        color="textSecondary"
                        className={classes.link}
                      >
                        <img
                          src={websiteBlue}
                          alt={title}
                          className={classes.icon}
                        />
                      </A>
                    </Grid>
                  </Grid>
                );
              }
            )}
        </Grid>
      </Section>
    </div>
  );
}

Documents.propTypes = {
  title: PropTypes.string,
  documents: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
Documents.defaultProps = {
  title: "Featured Document",
};
export default Documents;
