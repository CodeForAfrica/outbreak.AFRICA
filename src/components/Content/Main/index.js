import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { RichTypography } from "@commons-ui/core";

import SectionSubtitle from "components/SectionSubtitle";

import demographicIcon from "assets/icon-demographic.svg";
import economicIcon from "assets/icon-economic.svg";
import epidemiologicalIcon from "assets/icon-epidemiological.svg";
import safetyIcon from "assets/icon-safety.svg";

const useStyles = makeStyles(() => ({
  root: {},
  content: {},
  sectionSubtitle: {
    "&:first-of-type": {
      marginTop: 0,
    },
  },
  sectionSubtitleTitle: {},
}));

const ICONS = {
  methodology: economicIcon,
  partners: safetyIcon,
  project: epidemiologicalIcon,
  team: demographicIcon,
};

function Main({ classes: classesProp, content, ...props }) {
  const classes = useStyles({ ...props, classes: classesProp });
  const iconSrc = ICONS[content.slug];
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

export default Main;
