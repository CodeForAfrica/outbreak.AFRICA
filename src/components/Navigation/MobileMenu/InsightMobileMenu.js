import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItemText, MenuItem, Grid, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import Link from '../../Link';

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
    border: "0.5px solid grey"
  },
});

const insightMenu = [
  {
    slug: 'analysis',
    name: 'Analysis',
    link: '#'
  },
  {
    slug: 'misinformation',
    name: 'Misinformation',
    link: '#'
  },
  {
    slug: 'frontline-reportange',
    name: 'Frontline Reportange',
    link: '#'
  },
  {
    slug: 'multimedia-resources',
    name: 'Multimedia resources',
    link: '#'
  }
]

function MenuItemLink(props) {
  const classes = useStyles()
  return <MenuItem className={classes.menuItem}>
    <Link {...props} className={classes.menulink} />
  </MenuItem>;
}

function InsightMobileMenu({ title }) {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="space-between" className={classes.gridRoot} >
      <Grid item>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <Grid item className={classes.listRoot}>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <List component="nav">
          {insightMenu.map(insight =>
            <MenuItemLink
              key={insight.slug}
              underline="none"
              href={`/${insight.name}`}
              as={`/${insight.name}`}
            >
              <ListItemText className={classes.listItem}>{insight.name}</ListItemText>
            </MenuItemLink>
          )}
        </List >
      </Grid>
    </Grid>
  )
}

InsightMobileMenu.propTypes = {
  title: PropTypes.string.isRequired
};

export default InsightMobileMenu
