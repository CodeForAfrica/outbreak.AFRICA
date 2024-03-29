import {
  Box,
  Button,
  ClickAwayListener,
  Collapse,
  Popper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";

const useStyles = makeStyles(({ breakpoints, spacing, typography }) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: spacing(2),
  },
  popper: {
    marginTop: typography.pxToRem(34),
    width: "100%",
    zIndex: 9999,
    [breakpoints.up("xl")]: {
      marginTop: typography.pxToRem(48),
    },
  },
  title: {
    fontWeight: 700,
  },
}));

function NavigationButton({
  active,
  anchorEl,
  button: buttonProp,
  children,
  open: openProp,
  onClose,
  popperProps,
  size,
  title,
  ...props
}) {
  const classes = useStyles(props);
  const buttonRef = useRef();
  const [open, setOpen] = useState();
  const handleToggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (e) => {
    if (buttonRef.current && buttonRef.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };
  const button = buttonProp || (
    <Button
      onClick={handleToggleOpen}
      size={size}
      {...props}
      variant={active || open ? "outlined" : undefined}
      ref={buttonRef}
    >
      {title}
    </Button>
  );
  useEffect(() => {
    setOpen(openProp);
  }, [openProp]);

  return (
    <>
      {button}
      <Popper
        open={!active && open}
        anchorEl={anchorEl || buttonRef.current}
        role={undefined}
        transition
        disablePortal
        {...popperProps}
        className={classes.popper}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={onClose || handleClose}>
            <Collapse {...TransitionProps}>
              {/* We need component that can forwardRef here */}
              <Box>{children}</Box>
            </Collapse>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
}

NavigationButton.propTypes = {
  active: PropTypes.bool,
  anchorEl: PropTypes.shape({}),
  button: PropTypes.node,
  children: PropTypes.bool,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  popperProps: PropTypes.shape({}),
  size: PropTypes.string,
  title: PropTypes.string,
};

NavigationButton.defaultProps = {
  active: false,
  anchorEl: false,
  button: undefined,
  children: undefined,
  onClose: undefined,
  open: false,
  popperProps: undefined,
  size: undefined,
  title: undefined,
};

export default NavigationButton;
