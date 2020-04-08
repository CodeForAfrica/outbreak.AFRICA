import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import classnames from 'classnames';

import { Drawer, ButtonBase, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import analysisDescriptionBG from '../../../assets/images/file-paragraph-bg.svg';
import countryProfilesDescriptionBG from '../../../assets/images/a-chart-bg.svg';

import ImageDrawerContent from '../DrawerLayoutContent/ImageSection';

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
    justifyContent: 'unset',
    color: theme.palette.text.primary,
    outline: 'none !important',
    margin: '1.25rem 1.75rem',
    [theme.breakpoints.up('md')]: {
      margin: '0.625rem'
    },
    [theme.breakpoints.up('lg')]: {
      margin: '1.563rem'
    }
  },
  rootCenter: {
    borderRadius: '1.125rem',
    justifyContent: 'center'
  },
  img: {
    height: 'fit-content'
  },
  bubble: {
    margin: '-5px -20px',
    padding: '5px 20px',
    borderRadius: '1.5rem'
  },
  bubbleArrow: {
    position: 'absolute',
    bottom: '-1.438rem',
    borderStyle: 'solid',
    borderWidth: '1.438rem 1.438rem 0',
    borderColor: '#FFFFFF transparent',
    display: 'block',
    width: 0,
    zIndex: 1
  }
}));

export default function ImageGridDrawer({
  children,
  countries,
  active,
  navigation: { country_analysis: countryAnalysis, country_profiles: countryProfiles },
  toggle,
  title,
  handleClick,
  isHighlighted,
  isActive
}) {
  const classes = useStyles({ active });
  return (
    <div>
      <ButtonBase
        disableRipple
        disableTouchRipple
        className={classnames(classes.buttonRoot, {
          [classes.rootCenter]: isHighlighted || isActive
        })}
        onClick={handleClick}
      >
        <Typography variant="body1" style={{ fontSize: '1.125rem' }}>
          {title}
        </Typography>
      </ButtonBase>
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
        <ImageDrawerContent
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
    </div>
  );
}

ImageGridDrawer.propTypes = {
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
  }).isRequired,
  icon: PropTypes.string.isRequired,
  iconActive: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isHighlighted: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

ImageGridDrawer.defaultProps = {
  active: null
};
