import React from 'react';
import { PropTypes } from 'prop-types';

import {
  withWidth,
  Grid,
  MenuList,
  Drawer,
  IconButton,
  MenuItem,
  ButtonBase,
  Box
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import Close from '@material-ui/icons/Close';
import MenuOutlined from '@material-ui/icons/MenuOutlined';
import Search from '@material-ui/icons/Search';

import { isWidthUp } from '@material-ui/core/withWidth';
import classNames from 'classnames';
import { withRouter } from 'next/router';
import logoWhite from 'assets/images/logo-white-all.png';

import Layout from '../Layout';
import DropDownButtons from './DropDowns';
import DropDownDrawer from './DropDownDrawer';

import Link from '../Link';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    position: 'relative',
    zIndex: '999',
    width: '100%',
    height: '6.313rem',
    padding: '1.25rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.07)',
    color: theme.palette.text.secondary
  },
  noShadow: {
    boxShadow: 'unset'
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    outline: 'none',
    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.07)'
  },
  link: {
    margin: '1.375rem 3.25rem',
    [theme.breakpoints.up('md')]: {
      margin: '0.625rem'
    },
    [theme.breakpoints.up('lg')]: {
      margin: '1.375rem'
    }
  },
  searchButton: {
    '& > svg': {
      fontSize: '30px'
    },
    color: theme.palette.text.secondary,
    marginBottom: '0.1rem' // Pixel perfect
  },
  iconLink: {
    margin: '1.375rem 0.7rem'
  }
});

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileDrawerOpen: false,
      openDrawer: null
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.toggleMobileDrawer = this.toggleMobileDrawer.bind(this);

    if (process.browser) {
      window.toggleDrawer = this.toggleDrawer;
    }
  }

  toggleMobileDrawer() {
    this.setState(prevState => ({
      isMobileDrawerOpen: !prevState.isMobileDrawerOpen,
      openDrawer: !prevState.isMobileDrawerOpen ? prevState.openDrawer : null
    }));
  }

  toggleDrawer(drawer) {
    const { openDrawer, isMobileDrawerOpen } = this.state;
    const newOpenDrawer = openDrawer !== drawer ? drawer : null;
    const hasDrawer = newOpenDrawer !== null || isMobileDrawerOpen;

    return () => {
      const { width } = this.props;
      this.setState({
        isMobileDrawerOpen: isWidthUp('md', width) ? false : hasDrawer,
        openDrawer: newOpenDrawer
      });
    };
  }

  renderNavBar(inDrawer = false) {
    const { width, classes } = this.props;
    return (
      <nav
        className={classNames(classes.root, { [classes.noShadow]: inDrawer })}
      >
        <Layout>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Link href="/">
                <img alt="logo" src={logoWhite} height={19} />
              </Link>
            </Grid>

            {isWidthUp('md', width)
              ? this.renderDesktopNav()
              : this.renderMobileNav()}
          </Grid>
        </Layout>
      </nav>
    );
  }

  renderMobileNav() {
    const { openDrawer } = this.state;
    const {
      takwimu: { language }
    } = this.props;
    return (
      <>
        <Grid item>
          <Grid container direction="row" alignItems="center" spacing={2}>
            <Grid item>
              <IconButton
                disableRipple
                disableTouchRipple
                color="inherit"
                onClick={this.toggleMobileDrawer}
              >
                {openDrawer === 'search' ? <Close /> : <MenuOutlined />}
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }

  renderDesktopNav() {
    const {
      classes,
      takwimu: { page, countries },
      router: { pathname }
    } = this.props;
    const { openDrawer } = this.state;

    return (
      <>
        <Grid item>
          <DropDownButtons
            page={page}
            active={openDrawer}
            toggle={this.toggleDrawer}
            countries={countries}
          />
        </Grid>
      </>
    );
  }

  renderDropDownDrawer() {
    const {
      width,
      takwimu: { countries, settings }
    } = this.props;
    const { openDrawer } = this.state;
    return (
      <DropDownDrawer
        active={openDrawer}
        countries={countries}
        navigation={settings.navigation}
        toggle={
          isWidthUp('md', width)
            ? this.toggleDrawer(null)
            : this.toggleMobileDrawer
        }
      >
        {isWidthUp('md', width) ? this.renderNavBar(true) : <div />}
      </DropDownDrawer>
    );
  }

  renderMobileDrawer() {
    const {
      classes,
      router: { pathname },
      takwimu: { page, countries }
    } = this.props;
    const { openDrawer, isMobileDrawerOpen } = this.state;

    return (
      <Drawer
        anchor="top"
        BackdropProps={{
          style: {
            backgroundColor: 'transparent'
          }
        }}
        PaperProps={{
          className: classes.drawer
        }}
        open={isMobileDrawerOpen}
        elevation={0}
        transitionDuration={0}
        onEscapeKeyDown={this.toggleMobileDrawer}
        onBackdropClick={this.toggleMobileDrawer}
      >
        <Grid container direction="column" alignItems="flex-start">
          {this.renderNavBar(true)}
          <MenuList>
            <DropDownButtons
              page={page}
              active={openDrawer}
              countries={countries}
              toggle={this.toggleDrawer}
            />
      
            <MenuItem>
              <ButtonBase
                className={classes.searchButton}
                onClick={this.toggleDrawer('search')}
              >
                <Search className={classes.search} />
              </ButtonBase>
            </MenuItem>
          </MenuList>
        </Grid>
      </Drawer>
    );
  }

  render() {
    return (
      <>
        {this.renderNavBar()}
        {this.renderMobileDrawer()}
        {this.renderDropDownDrawer()}
      </>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired,
  takwimu: PropTypes.shape({
    page: PropTypes.shape({}).isRequired,
    countries: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    settings: PropTypes.shape({
      navigation: PropTypes.shape({})
    }).isRequired
  }).isRequired,
  router: PropTypes.shape({ pathname: PropTypes.string }).isRequired
};

export default withWidth({
  initialWidth: 'md'
})(withStyles(styles)(withRouter(Navigation)));
