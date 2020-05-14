import React from "react";

import {
  Grow,
  Grid,
  Typography,
  Paper,
  Popper,
  ClickAwayListener,
} from "@material-ui/core";

import Link from 'components/Link'
import LinkButton from 'components/Link/Button';
import { makeStyles } from "@material-ui/core/styles";

import config from '../../config'
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  popper: {
    paddingTop: "1.8rem",
    zIndex: 9999,
    width: '100vw'
  },
  button: {
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: "0.5rem",
    width: "auto",
    [theme.breakpoints.up("lg")]: {
      marginRight: "2rem",
    },
    [theme.breakpoints.up("xl")]: {
      marginRight: "4rem",
    },
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
  activeText: {
    borderBottom: '3px solid #0050FF'
  }
}));

function Menu({ title, href }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }


  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const renderInsightsMenu = () => {
    return (
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        autoFocusItem={open}
        id="menu-list-grow"
        onKeyDown={handleListKeyDown}
        className={classes.menu}>
        {config.insightsMenu.map(menu =>
          <Grid item>
            <Link href={menu.href}>
              <Typography variant="subtitle2" className={classes.menuText}>{menu.name}</Typography>
            </Link>
          </Grid>
        )}
      </Grid>
    );
  };

  const renderResourcesMenu = () => {
    return (
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        autoFocusItem={open}
        id="menu-list-grow"
        onKeyDown={handleListKeyDown}
        className={classes.menu}>
        {config.resourceMenu.map(menu =>
          <Grid item>
            <Link href={menu.href} className={classes.MenuLink}>
              <Typography variant="subtitle2" className={classes.menuText}>{menu.name}</Typography>
            </Link>
          </Grid>
        )}
      </Grid>
    );
  };

  return (
    <>
      <LinkButton
        href={href}
        size="large"
        className={classes.button}
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}>
        {title}
      </LinkButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        className={classes.popper}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "bottom-end",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                {title === "Research" ? (
                  renderResourcesMenu()
                ) : (
                    renderInsightsMenu()
                  )}
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </ >
  );
}

export default Menu;
