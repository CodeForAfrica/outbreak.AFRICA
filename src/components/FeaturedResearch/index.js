import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import { DocumentsAndDatasets, Section } from "@commons-ui/core";

import datasetsIcon from "assets/icon-datasets.svg";
import docsIcon from "assets/icon-docs.svg";
import imgHighlight from "assets/illo-02.png";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  root: {
    backgroundColor: palette.primary.main,
  },
  section: {},
  datasetData: {
    backgroundColor: "#4933ff",
  },
  img: {
    width: "100%",
    background: `transparent url(${imgHighlight}) 50% 50% no-repeat`,
    backgroundSize: "cover",
    height: "20rem",
    [breakpoints.up("md")]: {
      width: "27.7143rem",
      height: "28rem",
    },
    [breakpoints.up("lg")]: {
      width: "37.7143rem",
      height: "38rem",
    },
  },
}));

function FeaturedResearch({ documentsAndDatasets, ...props }) {
  const classes = useStyles(props);

  if (!documentsAndDatasets) {
    return null
  }
  
  const {
    title,
    description,
    link_label: linkLabel,
    document: {
      title: documentTitle,
      description: documentDescription,
      link: documentLink
    },
    dataset: {
      title: datasetTitle,
      description: datasetDescription,
      link: datasetLink
    },
  } = documentsAndDatasets;

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <DocumentsAndDatasets
          title={title}
          highlightChildren={<div className={classes.img} />}
          description={description}
          documentContent={{
            contentType: documentTitle,
            description: documentDescription,
            linkTitle: linkLabel,
            link: documentLink,
            children: <img src={docsIcon} alt={documentTitle} />,
          }}
          datasetContent={{
            contentType: datasetTitle,
            description: datasetDescription,
            linkTitle: linkLabel,
            link: datasetLink,
            children: <img src={datasetsIcon} alt={datasetTitle} />,
          }}
          classes={{
            datasetData: classes.datasetData,
          }}
        />
      </Section>
    </div>
  );
}

FeaturedResearch.propTypes = {
  documentsAndDatasets: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    link_label: PropTypes.string,
    document: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
    }),
    dataset: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
    }),
  })
};

FeaturedResearch.defaultProps = {
  documentsAndDatasets: undefined
};

export default FeaturedResearch;
