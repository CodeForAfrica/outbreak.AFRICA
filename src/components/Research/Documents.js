import React from "react";
import PropTypes from "prop-types";

import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { A, Section } from "@commons-ui/core";
import { Document, Page, pdfjs } from 'react-pdf';

import websiteBlue from "assets/icon web.svg";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    marginTop: '0.85rem',
  },
  link: {
    display: 'flex',
    paddingTop: '1rem',
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
  image: {},
  imageDiv: {
    width: '100%',
    overflow: 'hidden',
  },
  contentDiv: {
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
    fontWeight: 'bold',
  }
}));

function Documents({ documents, title, ...props }) {
  const classes = useStyles(props);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isUpXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isLg = isUpLg && !isUpXl;
  let imageHeight = 300;
  if (isUpLg) {
    imageHeight = isLg ? 400 : 500;
  }
  
  return (
    <div className={classes.root}>
      <Section
        title={title}
        classes={{ root: classes.section, title: classes.sectionTitle }}
      >
        <Grid container direction="row" spacing={2}>
          {documents && documents.map(({ title, description, canonical_url: url, resources: { thumbnail, pdf }}) => (
            <Grid item container xs={12} md={3} direction={isDesktop? 'row': 'row-reverse'} className={classes.documentDiv}>
              <Grid item xs={6} md={12} className={classes.imageDiv}>
              <Document
                  file={`https://cors-anywhere.herokuapp.com/${pdf}`}
                ><Page pageNumber={1} height={imageHeight} /></Document>
                {/* <img src={thumbnail} alt={""} className={classes.image} height={imageHeight} /> */}
              </Grid>
              <Grid item xs={6} md={12} className={classes.contentDiv}>
                <Typography variant="subtitle1" className={classes.title}>{title}</Typography>
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
