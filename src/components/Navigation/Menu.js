import React from "react";

import {
  Grow,
  Grid,
  Typography,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener,
} from "@material-ui/core";

import Link from 'next/Link'
import LinkButton from 'components/Link/Button';
import { makeStyles } from "@material-ui/core/styles";
import DataMenu from "./DataMenu";


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
  menuLink: {
    "&:hover": {
      textDecoration: 'none'
    }
  },
  menuText: {
    color: '#9D9C9C',
    textTransform: 'Uppercase',
    "&:hover": {
      color: '#0050FF'
    }
  }
}));

function MenuItemLink(props) {
  return <MenuItem button component="a" {...props} />;
}

function Menu({ title, countries, href }) {
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

  const renderInsightMenu = () => {
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
        <Grid item>
          <Link href="/featured-experts" className={classes.MenuLink}>
            <Typography variant="subtitle2" className={classes.menuText}>Analysis</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/featured-research" className={classes.MenuLink}>
            <Typography variant="subtitle2" className={classes.menuText}>FMisinformation</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/institutions" className={classes.MenuLink}>
            <Typography variant="subtitle2" className={classes.menuText}>Frontline Reportange</Typography>
          </Link>
        </Grid>
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
        <Grid item>
          <Link href="/featured-experts" className={classes.MenuLink}>
            <Typography variant="subtitle2" className={classes.menuText}>FEATURED EXPERTS</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/featured-research" className={classes.MenuLink}>
            <Typography variant="subtitle2" className={classes.menuText}>FEATURED RESEARCH</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/institutions" className={classes.MenuLink}>
            <Typography variant="subtitle2" className={classes.menuText}>INSTITUTIONS</Typography>
          </Link>
        </Grid>
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
                {title === "INSIGHT" ? renderInsightMenu() : renderResourcesMenu()}
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default Menu;
