import React from 'react';
import { PropTypes } from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Typography,
  SwipeableDrawer
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

import InsightMobileMenu from './InsightMobileMenu';
import DataMobileMenu from './DataMobileMenu';
import ResourcesMobileMenu from './ResourcesMobileMenu';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  //hide: {
  //display: 'none',
  //},
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#2C2559',
    overflowX: 'hidden'
  },
  appBar: {
    backgroundColor: '#2C2559',
    boxShadow: 'none',
    width: drawerWidth,
  },
  gridRoot: {
    padding: '1rem  2rem'
  },
  titleGrid: {
    width: '50%'
  },
  listRoot: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%'
  },
  divider: {
    border: "0.5px solid grey"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  dialogContent: {
    padding: '4rem',
    color: 'white',
    backgroundColor: '#2C2559',
    width: drawerWidth,
  },
  toolbar: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  link: {
    color: 'white',
  }
}));

function MobileMenu({ countries }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <IconButton edge="start" color="primary" aria-label="open drawer" onClick={handleDrawerOpen}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        variant="persistent"
        anchor="right"
        open={open}
        classes={{ paper: classes.drawerPaper }}
      >

        <AppBar postion='static' className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <SearchIcon />

            <Grid container direction="row" justify="flex-end" spacing={4}>
              <Grid item>
                <Typography variant="caption">EN</Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption">FR</Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption">&#x0633;</Typography>
              </Grid>

              <IconButton edge="start" color="inherit" onClick={handleDrawerClose} aria-label="close">
                <CloseIcon />
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>


        <div className={classes.dialogContent}>
          <DataMobileMenu
            title="DATA"
            countries={countries}
            profile={({ isoCode: isoCode }) => `country-${isoCode}`}
          />
          <InsightMobileMenu title="INSIGHT" />
          <ResourcesMobileMenu title="RESOURCES" />
        </div>
      </SwipeableDrawer>
    </div>
  );
}


MobileMenu.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired
};


export default MobileMenu
