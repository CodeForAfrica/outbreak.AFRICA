import { DocumentsAndDatasets } from "@commons-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import datasetsIcon from "@/outbreakafrica/assets/icon-datasets.svg";
import docsIcon from "@/outbreakafrica/assets/icon-docs.svg";
import highlightImg from "@/outbreakafrica/assets/illo-02.png";
import Figure from "@/outbreakafrica/components/Figure";
import Image from "@/outbreakafrica/components/Image";

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
  root: {},
  section: {},
  contents: {
    marginTop: typography.pxToRem(42),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(40),
    },
  },
  heading: {
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(80),
    },
  },
  highlight: {
    [breakpoints.up("md")]: {
      position: "relative",
    },
  },
  highlightImg: {
    [breakpoints.up("md")]: {
      position: "absolute",
      right: 0,
      top: 0,
    },
  },
  highlightSize: {
    height: "auto",
    width: "100%",
    [breakpoints.up("md")]: {
      height: typography.pxToRem((850 * widths.values.md) / widths.values.xl),
      width: typography.pxToRem((817 * widths.values.md) / widths.values.xl),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem((850 * widths.values.lg) / widths.values.xl),
      width: typography.pxToRem((817 * widths.values.lg) / widths.values.xl),
    },
    [breakpoints.up("xl")]: {
      height: typography.pxToRem(850),
      width: typography.pxToRem(817),
    },
  },
  icon: {},
  datasets: {
    margin: `${typography.pxToRem(57)} 0 ${typography.pxToRem(67)} 0`,
    [breakpoints.up("md")]: {
      margin: "unset",
    },
  },
  documents: {
    marginBottom: `${typography.pxToRem(47)}`,
    [breakpoints.up("dm")]: {
      margin: "unset",
    },
  },
  documentsAndDatasetsContentType: {
    marginLeft: typography.pxToRem(22),
    [breakpoints.up("md")]: {
      marginLeft: 0,
    },
  },
  documentsAndDatasetsDescription: {
    marginLeft: typography.pxToRem(22),
    [breakpoints.up("md")]: {
      marginLeft: 0,
    },
  },
  documentsAndDatasetsLink: {
    marginLeft: typography.pxToRem(22),
    marginTop: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      marginLeft: 0,
    },
  },
  subtitle: {
    marginTop: typography.pxToRem(16),
    "& .highlight": {
      background:
        "linear-gradient(180deg, rgba(255,255,255,0) 50%, rgba(255,255,255,0.4) 30% )",
    },
    [breakpoints.up("md")]: {
      marginTop: "unset",
    },
  },
}));

function FeaturedResearch({ documentsAndDatasets, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isUpXl = useMediaQuery(theme.breakpoints.up("xl"));

  if (!documentsAndDatasets) {
    return null;
  }
  const {
    title,
    description,
    link_label: linkLabel,
    document: {
      title: documentTitle,
      description: documentDescription,
      link: documentLink,
    },
    dataset: {
      title: datasetTitle,
      description: datasetDescription,
      link: datasetLink,
    },
  } = documentsAndDatasets;
  return (
    <DocumentsAndDatasets
      title={title}
      subtitle={description}
      documents={{
        contentType: documentTitle,
        description: documentDescription,
        link: { href: documentLink, label: linkLabel },
        icon: (
          <Image
            layout="fixed"
            src={docsIcon}
            height={isUpXl ? 93 : 53}
            width={isUpXl ? 93 : 53}
            alt={documentTitle}
            className={classes.icon}
          />
        ),
      }}
      datasets={{
        contentType: datasetTitle,
        description: datasetDescription,
        link: { href: datasetLink, label: linkLabel },
        icon: (
          <Image
            layout="fixed"
            src={datasetsIcon}
            height={isUpXl ? 93 : 53}
            width={isUpXl ? 93 : 53}
            alt={datasetTitle}
            className={classes.icon}
          />
        ),
      }}
      classes={{
        root: classes.root,
        section: classes.section,
        contents: classes.contents,
        datasets: classes.datasets,
        datasetsContentType: classes.documentsAndDatasetsContentType,
        datasetsDescription: classes.documentsAndDatasetsDescription,
        datasetsLink: classes.documentsAndDatasetsLink,
        documents: classes.documents,
        documentsContentType: classes.documentsAndDatasetsContentType,
        documentsDescription: classes.documentsAndDatasetsDescription,
        documentsLink: classes.documentsAndDatasetsLink,
        heading: classes.heading,
        highlight: clsx(classes.highlightSize, classes.highlight),
        subtitle: classes.subtitle,
      }}
    >
      <Figure
        alt="Covid19"
        src={highlightImg}
        className={clsx(classes.highlightSize, classes.highlightImg)}
      />
    </DocumentsAndDatasets>
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
  }),
};

FeaturedResearch.defaultProps = {
  documentsAndDatasets: undefined,
};

export default FeaturedResearch;
