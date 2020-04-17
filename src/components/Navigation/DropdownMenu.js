import React from 'react';

import {
  Grow,
  Typography,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener,
  List
} from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';
import Countries from './Countries';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  popper: {
    paddingTop: '1.5rem'
  }
}));

function MenuItemLink(props) {
  return <MenuItem button component="a" {...props} />;
}

function DropDownMenu({ title, countries }) {
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
    if (event.key === 'Tab') {
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
      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
        <MenuItemLink href="/">Analysis</MenuItemLink>
        <MenuItemLink href="/">Misinformation</MenuItemLink>
        <MenuItemLink href="/">Frontline Reportange</MenuItemLink>
        <MenuItemLink href="/">Multimedia resources</MenuItemLink>
      </MenuList>
    )
  }

  const renderResourcesMenu = () => {
    return (
      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
        <MenuItemLink href="/">African Experts</MenuItemLink>
        <MenuItemLink href="/">Published Research</MenuItemLink>
        <MenuItemLink href="/">Scientific Institutions</MenuItemLink>
      </MenuList>
    )
  }


  return (
    <>
      <Typography
        variant="h6"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {title}
      </Typography>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.popper}>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'bottom-end' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                {title === 'DATA' ?
                  <Countries
                    countries={countries}
                    profile={({ isoCode: isoCode, slug }) => `country-${isoCode}`} /> : title === 'INSIGHT' ? renderInsightMenu() : renderResourcesMenu()}
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default DropDownMenu
