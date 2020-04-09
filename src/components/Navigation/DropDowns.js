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

const menu = [
  { title: 'Data', slug: 'data' },
  { title: 'Insight', slug: 'insight' },
  { title: 'Resources', slug: 'resources' }
]

export default function DropDowns({ active, page, toggle }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {menu.map(item =>
        <DropDownButton
          key={item.slug}
          isActive={active === item.slug}
          isHighlighted={page.name === item.slug}
          title={item.title}
          handleClick={toggle(item.title)}
        />
      )}
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
