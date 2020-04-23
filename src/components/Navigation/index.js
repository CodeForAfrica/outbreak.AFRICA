import React from 'react';
import { PropTypes } from 'prop-types';

import { withWidth, Grid, Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

import { isWidthUp } from '@material-ui/core/withWidth';
import { withRouter } from 'next/router';
import logo from 'assets/images/logo/logo-outbreak.svg';
import NavigationMenu from 'components/Navigation/NavigationMenu';
import MobileMenu from 'components/Navigation/MobileMenu';
import Link from 'components/Link';

const styles = (theme) => ({
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
    boxShadow: 'unset',
  },
  drawer: {
    backgroundColor: 'transparent',
    outline: 'none',
    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.07)',
  },
  logoGrid: {
    marginRight: '3rem',
    [theme.breakpoints.only('md')]: {
      margin: '0rem',
    },
  },
  linkGrid: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
  logoLink: {
    marginRight: '2rem',
    color: 'black',
    fontSize: '1.2rem',
    lineHeight: '1.5rem',
    fontWeight: 'bolder',
    textDecoration: 'none',
    [theme.breakpoints.up('md')]: {
      margin: '0.625rem',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '1.375rem',
    },
  },
  searchButton: {
    '& > svg': {
      fontSize: '30px',
    },
    color: 'black',
    marginBottom: '0.1rem', // Pixel perfect
  },
  iconLink: {
    margin: '1.375rem 0.7rem',
  },
  img: {
    height: '3rem',
  },
  span: {
    color: 'blue',
    textDecoration: 'none',
    fontWeight: 'bolder',
  },
});

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileDrawerOpen: false,
      openDrawer: null,
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.toggleMobileDrawer = this.toggleMobileDrawer.bind(this);

    if (process.browser) {
      window.toggleDrawer = this.toggleDrawer;
    }
  }

  toggleMobileDrawer() {
    this.setState((prevState) => ({
      isMobileDrawerOpen: !prevState.isMobileDrawerOpen,
      openDrawer: !prevState.isMobileDrawerOpen ? prevState.openDrawer : null,
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
        openDrawer: newOpenDrawer,
      });
    };
  }

  renderNavBar() {
    const { width, classes } = this.props;
    return (
      <nav className={classes.root}>
        <Grid item>
          <Link href="/" className={classes.linkGrid}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              className={classes.logoGrid}
            >
              <img src={logo} alt="Outbreak" className={classes.img} />
              <Typography variant="caption" className={classes.logoLink}>
                {' '}
                OUTBREAK <br />
                <span className={classes.span}>Covid-19</span>
              </Typography>
            </Grid>
          </Link>
        </Grid>
        {isWidthUp('lg', width)
          ? this.renderDesktopNav()
          : this.renderMobileNav()}
      </nav>
    );
  }

  renderMobileNav() {
    const {
      takwimu: { countries },
    } = this.props;
    return (
      <>
        <Grid item>
          <Grid container direction="row" alignItems="center" spacing={2}>
            <MobileMenu countries={countries} />
          </Grid>
        </Grid>
      </>
    );
  }

  renderDesktopNav() {
    const {
      takwimu: { countries },
    } = this.props;
    return (
      <>
        <div>
          <NavigationMenu countries={countries} />
        </div>
      </>
    );
  }

  render() {
    return <>{this.renderNavBar()}</>;
  }
}

Navigation.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired,
  takwimu: PropTypes.shape({
    page: PropTypes.shape({}).isRequired,
    countries: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    settings: PropTypes.shape({
      navigation: PropTypes.shape({}),
    }).isRequired,
  }).isRequired,
  router: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
};

export default withWidth({
  initialWidth: 'md',
})(withStyles(styles)(withRouter(Navigation)));
