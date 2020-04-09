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

const navList = [
  { id: 0, title: 'Country', slug: 'data' },
  { id: 1, title: 'Insight', slug: 'insight' },
  { id: 2, title: 'Resources', slug: 'resources' },
  { id: 3, title: 'Data', slug: 'data' }
]

export default function DropDowns({ active, page, toggle }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {navList.map(menu =>
        <DropDownButton
          key={menu.id}
          isActive={active === menu.slug}
          isHighlighted={page.name === menu.slug}
          title={menu.title}
          handleClick={toggle(menu.title)}
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
