import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LinkButton from "components/Link/Button";

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
    "&.Mui-selected": {
      color: theme.palette.secondary.main,
      backgroundColor: "inherit",
    },
  },
  tabLast: {
    paddingRight: 0,
  },
}));

function ButtonTab(props) {
  return <Tab component={LinkButton} {...props} />;
}

function MainTabs({ handleChange, tabs, value, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Tabs
        classes={{ indicator: classes.indicator }}
        onChange={handleChange}
        value={value}
        variant="scrollable"
      >
        {tabs.map((tab, index) => (
          <ButtonTab
            key={tab.slug}
            value={tab.slug}
            href={`${tab.href}`}
            as={`${tab.as}`}
            label={tab.name}
            className={classNames(classes.tab, {
              [classes.tabLast]: index === tabs.length - 1,
            })}
            underline="none"
          />
        ))}
      </Tabs>
    </div>
  );
}

MainTabs.propTypes = {
  handleChange: PropTypes.func,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
};

MainTabs.defaultProps = {
  handleChange: null,
};

export default MainTabs;
