import React from 'react';
import { PropTypes } from 'prop-types';

import {
  withWidth,
  Grid,
  MenuList,
  Drawer,
  MenuItem,
  ButtonBase,
  Typography
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

import Search from '@material-ui/icons/Search';
import NavMenu from './NavMenu';
import { isWidthUp } from '@material-ui/core/withWidth';
import { withRouter } from 'next/router';
import ModalMenu from './ModalMenu'
import DropDownButtons from './DropDowns';
import DropDownDrawer from './DropDownDrawer';
import SearchDrawer from './SearchDrawer';
import Link from '../Link';

import logo from '../../assets/images/logo/logo-outbreak.svg'


const styles = theme => ({
  root: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'black',
    width: '100%',
    height: '5.313rem',
    paddingRight: '2rem',
    backgroundColor: 'transparent',
    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.07)',
    [theme.breakpoints.up('md')]: {
      padding: '0rem 8rem',
    },
  },
  noShadow: {
    boxShadow: 'unset'
  },
  drawer: {
    backgroundColor: 'transparent',
    outline: 'none',
    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.07)'
  },
  logoGrid: {
    marginRight: '3rem',
    [theme.breakpoints.up('md')]: {
      margin: '0rem'
    },
  },
  linkGrid: {
    '&:hover': {
      textDecoration: 'none'
    }
  },
  logoLink: {
    marginRight: '2rem',
    color: 'black',
    fontSize: '1.2rem',
    lineHeight: '1.5rem',
    fontWeight: 'bolder',
    textDecoration: 'none',
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
    color: 'black',
    marginBottom: '0.1rem' // Pixel perfect
  },
  iconLink: {
    margin: '1.375rem 0.7rem'
  },
  img: {
    height: '3rem'
  },
  span: {
    color: 'blue',
    textDecoration: 'none',
    fontWeight: 'bolder'
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

  renderNavBar() {
    const { width, classes } = this.props;
    return (
      <nav className={classes.root}>
        <Grid item>
          <Link href="/" className={classes.linkGrid}>
            <Grid container direction="row" justify="space-around" alignItems="center" className={classes.logoGrid}>
              <img src={logo} alt="Outbreak" className={classes.img} />
              <Typography variant="caption" className={classes.logoLink}> OUTBREAK <br />
                <span className={classes.span}>Covid-19</span>
              </Typography>
            </Grid>
          </Link>
        </Grid>
        {isWidthUp('md', width) ? this.renderDesktopNav() : this.renderMobileNav()}
      </nav>
    );
  }

  renderMobileNav() {
    const { openDrawer } = this.state;
    const {
      classes,
      takwimu: { countries },
      router: { pathname }
    } = this.props;
    return (
      <>
        <Grid item>
          <Grid container direction="row" alignItems="center" spacing={2}>
            <ModalMenu countries={countries} />
          </Grid>
        </Grid>
      </>
    );
  }

  renderDesktopNav() {
    const {
      classes,
      takwimu: { countries },
      router: { pathname }
    } = this.props;
    const { openDrawer } = this.state;
    return (
      <>
        <Grid item>
          <NavMenu countries={countries} />
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

  renderSearchDrawer() {
    const { takwimu, width } = this.props;
    const { openDrawer } = this.state;
    return (
      <SearchDrawer
        active={openDrawer === 'search'}
        takwimu={takwimu}
        toggle={
          isWidthUp('md', width)
            ? this.toggleDrawer(null)
            : this.toggleMobileDrawer
        }
      >
        {this.renderNavBar(true)}
      </SearchDrawer>
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
            backgroundColor: 'white'
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
        {this.renderSearchDrawer()}
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
