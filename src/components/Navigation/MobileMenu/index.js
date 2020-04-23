import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import {
  AppBar,
  Slide,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  IconButton,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

import InsightMobileMenu from './InsightMobileMenu';
import CountriesMobileMenu from './CountriesMobileMenu';
import ResourcesMobileMenu from './ResourcesMobileMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#2C2559',
    boxShadow: 'none',
  },
  gridRoot: {
    padding: '1rem  2rem',
  },
  titleGrid: {
    width: '50%',
  },
  listRoot: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
  },
  divider: {
    border: '0.5px solid grey',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  dialogContent: {
    paddingTop: '3rem',
    color: 'white',
    backgroundColor: '#2C2559',
  },
  toolbar: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  link: {
    color: 'white',
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function MobileMenu({ countries }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="primary"
        aria-label="menu"
        onClick={handleClickOpen}
      >
        <MenuIcon />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        className={classes.dialog}
      >
        <DialogTitle>
          <AppBar postion="static" className={classes.appBar}>
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

                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Toolbar>
          </AppBar>
        </DialogTitle>

        <DialogContent className={classes.dialogContent}>
          <CountriesMobileMenu
            title="DATA"
            countries={countries}
            profile={({ isoCode, slug }) => `country-${isoCode}`}
          />
          <InsightMobileMenu title="INSIGHT" />
          <ResourcesMobileMenu title="RESOURCES" />
        </DialogContent>
      </Dialog>
    </div>
  );
}

MobileMenu.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default MobileMenu;
