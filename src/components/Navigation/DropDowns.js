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
  { title: 'Country', slug: 'data' },
  { title: 'Insight', slug: 'insight' },
  { title: 'Resources', slug: 'resources' },
  { title: 'Data', slug: 'data' }
]

export default function DropDowns({ active, page, toggle }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {navList.map(menu =>
        <DropDownButton
          key={menu.slug}
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
