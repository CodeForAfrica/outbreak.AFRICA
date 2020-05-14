import React from 'react'
import PropTypes from "prop-types";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import config from '../../../config'
import Link from 'next/link'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: 'white'
  },
  menu: {
    padding: '1.5rem 2rem'
  },
  menuLink: {
    "&.active": {
      color: '#0050FF',
    }
  },
  menuText: {
    color: '#9D9C9C',
    textTransform: 'Uppercase',
    "&:hover": {
      color: '#0050FF',
      textDecoration: 'none'
    },
    "&.active": {
      color: 'black',
    },
  }
}));

export default function ResearchMenu() {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      className={classes.menu}>
      {config.researchMenu.map(menu =>
        <Grid item>
          <Link href={menu.href} className={classes.MenuLink}>
            <Typography variant="subtitle2" className={classes.menuText}>{menu.name}</Typography>
          </Link>
        </Grid>
      )}
    </Grid>
  );
};
