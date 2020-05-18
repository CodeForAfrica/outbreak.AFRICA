import React from 'react'
import PropTypes from "prop-types";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import config from '../../../config'
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
          <LinkButton
            href={`/research/${menu.href}`}
            size="small"
            className={classes.button}
            aria-haspopup="true"
          >
            {menu.name}
          </LinkButton>
        </Grid >
      )}
    </Grid>
  );
};
