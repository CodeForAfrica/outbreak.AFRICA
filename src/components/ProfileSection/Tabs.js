import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { Button, Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    backgroundColor: "inherit",
    display: "flex",
    scrollBehavior: "smooth",
    width: "100%",
  },
  indicator: {
    display: "none",
  },
  tab: {
    color: "#9D9C9C",
    paddingLeft: 0,
    paddingRight: theme.spacing(4),
    minWidth: 0, // Mui-Tab has min-width
    maxWidth: "none", // Mui-Tab has a fixed max-width
    "&$tabSelected": {
      color: theme.palette.secondary.main,
      backgroundColor: "inherit",
    },
  },
  tabLast: {
    paddingRight: 0,
  },
  tabSelected: {},
}));

function LinkTab(props) {
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  return <Tab component={Button} {...props} />;
}

function ProfileTabs({ handleChange, tabs, value }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Tabs
        classes={{ indicator: classes.indicator }}
        onChange={handleChange}
        value={value}
        variant="scrollable"
      >
        {tabs.map((tab, index) => (
          <LinkTab
            key={tab.slug}
            value={tab.slug}
            href={`#${tab.slug}`} // Always show the tabs on click
            label={tab.name}
            className={classNames(classes.tab, {
              [classes.tabLast]: index === tabs.length - 1,
            })}
            classes={{
              selected: classes.tabSelected,
            }}
            underline="none"
          />
        ))}
      </Tabs>
    </div>
  );
}

ProfileTabs.propTypes = {
  handleChange: PropTypes.func,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
};

ProfileTabs.defaultProps = {
  handleChange: null,
};

export default ProfileTabs;
