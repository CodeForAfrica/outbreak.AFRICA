import React from "react";

import {
  Grow,
  Typography,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import DataMenu from "./DataMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontWeight: 700,
  },
  popper: {
    paddingTop: "1.5rem",
    zIndex: 9999,
  },
}));

function MenuItemLink(props) {
  return <MenuItem button component="a" {...props} />;
}

function Menu({ title, countries }) {
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
      <MenuList
        autoFocusItem={open}
        id="menu-list-grow"
        onKeyDown={handleListKeyDown}
      >
        <MenuItemLink href="/">Item 1</MenuItemLink>
        <MenuItemLink href="/">Item 2</MenuItemLink>
        <MenuItemLink href="/">Item 3</MenuItemLink>
      </MenuList>
    );
  };

  const renderResourcesMenu = () => {
    return (
      <MenuList
        autoFocusItem={open}
        id="menu-list-grow"
        onKeyDown={handleListKeyDown}
      >
        <MenuItemLink href="/">Item 1</MenuItemLink>
        <MenuItemLink href="/">Item 2</MenuItemLink>
        <MenuItemLink href="/">Item 3</MenuItemLink>
      </MenuList>
    );
  };

  return (
    <>
      <Typography
        variant="h6"
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className={classes.title}
      >
        {title}
      </Typography>
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
                {title === "DATA" ? (
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <DataMenu
                      countries={countries}
                      profile={({ isoCode }) => `country-${isoCode}`}
                    />
                  </MenuList>
                ) : title === "INSIGHT" ? (
                  renderInsightMenu()
                ) : (
                  renderResourcesMenu()
                )}
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default Menu;
