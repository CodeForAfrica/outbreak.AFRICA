import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import analysisDescriptionBG from '../../assets/images/file-paragraph-bg.svg';
import countryProfilesDescriptionBG from '../../assets/images/a-chart-bg.svg';

import ThreeColumnContent from './DrawerLayoutContent/ThreeColumnContent';

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
  })
}));

export default function ThreecolumnDrawer({
  children,
  active,
  toggle
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
      <ThreeColumnContent
        classes={{
          container: classes.container
        }}
        type={active}
      />
    </Drawer>
  );
}

ThreecolumnDrawer.propTypes = {,
  active: PropTypes.oneOf(['data', 'insight', 'resources']),
  toggle: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

ThreecolumnDrawer.defaultProps = {
  active: null
};
