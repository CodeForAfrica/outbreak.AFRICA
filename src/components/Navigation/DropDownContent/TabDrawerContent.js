import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";

import Link from 'next/link';

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const menuOptionOne = [
  { name: 'Debt', slug: 'debt', href: "#" },
  { name: 'Revenue', slug: 'Rrvenue', href: "#" },
  { name: 'Spending', slug: 'spending', href: "#" },
  { name: 'Government Expenditure', slug: 'government-expenditure', href: "#" },
  { name: 'Taxes', slug: 'taxes', href: "#" },
  { name: 'Public Research', slug: 'public-research', href: "#" }
]

const menuOptionTwo = [
  { name: 'Economy ', slug: 'economy', href: "#" },
  { name: 'Job', slug: 'job', href: "#" },
  { name: 'Transport', slug: 'transport', href: "#" },
  { name: 'Health', slug: 'health', href: "#" },
  { name: 'Education', slug: 'education', href: "#" },
  { name: 'Immigration', slug: 'immigration', href: "#" }
]

const menuOptionThree = [
  { name: 'Economy ', slug: 'economy', href: "#" },
  { name: 'Job', slug: 'job', href: "#" },
  { name: 'Taxes', slug: 'taxes', href: "#" },
  { name: 'Public Research', slug: 'public-research', href: "#" }
]

const menuOptionFour = [
  { name: 'Crime', slug: 'crime', href: "#" },
  { name: 'Justice', slug: 'justice', href: "#" },
  { name: 'Energy', slug: 'energy', href: "#" },
  { name: 'Environmental', slug: 'environmental', href: "#" },
  { name: 'Taxes', slug: 'taxes', href: "#" },
  { name: 'Public Research', slug: 'public-research', href: "#" }
]


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (

    <Grid
      container
      direction="row"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Grid container direction="row" justify="space-around">{children}</Grid>}

    </Grid>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    padding: '2rem 0rem '
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: '25%'
  },
  divider: {
    padding: '1rem 0rem'
  },
  menuGrid: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0.5rem 0rem'
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  title: {
    fontWeight: 'bolder'
  },
  tabLabel: {
    fontSize: '1.875rem'
  }
}));


function TabTitles({ title }) {
  const classes = useStyles();
  return (
    <>
      <Typography variant="body2" className={classes.title}>{title}</Typography>
      <div className={classes.divider}><Divider light /></div>
    </>
  )
}

TabTitles.propTypes = {
  titile: PropTypes.string.isRequired,
};

export default function TabDrawerContent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label={<span className={classes.tabLabel}>BY TOPIC</span>} {...a11yProps(0)} />

      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid item>
          <TabTitles title="Government  Finances" />
          <div item className={classes.menuGrid}>
            {menuOptionOne.map(nav =>
              <Link key={nav.href} href={nav.href}>
                <a className={classes.link}>{nav.name}</a>
              </Link>
            )}
          </div>
        </Grid>

        <Grid item>
          <TabTitles title="Security and Safety" />
          <div item className={classes.menuGrid}>
            {menuOptionTwo.map(nav =>
              <Link key={nav.href} href={nav.href}>
                <a className={classes.link}>{nav.name}</a>
              </Link>
            )}
          </div>
        </Grid>

        <Grid item>
          <TabTitles title="Economy" />
          <div item className={classes.menuGrid}>
            {menuOptionThree.map(nav =>
              <Link key={nav.href} href={nav.href}>
                <a className={classes.link}>{nav.name}</a>
              </Link>
            )}
          </div>
        </Grid>

        <Grid item>
          <TabTitles title="People and society" />
          <div item className={classes.menuGrid}>
            {menuOptionFour.map(nav =>
              <Link key={nav.href} href={nav.href} >
                <a className={classes.link}>{nav.name}</a>
              </Link>
            )}
          </div>
        </Grid>
      </TabPanel>
    </div >
  );
}
