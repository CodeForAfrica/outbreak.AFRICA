import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import DropDownButton from './DropDownButton';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: "flex-start",
    [theme.breakpoints.up('md')]: {
      display: 'unset'
    }
  }
}));

export default function DropDowns({ active, page, toggle }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DropDownButton
        isActive={active === 'data'}
        isHighlighted={page.name === 'data'}
        title="Data"
        handleClick={toggle('data')}
      />
      <DropDownButton
        isActive={active === 'insight'}
        isHighlighted={page.name === 'insight'}
        title="Insight"
        handleClick={toggle('insight')}
      />
      <DropDownButton
        isActive={active === 'resources'}
        isHighlighted={page.name === 'resources'}
        title="Resources"
        handleClick={toggle('resources')}
      />
    </div>

  );
}

DropDowns.propTypes = {
  active: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  page: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};

DropDowns.defaultProps = {
  active: null
};
