import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import ContentLoader from "@hurumap-ui/core/ContentLoader";

import SectionSubtitle from "@/outbreakafrica/components/SectionSubtitle";

import demographicIcon from "@/outbreakafrica/assets/icon-demographic.svg";
import economicIcon from "@/outbreakafrica/assets/icon-economic.svg";
import epidemiologicalIcon from "@/outbreakafrica/assets/icon-epidemiological.svg";
import healthsystemIcon from "@/outbreakafrica/assets/icon-healthsystem.svg";
import infrastructureIcon from "@/outbreakafrica/assets/icon-infrastructure.svg";
import mobilityIcon from "@/outbreakafrica/assets/icon-mobility.svg";
import safetyIcon from "@/outbreakafrica/assets/icon-safety.svg";
import socioEconomicIcon from "@/outbreakafrica/assets/icon-socioeconomic.svg";

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
    case "healthcare systems":
      return "healthsystem";
    case "demographics":
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
