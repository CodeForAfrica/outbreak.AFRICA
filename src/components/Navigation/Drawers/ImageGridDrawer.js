import React from 'react';
import PropTypes from 'prop-types';

import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import analysisDescriptionBG from '../../../assets/images/file-paragraph-bg.svg';
import countryProfilesDescriptionBG from '../../../assets/images/a-chart-bg.svg';

import ImageDrawerContent from '../DropDownContent/ImageSection';

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
  active
}) {
  const classes = useStyles({ active });
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
      <ImageDrawerContent
        classes={{
          container: classes.container
        }}
        type={active}
      />
    </Drawer>
  );
}

ImageGridDrawer.propTypes = {
  active: PropTypes.oneOf(['data', 'insight', 'resources']),
  toggle: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

ImageGridDrawer.defaultProps = {
  active: null
};
