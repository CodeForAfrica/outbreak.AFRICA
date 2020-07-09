import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import ContentLoader from "@hurumap-ui/core/ContentLoader";

import SectionSubtitle from "components/SectionSubtitle";

import demographicIcon from "assets/icon-demographic.svg";
import economicIcon from "assets/icon-economic.svg";
import epidemiologicalIcon from "assets/icon-epidemiological.svg";
import healthsystemIcon from "assets/icon-healthsystem.svg";
import infrastructureIcon from "assets/icon-infrastructure.svg";
import mobilityIcon from "assets/icon-mobility.svg";
import safetyIcon from "assets/icon-safety.svg";
import socioEconomicIcon from "assets/icon-socioeconomic.svg";

const useStyles = makeStyles(() => ({
  root: {},
  grow: {},
  icon: {},
  title: {},
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
    case "epidemiological":
      return "epidemiological";
    case "healthcare system":
      return "healthsystem";
    case "demographic":
      return "demographic";
    case "wash":
      return "socialeconomic";
    default:
      return undefined;
  }
}

function ProfileSectionTitle({ loading, tab: { name }, ...props }) {
  const classes = useStyles(props);
  const slug = slugifyName(name);
  const iconSrc = slug && ICONS[slug];

  return loading ? (
    <ContentLoader primaryOpacity={1} secondaryOpacity={0.5} height={48}>
      <rect x="0" y="0" height={48} width="100%" />
    </ContentLoader>
  ) : (
    <SectionSubtitle
      icon={{ src: iconSrc }}
      name={name}
      classes={{
        root: classes.root,
        grow: classes.grow,
        icon: classes.icon,
        title: classes.title,
      }}
    />
  );
}

ProfileSectionTitle.propTypes = {
  loading: PropTypes.bool,
  tab: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

ProfileSectionTitle.defaultProps = {
  loading: false,
};

export default ProfileSectionTitle;
