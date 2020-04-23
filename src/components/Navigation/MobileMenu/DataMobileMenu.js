import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItemText, MenuItem, Grid, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import Link from '../../Link';
import config from '../../../config';

const useStyles = makeStyles({
  menuItem: {
    padding: '0px 16px'
  },
  listItem: {
    color: 'white'
  },
  gridRoot: {
    padding: '1rem  0rem'
  },
  listRoot: {
    display: 'flex',
    flexDirection: 'row'
  },
  divider: {
    border: "0.5px solid grey"
  },
  titleGrid: {

  }
});

function MenuItemLink(props) {
  const classes = useStyles()
  return <MenuItem className={classes.menuItem}>
    <Link {...props} />
  </MenuItem>;
}

function CountriesMobileMenu({ profile, title }) {
  const { countries } = config;
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="space-between" className={classes.gridRoot} spacing={4}>
      <Grid item xs={6} className={classes.titleGrid}>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <Grid item xs={6} className={classes.listRoot}>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <List component="nav">
          {countries.map(country =>
            <MenuItemLink
              key={country.slug}
              underline="none"
              href="/[geoIdOrSlug]"
              as={`/${profile(country)}`}
            >
              <ListItemText className={classes.listItem}>{country.shortName}</ListItemText>
            </MenuItemLink>
          )}
        </List >
      </Grid>
    </Grid>
  )
}

CountriesMobileMenu.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  profile: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default CountriesMobileMenu
