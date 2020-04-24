import React from 'react';
import PropTypes from 'prop-types';

import { List, Grid, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Link from 'components/Link';

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
    flexDirection: 'row'
  },
  divider: {
    border: '0.5px solid grey'
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

const insightMenu = [
  {
    slug: 'analysis',
    name: 'Analysis',
    link: '#',
  },
  {
    slug: 'misinformation',
    name: 'Misinformation',
    link: '#',
  },
  {
    slug: 'frontline-reportage',
    name: 'Frontline Reportasge',
    link: '#'
  },
  {
    slug: 'multimedia-resources',
    name: 'Multimedia resources',
    link: '#',
  },
];

function MenuItemLink(props) {
  const classes = useStyles();
  return (
    <div className={classes.menuItem}>
      <Link {...props} className={classes.link} />
    </div>
  );
}

function InsightMobileMenu({ title }) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      className={classes.gridRoot}
      spacing={4}
    >
      <Grid item xs={6} md={6}>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={6} md={6} className={classes.listRoot}>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <List component="nav">
          {insightMenu.map((insight) => (
            <MenuItemLink
              key={insight.slug}
              underline="none"
              href={`/${insight.name}`}
              as={`/${insight.name}`}
            >
              <Typography className={classes.listItem}>
                {insight.name}
              </Typography>
            </MenuItemLink>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

InsightMobileMenu.propTypes = {
  title: PropTypes.string.isRequired,
};

export default InsightMobileMenu;
