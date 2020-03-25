import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import analysisDescriptionBG from '../../assets/images/file-paragraph-bg.svg';
import countryProfilesDescriptionBG from '../../assets/images/a-chart-bg.svg';

import DropDownContent from './DropDownContent';

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
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.07)'
    }
  },
  container: ({ active }) => ({
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${
      active === 'analysis' ? analysisDescriptionBG : countryProfilesDescriptionBG
      })`
  })
}));

export default function DropDownDrawer({
  children,
  countries,
  active,
  navigation: { country_analysis: countryAnalysis, country_profiles: countryProfiles },
  toggle
}) {
  const classes = useStyles({ active });
  return (
    <Drawer
      anchor="top"
      ModalProps={{
        className: classNames({
          [classes.modalTopic]: active === 'topic',
          [classes.modalAnalysis]: active === 'analysis'
        })
      }}
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
      <DropDownContent
        classes={{
          container: classes.container
        }}
        type={active}
        countries={countries}
        profile={({ isoCode: isoCode, slug }) => `country-${isoCode}`}
        title={active === 'analysis' ? 'Country Analysis' : 'Country Profiles'}
        description={active === 'analysis' ? countryAnalysis : countryProfiles}
      />
    </Drawer>
  );
}

DropDownDrawer.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  active: PropTypes.oneOf(['analysis', 'topic']),
  toggle: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  navigation: PropTypes.shape({
    country_analysis: PropTypes.string,
    country_profiles: PropTypes.string
  }).isRequired
};

DropDownDrawer.defaultProps = {
  active: null
};
