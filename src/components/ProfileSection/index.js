import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import { Section } from "@commons-ui/core";

import Tabs from "components/Tabs";

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
  fix: {},
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
  const [fixToTop, setFixToTop] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const el = sectionRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const shouldFixToTop =
          (rect.y <= 0 && !fixToTop) || !(rect.y > 0 && fixToTop);
        setFixToTop(shouldFixToTop);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fixToTop]);

  const handleChange = (_event, v) => {
    if (setActiveTab) {
      setActiveTab(v);
    }

    setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };
  const tabs = tabsProp.map((tab) => ({
    ...tab,
    href: `#${tab.slug}`,
  }));

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <div ref={sectionRef} className={classes.tabs}>
          <div
            className={classNames(classes.tabs, {
              [classes.fix]: fixToTop,
            })}
          >
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
