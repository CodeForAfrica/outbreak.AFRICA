import React from 'react';

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinkButton from 'components/Link/Button';

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
    "&:active": {
      color: 'black',
    }
  },
  button: {
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: "0.5rem",
    width: "auto",
    color: '#9D9C9C',
    [theme.breakpoints.up("lg")]: {
      marginRight: "2rem",
    },
    [theme.breakpoints.up("xl")]: {
      marginRight: "4rem",
    },
  }
}));

export default function SecondaryMenus({ menus }) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      className={classes.menu}>
      {menus.map(menu =>
        <Grid item key={menu.name}>
          <LinkButton
            href={`${menu.href}`}
            size="small"
            className={classes.button}
            aria-haspopup="true">
            {menu.name}
          </LinkButton>
        </Grid >
      )}
    </Grid >
  );
};
