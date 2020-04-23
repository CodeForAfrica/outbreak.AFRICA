import React from 'react';
import PropTypes from 'prop-types';

import {
  List,
  ListItemText,
  MenuItem,
  Grid,
  Typography,
  Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Link from 'components/Link';
import config from 'config';

const useStyles = makeStyles({
  menuItem: {
    padding: '1rem'
  },
  listItem: {
    color: 'white'
  },
  gridRoot: {
    padding: '1rem  2rem'
  },
  listRoot: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%'
  },
  divider: {
    border: '0.5px solid grey'
  }
});

function MenuItemLink(props) {
  const classes = useStyles();
  return (
    <MenuItem className={classes.menuItem}>
      <Link {...props} className={classes.menulink} />
    </MenuItem>
  );
}

function CountriesMobileMenu({ profile, title }) {
  const { countries } = config;
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      className={classes.gridRoot}
    >
      <Grid item>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <Grid item className={classes.listRoot}>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <List component="nav">
          {countries.map(country => (
            <MenuItemLink
              key={country.slug}
              underline="none"
              href="/[geoIdOrSlug]"
              as={`/${profile(country)}`}
            >
              <ListItemText className={classes.listItem}>
                {country.shortName}
              </ListItemText>
            </MenuItemLink>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

CountriesMobileMenu.propTypes = {
  profile: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default CountriesMobileMenu;
