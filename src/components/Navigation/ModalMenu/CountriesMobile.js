import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItemText, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import Link from '../../Link';
import config from '../../../config';

const useStyles = makeStyles({
  link: {
    color: 'white'
  },
  menuItem: {
    padding: '1rem'
  }
});

function MenuItemLink(props) {
  const classes = useStyles()
  return <MenuItem className={classes.menuItem}>
    <Link {...props} className={classes.menulink} />
  </MenuItem>;
}

function CountriesMobile({ profile }) {
  const { countries } = config;
  const classes = useStyles();
  return (
    <List component="nav">
      {countries.map(country =>
        <MenuItemLink
          key={country.slug}
          underline="none"
          href="/[geoIdOrSlug]"
          as={`/${profile(country)}`}
          className={classes.link}
        >
          <ListItemText primary={country.shortName} />
        </MenuItemLink>
      )}
    </List >
  )
}

CountriesMobile.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  profile: PropTypes.func.isRequired
};

export default CountriesMobile
