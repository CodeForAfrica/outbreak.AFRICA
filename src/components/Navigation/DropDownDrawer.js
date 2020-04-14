import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import analysisDescriptionBG from '../../assets/images/file-paragraph-bg.svg';
import countryProfilesDescriptionBG from '../../assets/images/a-chart-bg.svg';

import CountryDropDownContent from './DropDownContent/CountryDropDownContent';
import ImageDrawerContent from './DropDownContent/ImageSection'
import TabDrawerContent from './DropDownContent/TabDrawerContent';
import ThreeColumn from './DropDownContent/ThreeColumn'

const useStyles = makeStyles(theme => ({
  modalTopic: {
    marginTop: '18.313rem',
    [theme.breakpoints.up('md')]: {
      marginTop: '0'
    }
  },
  modalAnalysis: {
    marginTop: '13.313rem',
    [theme.breakpoints.up('md')]: {
      marginTop: '0'
    }
  },
  backdrop: {
    [theme.breakpoints.up('md')]: {
      marginTop: '0'
    },
    backgroundColor: 'transparent'
  },
  drawer: {
    outline: 'none',
    backgroundColor: 'white',
    [theme.breakpoints.up('md')]: {
      boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.07)'
    }
  },
  container: ({ active }) => ({
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${
      active === 'analysis' ? analysisDescriptionBG : countryProfilesDescriptionBG
      })`
  }),
  buttonRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: "flex-start",
    [theme.breakpoints.up('md')]: {
      display: 'unset'
    }
  }
}));

export default function DropDownDrawer({
  children,
  countries,
  active,
  navigation: { country_profiles: countryProfiles },
  toggle
}) {
  const classes = useStyles({ active, toggle });
  return (
    <Drawer
      anchor="top"
      BackdropProps={{
        className: classes.backdrop
      }}
      PaperProps={{
        className: classes.drawer
      }}
      open={active}
      elevation={0}
      transitionDuration={0}
      onEscapeKeyDown={toggle}
      onBackdropClick={toggle}
    >
      {children}

      {active === 'Countries' && active !== null ?
        <CountryDropDownContent
          classes={{
            container: classes.container
          }}
          type={active}
          countries={countries}
          profile={({ isoCode: isoCode, slug }) => `country-${isoCode}`}
          title='Country Profiles'
          description={countryProfiles} /> : active === "Insight" && active !== null ? <ImageDrawerContent /> : active === 'Resources' && active !== null ? <TabDrawerContent /> : <ThreeColumn />}
    </Drawer>
  );
}

DropDownDrawer.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  active: PropTypes.oneOf(['countries', 'data', 'insight', 'resources']),
  toggle: PropTypes.func.isRequired,
  name: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  navigation: PropTypes.shape({
    country_profiles: PropTypes.string
  }).isRequired
};

DropDownDrawer.defaultProps = {
  active: null
};
