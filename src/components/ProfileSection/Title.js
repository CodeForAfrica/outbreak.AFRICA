import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ContentLoader from "@hurumap-ui/core/ContentLoader";
import { RichTypography } from "@commons-ui/core";

import demographicIcon from "assets/icon-demographic.svg";
import economicIcon from "assets/icon-economic.svg";
import epidemiologicalIcon from "assets/icon-epidemiological.svg";
import healthsystemIcon from "assets/icon-healthsystem.svg";
import infrastructureIcon from "assets/icon-infrastructure.svg";
import mobilityIcon from "assets/icon-mobility.svg";
import safetyIcon from "assets/icon-safety.svg";
import socioEconomicIcon from "assets/icon-socioeconomic.svg";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    marginTop: typography.pxToRem(40),
    width: "100%",
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(100),
    },
  },
  grow: {
    display: "none",
    [breakpoints.up("md")]: {
      display: "flex",
      flexGrow: 1,
      height: 2,
      backgroundColor: palette.secondary.main,
    },
  },
  icon: {
    height: "auto",
    marginRight: "1rem",
    width: typography.pxToRem(50),
    [breakpoints.up("xl")]: {
      width: typography.pxToRem(60),
    },
  },
  title: {
    display: "flex",
    alignItems: "center",
    margin: "1.5rem 3rem 1.5rem 0",
  },
}));

const ICONS = {
  demographic: demographicIcon,
  economic: economicIcon,
  epidemiological: epidemiologicalIcon,
  healthsystem: healthsystemIcon,
  infrastructure: infrastructureIcon,
  mobility: mobilityIcon,
  safety: safetyIcon,
  socialeconomic: socioEconomicIcon,
};

function slugifyName(name) {
  switch (name.toLowerCase()) {
    case "epidemiological factors":
      return "epidemiological";
    case "healthcare system factors":
      return "healthsystem";
    case "demographic vulnerability":
      return "demographic";
    case "wash / basic services":
      return "socialeconomic";
    default:
      return undefined;
  }
}

function ProfileSectionTitle({ loading, tab: { name }, ...props }) {
  const classes = useStyles(props);
  const slug = slugifyName(name);
  const iconSrc = slug && ICONS[slug];

  return (
    <Grid item xs={12} container alignItems="center" className={classes.root}>
      {loading ? (
        <ContentLoader primaryOpacity={1} secondaryOpacity={0.5} height={48}>
          <rect x="0" y="0" height={48} width="100%" />
        </ContentLoader>
      ) : (
        <>
          <RichTypography variant="h3" className={classes.title}>
            {iconSrc && (
              <img src={iconSrc} alt="icon" className={classes.icon} />
            )}
            {name}
          </RichTypography>
          <div className={classes.grow} />
        </>
      )}
    </Grid>
  );
}

ProfileSectionTitle.propTypes = {
  tab: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  loading: PropTypes.bool,
};

ProfileSectionTitle.defaultProps = {
  loading: false,
};

export default ProfileSectionTitle;
