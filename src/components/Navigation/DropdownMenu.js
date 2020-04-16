import React from 'react';

import {
  Grow,
  Typography,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener
} from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';

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

function DropDownMenu({ title }) {
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


  const renderDataMenu = () => {
    return (
      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
        <MenuItem>Kenya</MenuItem>
        <MenuItem>South Africa</MenuItem>
        <MenuItem>Nigeria</MenuItem>
        <MenuItem>Ghana</MenuItem>
        <MenuItem>Morocco</MenuItem>
      </MenuList>
    )
  }

  const renderInsightMenu = () => {
    return (
      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
        <MenuItem>Analysis</MenuItem>
        <MenuItem>Misinformation</MenuItem>
        <MenuItem>Frontline Reportange</MenuItem>
        <MenuItem>Multimedia resources</MenuItem>
      </MenuList>
    )
  }

  const renderResourcesMenu = () => {
    return (
      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
        <MenuItem>African Experts</MenuItem>
        <MenuItem>Published Research</MenuItem>
        <MenuItem>Scientific Institutions</MenuItem>
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
                {title === 'DATA' ? renderDataMenu() : title === 'INSIGHT' ? renderInsightMenu() : renderResourcesMenu()}
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default DropDownMenu
