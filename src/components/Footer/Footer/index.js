import React from 'react';
import PropTypes from 'prop-types';

// import clsx from 'clsx';
import classNames from 'classnames';

import { Grid, Hidden, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { A } from '@commons-ui/core';

import Section from 'components/Footer/Section';

import About from './About';
import Initiative from './Initiative';
import QuickLinks from './QuickLinks';
import StayInTouch from './StayInTouch';
// import A from '../A';

const useStyles = makeStyles((theme) => ({
  root: {},
  divider: {
    backgroundColor: theme.palette.secondary.main,
    height: 2,
  },
  dividerDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginLeft: theme.spacing(2),
    },
  },
  dividerMobile: {
    order: 3,
  },
  section: {
    paddingBottom: '2.381875rem',
    paddingTop: '4.194375rem',
    [theme.breakpoints.up('md')]: {
      paddingBottom: '4.194375rem',
      paddingTop: '5.375rem',
    },
  },
  grow: {
    flexGrow: 1,
  },
  organization: {
    marginBottom: '2.243125rem',
    [theme.breakpoints.up('md')]: {
      marginBottom: '4.305625rem',
    },
  },
  organizationLogo: {
    width: '13.875rem',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '18.3175rem',
    },
  },
  supporterLogo: {
    width: '9.6275rem',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '13.7375rem',
    },
  },
  quickLinksMore: {
    marginTop: '2.881875rem',
    order: 4,
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      order: 3,
    },
  },
  quickLinksContact: {
    marginTop: '2.881875rem',
    order: 5,
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      order: 4,
    },
  },
  initiative: {
    order: 2,
    [theme.breakpoints.up('md')]: {
      order: 5,
    },
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    border: '1px solid #707070',
    color: theme.palette.text.secondary.main,
  },
  copyright: {
    order: 3,
    [theme.breakpoints.up('md')]: {
      order: 2,
    },
  },
  legal: {
    order: 2,
    [theme.breakpoints.up('md')]: {
      order: 3,
    },
  },
  footer1: {
    position: 'relative',
    zIndex: 1,
    flexGrow: 1,
    color: '000',
    backgroundColor: '#fff',
    paddingTop: '4.5625rem',
    marginTop: '1.875rem',
  },
  footer2: {
    position: 'relative',
    zIndex: 1,
    flexGrow: 1,
    color: '#fff',
    backgroundColor: '#170F49',
    paddingTop: '4.5625rem',
    paddingBottom: '5.3125rem',
    marginTop: '1.875rem',
  },
  license: {
    marginTop: '2.3125rem',
  },
  about: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '16.375rem', // match thinnest component
      // Should be marginRight: '2.578125rem' but won't fit
      marginRight: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '25.5625rem',
      marginRight: '5.4375rem',
    },
  },
  aboutSubTitle: {},
  aboutText: {},
  stayInTouch: {},
  stayInTouchIcon: {},
  stayInTouchIconContainer: {},
  stayInTouchLinks: {},
  links: {
    // paddingTop: '2.25rem',
    // [theme.breakpoints.up('md')]: {
    //   paddingTop: 0,
    //   paddingLeft: '2.6875rem',
    //   paddingRight: '2.9375rem',
    // },
    // [theme.breakpoints.up('lg')]: {
    //   paddingLeft: '1.25rem',
    //   paddingRight: '1.25rem',
    // },
  },
  // copyright: {
  //   paddingTop: '2.25rem',
  //   [theme.breakpoints.up('md')]: {
  //     paddingTop: 0,
  //     paddingLeft: '2.6875rem',
  //     paddingRight: '2.9375rem',
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //     paddingLeft: '3.25rem',
  //     paddingRight: '5.25rem',
  //   },
  // },
  project: {
    width: '100%',
    paddingTop: '2.25rem',
    [theme.breakpoints.up('md')]: {
      width: '1.53125rem', // .75 of lg
      // Should be marginLeft: '5.109375rem' but won't fit
      marginLeft: '2rem',
      padding: 0,
    },
    [theme.breakpoints.up('lg')]: {
      width: '1.375rem',
      marginLeft: '.8125rem',
    },
  },
  terms: {
    // width: '100%',
    // paddingTop: '2.25rem',
    [theme.breakpoints.up('md')]: {
      // width: '15.53125rem', // .75 of lg
      // Should be marginLeft: '5.109375rem' but won't fit
      // marginLeft: '2rem',
      // padding: 0,
    },
    [theme.breakpoints.up('lg')]: {
      // width: '19.375rem',
      // marginLeft: '6.8125rem',
    },
  },
  support: {
    marginTop: '4.0625rem',
  },
  text: {
    // fontSize: '0.9375rem',
    // color: 'white',
    fontWeight: 'bold',
  },
  cfaLogo: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '16.375rem', // match thinnest component
      // Should be marginRight: '2.578125rem' but won't fit
      marginRight: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '25.5625rem',
      marginRight: '5.4375rem',
    },
  },
  underline: {
    width: '80%',
    marginLeft: '25.5625rem',
  },
  hr: {},
}));

function Footer({
  about: { support, socialMedia },
  quickLinks,
  aboutSection,
  initiativeLogo,
  CFA,
  ...props
}) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container alignItems="flex-end" className={classes.organization}>
          <Grid item>
            <Typography variant="h1">
              <A href="#">
                <img
                  src={CFA.image}
                  alt={CFA.alt}
                  className={classes.organizationLogo}
                />
              </A>
            </Typography>
          </Grid>
          <div
            className={classNames(
              classes.grow,
              classes.divider,
              classes.dividerDesktop
            )}
          />
        </Grid>
        <Grid container>
          <Grid item xs={12} md={4}>
            <About about={aboutSection} />
          </Grid>
          <Grid item md={2} implementation="css" smDown component={Hidden} />
          <Grid item xs={6} md={2} className={classes.quickLinksMore}>
            <div className={classes.links}>
              <QuickLinks {...quickLinks[0]} />
            </div>
          </Grid>
          <Grid item xs={6} md={2} className={classes.quickLinksContact}>
            <div className={classes.links}>
              <QuickLinks {...quickLinks[1]} />
            </div>
          </Grid>
          <Grid item xs={12} md={2} className={classes.initiative}>
            <div className={classes.project}>
              <Initiative logo={initiativeLogo} about={aboutSection} />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            implementation="css"
            mdUp
            component={Hidden}
            className={classes.dividerMobile}
          >
            <div className={classNames(classes.grow, classes.divider)} />
          </Grid>
        </Grid>
      </Section>
      <div className={classes.secondary}>
        <Section classes={{ root: classes.section }}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={12} md={5}>
              <StayInTouch
                support={support}
                socialMedia={socialMedia}
                classes={{
                  root: classes.stayInTouch,
                  icon: classes.stayInTouchIcon,
                  iconContainer: classes.stayInTouchIconContainer,
                  links: classes.stayInTouchLinks,
                }}
              />
            </Grid>
            <Grid item xs={12} md={2} className={classes.copyright}>
              <div className={classes.copyright}>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  className={classes.text}
                >
                  2020 Outbreak Africa
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              container
              justify="flex-end"
              alignItems="center"
              className={classes.legal}
            >
              <div className={classes.terms}>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  className={classes.text}
                >
                  PRIVACY POLICY&nbsp; {' | '} &nbsp;TERMS OF SERVICE
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Section>
      </div>
    </div>
  );
}

Footer.propTypes = {
  about: PropTypes.shape({
    support: PropTypes.shape({}).isRequired,
    socialMedia: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  }).isRequired,
  quickLinks: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  aboutSection: PropTypes.shape({}).isRequired,
  initiativeLogo: PropTypes.shape({}).isRequired,
  CFA: PropTypes.shape({
    image: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
};

export default Footer;
