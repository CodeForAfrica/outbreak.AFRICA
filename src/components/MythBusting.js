import { RichTypography, Section } from "@commons-ui/core";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import illoMobile from "@/outbreakafrica/assets/images/illo-03-mobile.png";
import illo from "@/outbreakafrica/assets/images/illo-03.png";
import Figure from "@/outbreakafrica/components/Figure";
import LinkButton from "@/outbreakafrica/components/Link/Button";

const useStyles = makeStyles(
  ({ breakpoints, palette, typography, widths }) => ({
    root: {
      backgroundColor: "#170F49",
      color: palette.text.secondary,
    },
    section: {},
    description: {},
    img: {
      left: 0,
      position: "absolute",
      top: 0,
    },
    link: {
      marginBottom: typography.pxToRem(58),
      marginTop: typography.pxToRem(42),
      [breakpoints.up("md")]: {
        marginBotton: "unset",
        marginTop: "unset",
      },
    },
    highlight: {
      display: "none",
      [breakpoints.up("md")]: {
        display: "initial",
        position: "relative",
        overflow: "visible",
      },
    },
    hightlightHeight: {
      height: "auto",
      [breakpoints.up("md")]: {
        height: typography.pxToRem((800 * widths.values.md) / widths.values.xl),
      },
      [breakpoints.up("lg")]: {
        height: typography.pxToRem((800 * widths.values.lg) / widths.values.xl),
      },
      [breakpoints.up("xl")]: {
        height: typography.pxToRem(800),
      },
    },
    hightlightWidth: {
      width: "100%",
      [breakpoints.up("md")]: {
        width: typography.pxToRem((966 * widths.values.md) / widths.values.xl),
      },
      [breakpoints.up("lg")]: {
        width: typography.pxToRem((966 * widths.values.lg) / widths.values.xl),
      },
      [breakpoints.up("xl")]: {
        width: typography.pxToRem(966),
      },
    },
    mobileImgContainer: {
      display: "block",
      maxWidth: "100%",
      [breakpoints.up("md")]: {
        display: "none",
      },
    },
    subtitle: {
      marginTop: typography.pxToRem(16),
      "&.subtitle": {},
      "& .highlight": {
        background:
          "linear-gradient(180deg, rgba(255,255,255,0) 50%, #0050FF 30% )",
      },
      [breakpoints.up("md")]: {
        marginTop: "unset",
      },
    },
    title: {},
  })
);

function MythBursting({ myth, ...props }) {
  const classes = useStyles(props);

  if (!myth) {
    return null;
  }
  const { title, description, link_url: link, link_label: linkLabel } = myth;
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container className={classes.grid}>
          <Grid item xs={12} md={6}>
            <Grid
              container
              direction="column"
              justify="space-around"
              className={clsx(classes.hightlightHeight, classes.description)}
            >
              <div>
                <Figure
                  layout="intrinsic"
                  src={illoMobile}
                  alt="Corona virus"
                  className={classes.mobileImgContainer}
                />
                <Typography variant="h2" className={classes.title}>
                  {title}
                </Typography>
                <RichTypography
                  variant="subtitle1"
                  className={clsx(classes.subtitle, "subtitle")}
                >
                  {description}
                </RichTypography>
              </div>
              <div>
                <LinkButton
                  href={link}
                  color="primary"
                  variant="outlined"
                  className={classes.link}
                >
                  {linkLabel}
                </LinkButton>
              </div>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={clsx(
              classes.hightlightHeight,
              classes.hightlightWidth,
              classes.highlight
            )}
          >
            <Figure
              src={illo}
              alt="Corona virus"
              className={clsx(
                classes.hightlightHeight,
                classes.hightlightWidth,
                classes.img
              )}
            />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

MythBursting.propTypes = {
  myth: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    link_label: PropTypes.string,
    link_url: PropTypes.string,
  }),
};

MythBursting.defaultProps = {
  myth: undefined,
};

export default MythBursting;
