import React, { useState } from 'react';
import { useRouter } from 'next/router'
import classNames from "classnames";

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
  menuText: {
    color: '#9D9C9C',
    textTransform: 'Uppercase',
    "&:hover": {
      color: '#0050FF',
      textDecoration: 'none'
    },
    "&.active": {
      color: 'black',
    }
  },
}));

export default function InsightsMenu() {
  const classes = useStyles()
  const router = useRouter()
  //console.log(router)

  const [active, setActive] = useState('active')

  function onActiveClick() {
    if (router.asPath == config.insightsMenu.map(menu => `insights/${menu.href}`)) {
      setActive(!active)
    }
  }

  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      className={classes.menu}>
      {config.insightsMenu.map(menu =>
        <Grid item>
          <Link href={`/insights/${menu.href}`}>
            <Typography
              variant="subtitle2"
              className={classNames(classes.menuText, onActiveClick())}>
              {menu.name}
            </Typography>
          </Link>
        </Grid >
      )
      }
    </Grid >
  );
};
