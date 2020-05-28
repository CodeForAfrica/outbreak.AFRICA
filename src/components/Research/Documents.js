import React from "react";
import PropTypes from "prop-types";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { A, Section } from "@commons-ui/core";
import websiteBlue from "assets/icon web.svg";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {},
  link: {},
  icon: {},
  image: {},
  imageDiv: {
    [breakpoints.only("md")]: {
      order: 1,
    },
  },
  contentDev: {
    [breakpoints.only("md")]: {
      order: 2,
    },
  },
  section: {},
  sectionTitle: {
    margin: "unset",
    marginBottom: typography.pxToRem(16),
  },
}));

function Documents({ documents, title, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Section
        title={title}
        classes={{ root: classes.section, title: classes.sectionTitle }}
      >
        <Grid container spacing={2}>
          {documents && documents.map(({ title, description, canonical_url: url, resources: { thumbnail }}) => (
            <Grid item container xs={12} md={3}>
              <Grid item xs={6} md={12} className={classes.imageDiv}>
                <img src={thumbnail} alt={""} className={classes.image} />
              </Grid>
              <Grid item xs={6} md={12} className={classes.contentDiv}>
                <Typography>{title}</Typography>
                <Typography>{description}</Typography>
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
          ))}
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
