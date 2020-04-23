import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItemText, MenuItem, Grid, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import Link from '../../Link';

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
    flexDirection: 'row',
    //width: '50%'
  },
  divider: {
    border: "0.5px solid grey"
  },
});

const resourcesMenu = [
  {
    slug: 'african-experts',
    name: 'African Experts',
    link: '#'
  },
  {
    slug: 'published-research',
    name: 'Published Research',
    link: '#'
  },
  {
    slug: 'scientific-institutions',
    name: 'Scientific Institutions',
    link: '#'
  }
]

function MenuItemLink(props) {
  const classes = useStyles()
  return <MenuItem className={classes.menuItem}>
    <Link {...props} />
  </MenuItem>;
}

function ResourcesMobileMenu({ title }) {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="space-between" className={classes.gridRoot} spacing={4}>
      <Grid item xs={6} md={6}>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <Grid item xs={6} md={6} className={classes.listRoot}>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <List component="nav">
          {resourcesMenu.map(resources =>
            <MenuItemLink
              key={resources.slug}
              underline="none"
              href={`/${resources.name}`}
              as={`/${resources.name}`}
            >
              <ListItemText className={classes.listItem}>{resources.name}</ListItemText>
            </MenuItemLink>
          )}
        </List >
      </Grid>
    </Grid>
  )
}

ResourcesMobileMenu.propTypes = {
  title: PropTypes.string.isRequired
};
export default ResourcesMobileMenu
