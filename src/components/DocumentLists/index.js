import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "@commons-ui/core";

import DocumentItem from "./DocumentItem";

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
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
    width: "100%",
    height: "100%",
    maxHeight: "unset",
    minHeight: "unset"
  },
  imageDiv: {
    height: typography.pxToRem(212),
    [breakpoints.up("md")]: {
      height: typography.pxToRem(
        (widths.values.md * 546) / widths.values.xl
      ),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(
        (widths.values.lg * 546) / widths.values.xl
      ),
    },
    [breakpoints.up("xl")]: {
      height: typography.pxToRem(546),
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
            documents.map(
              ({
                title,
                description,
                source,
                document
              }) => (
                  <DocumentItem
                    description={description}
                    documentUrl={source}
                    documentId={document && document.id}
                    imageUrl={document && document.icon}
                    title={title}
                    classes={{
                      imageDiv: classes.imageDiv,
                      image: classes.image
                    }}
                  />
                )
            )}
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
