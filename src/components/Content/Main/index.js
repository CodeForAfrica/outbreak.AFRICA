import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import { RichTypography } from "@commons-ui/core";

import SectionSubtitle from "@/outbreakafrica/components/SectionSubtitle";

import demographicIcon from "@/outbreakafrica/assets/icon-demographic.svg";
import economicIcon from "@/outbreakafrica/assets/icon-economic.svg";
import epidemiologicalIcon from "@/outbreakafrica/assets/icon-epidemiological.svg";
import safetyIcon from "@/outbreakafrica/assets/icon-safety.svg";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    // When scrolled, leave the height of AppBar from the top
    scrollMargin: typography.pxToRem(70),
    paddingBottom: typography.pxToRem(33),
    borderBottom: `1px solid ${palette.secondary.main}`,
    "&:last-of-type": {
      paddingBottom: typography.pxToRem(33),
      borderBottom: "unset",
    },
    [breakpoints.up("md")]: {
      paddingBottom: 0,
      borderBottom: "unset",
      scrollMargin: typography.pxToRem(110),
    },
    [breakpoints.up("xl")]: {
      scrollMargin: typography.pxToRem(150),
    },
  },
  content: {},
  sectionSubtitle: {
    "&:first-of-type": {
      marginTop: 0,
    },
  },
  sectionSubtitleTitle: {},
}));

const ICONS = {
  default: economicIcon,
  partners: safetyIcon,
  project: epidemiologicalIcon,
  team: demographicIcon,
};

function Main({ classes: classesProp, content, ...props }) {
  const classes = useStyles({ ...props, classes: classesProp });
  const iconSrc = content.icon || ICONS[content.slug] || ICONS.default;
  const icon = { src: iconSrc };

  return (
    <div id={content.slug} className={classes.root}>
      <SectionSubtitle
        {...props}
        icon={icon}
        classes={{
          root: classes.sectionSubtitle,
          title: classes.sectionSubtitleTitle,
        }}
      >
        {content.title.rendered}
      </SectionSubtitle>
      <RichTypography variant="body2" className={classes.content}>
        {content.content.rendered}
      </RichTypography>
    </div>
  );
}

Main.propTypes = {
  content: PropTypes.shape({}).isRequired,
};

export default Main;
