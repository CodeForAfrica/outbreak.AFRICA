import { Section } from "@commons-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useRef } from "react";

import Tabs from "@/outbreakafrica/components/Tabs";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  root: {
    backgroundColor: "#EEEEEE",
    border: "1px solid #707070",
    borderLeft: "none",
    borderRight: "none",
    [breakpoints.up("md")]: {
      backgroundColor: palette.background.default,
    },
  },
  section: {},
  tabs: {},
}));

function ProfileSection({
  profile,
  tabs: tabsProp,
  activeTab,
  setActiveTab,
  ...props
}) {
  const classes = useStyles(props);
  const sectionRef = useRef();

  const handleChange = (e, v) => {
    if (e) {
      e.preventDefault();
    }

    if (setActiveTab) {
      setActiveTab(v);
    }
  };
  const tabs = tabsProp.map((tab) => ({
    ...tab,
    href: `#${tab.slug}`,
  }));

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <div ref={sectionRef} className={classes.tabs}>
          <div className={classes.tabs}>
            <Tabs handleChange={handleChange} tabs={tabs} value={activeTab} />
          </div>
        </div>
      </Section>
    </div>
  );
}

ProfileSection.propTypes = {
  profile: PropTypes.shape({
    geo: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
};

ProfileSection.defaultProps = {
  activeTab: undefined,
  setActiveTab: undefined,
};

export { default as ProfileSectionTitle } from "./Title";

export default ProfileSection;
