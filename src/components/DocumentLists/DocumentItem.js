import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { A, RichTypography } from "@commons-ui/core";

import { getPostById } from "cms";

import websiteBlue from "assets/icon web.svg";

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
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
  author: {},
  imageDiv: {},
  image: {
    minHeight: typography.pxToRem(40),
    objectFit: "cover",
    width: "100%",
    [breakpoints.up("md")]: {
      maxHeight: typography.pxToRem(
        (widths.values.md * 288) / widths.values.xl
      ),
    },
    [breakpoints.up("lg")]: {
      maxHeight: typography.pxToRem(
        (widths.values.lg * 288) / widths.values.xl
      ),
    },
    [breakpoints.up("xl")]: {
      maxHeight: typography.pxToRem(288),
    },
  },
  contentDiv: {
    [breakpoints.up("md")]: {
      paddingTop: "1.375rem",
    },
  },
  description: {
    paddingTop: "1rem",
  },
  documentDiv: {
    borderTop: "1px solid #D6D6D6",
    paddingTop: typography.pxToRem(16),
    paddingBottom: typography.pxToRem(16),
    [breakpoints.up("md")]: {
      border: 0,
      paddingTop: 0,
      paddingBottom: typography.pxToRem(50),
      paddingRight: typography.pxToRem(16),
      "&:last-of-type": {
        paddingRight: 0,
      },
    },
  },
  title: {
    fontWeight: "bold",
  },
}));

function DocumentItem({
  description,
  title,
  imageUrl,
  isStory,
  documentUrl,
  documentId,
  md,
  ...props
}) {
  const classes = useStyles(props);
  const [thumbnail, setThumbnail] = useState(imageUrl);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  if (!(title || description)) {
    return null;
  }

  useEffect(() => {
    (async () => {
      if (documentId) {
        const media = await getPostById("media", documentId);
        if (isDesktop) {
          setThumbnail(media.media_details.sizes.full.source_url);
        } else {
          setThumbnail(
            media.media_details.sizes.medium
              ? media.media_details.sizes.medium.source_url
              : media.media_details.sizes.thumbnail.source_url
          );
        }
      }
    })();
  }, [documentId, isDesktop]);

  return (
    <Grid
      item
      container
      xs={12}
      md={md}
      direction={isDesktop ? "row" : "row-reverse"}
      className={classes.documentDiv}
    >
      {thumbnail && (
        <Grid item xs={isStory ? 3 : 6} md={12} className={classes.imageDiv}>
          <img
            src={thumbnail}
            alt={title || description}
            className={classes.image}
          />
        </Grid>
      )}
      <Grid item xs={isStory ? 9 : 6} md={12} className={classes.contentDiv}>
        {title && (
          <Typography variant="subtitle2" className={classes.title}>
            {title}
          </Typography>
        )}
        {description && (
          <RichTypography variant="caption" className={classes.description}>
            {description}
          </RichTypography>
        )}
        {documentUrl && (
          <A href={documentUrl} color="textSecondary" className={classes.link}>
            <img src={websiteBlue} alt={title} className={classes.icon} />
          </A>
        )}
      </Grid>
    </Grid>
  );
}

DocumentItem.propTypes = {
  description: PropTypes.string,
  documentUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  documentId: PropTypes.number,
  isStory: PropTypes.bool,
  md: PropTypes.number,
  title: PropTypes.string,
};

DocumentItem.defaultProps = {
  description: undefined,
  documentUrl: undefined,
  documentId: undefined,
  imageUrl: undefined,
  isStory: false,
  md: 3,
  title: undefined,
};

export default DocumentItem;
