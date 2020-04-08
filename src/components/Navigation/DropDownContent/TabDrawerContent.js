import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";

import Link from 'next/link';

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
  }
}));

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
        <Tab label="By Topic" {...a11yProps(0)} />

      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid item>
          <Typography variant="h5">Government  Finances</Typography>
          <div style={{ padding: '1rem 0rem' }}><Divider light /></div>

          <div item style={{ display: 'flex', flexDirection: 'column', padding: '2rem 0rem' }}>
            <Link href="#" style={{ textDecoration: 'none' }}>Example one</Link>
            <Link href="#" style={{ textDecoration: 'none' }}>Example two</Link>
            <Link href="#" style={{ textDecoration: 'none' }}>Example three</Link>
            <Link href="#" style={{ textDecoration: 'none' }}>Example four</Link>
            <Link href="#" style={{ textDecoration: 'none' }}>Example five</Link>
          </div>
        </Grid>
        <Grid item>
          <Typography variant="h5">Security & Safety</Typography>
          <div style={{ padding: '1rem 0rem' }}><Divider light /></div>

          <div item style={{ display: 'flex', flexDirection: 'column', padding: '2rem 0rem' }}>
            <Link href="#" style={{ textDecoration: 'none' }}>Example one</Link>
            <Link href="#" style={{ textDecoration: 'none' }}>Example two</Link>
            <Link href="#" style={{ textDecoration: 'none' }}>Example three</Link>
            <Link href="#" style={{ textDecoration: 'none' }}>Example four</Link>
            <Link href="#" style={{ textDecoration: 'none' }}>Example five</Link>
          </div>
        </Grid>
        <Grid item>
          <Typography variant="h5">Economy</Typography>
          <div style={{ padding: '1rem 0rem' }}><Divider light /></div>

          <div item style={{ display: 'flex', flexDirection: 'column', padding: '2rem 0rem' }}>
            <Link href="#" style={{ textDecoration: 'none' }}>Example one</Link>
            <Link href="#" style={{ textDecoration: 'none' }}>Example two</Link>
            <Link href="#" style={{ textDecoration: 'none' }}>Example three</Link>
            <Link href="#" style={{ textDecoration: 'none' }}>Example four</Link>
            <Link href="#" style={{ textDecoration: 'none' }}>Example five</Link>
          </div>

        </Grid>
        <Grid item>
          <Typography variant="h5">People and society</Typography>
          <div style={{ padding: '1rem 0rem' }}><Divider light /></div>

          <div item style={{ display: 'flex', flexDirection: 'column', padding: '2rem 0rem' }}>
            <Link href="#" style={{ textDecoration: 'none' }}>Example one</Link>
            <Link href="#" style={{ textDecoration: 'none' }}>Example two</Link>
            <Link href="#" style={{ textDecoration: 'none' }}>Example three</Link>
            <Link href="#" style={{ textDecoration: 'none' }}>Example four</Link>
            <Link href="#" style={{ textDecoration: 'none' }}>Example five</Link>
          </div>
        </Grid>
      </TabPanel>
    </div>
  );
}
