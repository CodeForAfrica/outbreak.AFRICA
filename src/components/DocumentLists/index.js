import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "@commons-ui/core";

import DocumentItem from "./DocumentItem";

const useStyles = makeStyles(({ breakpoints, palette, typography, widths }) => ({
  root: {
    marginTop: "0.85rem",
  },
  section: {},
  sectionTitle: {
    margin: "unset",
    marginBottom: typography.pxToRem(16),
  },
  title: {
    fontWeight: "bold",
  },
  image: {
    maxHeight: "initial",
    minHeight: "initial",
    height: typography.pxToRem(180),
    width: typography.pxToRem(131),
    margin: `${typography.pxToRem(16)} ${typography.pxToRem(11)}`,
    [breakpoints.up("md")]: {
      height: typography.pxToRem((widths.values.md * 460) / widths.values.xl),
      width: typography.pxToRem((widths.values.md * 336) / widths.values.xl),
      margin: `${typography.pxToRem((widths.values.md * 43) / widths.values.xl)} ${typography.pxToRem((widths.values.md * 30) / widths.values.xl)}`
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem((widths.values.lg * 460) / widths.values.xl),
      width: typography.pxToRem((widths.values.lg * 336) / widths.values.xl),
      margin: `${typography.pxToRem((widths.values.lg * 43) / widths.values.xl)} ${typography.pxToRem((widths.values.lg * 30) / widths.values.xl)}`
    },
    [breakpoints.up("xl")]: {
      height: typography.pxToRem(460),
      width: typography.pxToRem(336),
      margin: `${typography.pxToRem(43)} ${typography.pxToRem(30)}`
    },
  },
  imageDiv: {
    position: "relative",
    "&:after": {
      bottom: 0,
      content: '""',
      left: 0,
      mixBlendMode: "multiply",
      opacity: 0.3,
      position: "absolute",
      right: 0,
      top: 0,
      backgroundColor: `${palette.primary.main}`,
    },
  },
}));

function DocumentLists({ documents, title, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section
        title={title}
        classes={{ root: classes.section, title: classes.sectionTitle }}
      >
        <Grid container direction="row" alignItems="flex-start">
          {documents &&
            documents.map(({ title: documentTitle, description, source, document }) => (
              <DocumentItem
                description={description}
                documentUrl={source}
                documentId={document && document.id}
                imageUrl={document && document.icon}
                title={documentTitle}
                classes={{
                  image: classes.image,
                  imageDiv: classes.imageDiv,
                }}
              />
            ))}
        </Grid>
      </Section>
    </div>
  );
}

DocumentLists.propTypes = {
  title: PropTypes.string,
  documents: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
DocumentLists.defaultProps = {
  title: "Featured Document",
};
export default DocumentLists;
