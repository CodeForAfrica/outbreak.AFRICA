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
    color: 'white',
    fontSize: '1rem',
    fontWeight: 700
  },
  gridRoot: {
    padding: '1rem  0rem'
  },
  listRoot: {
    display: 'flex',
    flexDirection: 'row',
  },
  divider: {
    border: "0.5px solid grey"
  },
  link: {
    textDecoration: 'none'
  },
  title: {
    color: '#A9A9A9',
    fontWeight: 700,
    '&:hover': {
      color: '#0050FF'
    }
  }
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
  return <div item className={classes.menuItem}>
    <Link {...props} className={classes.link} />
  </div>;
}

function ResourcesMobileMenu({ title }) {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="space-between" className={classes.gridRoot} spacing={4}>
      <Grid item xs={6} md={6}>
        <Typography variant="h6" className={classes.title}>{title}</Typography>
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
              <Typography className={classes.listItem}>{resources.name}</Typography>
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
